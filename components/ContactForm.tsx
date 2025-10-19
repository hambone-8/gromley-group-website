"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2 } from "lucide-react";

type InquiryType = "client" | "musician";

export function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("client");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  // Track when form loads for time-based bot protection
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const placeholder = inquiryType === "client"
    ? "Tell us about your event: date, venue, vibe, approximate guest count, and any specific music style preferences. If you have a budget range in mind, feel free to share that too."
    : "Tell us about yourself: your style, experience, instrumentation, and any links to your EPK, recordings, or videos.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Time-based validation (bot protection)
    const timeSinceLoad = Date.now() - formLoadTime;
    if (timeSinceLoad < 3000) {
      setError("Please take a moment to review your message before submitting.");
      return;
    }

    // Validate name
    if (!name.trim() || name.trim().length < 2) {
      setError("Please provide your name");
      return;
    }

    // Validate email with proper regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError("Please provide a valid email address");
      return;
    }

    // Validate message
    if (message.trim().length < 10) {
      setError("Please provide more details (at least 10 characters)");
      return;
    }

    // Honeypot check
    if (honeypot) {
      // Silent fail for bots
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inquiryType,
          name,
          email,
          phone,
          message,
          honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSuccess(true);
      // Clear all fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-text mb-4">
          Thank you for reaching out!
        </h3>
        <p className="text-text/70 mb-4">
          {inquiryType === "client"
            ? "We've received your inquiry and will get back to you within 24-48 hours with curated recommendations and next steps."
            : "We've received your inquiry and will review your information. We'll be in touch within one week."}
        </p>
        <p className="text-sm text-text/60">
          Check your email for a confirmation message from Maya.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setIsSuccess(false);
            setInquiryType("client");
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
      <div className="space-y-6">
        {/* Inquiry Type Dropdown */}
        <div>
          <label
            htmlFor="inquiryType"
            className="block text-sm font-medium text-text mb-2"
          >
            I am...
          </label>
          <select
            id="inquiryType"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value as InquiryType)}
            className="w-full px-4 py-3 rounded-md border border-muted bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-base"
          >
            <option value="client">requesting more information & a quote</option>
            <option value="musician">a musician with a question</option>
          </select>
        </div>

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text mb-2"
          >
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 rounded-md border border-muted bg-background text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-base"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text mb-2"
          >
            Your email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-md border border-muted bg-background text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-base"
          />
        </div>

        {/* Phone Field (Optional) */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text mb-2"
          >
            Your phone number <span className="text-text/50 text-xs">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 rounded-md border border-muted bg-background text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-base"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text mb-2"
          >
            Your message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder}
            rows={8}
            required
            className="w-full px-4 py-3 rounded-md border border-muted bg-background text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-base resize-y"
          />
        </div>

        {/* Honeypot Field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        {/* Alternative Contact */}
        <p className="text-center text-sm text-text/60">
          Or email us directly at{" "}
          <a
            href="mailto:info@thegromleygroup.com"
            className="text-accent hover:underline"
          >
            info@thegromleygroup.com
          </a>
        </p>
      </div>
    </form>
  );
}

