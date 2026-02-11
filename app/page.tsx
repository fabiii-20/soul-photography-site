// app/page.tsx
import HeroSection from "./components/HeroSection";
import FeaturedWork from "./components/FeaturedWork";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <HeroSection />
      <FeaturedWork />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
