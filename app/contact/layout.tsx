import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The Gromley Group | Request a Quote for Event Music",
  description: "Get in touch to book professional musicians for your Phoenix or Scottsdale event. Quick response, transparent pricing, and personalized service.",
  openGraph: {
    title: "Contact The Gromley Group",
    description: "Request a quote for your event or join our roster of musicians",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

