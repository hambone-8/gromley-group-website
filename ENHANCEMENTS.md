# 🚀 Future Enhancements

This document outlines optional features you can add to the website after launch.

## High Priority (Quick Wins)

### 1. Add Email Field to Contact Form

**Current:** The contact form only sends an email to you, not to the submitter.

**Enhancement:** Add an email input field so you can send auto-responders to clients/musicians.

**How to implement:**

1. Update `/components/ContactForm.tsx`:
```tsx
// Add after inquiryType state
const [email, setEmail] = useState("");

// Add in the form, after the dropdown:
<div>
  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
    Your email address
  </label>
  <input
    type="email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full px-4 py-3 rounded-md border border-muted bg-background text-text"
    placeholder="you@example.com"
  />
</div>

// Update the fetch body to include email
body: JSON.stringify({ inquiryType, message, email, honeypot })
```

2. Update `/app/api/contact/route.ts`:
```tsx
// Add email to the body destructuring
const { inquiryType, message, email, honeypot } = body;

// Validate email
if (!email || !email.includes('@')) {
  return NextResponse.json({ error: "Valid email required" }, { status: 400 });
}

// After sending business email, send auto-responder:
await resend.emails.send({
  from: "The Gromley Group <noreply@thegromleygroup.com>",
  to: email,
  subject: inquiryType === "client" 
    ? "We received your inquiry - The Gromley Group"
    : "Thanks for your interest - The Gromley Group",
  html: autoResponderTemplate,
});
```

**Benefit:** Automated confirmation emails build trust and set expectations.

---

## Medium Priority

### 2. Musician Portfolio/Roster Page

Create a `/musicians` page showing your roster with:
- Photos
- Bios
- Music styles
- Sample audio/video clips
- Booking button

**Files to create:**
- `/app/musicians/page.tsx`
- `/data/musicians.ts`
- `/components/MusicianCard.tsx`

---

### 3. Public Shows Calendar

Create a `/shows` page displaying upcoming public performances:
- Date, time, venue
- Artist/band name
- Entry fee (if any)
- "Add to Calendar" button

**Files to create:**
- `/app/shows/page.tsx`
- `/data/shows.ts`
- Integration with Google Calendar (optional)

---

### 4. Blog/News Section

Share industry insights, event recaps, and booking tips:
- `/app/blog/page.tsx` - Blog index
- `/app/blog/[slug]/page.tsx` - Individual posts
- Markdown-based content with MDX or Contentlayer

**SEO benefit:** Regular content helps with search rankings.

---

### 5. Photo Gallery

Showcase past events with a beautiful gallery:
- Grid layout with lightbox
- Filter by event type
- Instagram integration (pull from Instagram API)

**Libraries to consider:**
- `react-photo-gallery`
- `yet-another-react-lightbox`

---

## Lower Priority (Nice-to-Have)

### 6. Testimonials Video Carousel

Add video testimonials alongside text:
- Upload to Vimeo/YouTube
- Embed in carousel
- Auto-mute on mobile

---

### 7. Venue Case Studies

Detailed pages for major venues you work with:
- Before/after stories
- Event photos
- Specific challenges solved
- Testimonials from venue

---

### 8. Online Booking System

Allow clients to check availability and book directly:
- Calendar integration
- Stripe/PayPal payment processing
- Automated invoicing
- Contract signing (DocuSign integration)

**Note:** This is complex - consider using a third-party booking platform.

---

### 9. Live Chat Widget

Real-time support for visitors:
- Intercom, Crisp, or Tawk.to
- Automated responses to common questions
- Mobile-friendly

---

### 10. Analytics Dashboard

Track your marketing performance:
- Vercel Analytics (built-in)
- Google Analytics 4
- Conversion tracking (form submissions)
- Heatmaps (Hotjar, Microsoft Clarity)

---

## Performance Optimizations

### Image Optimization

Once you add real images:

```tsx
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/images/hero-bg.jpg"
  alt="Event venue"
  width={1920}
  height={1080}
  priority // for above-the-fold images
/>
```

### CDN for Images

For lots of images, use a CDN:
- Cloudinary
- Imgix
- Vercel's built-in image optimization

---

## SEO Enhancements

### 1. Add FAQ Schema

Create `/app/faq/page.tsx` with structured data for common questions.

### 2. Local SEO

- Create Google Business Profile
- Add location pages for each service area
- Schema markup for multiple locations

### 3. Review Integration

Display reviews from:
- Google Reviews
- Yelp
- WeddingWire
- The Knot

---

## Marketing Integrations

### Email Marketing

Collect emails and send newsletters:
- Mailchimp
- ConvertKit
- Resend (you're already using it!)

### Social Proof

Add widgets showing:
- Instagram feed
- Recent tweets
- Facebook reviews

### CRM Integration

Sync form submissions to:
- HubSpot
- Salesforce
- Notion database

---

## Accessibility Enhancements

Already WCAG AA compliant, but you could add:
- Skip navigation links
- Keyboard shortcuts guide
- High contrast mode toggle
- Font size controls

---

## Technical Improvements

### Add Testing

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom jest
```

Write tests for:
- Contact form validation
- Component rendering
- API routes

### Add Monitoring

- Sentry (error tracking)
- Vercel Speed Insights
- Uptime monitoring (UptimeRobot)

### Add Search

Site-wide search functionality:
- Algolia
- Fuse.js (client-side)
- Pagefind (static site search)

---

## Content Management

### Migrate to Headless CMS

For easier content updates:
- Sanity.io
- Contentful
- WordPress (headless)
- Payload CMS

**Trade-off:** More complexity vs. easier content updates.

---

## Mobile App

If you need an app:
- React Native (reuse React components)
- Progressive Web App (PWA) - easier, works on all platforms

---

## Implementation Priority

1. ✅ **Launch with current features** (you're done!)
2. 🎯 **Week 1:** Add email field to contact form
3. 🎯 **Month 1:** Add shows calendar
4. 🎯 **Month 2:** Add musician roster page
5. 🎯 **Month 3:** Add blog/news section
6. 🎯 **Quarter 2:** Consider booking system or CMS

---

## Questions to Consider

Before adding features, ask:
- **Does this serve my business goals?**
- **Will clients/musicians actually use this?**
- **Can I maintain this long-term?**
- **Is there a simpler alternative?**

Remember: A simple, well-maintained site is better than a complex, outdated one.

---

## Need Help Implementing?

Each enhancement can be added incrementally. Start small, test with users, and iterate based on feedback.

For technical help:
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Resend docs: [resend.com/docs](https://resend.com/docs)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

