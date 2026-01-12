"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

interface SplitFeatureSectionProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  subDescription?: string | React.ReactNode;
  image: string;
  topDecoration?: string;
  reverse?: boolean;
}

export default function SplitFeatureSection({
  title,
  description,
  image,
  topDecoration,
  reverse = false,
  subDescription
}: SplitFeatureSectionProps) {
  return (
    <section className="w-full py-[30px] md:py-[50px] px-4 md:pl-[30px]">
      <div
        className={cn(
          "flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1440px] mx-auto",
          reverse && "md:flex-row-reverse"
        )}
      >
        {/* CONTENT */}
        <div className="w-full md:w-1/2 overflow-hidden pl-0 md:pl-[40px] order-2 md:order-1">
          <h1
            className="text-black text-[32px] md:text-[48px] lg:text-[64px] mb-4"
            style={{
              fontFamily: "Instrument Sans",
              fontWeight: 600,
              lineHeight: "1.05",
            }}
          >
            {title}
          </h1>

          {subDescription && (
            <p className="mt-2 mb-4 text-[25px] text-gray-600">{subDescription}</p>
          )}

          {description && (
            <p
              className=""
              style={{
                fontFamily: "Instrument Sans",
                fontSize: "clamp(18px, 1.6vw, 20px)",
                lineHeight: "1.6",
                maxWidth: "600px",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* IMAGE WRAPPER */}
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <div className="relative w-full h-full p-0 md:p-5">
            {/* IMAGE */}
            <div className="w-full">
              <Image
                src={image}
                alt="image"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                style={{ maxHeight: '775px', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
