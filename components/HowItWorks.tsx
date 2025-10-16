"use client";

import { Calendar, Users, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Calendar,
    title: "Share your date & vibe",
    description: "Tell us about your event type, date, venue, and the atmosphere you're creating.",
  },
  {
    icon: Users,
    title: "We match & confirm",
    description: "We curate vetted talent, handle all logistics, and align on transparent pricing.",
  },
  {
    icon: Music,
    title: "You enjoy the night",
    description: "Professional musicians arrive on time, sound perfect, and elevate your experience.",
  },
];

export function HowItWorks() {
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
            How it works
          </h2>
          <p className="text-text/70 text-lg max-w-2xl mx-auto">
            Three simple steps to unforgettable live music
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-md transition-shadow duration-base">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desert/10 mb-6">
                      <Icon className="h-8 w-8 text-desert" />
                    </div>
                    <div className="mb-2 text-sm font-semibold text-accent">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text/70">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

