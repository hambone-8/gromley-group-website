import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Gromley Group | Boutique Music Bookings in Phoenix & Scottsdale",
  description: "Professional music booking and event coordination in Phoenix and Scottsdale. Vetted musicians, transparent pricing, and reliable service for weddings, corporate events, country clubs, and private gatherings.",
  keywords: ["Phoenix live music booking", "Scottsdale event bands", "wedding band coordinator Phoenix", "country club live music Scottsdale", "event music Phoenix", "professional musicians Arizona"],
  openGraph: {
    title: "The Gromley Group | Boutique Music Bookings",
    description: "Curated musicians and professional event coordination in Phoenix & Scottsdale",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://thegromleygroup.com",
    siteName: "The Gromley Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gromley Group | Boutique Music Bookings",
    description: "Professional music booking in Phoenix & Scottsdale",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

