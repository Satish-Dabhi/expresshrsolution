"use client";

import Image from "next/image";

const logos = [
  { src: "/images/logos/pfizer.png", alt: "Pfizer" },
  { src: "/images/logos/abbott.png", alt: "Abbott" },
  { src: "/images/logos/reliance.png", alt: "Reliance" },
  { src: "/images/logos/samsung.png", alt: "Samsung" },
];

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`
      h-[120px] md:h-[160px]
      rounded-xl bg-white
      border border-gray-100
      shadow-[0_0_20px_rgba(0,0,0,0.04)]
      flex items-center justify-center
      overflow-hidden p-4
      ${className}
    `}
  >
    {children}
  </div>
);

export default function TrustedLogosGrid() {
  return (
    <section className="w-full py-20 px-4 md:px-20">

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-2">

        {/* ------------ ROW 1 — HIDDEN ON MOBILE ------------ */}
        <div className="hidden md:contents">
          {[...Array(6)].map((_, i) => (
            <Card key={`top-${i}`} />
          ))}
        </div>

        {/* ------------ ROW 2 (MAIN LOGOS ROW) ------------ */}

        {/* Left blank (desktop only) */}
        <Card className="hidden md:flex" />

        {/* Logos */}
        {logos.map((logo, i) => (
          <Card key={i} className="relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-4"
              />
            </div>
          </Card>
        ))}

        {/* Right blank (desktop only) */}
        <Card className="hidden md:flex" />

        {/* ------------ ROW 3 — HIDDEN ON MOBILE ------------ */}
        <div className="hidden md:contents">
          {[...Array(6)].map((_, i) => (
            <Card key={`bottom-${i}`} />
          ))}
        </div>

      </div>

    </section>
  );
}
