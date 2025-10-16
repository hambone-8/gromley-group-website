"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rosterImages = [
  {
    src: "/images/roster-1.jpg",
    alt: "Acoustic duo performing at an intimate event",
  },
  {
    src: "/images/roster-2.jpg",
    alt: "Jazz trio at a country club reception",
  },
  {
    src: "/images/roster-3.jpg",
    alt: "Full band at a wedding celebration",
  },
  {
    src: "/images/roster-4.jpg",
    alt: "Solo pianist at a corporate dinner",
  },
];

export function RosterTeaser() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            From acoustic duos to dance bands
          </h2>
          <p className="text-text/70 text-lg max-w-2xl mx-auto">
            Our curated roster spans every genre and ensemble size, matched to your venue's energy and your event's vision
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rosterImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-md overflow-hidden bg-muted group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-desert/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-base" />
              {/* Placeholder colored backgrounds */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${45 + index * 30}deg, #D87B2D, #F4E9DC)`,
                  opacity: 0.3
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-text/60 text-sm">
            Replace with real event photos showcasing your musicians
          </p>
        </motion.div>
      </div>
    </section>
  );
}

