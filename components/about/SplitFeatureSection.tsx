"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SplitFeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function SplitFeatureSection({
  title,
  description,
  image,
  reverse = false,
}: SplitFeatureSectionProps) {
  const topMaskPath = reverse
    ? "M0 0.01H6.537C19.27 0.18 40.93 1.3 58.5 5.02C79.3 9.42 95.5 17.18 101 20.52C109.333 25.35 128.8 37.42 140 47.02C154 59.02 164 68.02 169.5 73.02C175 78.02 204.5 105.02 210 108.52C215.5 112.02 232 123.02 287.5 145.52C311.5 151.02 338 152.02 352 152.02H605V0.02Z"
    : "M0 0.02H598.463C585.73 0.18 564.07 1.3 546.5 5.02C525.7 9.42 509.5 17.18 504 20.52C495.667 25.35 476.2 37.42 465 47.02C451 59.02 441 68.02 435.5 73.02C430 78.02 400.5 105.02 395 108.52C389.5 112.02 373 123.02 317.5 145.52C293.5 151.02 267 152.02 253 152.02H0V0.02Z";

  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      <div
        className={cn(
          "mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image container */}
        <div className="relative w-full h-[260px] md:h-[360px] overflow-hidden">
          {/* TOP MASK */}
          {/* <div
            style={{
              position: "absolute",
              top: 0,
              left: reverse ? undefined : 0,
              right: reverse ? 0 : undefined,
              width: "100%",
              height: "153px",
              overflow: "visible",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <svg
              width="100%"
              height="153"
              viewBox="0 0 775 153"
              fill="none"
              style={{ display: "block" }}
              preserveAspectRatio="none"
            >
              <path d={topMaskPath} fill="white" />
            </svg>
          </div> */}

          {/* IMAGE */}
          <div
            style={{
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderTopLeftRadius: reverse ? "0" : "80px",
              borderTopRightRadius: reverse ? "80px" : "0",
            }}
          />
        </div>
      </div>
    </section>
  );
}
