"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToTestimonials = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("testimonials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-desert/30 via-desert/20 to-beige/40" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 text-balance">
            Boutique music bookings, done beautifully.
          </h1>
          <p className="text-lg md:text-xl text-text/80 mb-8 max-w-2xl mx-auto text-balance">
            The Gromley Group curates vetted musicians and manages every detail—from soundchecks to schedules—so your event feels effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#testimonials" onClick={scrollToTestimonials}>
                See What Clients Say
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

