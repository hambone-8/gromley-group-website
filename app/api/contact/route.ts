import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getClientEmailTemplate,
  getMusicianEmailTemplate,
  getClientAutoResponder,
  getMusicianAutoResponder,
} from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { inquiryType, message, honeypot } = body;

    // Honeypot check - if filled, silently reject (likely a bot)
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Thank you for your inquiry" },
        { status: 200 }
      );
    }

    // Validation
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
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@thegromleygroup.com";

    // Determine subject line based on inquiry type
    const subject =
      inquiryType === "client"
        ? "New Client Inquiry - Gromley Group"
        : "New Musician Inquiry - Gromley Group";

    // Get appropriate email template
    const emailTemplate =
      inquiryType === "client"
        ? getClientEmailTemplate(message)
        : getMusicianEmailTemplate(message);

    // Get appropriate auto-responder
    const autoResponderTemplate =
      inquiryType === "client"
        ? getClientAutoResponder()
        : getMusicianAutoResponder();

    // Send email to business
    const businessEmail = await resend.emails.send({
      from: "The Gromley Group <noreply@thegromleygroup.com>",
      to: toEmail,
      subject: subject,
      html: emailTemplate,
    });

    if (!businessEmail.data) {
      throw new Error("Failed to send business notification email");
    }

    // Send auto-responder to user (extract email from message if present, otherwise skip)
    // Note: For a production system, you'd want to add an email field to the form
    // For now, we'll just log this as a success without sending auto-responder
    // You can enhance this later by adding an email field to the ContactForm

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

