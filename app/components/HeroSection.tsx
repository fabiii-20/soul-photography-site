"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Magnetic effect for the main container - Intensified
  const rotateX = useTransform(mouseY, [0, windowSize.height], [12, -12]);
  const rotateY = useTransform(mouseX, [0, windowSize.width], [-12, 12]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-background)] group/hero">
      {/* Animated Light Orb (Antigravity Style) - Intensified */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] opacity-[0.15] rounded-full blur-[140px] pointer-events-none z-0"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, #8c734b 0%, transparent 70%)"
        }}
      />

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--color-accent)] opacity-[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-block px-4 py-1.5 mb-8 border border-[var(--color-accent)]/20 rounded-full bg-white/5 backdrop-blur-sm"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[var(--color-accent)]">
              Cinematic Narrative Studio
            </span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl mb-10 leading-[0.85] font-bold tracking-tighter">
            SOUL
            <span className="relative block text-5xl md:text-7xl mt-6 font-extralight text-[var(--color-text-muted)] italic">
              PHOTOGRAPHY
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-3 left-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-transparent"
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] mb-14 max-w-lg leading-relaxed font-light">
            We don&apos;t just take photos; we compose timeless visual stories that resonate with the soul.
          </p>

          <div className="flex flex-wrap gap-10 items-center">
            <Link
              href="#galleries"
              className="px-12 py-5 bg-[var(--color-primary)] text-white text-[10px] tracking-[0.4em] uppercase hover:bg-[var(--color-accent)] hover:-translate-y-1.5 transition-all duration-500 shadow-2xl shadow-black/10"
            >
              The Archive
            </Link>

            <Link
              href="/hire"
              className="group flex items-center gap-4 text-[20px] tracking-[0.4em] uppercase font-bold text-[var(--color-primary)]"
            >
              <span>Hire Me</span>
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-lg"
              >
                &rarr;
              </motion.span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-[1000px]"
        >
          <div
            className="relative aspect-[3/4] w-full max-w-md mx-auto cinematic-shadow overflow-hidden bg-[var(--color-surface)]"
            style={{ transform: "translateZ(50px)" }}
          >
            <Image
              src="/portfolio/vintage_radio.jpg"
              alt="Soul Photography Statement"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover/hero:scale-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-10 left-10 text-white" style={{ transform: "translateZ(30px)" }}>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60 mb-2">Lead Artist</p>
              <h3 className="text-3xl font-extralight italic tracking-tight">Abin Ahmed K P</h3>
            </div>
          </div>

          {/* Floating Element Accents */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[var(--color-accent)]/20 pointer-events-none"
            style={{ transform: "translateZ(20px)" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-[var(--color-accent)]/20 pointer-events-none"
            style={{ transform: "translateZ(80px)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
