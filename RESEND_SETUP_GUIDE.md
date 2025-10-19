# Resend Email Setup Guide

## Overview

Your contact form now sends emails using Resend. This guide explains how to set it up.

## How Resend Works

Resend is an email API service that lets your website send emails without managing email servers. You authenticate your domain once, then use an API key to send emails programmatically.

**No passwords are stored in your code** - just an API key that Resend provides.

## Setup Steps

### 1. Verify Your Domain in Resend

1. Go to [resend.com/domains](https://resend.com/domains)
2. Log in to your Resend account
3. Verify that `gromleygroup.com` is listed and shows **"Verified"** status
4. If not verified yet, follow Resend's instructions to add DNS records:
   - SPF record
   - DKIM record
   - DMARC record (optional but recommended)

These DNS records prove to email providers that emails from `@gromleygroup.com` are legitimate.

### 2. Get Your API Key

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Create a new API key (or use existing one)
3. Copy the key - it starts with `re_`
4. **Important:** Keep this key secret - treat it like a password

### 3. Set Environment Variables

#### For Local Development

Create or update `.env.local` in your project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_TO_EMAIL=info@gromleygroup.com
```

#### For Production (Vercel)

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - `RESEND_API_KEY` = `re_your_actual_api_key_here`
   - `CONTACT_TO_EMAIL` = `info@gromleygroup.com`
5. Make sure they're enabled for **Production** environment
6. Redeploy your site after adding variables

## Email Addresses Used

Your form will send two emails for each submission:

### 1. Business Notification (to you)

- **From:** `The Gromley Group <noreply@gromleygroup.com>`
- **To:** `info@gromleygroup.com` (from `CONTACT_TO_EMAIL` env var)
- **Subject:** Either "New Client Inquiry" or "New Musician Inquiry"
- **Content:** Contact details (name, email, phone) + their message

### 2. Auto-responder (to submitter)

- **From:** `Maya at Gromley Group <info@gromleygroup.com>`
- **To:** The email address they provided in the form
- **Subject:** "Thanks for reaching out!" or "Thanks for your interest!"
- **Content:** Personalized message signed by Maya

## Testing

### Test Locally

1. Make sure `.env.local` has your API key
2. Run `npm run dev`
3. Fill out the contact form at `http://localhost:3000/contact`
4. Check:
   - You receive an email at `info@gromleygroup.com`
   - The submitter receives an auto-responder

### Test in Production

1. Deploy to Vercel with environment variables set
2. Visit your live site's contact page
3. Submit a test inquiry
4. Verify both emails are received

## Troubleshooting

### "Email service is not configured"

- Check that `RESEND_API_KEY` is set in your environment variables
- Verify the API key is correct and starts with `re_`
- Redeploy after adding environment variables

### Emails not sending

- Check Resend dashboard logs: [resend.com/emails](https://resend.com/emails)
- Verify domain is fully verified in Resend
- Check DNS records are properly configured
- Look for errors in Vercel function logs

### Auto-responder not received

- Check spam folder
- Verify the submitter's email address is valid
- Check Resend logs for delivery status
- Auto-responder failures won't block the form submission (intentional)

## Rate Limiting

The contact form has built-in bot protection:

- **Maximum:** 3 submissions per IP address per hour
- **Honeypot field:** Hidden field that bots fill out (silently rejected)
- **Time validation:** Form must be open for 3+ seconds before submission
- **Server-side validation:** All fields are validated on the backend

If someone hits the rate limit, they'll see: "Too many submissions. Please try again later."

## Contact Email Collection

All contact information (name, email, phone) is sent to your `info@gromleygroup.com` inbox. You can:

1. **Manual approach (recommended to start):**
   - Save contacts in Gmail Contacts as they come in
   - Create a spreadsheet if you want to track more data
   - Easy to manage for 10-50 inquiries per month

2. **Future automation (when volume grows):**
   - Export contacts to Mailchimp for email marketing
   - Integrate with a CRM (HubSpot, Salesforce, etc.)
   - Set up automated workflows

## Security Notes

- Never commit `.env.local` to Git (already in `.gitignore`)
- Keep your API key private
- If key is compromised, regenerate it in Resend dashboard
- Rate limiting helps prevent spam/abuse

## Support

- **Resend Documentation:** [resend.com/docs](https://resend.com/docs)
- **Resend Support:** [resend.com/support](https://resend.com/support)
- **Vercel Environment Variables:** [vercel.com/docs/environment-variables](https://vercel.com/docs/environment-variables)

