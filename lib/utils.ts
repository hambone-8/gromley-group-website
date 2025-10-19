import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Email template for client inquiries
export function getClientEmailTemplate(name: string, email: string, phone: string, message: string) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A1A1A;">New Client Inquiry</h2>
      <div style="background: #F9F9F9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 10px 0; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 10px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #C8A882;">${email}</a></p>
        ${phone ? `<p style="margin: 0 0 10px 0; color: #333;"><strong>Phone:</strong> ${phone}</p>` : ''}
      </div>
      <div style="background: #F4E9DC; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 8px 0; font-weight: bold; color: #1A1A1A;">Message:</p>
        <p style="margin: 0; white-space: pre-wrap; color: #333;">${message}</p>
      </div>
      <p style="color: #666; font-size: 14px;">This inquiry was submitted via the Gromley Group website contact form.</p>
    </div>
  `;
}

// Email template for musician inquiries
export function getMusicianEmailTemplate(name: string, email: string, phone: string, message: string) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1A1A1A;">New Musician Inquiry</h2>
      <div style="background: #F9F9F9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 10px 0; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 10px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #C8A882;">${email}</a></p>
        ${phone ? `<p style="margin: 0 0 10px 0; color: #333;"><strong>Phone:</strong> ${phone}</p>` : ''}
      </div>
      <div style="background: #F4E9DC; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 8px 0; font-weight: bold; color: #1A1A1A;">Message:</p>
        <p style="margin: 0; white-space: pre-wrap; color: #333;">${message}</p>
      </div>
      <p style="color: #666; font-size: 14px;">This inquiry was submitted via the Gromley Group website contact form.</p>
    </div>
  `;
}

// Auto-responder for clients
export function getClientAutoResponder(name: string) {
  const firstName = name.split(' ')[0];
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6;">
      <p>Hi ${firstName},</p>
      <p>Thanks for reaching out! I'll review your details and get back to you within 24-48 hours with availability, pricing and recommendations.</p>
      <p>Feel free to reply to this email anytime if you think of anything else you'd like to share.</p>
      <p style="margin-top: 30px; margin-bottom: 5px;">Best,</p>
      <p style="margin: 0;"><strong>Maya Wriston</strong><br/>
      <span style="color: #666; font-size: 14px;">Gromley Group</span></p>
    </div>
  `;
}

// Auto-responder for musicians
export function getMusicianAutoResponder(name: string) {
  const firstName = name.split(' ')[0];
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6;">
      <p>Hi ${firstName},</p>
      <p>Thanks for reaching out! I'll review your information and get back to you within one week.</p>
      <p>If you have any additional materials you'd like to share (EPK, recordings, etc.), feel free to reply to this email.</p>
      <p style="margin-top: 30px; margin-bottom: 5px;">Best,</p>
      <p style="margin: 0;"><strong>Maya Wriston</strong><br/>
      <span style="color: #666; font-size: 14px;">Gromley Group</span></p>
    </div>
  `;
}

