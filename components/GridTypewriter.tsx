"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  hover?: boolean;
}

const Card = ({ className = "", children, hover = true }: CardProps) => (
  <div
    className={cn(
      `
      h-[100px] md:h-[140px] lg:h-[160px]
      rounded-xl bg-white
      border border-gray-100
      flex items-center justify-center
      overflow-hidden
      transition-all duration-300
      select-none
      opacity-30
    `,
      hover &&
        "hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,156,0,0.25)] hover:scale-[1.03]",
      className
    )}
  >
    {children}
  </div>
);

const TEXT_LINES = [
  "Integrated Services.",
  "Intelligent Execution.",
  "Compliant Operations.",
];

const TYPING_SPEED = 80;
const LINE_PAUSE = 700;

export default function CenteredTextGridHoverResponsive() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= TEXT_LINES.length) return;

    if (currentChar < TEXT_LINES[currentLine].length) {
      const timeout = setTimeout(() => {
        setTypedLines((prev) => {
          const newLines = [...prev];
          if (newLines[currentLine]) {
            newLines[currentLine] += TEXT_LINES[currentLine][currentChar];
          } else {
            newLines[currentLine] = TEXT_LINES[currentLine][currentChar];
          }
          return newLines;
        });
        setCurrentChar((c) => c + 1);
      }, TYPING_SPEED);

      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);

      return () => clearTimeout(pauseTimeout);
    }
  }, [currentChar, currentLine]);

  while (typedLines.length < TEXT_LINES.length) {
    typedLines.push("");
  }

  return (
    <section className="relative w-full mb-24 bg-[#ebebeb] select-none">
      {/* Grid container relative */}
      <div className="relative mx-auto px-4 md:px-6 grid grid-cols-6 grid-rows-3 gap-1.5 md:gap-2">
        {[...Array(18)].map((_, i) => (
          <Card key={i} hover />
        ))}

        {/* Absolute centered text */}
        <div
          className="absolute top-1/2 left-1/2 w-full max-w-full md:max-w-3xl -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 text-center z-10"
          style={{ pointerEvents: "none" }}
          aria-live="polite"
        >
          {typedLines.map((line, i) => (
            <p
              key={i}
              className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-snug"
            >
              {line}
              {i === currentLine && currentChar < TEXT_LINES[i].length && (
                <span className="inline-block w-1 h-6 md:h-8 lg:h-10 bg-black animate-blink ml-1" />
              )}
            </p>
          ))}
        </div>
      </div>

      {/* Gradients */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 custom-top-gradient z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 custom-bottom-gradient z-20" />
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 md:w-20 custom-left-gradient z-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 md:w-20 custom-right-gradient z-20" />

      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </section>
  );
}
