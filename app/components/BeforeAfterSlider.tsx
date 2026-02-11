// components/BeforeAfterSlider.tsx
"use client";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

interface Props {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  return (
    <ImgComparisonSlider className="w-full max-w-3xl mx-auto">
      <img slot="first" src={beforeUrl} alt={beforeLabel} />
      <img slot="second" src={afterUrl} alt={afterLabel} />
    </ImgComparisonSlider>
  );
}
