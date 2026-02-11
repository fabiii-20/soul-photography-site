// app/hire/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function HirePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "pre-wedding",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/hire/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to process inquiry");

      // Success state
      setSubmitted(true);

      // Auto redirect after a delay
      setTimeout(() => {
        router.push("/");
      }, 5000);

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try contacting Abin directly via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--color-surface)] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 md:p-20 text-center max-w-xl w-full"
        >
          <div className="w-20 h-20 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Inquiry Received</h1>
          <p className="text-[var(--color-text-muted)] font-light leading-relaxed mb-10">
            Thank you for reaching out, {formData.name}. Abin has been notified of your interest in {formData.serviceType}. We will get back to you shortly.
          </p>
          <Link
            href="/"
            className="inline-block px-12 py-5 bg-[var(--color-primary)] text-white text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[var(--color-accent)] transition-all duration-500"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)] pt-32 pb-24 px-4 overflow-hidden relative">
      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-12 left-8 md:left-12 z-50 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all group"
      >
        <div className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)]">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="hidden md:block">Back to Home</span>
      </Link>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/7736559811"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-8 md:right-12 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-4 -left-4 bg-[var(--color-accent)] text-white text-[8px] font-bold uppercase px-2 py-1 rounded tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Quick Chat
        </span>
      </a>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 md:p-16"
        >
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)] font-bold mb-4 block">
              Reservation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">Start Your Project</h1>
            <p className="text-[var(--color-text-muted)] font-light max-w-md mx-auto leading-relaxed">
              We&apos;ll handle your inquiry with cinematic precision. Once submitted, Abin will be notified directly.
            </p>
          </div>

          <form onSubmit={handleInquiry} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">Select Service</label>
              <select
                className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none transition-colors appearance-none cursor-pointer"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              >
                <option value="pre-wedding">Pre-Wedding Shoot</option>
                <option value="birthday">Birthday Shoot</option>
                <option value="videography-editing">Videography Editing</option>
                <option value="photo-editing">Professional Photo Editing</option>
                <option value="color-grading">Advanced Color Grading</option>
                <option value="poster-making">Poster Making</option>
                <option value="custom">Custom Implementation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">Project Details</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your vision..."
                className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none resize-none transition-colors"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-[var(--color-primary)] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[var(--color-accent)] transition-all duration-500 disabled:opacity-50 mt-8 cinematic-shadow"
            >
              {loading ? "Processing..." : "Submit Inquiry"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
