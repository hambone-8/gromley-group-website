"use client";

import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Request a quote
          </h1>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Whether you're planning an event or interested in joining our roster, we'd love to hear from you. Share your details and we'll be in touch soon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

