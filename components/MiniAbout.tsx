"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function MiniAbout() {
  return (
    <section className="py-16 md:py-24 bg-beige/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
            Hospitality meets curation
          </h2>
          <p className="text-text/80 text-lg mb-4 leading-relaxed">
            The Gromley Group is led by a longtime hospitality manager and former department chair who knows how to read a room, coordinate moving parts, and deliver performances that fit the moment.
          </p>
          <p className="text-text/70 mb-8 leading-relaxed">
            With deep roots in Phoenix and Scottsdale—including years managing at the famed Handlebar J—we bring both a vetted network of musicians and the calm, confident coordination that turns good events into unforgettable experiences.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/about">Learn About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

