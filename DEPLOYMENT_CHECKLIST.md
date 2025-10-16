# 🚀 Deployment Checklist

Use this checklist before launching your website to production.

## Pre-Launch Checklist

### 📝 Content

- [ ] All placeholder images replaced with real photos
  - [ ] `/public/images/hero-bg.jpg` - Hero background (1920x1080px)
  - [ ] `/public/images/roster-1.jpg` through `roster-4.jpg` - Roster photos (800x800px)
  - [ ] `/public/logo.png` - Company logo (512x512px)
  - [ ] `/public/og-image.jpg` - Social media preview (1200x630px)

- [ ] Testimonials updated in `/data/testimonials.ts` with real client quotes
- [ ] Venue names updated in `/data/venues.ts` with real partners
- [ ] All copy reviewed and approved
- [ ] Contact email address confirmed

### 🎨 Branding

- [ ] Colors match brand guidelines (edit `/app/globals.css` if needed)
- [ ] Logo looks good on all screen sizes
- [ ] Favicon displays correctly
- [ ] Social media preview looks good (test with [metatags.io](https://metatags.io))

### 📧 Email Setup (Resend)

- [ ] Resend account created
- [ ] Domain verified in Resend dashboard
- [ ] API key generated and saved securely
- [ ] "From" email address updated in `/app/api/contact/route.ts` (line 51)
- [ ] Test email sent successfully
- [ ] Auto-responder emails reviewed and approved
- [ ] Spam folder checked (ensure emails arrive in inbox)

### 🔗 Links & Contact

- [ ] Instagram URL added to `/components/Footer.tsx` (line 47)
- [ ] LinkedIn URL added to `/components/Footer.tsx` (line 54)
- [ ] Email address in Footer is correct (line 35)
- [ ] All internal links work correctly
- [ ] No broken external links

### 🔒 Environment Variables

- [ ] `.env.local` configured for local dev
- [ ] Production environment variables ready for deployment:
  ```
  RESEND_API_KEY=re_your_production_key
  CONTACT_TO_EMAIL=info@thegromleygroup.com
  NEXT_PUBLIC_SITE_URL=https://thegromleygroup.com
  ```

### 🧪 Testing

#### Desktop Testing
- [ ] Chrome - Test on latest version
- [ ] Safari - Test on latest version
- [ ] Firefox - Test on latest version
- [ ] Edge - Test on latest version

#### Mobile Testing
- [ ] iPhone Safari - Test responsive design
- [ ] Android Chrome - Test responsive design
- [ ] Hamburger menu works correctly
- [ ] Forms are easy to fill out on mobile
- [ ] Buttons are easy to tap (44x44px minimum)

#### Functionality Testing
- [ ] Home page loads without errors
- [ ] About page loads without errors
- [ ] Contact page loads without errors
- [ ] Contact form submits successfully (test both client and musician)
- [ ] Form validation works (try submitting empty form)
- [ ] Honeypot spam protection works
- [ ] Carousel auto-scrolls and manual controls work
- [ ] Smooth scroll to testimonials works
- [ ] Header is sticky on scroll
- [ ] Mobile menu opens and closes correctly

### ♿ Accessibility

- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Tab through all interactive elements (keyboard navigation)
- [ ] All images have meaningful alt text
- [ ] Color contrast meets WCAG AA standards (test with [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/))
- [ ] Focus states are visible on all interactive elements
- [ ] No flashing/strobing animations

### 🚀 Performance

- [ ] Run Lighthouse audit (aim for 90+ in all categories)
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] Images optimized (under 200KB each)
- [ ] Page load time under 3 seconds on 3G
- [ ] No console errors in browser dev tools

### 🔍 SEO

- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions are compelling (150-160 characters)
- [ ] Open Graph tags configured (test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Twitter Cards configured
- [ ] Sitemap generated (`/sitemap.xml`)
- [ ] Robots.txt configured (`/robots.txt`)
- [ ] JSON-LD structured data validates (test with [Schema Validator](https://validator.schema.org/))
- [ ] Google Search Console set up (do after deployment)
- [ ] Google Analytics or Vercel Analytics configured (optional)

### 🔐 Security

- [ ] No API keys or secrets in code
- [ ] All environment variables using `.env.local` or deployment platform
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Honeypot field working for spam prevention

---

## Vercel Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial website launch"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`

### 3. Add Environment Variables

In Vercel project settings → Environment Variables:

```
RESEND_API_KEY=re_your_production_key
CONTACT_TO_EMAIL=info@thegromleygroup.com
NEXT_PUBLIC_SITE_URL=https://thegromleygroup.com
```

**Important:** Set these for **Production**, **Preview**, and **Development** environments.

### 4. Deploy

- Click "Deploy"
- Wait 2-3 minutes
- Your site will be live at `your-project.vercel.app`

### 5. Custom Domain (Optional but Recommended)

1. In Vercel project → Settings → Domains
2. Add your domain: `thegromleygroup.com`
3. Follow DNS configuration instructions
4. Add both `www` and non-`www` versions
5. Wait for DNS propagation (5 minutes to 48 hours)

---

## Post-Launch Checklist

### Immediately After Launch

- [ ] Test live site on all devices
- [ ] Submit contact form to ensure emails work
- [ ] Check all pages load without errors
- [ ] Verify custom domain works (if configured)
- [ ] Check SSL certificate is active (green padlock in browser)

### First Week

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Set up Google Business Profile
- [ ] Monitor Resend dashboard for email deliverability
- [ ] Check analytics for any errors or issues
- [ ] Ask friends/colleagues to test the site

### First Month

- [ ] Review form submissions - any patterns or issues?
- [ ] Monitor site performance with Lighthouse
- [ ] Check Google Search Console for crawl errors
- [ ] Gather feedback from clients/musicians
- [ ] Consider adding first enhancement (see ENHANCEMENTS.md)

---

## Monitoring & Maintenance

### Weekly

- [ ] Check contact form submissions
- [ ] Monitor uptime (use UptimeRobot or Vercel monitoring)
- [ ] Review any error reports

### Monthly

- [ ] Update testimonials if you have new ones
- [ ] Check for broken links
- [ ] Review site analytics
- [ ] Update content as needed

### Quarterly

- [ ] Run full Lighthouse audit
- [ ] Update dependencies: `pnpm update`
- [ ] Review and optimize images
- [ ] Plan new features/improvements

---

## Emergency Contacts

**Hosting:** Vercel support (if issues)
- [vercel.com/support](https://vercel.com/support)

**Email:** Resend support
- [resend.com/support](https://resend.com/support)

**Domain:** Your domain registrar's support

---

## Rollback Plan

If something goes wrong after deployment:

1. **Vercel:** Go to Deployments → Click previous working deployment → "Promote to Production"
2. **Code:** `git revert` the problematic commit and redeploy

---

## Success Metrics

Track these to measure website success:

- **Traffic:** Visitors per month (Google Analytics / Vercel Analytics)
- **Conversions:** Form submissions per month
- **Client vs Musician ratio:** Which forms get more submissions?
- **Bounce rate:** Are people sticking around? (aim for under 60%)
- **Page load speed:** Keep under 3 seconds
- **Mobile vs Desktop:** Which devices are people using?

---

## You're Ready! 🎉

Once everything on this checklist is complete, you're ready to launch.

**Need help?** Review:
- `README.md` - Full technical documentation
- `GETTING_STARTED.md` - Quick start guide
- `ENHANCEMENTS.md` - Future improvements

**Good luck with your launch!** 🚀

