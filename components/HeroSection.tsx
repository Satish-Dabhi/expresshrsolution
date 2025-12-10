"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  useEffect(() => {
    const headingChars = document.querySelectorAll(".hero-heading span");
    const subtextChars = document.querySelectorAll(".hero-subtext span");

    // Animate heading with wave motion
    gsap.fromTo(
      headingChars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "elastic.out(1, 0.6)",
        duration: 1.2,
        stagger: {
          each: 0.06,
          from: "center", // animation radiates out from middle
        },
      }
    );

    // Animate subtext
    gsap.fromTo(
      subtextChars,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
        delay: 0.6,
        stagger: 0.05,
      }
    );
  }, []);

  // helper to split text into spans
  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-img.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="hero-heading text-5xl md:text-7xl font-bold">
          {splitText("EXPERT FACILITY")}
        </h1>
        <p className="hero-subtext mt-4 text-lg md:text-2xl font-light text-primary">
          {splitText("EFFICIENT AND RELIABLE")}
        </p>
      </div>
    </section>
  );
}
