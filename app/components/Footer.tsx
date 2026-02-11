// app/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
    const whatsappUrl = "https://wa.me/7736559811";
    const email = "adobesoul22@gmail.com";

    return (
        <footer className="py-24 bg-[var(--color-primary)] text-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
                            Let's create something <br />
                            <span className="text-[var(--color-accent)] font-light italic">extraordinary.</span>
                        </h2>
                        <div className="flex flex-col gap-6">
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-4 text-[var(--color-accent)] hover:text-white transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-sm tracking-[0.2em] uppercase font-medium">{email}</span>
                            </a>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-[var(--color-accent)] hover:text-white transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <span className="text-sm tracking-[0.2em] uppercase font-medium">Chat on WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left md:text-right"
                    >
                        <h3 className="text-6xl md:text-8xl font-black opacity-10 mb-8 tracking-tighter">SOUL</h3>
                        <p className="text-xs tracking-[0.4em] uppercase font-bold text-[var(--color-accent)] mb-2">Abin Ahmed K P</p>
                        <p className="text-[var(--color-text-muted)] font-light max-w-sm ml-auto text-sm leading-relaxed">
                            Based in India, serving globally. Specializing in cinematic photography and advanced post-production.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">
                        &copy; {new Date().getFullYear()} Soul Photography. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[var(--color-accent)] transition-colors">Privacy</a>
                        <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[var(--color-accent)] transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
