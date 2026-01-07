"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SplitFeatureSectionProps {
  title: string;
  description: string;
  image: string;
  topDecoration: string;
  reverse?: boolean;
}

export default function SplitFeatureSection({
  title,
  description,
  image,
  topDecoration,
  reverse = false,
}: SplitFeatureSectionProps) {
  return (
    <section className="w-full py-[30px] md:py-[50px] px-4 md:pl-[30px]">
      <div
        className={cn(
          // Mobile: column | Desktop: row
          "flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1440px] mx-auto",
          reverse && "md:flex-row-reverse"
        )}
      >
        {/* CONTENT */}
        <div className="w-full md:w-1/2 overflow-hidden pl-0 md:pl-[40px]">
          <h1 className="text-black text-[32px] md:text-[48px] lg:text-[64px] mb-4"
            style={{
              fontFamily: 'Instrument Sans',
              fontWeight: 600,
              lineHeight: '1.05',
            }}>{title}</h1>
          <p className="" style={{
            fontFamily: 'Instrument Sans',
            fontSize: 'clamp(14px, 1.6vw, 18px)', // responsive text size
            lineHeight: '1.6',
            maxWidth: '400px',
          }}>{description}</p>
        </div>
        {/* IMAGE WRAPPER */}
        <div className="relative w-full md:w-1/2 h-[280px] md:h-[550px] overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
            <Image
              src={topDecoration}
              alt="decoration"
              width={1200}
              height={180}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Card Image */}
          <Image
            src={image}
            alt="feature image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
