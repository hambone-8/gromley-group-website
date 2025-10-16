# 🎵 Getting Started with The Gromley Group Website

## Quick Start Guide

Welcome! Your website is built and ready to run. Follow these steps to get started:

### 1. Install Dependencies

```bash
pnpm install
# or if you prefer npm
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:

```env
RESEND_API_KEY=re_your_actual_key_here
CONTACT_TO_EMAIL=info@thegromleygroup.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** For local development, you can use placeholder values initially. The contact form will just log errors to the console if Resend isn't configured yet.

### 3. Run the Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What's Built

### ✅ Three Core Pages

1. **Home (/)** - Hero, trust strip, how it works, testimonials carousel, roster teaser, mini about
2. **About (/about)** - Founder story, values, coverage details
3. **Contact (/contact)** - Smart form with inquiry type routing

### ✅ Components

- **Header** - Sticky navigation with mobile hamburger menu
- **Footer** - Contact info and social links
- **ContactForm** - Dropdown inquiry type, honeypot spam protection
- **TestimonialsCarousel** - Auto-scrolling with manual controls
- All home page sections (Hero, HowItWorks, RosterTeaser, etc.)

### ✅ Features

- 🎨 Design system with PRD color tokens
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (WCAG AA compliant)
- 🚀 SEO optimized with JSON-LD structured data
- 📧 Email routing (clients vs musicians)
- 🤖 Spam protection (honeypot field)
- ✨ Smooth animations with Framer Motion
- 🎯 Scroll-to-testimonials CTA on homepage

## Next Steps (Before Launch)

### Priority 1: Content

- [ ] **Images** - Add real photos to `/public/images/`:
  - `hero-bg.jpg` (1920x1080) - Warm event/venue photo
  - `roster-1.jpg` through `roster-4.jpg` (800x800) - Musician photos
  - `logo.png` (512x512) - Your logo
  - `og-image.jpg` (1200x630) - Social media preview image

- [ ] **Testimonials** - Update `/data/testimonials.ts` with real client quotes
- [ ] **Venues** - Update `/data/venues.ts` with actual venue names

### Priority 2: Contact Info

- [ ] Update `CONTACT_TO_EMAIL` in `.env.local`
- [ ] Update social links in `/components/Footer.tsx`:
  - Instagram URL (line 47)
  - LinkedIn URL (line 54)

### Priority 3: Resend Setup

1. **Create Resend account** → [resend.com](https://resend.com)
2. **Verify your domain** (recommended) or use test domain for dev
3. **Generate API key** → Add to `.env.local`
4. **Update "from" address** in `/app/api/contact/route.ts` (line 51):
   ```ts
   from: "The Gromley Group <noreply@thegromleygroup.com>",
   ```

### Priority 4: Deploy

**Deploy to Vercel (recommended):**

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## Customization Guide

### Changing Colors

Edit `/app/globals.css` (lines 4-10):

```css
:root {
  --background: #FFFDF9;
  --text: #1A1A1A;
  --muted: #EDE7E1;
  --desert: #D87B2D;
  --beige: #F4E9DC;
  --accent: #C95718;  /* Main CTA color */
}
```

### Adding More Testimonials

Edit `/data/testimonials.ts`:

```ts
export const testimonials: Testimonial[] = [
  {
    quote: "Your testimonial text here...",
    name: "Client Name",
    role: "Their Title",
    venue: "Venue or Company Name"
  },
  // Add more...
];
```

### Modifying Copy

Key files to edit:
- **Home hero** → `/components/Hero.tsx`
- **About page story** → `/app/about/page.tsx`
- **Email templates** → `/lib/utils.ts`

## Testing the Contact Form

1. Start dev server: `pnpm dev`
2. Go to [http://localhost:3000/contact](http://localhost:3000/contact)
3. Select inquiry type (Client or Musician)
4. Fill out message (minimum 10 characters)
5. Submit

**Without Resend configured:**
- You'll see an error message
- Check terminal/console for error details

**With Resend configured:**
- Success message appears
- Email sent to `CONTACT_TO_EMAIL`
- Check Resend dashboard for delivery status

## Project Structure

```
gromley-group-website/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout (Header + Footer)
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & design tokens
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── api/contact/       # Form submission endpoint
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx
│   └── ui/                # Reusable primitives
├── data/                  # Content data files
│   ├── testimonials.ts    # Client testimonials
│   └── venues.ts          # Venue names
├── lib/                   # Utilities
│   └── utils.ts           # Helpers & email templates
├── public/                # Static assets
│   └── images/            # Add your images here
└── README.md             # Full documentation
```

## Common Issues

### "Module not found" errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Build errors
```bash
# Check TypeScript errors
pnpm build
```

### Contact form not working
1. Check `.env.local` exists and has `RESEND_API_KEY`
2. Check Resend dashboard for API key status
3. Check browser console and terminal for error messages

## Resources

- **Full README** → `README.md`
- **Design Tokens** → `tailwind.config.ts` and `app/globals.css`
- **Next.js Docs** → [nextjs.org/docs](https://nextjs.org/docs)
- **Resend Docs** → [resend.com/docs](https://resend.com/docs)
- **Tailwind Docs** → [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Need Help?

Check the main `README.md` for:
- Detailed Resend setup instructions
- Deployment guides
- SEO details
- Accessibility features
- Performance optimizations

---

**Ready to launch?** Update the content, configure Resend, and deploy! 🚀

