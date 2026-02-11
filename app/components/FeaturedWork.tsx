// app/components/FeaturedWork.tsx
"use client";

import PortfolioCarousel from "./PortfolioCarousel";

export default function FeaturedWork() {
  return (
    <section id="galleries" className="bg-[var(--color-background)] overflow-hidden">
      <PortfolioCarousel />
    </section>
  );
}
