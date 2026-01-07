"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card = ({ className = "", style, children }: CardProps) => (
  <div
    style={style}
    className={cn(
      "rounded-xl bg-white border border-[#F4F4F4]/40 transition-colors duration-500 animate-grid-float will-change-transform hover:border-[#F4F4F4]/70",
      className
    )}
  >
    {children}
  </div>
);

interface GridTypewriterProps {
  textLines: string[];
  desc?: string;
  subTitle?: string;
  button?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export default function GridTypewriter({
  textLines,
  desc,
  subTitle,
  button,
}: GridTypewriterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  /* ----------------------------------------
     SCREEN SIZE
  ---------------------------------------- */
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  let totalCards = 18;
  if (windowWidth < 640) totalCards = 9;
  else if (windowWidth < 1024) totalCards = 12;

  /* ----------------------------------------
     INTERSECTION OBSERVER
  ---------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* ----------------------------------------
     USER SCROLL DETECTION
  ---------------------------------------- */
  useEffect(() => {
    const onUserScroll = (e: Event) => {
      if (!e.isTrusted) return;
      setHasScrolled(true);

      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
    };

    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchmove", onUserScroll, { passive: true });
    window.addEventListener("keydown", onUserScroll);

    return () => {
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
    };
  }, []);

  const descParas = desc ? desc.split("\n\n") : [];

  /* ----------------------------------------
     FRAMER VARIANTS
  ---------------------------------------- */
  const lineVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.25,
        ease: [0.77, 0, 0.175, 1],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative w-full mb-24 bg-[#ebebeb] overflow-hidden"
    >
      <div className="relative mx-auto px-3 sm:px-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-1">
        {/* Background overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F4F4]/5 via-transparent to-black/5 pointer-events-none z-0" />
        <div className="absolute inset-0 grid-line-shimmer-section pointer-events-none z-0" />

        {/* Grid cards */}
        {[...Array(totalCards)].map((_, i) => (
          <Card
            key={i}
            className={cn(
              "aspect-square sm:aspect-[1.2] lg:aspect-[1.5]",
              i >= 9 ? "hidden sm:block" : ""
            )}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4 pointer-events-none">
          <div>
            {/* HEADINGS — LINE BY LINE */}
            {textLines.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate={
                  shouldAnimate && hasScrolled ? "visible" : "hidden"
                }
                className="text-[28px] sm:text-[40px] lg:text-[64px] font-semibold leading-tight mb-6"
              >
                {line}
              </motion.p>
            ))}

            {/* SUBTITLE */}
            {subTitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={
                  shouldAnimate && hasScrolled
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: textLines.length * 0.25 + 0.1,
                  ease: "easeOut",
                }}
                className="mt-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold"
              >
                {subTitle}
              </motion.p>
            )}

            {/* DESCRIPTION — PARAGRAPH BY PARAGRAPH */}
            {desc && (
              <div className="mt-6 max-w-5xl mx-auto space-y-4 sm:space-y-6">
                {descParas.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                      shouldAnimate && hasScrolled
                        ? { opacity: 1, y: 0 }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay:
                        textLines.length * 0.25 +
                        0.4 +
                        i * 0.2,
                      ease: "easeOut",
                    }}
                    className="text-[16px] sm:text-[20px] md:text-[25px] leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            )}

            {/* BUTTON */}
            {button && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  shouldAnimate && hasScrolled
                    ? { opacity: 1, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay:
                    textLines.length * 0.25 +
                    (descParas.length || 0) * 0.2 +
                    0.8,
                  ease: "easeOut",
                }}
                className="mt-12 pointer-events-auto"
              >
                {button.href ? (
                  <a
                    href={button.href}
                    className="inline-block px-8 py-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold rounded-lg bg-[#EF7F1B] text-white hover:scale-105 transition-transform"
                  >
                    {button.label}
                  </a>
                ) : (
                  <button
                    onClick={button.onClick}
                    className="px-8 py-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold rounded-lg bg-[#EF7F1B] text-white hover:scale-105 transition-transform"
                  >
                    {button.label}
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Gradients */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 md:h-40 custom-top-gradient z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 md:h-40 custom-bottom-gradient z-20" />
      <div className="hidden md:block pointer-events-none absolute top-0 left-0 h-full w-20 custom-left-gradient z-20" />
      <div className="hidden md:block pointer-events-none absolute top-0 right-0 h-full w-20 custom-right-gradient z-20" />

      <style jsx>{`
        .animate-grid-float {
          animation: gridFloat 16s ease-in-out infinite;
        }
        @keyframes gridFloat {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-grid-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
