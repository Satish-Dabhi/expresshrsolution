"use client";

import { useState, useEffect } from "react";
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

const TYPING_SPEED = 70;
const LINE_PAUSE = 600;
const DESC_TYPING_SPEED = 18;

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
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const descParas = desc ? desc.split("\n\n") : [];
  const [typedDesc, setTypedDesc] = useState<string[]>([]);
  const [descParaIndex, setDescParaIndex] = useState(0);
  const [descCharIndex, setDescCharIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust total cards based on screen size
  let totalCards = 18;
  if (windowWidth < 640) {
    totalCards = 9; // mobile
  } else if (windowWidth < 1024) {
    totalCards = 12; // tablet
  }

  const headingDone = currentLine >= textLines.length;
  const descDone = descParaIndex >= descParas.length;

  // Typing animation for heading
  useEffect(() => {
    if (headingDone) return;
    if (currentChar < textLines[currentLine].length) {
      const t = setTimeout(() => {
        setTypedLines((prev) => {
          const copy = [...prev];
          copy[currentLine] =
            (copy[currentLine] || "") + textLines[currentLine][currentChar];
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    } else {
      const p = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);
      return () => clearTimeout(p);
    }
  }, [currentChar, currentLine, headingDone, textLines]);

  // Typing animation for description
  useEffect(() => {
    if (!headingDone || !desc) return;
    if (descParaIndex >= descParas.length) return;
    if (descCharIndex < descParas[descParaIndex].length) {
      const t = setTimeout(() => {
        setTypedDesc((prev) => {
          const copy = [...prev];
          copy[descParaIndex] =
            (copy[descParaIndex] || "") +
            descParas[descParaIndex][descCharIndex];
          return copy;
        });
        setDescCharIndex((c) => c + 1);
      }, DESC_TYPING_SPEED);
      return () => clearTimeout(t);
    } else {
      setDescParaIndex((p) => p + 1);
      setDescCharIndex(0);
    }
  }, [headingDone, desc, descParaIndex, descCharIndex, descParas]);

  while (typedLines.length < textLines.length) typedLines.push("");
  while (typedDesc.length < descParas.length) typedDesc.push("");

  return (
    <section className="relative w-full mb-24 bg-[#ebebeb] overflow-hidden">
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
              i >= 9 ? "hidden sm:block" : "" // first 9 always visible on mobile, rest show from sm+
            )}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}

        {/* Centered typing text */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4 pointer-events-none">
          <div>
            {/* Heading */}
            {typedLines.map((line, i) => (
              <p
                key={i}
                className="text-[28px] sm:text-[40px] lg:text-[64px] font-semibold leading-tight"
              >
                {line}
                {!headingDone &&
                  i === currentLine &&
                  currentChar < textLines[i].length && (
                    <span className="inline-block w-1 h-6 sm:h-8 lg:h-10 bg-black animate-blink ml-1" />
                  )}
              </p>
            ))}

            {/* Subtitle */}
            {subTitle && headingDone && (
              <p className="mt-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold animate-fade-up">
                {subTitle}
              </p>
            )}

            {/* Description */}
            {desc && (
              <div className="mt-3 max-w-5xl mx-auto space-y-4 sm:space-y-6">
                {typedDesc.map((para, i) => (
                  <p
                    key={i}
                    className="text-[16px] sm:text-[20px] md:text-[25px] leading-relaxed"
                  >
                    {para}
                    {headingDone &&
                      i === descParaIndex &&
                      descCharIndex < (descParas[i]?.length || 0) && (
                        <span className="inline-block w-0.5 h-4 bg-gray-700 animate-blink ml-0.5" />
                      )}
                  </p>
                ))}
              </div>
            )}

            {/* Button */}
            {button && headingDone && descDone && (
              <div className="mt-12 animate-scale-fade pointer-events-auto">
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
              </div>
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
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.6s ease-out both;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scale-fade {
          animation: scaleFade 0.5s ease-out both;
        }
        @keyframes scaleFade {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-grid-float {
          animation: gridFloat 16s ease-in-out infinite;
        }
        @keyframes gridFloat {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -5px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .grid-line-shimmer {
          background: linear-gradient(
            120deg,
            transparent 40%,
            rgba(239, 127, 27, 0.35) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: shimmerMove 12s linear infinite;
        }
        @keyframes shimmerMove {
          from {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-grid-float,
          .grid-line-shimmer {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
