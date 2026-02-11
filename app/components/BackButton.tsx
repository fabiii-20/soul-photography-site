// app/components/BackButton.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      whileHover={{ x: -5 }}
      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Back to Galleries</span>
    </motion.button>
  );
}
