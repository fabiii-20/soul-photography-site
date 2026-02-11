// app/components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Palette,
  Sparkles,
  Heart,
  Cake,
  Settings
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Pre Wedding Shoot",
    description: "Capturing the chemistry and excitement before your big day in stunning cinematic locations.",
  },
  {
    icon: Cake,
    title: "Birthday Shoot",
    description: "Dynamic and joyful storytelling for your special milestones, preserved with artistic flair.",
  },
  {
    icon: Video,
    title: "Videography Editing",
    description: "Professional post-production for your films, focusing on rhythm, color, and narrative flow.",
  },
  {
    icon: Camera,
    title: "Photo Editing",
    description: "Detailed retouching and enhancement to bring out the best in every single frame.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Premium color science applied to your photos to achieve a consistent, professional aesthetic.",
  },
  {
    icon: Settings,
    title: "Custom Presets",
    description: "All work is finished using our exclusive, custom-made presets for a unique visual identity.",
  },
  {
    icon: Palette,
    title: "Poster Making",
    description: "Creative graphic design and poster creation for events, movies, or branding.",
  },
];

export default function ServicesSection() {
  return (
    <section className="pt-12 pb-32 px-4 bg-[var(--color-surface)] relative transition-colors duration-1000">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)] font-bold mb-4 block">
            Crafting Excellence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6">
            Our Expertise
          </h2>
          <div className="h-1 w-20 bg-[var(--color-accent)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 group hover:bg-white hover:border-[var(--color-accent)]/30 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-secondary)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500">
                <service.icon className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
