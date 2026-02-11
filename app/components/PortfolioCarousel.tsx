// app/components/PortfolioCarousel.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const images = [
    { src: "/portfolio/20251030_173028.jpg", title: "Macro Details", category: "Macro", size: "large" },
    { src: "/portfolio/IMG-20240512-WA0034.jpg", title: "Classic Frame", category: "Vintage", size: "small" },
    { src: "/portfolio/butterfly.jpg", title: "Fragile Beauty", category: "Macro", size: "small" },
    { src: "/portfolio/flowers_droplets.jpg", title: "Dew Drops", category: "Nature", size: "medium" },
    { src: "/portfolio/nature_green.jpg", title: "Organic Growth", category: "Nature", size: "small" },
    { src: "/portfolio/protest.jpg", title: "Power of Voice", category: "Documentary", size: "medium" },
    { src: "/portfolio/IMG20240623164849.jpg", title: "Cultural Narrative", category: "Storytelling", size: "small" },
    { src: "/portfolio/PXL_20230708_155818509.jpg", title: "Verdant Calm", category: "Nature", size: "medium" },
    { src: "/portfolio/soul photography's  (6).jpg", title: "Ethereal Light", category: "Portrait", size: "small" },
    { src: "/portfolio/20250820_122804 (1).jpg", title: "Urban Rhythms", category: "Cinematic", size: "large" },
    { src: "/portfolio/vintage_radio.jpg", title: "Timeless Echo", category: "Product", size: "medium" },
];

export default function PortfolioCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Using IntersectionObserver to determine which slide is in focus
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: container,
                threshold: 0.6, // Trigger when 60% of item is visible
                rootMargin: "0px -20% 0px -20%" // Narrow the "active" area to the center
            }
        );

        const items = container.querySelectorAll(".carousel-item");
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -window.innerWidth * 0.5, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: window.innerWidth * 0.5, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-[var(--color-background)] overflow-hidden min-h-screen flex flex-col justify-center relative group/carousel">

            {/* Background Narrative */}
            <div className="absolute top-10 left-0 w-full text-center z-0 pointer-events-none opacity-20">
                <h2 className="text-[12vw] font-bold text-[var(--color-surface)] leading-none tracking-tighter select-none">
                    ARCHIVE
                </h2>
            </div>

            <div className="container-custom relative z-10 mb-12 text-center">
                <div className="inline-flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-8 bg-[var(--color-accent)]" />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)] font-bold">
                        Spotlight Gallery
                    </p>
                    <div className="h-[1px] w-8 bg-[var(--color-accent)]" />
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={scrollLeft}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 md:opacity-100 cursor-pointer"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 md:opacity-100 cursor-pointer"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="9 18 15 12 9 6" /></svg>
            </button>

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12 px-[50vw] no-scrollbar items-center gap-4 md:gap-8"
                style={{ scrollPaddingLeft: "50vw", scrollPaddingRight: "50vw" }} // Ensures dragging starts/ends with items centered
            >
                {images.map((img, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <motion.div
                            key={index}
                            data-index={index}
                            className={`carousel-item relative shrink-0 snap-center flex flex-col items-center justify-center transition-all duration-700 ease-out`}
                            style={{
                                width: isActive ? "65vw" : "45vw", // Reduced active width to allow "peek"
                                maxWidth: isActive ? "800px" : "600px",
                            }}
                            animate={{
                                scale: isActive ? 1 : 0.9,
                                opacity: isActive ? 1 : 0.7, // Increased opacity for better visibility
                                filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                                y: isActive ? 0 : 10
                            }}
                        >
                            {/* Inner wrapper allows image logic to drive size */}
                            <div className="relative w-full flex items-center justify-center">
                                <motion.img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-auto h-auto max-w-full max-h-[70vh] object-contain shadow-2xl"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: isActive ? 1 : 1.1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />

                                {/* Info Overlay - Only visible when active */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <p className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-2 font-bold">{img.category}</p>
                                    <h3 className="text-2xl md:text-3xl font-light text-white italic">{img.title}</h3>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-4 mt-8">
                {images.map((_, idx) => (
                    <motion.div
                        key={idx}
                        className={`h-[2px] rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[var(--color-accent)] w-12' : 'bg-[var(--color-border)] w-4'}`}
                    />
                ))}
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
