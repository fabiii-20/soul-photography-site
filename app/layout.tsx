// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOUL",
  description:
    "Transform your photography with professional editing services. Color correction, retouching, and advanced compositing by expert editors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Science Gothic via Google Fonts (use <link> because next/font doesn't support it) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Science+Gothic:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* apply Inter's optimized className */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
