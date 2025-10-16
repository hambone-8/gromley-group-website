"use client";

import { venues } from "@/data/venues";
import { motion } from "framer-motion";

export function TrustStrip() {
  return (
    <section className="py-12 bg-beige/50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-text/60 uppercase tracking-wide mb-4">
            Trusted by hosts across Phoenix & Scottsdale
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {venues.slice(0, 6).map((venue, index) => (
              <span
                key={index}
                className="text-text/70 text-sm md:text-base"
              >
                {venue}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

