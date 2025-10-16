import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { RosterTeaser } from "@/components/RosterTeaser";
import { MiniAbout } from "@/components/MiniAbout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gromley Group | Boutique Music Bookings in Phoenix & Scottsdale",
  description: "Professional music booking and event coordination in Phoenix and Scottsdale. Vetted musicians, transparent pricing, and reliable service for weddings, corporate events, and private gatherings.",
  openGraph: {
    title: "The Gromley Group | Boutique Music Bookings",
    description: "Curated musicians and professional event coordination in Phoenix & Scottsdale",
  },
};

export default function Home() {
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com"}/#organization`,
        "name": "The Gromley Group",
        "url": process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com",
        "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com"}/logo.png`,
        "description": "Boutique music booking and event coordination in Phoenix and Scottsdale",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Scottsdale",
          "addressRegion": "AZ",
          "addressCountry": "US"
        },
        "areaServed": ["Phoenix", "Scottsdale", "Arizona"],
        "sameAs": [
          "https://instagram.com/gromleygroup",
          "https://linkedin.com/company/gromleygroup"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com"}/#localbusiness`,
        "name": "The Gromley Group",
        "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com"}/og-image.jpg`,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Scottsdale",
          "addressRegion": "AZ",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.4942,
          "longitude": -111.9261
        },
        "url": process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com",
        "telephone": "+1-480-000-0000",
        "servesCuisine": "N/A",
        "acceptsReservations": "True"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What areas do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We primarily serve Phoenix and Scottsdale, Arizona, with nationwide bookings available on request."
            }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I book?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend booking 2-3 months in advance for most events, though we can often accommodate shorter timelines depending on availability."
            }
          },
          {
            "@type": "Question",
            "name": "What types of events do you coordinate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We coordinate music for weddings, corporate events, country club gatherings, restaurant openings, private dinners, real estate events, and more."
            }
          },
          {
            "@type": "Question",
            "name": "How is pricing determined?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing depends on event type, duration, ensemble size, and specific requirements. We provide transparent quotes after understanding your needs."
            }
          },
          {
            "@type": "Question",
            "name": "Are your musicians vetted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all musicians in our roster are professionally vetted for reliability, skill, and professionalism."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com"}/#website`,
        "url": process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com",
        "name": "The Gromley Group",
        "description": "Boutique music bookings in Phoenix & Scottsdale",
        "publisher": {
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com"}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com"}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <TestimonialsCarousel />
      <RosterTeaser />
      <MiniAbout />
    </>
  );
}

