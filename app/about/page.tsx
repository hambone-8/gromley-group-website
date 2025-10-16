"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Shield, Target, Briefcase, Scale, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { name: "Reliability", icon: Shield },
  { name: "Fit", icon: Target },
  { name: "Professionalism", icon: Briefcase },
  { name: "Fairness", icon: Scale },
  { name: "Communication", icon: MessageCircle }
];

const eventTypes = [
  "Country club events",
  "Restaurant & bar openings",
  "Weddings & receptions",
  "Corporate gatherings",
  "Private dinners",
  "Real estate events",
  "Church events",
  "Festival & community celebrations"
];

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-beige/40 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
                Where hospitality meets curation
              </h1>
              <p className="text-xl text-text/80 max-w-3xl mx-auto">
                The story behind The Gromley Group
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
                <div className="space-y-6 text-text/80 leading-relaxed">
                  <p className="text-lg">
                    Founded in Scottsdale, The Gromley Group blends years of hospitality leadership—including management at the famed <strong className="text-text">Handlebar J</strong>—with a deep network of professional musicians.
                  </p>
                  <p>
                    Before hospitality, the founder served as a teacher and middle-school department chair: organizing lively crowds, setting the tone, and keeping things running smoothly. That same calm, confident coordination ensures your event's music arrives on time, sounds right, and elevates the experience.
                  </p>
                  <p>
                    Today, The Gromley Group brings that unique combination of educational leadership, hospitality expertise, and music industry relationships to every booking. We understand how to read a room, match energy to the moment, and deliver performances that feel effortless—because we've handled all the details behind the scenes.
                  </p>
                  <div className="pt-6 border-t border-muted mt-8">
                    <p className="italic text-text/70">
                      "Whether it's a quiet jazz trio for an intimate dinner or a full band for a wedding celebration, we curate talent that fits your vision and manages every logistical detail so you can focus on your guests."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-beige/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
                Our values
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-md p-6 flex flex-col items-center justify-center text-center shadow-sm"
                    >
                      <Icon className="h-8 w-8 text-desert mb-3 flex-shrink-0" />
                      <div className="font-semibold text-text">{value.name}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Event Types */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Events we serve
                  </h2>
                  <ul className="space-y-3">
                    {eventTypes.map((type, index) => (
                      <motion.li
                        key={type}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-text/80">{type}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Geographic Coverage */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                    Where we work
                  </h2>
                  <div className="space-y-4 text-text/80">
                    <p>
                      <strong className="text-text">Primary service area:</strong><br />
                      Phoenix, Scottsdale, and the greater Arizona metro area
                    </p>
                    <p>
                      <strong className="text-text">Extended coverage:</strong><br />
                      Nationwide bookings available on request for special events
                    </p>
                    <div className="pt-6 mt-6 border-t border-muted">
                      <p className="text-sm text-text/60">
                        With deep roots in the Phoenix-Scottsdale hospitality scene and connections throughout Arizona, we bring local expertise combined with the flexibility to coordinate exceptional talent anywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-beige/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Ready to elevate your event?
              </h2>
              <p className="text-lg text-text/70 mb-8">
                Let's discuss your vision and find the perfect musical fit
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

