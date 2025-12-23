"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  { src: "/images/logos/pfizer.png", alt: "Pfizer" },
  { src: "/images/logos/abbott.png", alt: "Abbott" },
  { src: "/images/logos/reliance.png", alt: "Reliance" },
  { src: "/images/logos/samsung.png", alt: "Samsung" },
];

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = "", hover = false }: CardProps) => (
  <div
    className={cn(
      `
      h-[120px] md:h-[160px]
      rounded-xl bg-white
      border border-gray-100
      flex items-center justify-center
      overflow-hidden
      transition-all duration-300
    `,
      hover &&
        "hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,156,0,0.25)] hover:scale-[1.03]",
      className
    )}
  >
    {children}
  </div>
);

export default function TrustedLogosGrid() {
  return (
    <section className="relative w-full py-24">
      <div className="relative z-10  bg-[#ef7f1b87] gap-3 md:gap-5 grid grid-cols-3 md:grid-cols-6">
        {/* Top gradient */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-40 custom-top-gradient z-20" />
        {/* Bottom gradient */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 custom-bottom-gradient z-20" />
        {/* Left gradient */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 custom-left-gradient z-20" />
        {/* Right gradient */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 custom-right-gradient z-20" />

        {/* ----------- ROW 1: 6 empty cards on desktop ----------- */}
        {[...Array(6)].map((_, i) => (
          <Card key={`top-${i}`} className="hidden md:flex" />
        ))}

        {/* ----------- ROW 2: Empty, logos, empty ----------- */}
        {/* 1st empty */}
        <Card className="hidden md:flex" />

        {/* Logos 2 to 5 */}
        {logos.map((logo, i) => (
          <Card key={i} hover className="hidden md:flex relative">
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

        {/* 6th empty */}
        <Card className="hidden md:flex" />

        {/* ----------- ROW 3: 6 empty cards on desktop ----------- */}
        {[...Array(6)].map((_, i) => (
          <Card key={`bottom-${i}`} className="hidden md:flex" />
        ))}

        {/* ----------- MOBILE: 3-column grid with empty-logo-empty per row ----------- */}
        {logos.map((logo, i) => (
          <>
            <Card key={`left-${i}`} className="md:hidden" />
            <Card key={`logo-${i}`} hover className="md:hidden relative">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </Card>
            <Card key={`right-${i}`} className="md:hidden" />
          </>
        ))}
      </div>
    </section>
  );
}
