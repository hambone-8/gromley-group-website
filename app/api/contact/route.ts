import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getClientEmailTemplate,
  getMusicianEmailTemplate,
  getClientAutoResponder,
  getMusicianAutoResponder,
} from "@/lib/utils";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// In-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3; // Max submissions per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 60 * 1000); // Clean up every hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Create new record
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false; // Rate limit exceeded
  }

  // Increment count
  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { inquiryType, name, email, phone, message, honeypot } = body;

    // Honeypot check - if filled, silently reject (likely a bot)
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Thank you for your inquiry" },
        { status: 200 }
      );
    }

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your name" },
        { status: 400 }
      );
    }

    // Validate email with proper regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Optional phone validation - if provided, should have reasonable length
    if (phone && phone.trim().length > 0 && phone.trim().length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid phone number" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a detailed message (at least 10 characters)" },
        { status: 400 }
      );
    }

    if (!inquiryType || !["client", "musician"].includes(inquiryType)) {
      return NextResponse.json(
        { error: "Invalid inquiry type" },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@gromleygroup.com";

    // Determine subject line based on inquiry type
    const subject =
      inquiryType === "client"
        ? "New Client Inquiry - Gromley Group"
        : "New Musician Inquiry - Gromley Group";

    // Get appropriate email template with contact info
    const emailTemplate =
      inquiryType === "client"
        ? getClientEmailTemplate(name, email, phone, message)
        : getMusicianEmailTemplate(name, email, phone, message);

    // Get appropriate auto-responder
    const autoResponderTemplate =
      inquiryType === "client"
        ? getClientAutoResponder(name)
        : getMusicianAutoResponder(name);

    // Send email to business
    const businessEmail = await resend.emails.send({
      from: "The Gromley Group <noreply@gromleygroup.com>",
      to: toEmail,
      subject: subject,
      html: emailTemplate,
    });

    if (!businessEmail.data) {
      console.error("Resend API error:", businessEmail.error);
      throw new Error(`Failed to send business notification email: ${businessEmail.error?.message || 'Unknown error'}`);
    }

    // Send auto-responder to user
    try {
      await resend.emails.send({
        from: "Maya at Gromley Group <info@gromleygroup.com>",
        to: email,
        subject: inquiryType === "client" 
          ? "Thanks for reaching out!"
          : "Thanks for your interest!",
        html: autoResponderTemplate,
      });
    } catch (autoResponderError) {
      // Log error but don't fail the whole request
      console.error("Failed to send auto-responder:", autoResponderError);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. We'll be in touch soon!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send your message. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

