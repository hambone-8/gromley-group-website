import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Email template for client inquiries
export function getClientEmailTemplate(message: string) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A1A1A;">New Client Inquiry</h2>
      <div style="background: #F4E9DC; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
      <p style="color: #666; font-size: 14px;">This inquiry was submitted via the Gromley Group website contact form.</p>
    </div>
  `;
}

// Email template for musician inquiries
export function getMusicianEmailTemplate(message: string) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A1A1A;">New Musician Inquiry</h2>
      <div style="background: #F4E9DC; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
      <p style="color: #666; font-size: 14px;">This inquiry was submitted via the Gromley Group website contact form.</p>
    </div>
  `;
}

// Auto-responder for clients
export function getClientAutoResponder() {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A1A1A;">Thank you for reaching out!</h2>
      <p>We've received your inquiry about booking music for your event.</p>
      <p>We'll review your request and get back to you within 24-48 hours with next steps, including:</p>
      <ul>
        <li>Curated musician recommendations for your event</li>
        <li>Availability confirmation</li>
        <li>Transparent pricing</li>
        <li>Any questions we might have about your vision</li>
      </ul>
      <p>In the meantime, feel free to reply to this email with any additional details about your event.</p>
      <p style="margin-top: 30px;">
        Warm regards,<br/>
        <strong>The Gromley Group</strong><br/>
        <span style="color: #666;">Phoenix • Scottsdale • Nationwide on request</span>
      </p>
    </div>
  `;
}

// Auto-responder for musicians
export function getMusicianAutoResponder() {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A1A1A;">Thank you for your interest!</h2>
      <p>We've received your inquiry about joining the Gromley Group roster.</p>
      <p>We carefully review all musician applications and will be in touch within one week. We'll be looking at:</p>
      <ul>
        <li>Your performance experience and style</li>
        <li>Professionalism and reliability</li>
        <li>Fit with our client needs and venue relationships</li>
        <li>Any media or links you've shared</li>
      </ul>
      <p>Thank you for considering working with us. We appreciate professional musicians who value excellent communication and reliable delivery.</p>
      <p style="margin-top: 30px;">
        Best regards,<br/>
        <strong>The Gromley Group</strong><br/>
        <span style="color: #666;">Phoenix • Scottsdale • Nationwide on request</span>
      </p>
    </div>
  `;
}

