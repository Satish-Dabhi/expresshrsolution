"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className = "", children }: CardProps) => (
  <div
    className={cn(
      `
      h-[150px] lg:h-[200px]
      rounded-xl bg-white
      border border-gray-100
      flex items-center justify-center
      opacity-30
      transition-all duration-300
    `,
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

  const headingDone = currentLine >= textLines.length;
  const descDone = descParaIndex >= descParas.length;

  /** Heading typing */
  useEffect(() => {
    if (headingDone) return;

    if (currentChar < textLines[currentLine].length) {
      const timeout = setTimeout(() => {
        setTypedLines((prev) => {
          const copy = [...prev];
          copy[currentLine] =
            (copy[currentLine] || "") + textLines[currentLine][currentChar];
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, TYPING_SPEED);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);

      return () => clearTimeout(pause);
    }
  }, [currentChar, currentLine, headingDone, textLines]);

  /** Description typing */
  useEffect(() => {
    if (!headingDone || !desc) return;
    if (descParaIndex >= descParas.length) return;

    if (descCharIndex < descParas[descParaIndex].length) {
      const timeout = setTimeout(() => {
        setTypedDesc((prev) => {
          const copy = [...prev];
          copy[descParaIndex] =
            (copy[descParaIndex] || "") +
            descParas[descParaIndex][descCharIndex];
          return copy;
        });
        setDescCharIndex((c) => c + 1);
      }, DESC_TYPING_SPEED);

      return () => clearTimeout(timeout);
    } else {
      setDescParaIndex((p) => p + 1);
      setDescCharIndex(0);
    }
  }, [headingDone, desc, descParaIndex, descCharIndex, descParas]);

  while (typedLines.length < textLines.length) typedLines.push("");
  while (typedDesc.length < descParas.length) typedDesc.push("");

  return (
    <section className="relative w-full mb-24 bg-[#ebebeb]">
      <div className="relative mx-auto px-4 sm:px-6 grid grid-cols-6 grid-rows-3 gap-2">
        {[...Array(18)].map((_, i) => (
          <Card key={i} />
        ))}

        <div
          className="absolute inset-0 flex items-center justify-center text-center z-10 px-4"
          style={{ pointerEvents: "none" }}
        >
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

            {/* Sub Title */}
            {subTitle && headingDone && (
              <p className="mt-3 text-[24px] md:text-[36px] font-semibold animate-fade-up">
                {subTitle}
              </p>
            )}

            {/* Description */}
            {desc && (
              <div className="mt-3 max-w-5xl mx-auto space-y-4">
                {typedDesc.map((para, i) => (
                  <p
                    key={i}
                    className="text-[12px] md:text-[25px] leading-relaxed"
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
                    className="inline-block px-8 py-3 text-[24px] md:text-[36px] font-semibold rounded-[0.5rem] bg-[#EF7F1B] text-white hover:scale-105 transition-transform"
                  >
                    {button.label}
                  </a>
                ) : (
                  <button
                    onClick={button.onClick}
                    className="px-8 py-3 text-[24px] md:text-[36px] font-semibold rounded-[0.5rem] bg-[#EF7F1B] text-white hover:scale-105 transition-transform"
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

        .animate-scale-fade {
          animation: scaleFade 0.5s ease-out both;
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
      `}</style>
    </section>
  );
}
