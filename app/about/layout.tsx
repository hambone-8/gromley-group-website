import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Gromley Group | Music Booking Experts in Phoenix",
  description: "Learn about The Gromley Group's founder, a former educator and Handlebar J manager with deep hospitality roots in Phoenix and Scottsdale. Professional music coordination you can trust.",
  openGraph: {
    title: "About The Gromley Group",
    description: "Hospitality expertise meets music curation in Phoenix & Scottsdale",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

