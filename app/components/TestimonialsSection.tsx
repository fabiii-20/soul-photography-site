// app/components/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fabi",
    role: "Photographer",
    content: "The retouching work is absolutely phenomenal. They understood exactly what I needed and delivered flawless results that exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Muhammed Nashfil",
    role: "",
    content: "Fast turnaround, professional quality, and amazing attention to detail. Soul Photography has become my go-to editing service for all my wedding shoots.",
    rating: 5,
  },
  {
    name: "Jeena T",
    role: "Researcher",
    content: "Their color correction skills are unmatched. Every photo comes back with perfect tones and vibrant colors while maintaining natural authenticity.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-[var(--color-surface)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[var(--color-primary)] mb-4">
            Testimonials
          </h2>
          <div className="h-0.5 w-12 bg-[var(--color-accent)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>
              <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-[var(--color-primary)] font-medium">{testimonial.name}</p>
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
