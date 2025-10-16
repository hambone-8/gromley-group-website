# The Gromley Group Website

A boutique music booking and event coordination website for Phoenix and Scottsdale, Arizona.

## Tech Stack

- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Resend** - Email delivery
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hambone-8/gromley-group-website.git
cd gromley-group-website
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```bash
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_123456789

# Email address to receive contact form submissions
CONTACT_TO_EMAIL=info@thegromleygroup.com

# Public site URL (used for SEO and canonical URLs)
NEXT_PUBLIC_SITE_URL=https://thegromleygroup.com
```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Setting Up Resend

The contact form uses [Resend](https://resend.com) for email delivery. Here's how to set it up:

1. **Create a Resend account**
   - Go to [resend.com](https://resend.com) and sign up
   - Free tier includes 100 emails/day (perfect for getting started)

2. **Verify your sending domain** (recommended for production)
   - In Resend dashboard, go to "Domains"
   - Add your domain (e.g., `thegromleygroup.com`)
   - Add the DNS records shown to your domain provider
   - Wait for verification (usually a few minutes)

3. **Or use Resend's test domain** (for development)
   - You can skip domain verification for testing
   - Resend provides a test domain: `onboarding@resend.dev`
   - Note: Some email providers may flag these as spam

4. **Generate an API key**
   - Go to "API Keys" in the Resend dashboard
   - Click "Create API Key"
   - Give it a name (e.g., "Gromley Group Production")
   - Copy the key and add it to `.env.local` as `RESEND_API_KEY`

5. **Update the "from" address** (production only)
   - Once your domain is verified, update line 51 in `/app/api/contact/route.ts`:
   ```ts
   from: "The Gromley Group <noreply@thegromleygroup.com>",
   ```

6. **Test the form**
   - Submit a test inquiry through the contact form
   - Check your inbox at the `CONTACT_TO_EMAIL` address
   - Check Resend dashboard for delivery status

## Customization

### Updating Content

1. **Testimonials**: Edit `/data/testimonials.ts`
2. **Venue names**: Edit `/data/venues.ts`
3. **Colors & design tokens**: Edit `/tailwind.config.ts` and `app/globals.css`

### Adding Images

Replace placeholder images in the `/public/images/` directory:

- `hero-bg.jpg` - Hero background image (warm event/venue photo)
- `roster-1.jpg` through `roster-4.jpg` - Musician/performance photos
- Add a logo as `logo.png` for SEO

Recommended image sizes:
- Hero: 1920x1080px (landscape)
- Roster: 800x800px (square)
- Logo: 512x512px (square, transparent background)

### Updating Contact Information

1. **Email address**: Update `CONTACT_TO_EMAIL` in `.env.local`
2. **Social links**: Edit `/components/Footer.tsx` (lines 38-54)
3. **Phone number** (if needed): Add to Footer component

## Project Structure

```
gromley-group-website/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & CSS variables
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── api/
│       └── contact/
│           └── route.ts    # Form submission API
├── components/
│   ├── Header.tsx          # Sticky header with mobile menu
│   ├── Footer.tsx          # Footer with contact info
│   ├── Hero.tsx            # Home page hero section
│   ├── HowItWorks.tsx      # 3-step process cards
│   ├── TestimonialsCarousel.tsx  # Auto-scrolling testimonials
│   ├── RosterTeaser.tsx    # Musician photo grid
│   ├── MiniAbout.tsx       # Home page about snippet
│   ├── TrustStrip.tsx      # Venue name list
│   ├── ContactForm.tsx     # Contact form with validation
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       └── Card.tsx        # Reusable card component
├── data/
│   ├── testimonials.ts     # Client testimonials data
│   └── venues.ts           # Trusted venue names
├── lib/
│   └── utils.ts            # Helper functions & email templates
└── public/
    └── images/             # Static images (add your photos here)
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Configure environment variables:
   - Add `RESEND_API_KEY`
   - Add `CONTACT_TO_EMAIL`
   - Add `NEXT_PUBLIC_SITE_URL`

5. Click "Deploy"

6. Your site will be live at `your-project.vercel.app`

7. (Optional) Add a custom domain in Vercel settings

### Alternative Deployment

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Self-hosted with PM2

## Content To-Dos

Before going live, update these placeholders:

- [ ] Replace all images in `/public/images/`
- [ ] Update testimonials in `/data/testimonials.ts` with real quotes
- [ ] Update venue names in `/data/venues.ts`
- [ ] Add real Instagram & LinkedIn URLs in Footer
- [ ] Add company email in `.env.local`
- [ ] Update "from" email in `/app/api/contact/route.ts` (after domain verification)
- [ ] Add logo file as `/public/logo.png`
- [ ] Add Open Graph image as `/public/og-image.jpg` (1200x630px)
- [ ] Test contact form end-to-end

## SEO Features

Built-in SEO optimizations:

- ✅ Optimized meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ JSON-LD structured data (Organization, LocalBusiness, FAQPage)
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Location-optimized content (Phoenix/Scottsdale keywords)
- ✅ Mobile-responsive and fast-loading

## Accessibility

The site includes:

- Semantic HTML5 landmarks
- Proper heading hierarchy
- Keyboard navigation support
- Focus visible states
- ARIA labels where needed
- `prefers-reduced-motion` support
- High color contrast (WCAG AA compliant)

## Performance

Optimizations included:

- Next.js automatic code splitting
- Optimized font loading
- Framer Motion animations respect `prefers-reduced-motion`
- Lazy loading for images (when real images are added)
- Static generation for fast page loads

## Support

For questions or issues:

- Review this README
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Resend documentation](https://resend.com/docs)
- Review component code comments

## License

Private repository. All rights reserved.

---

Built with ❤️ for The Gromley Group

