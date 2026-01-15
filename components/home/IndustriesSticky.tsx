"use client";

import { motion, PanInfo, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import StatementSection from "./StatementSection";

interface IndustryItem {
  title: string;
  points: string[];
  image?: string;
  icon?: string;
}

interface IndustriesStickyProps {
  items: IndustryItem[];
}

export default function IndustriesSticky({ items }: IndustriesStickyProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(480);
  const [viewportWidth, setViewportWidth] = useState(0);

  /* ----------------------------------
      Handle cardWidth based on window size
  ---------------------------------- */
  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;

      if (w < 500) {
        setCardWidth(w - 40); // 20px margin each side approx
      } else if (w < 768) {
        setCardWidth(360);
      } else {
        setCardWidth(480);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* ----------------------------------
      MOBILE CHECK
  ---------------------------------- */
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ----------------------------------
      Capture viewport width for centering mobile carousel
  ---------------------------------- */
  useEffect(() => {
    if (!viewportRef.current) return;

    const updateViewportWidth = () => {
      setViewportWidth(viewportRef.current?.offsetWidth || 0);
    };

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, [isMobile]);

  /* ----------------------------------
      SCROLL PROGRESS (DESKTOP ONLY)
  ---------------------------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalSlides = items.length - 1;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalSlides * cardWidth)]
  );

  useEffect(() => {
    if (!isMobile) {
      const unsub = scrollYProgress.on("change", (v) => {
        const idx = Math.round(v * totalSlides);
        setActiveIndex(idx);
      });
      return () => unsub();
    }
  }, [scrollYProgress, isMobile]);

  const gap = 16; // px gap between cards (gap-4 in Tailwind = 1rem = 16px)
  const centerOffset = viewportWidth / 2 - cardWidth / 2;

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = cardWidth / 3;

    if (info.offset.x < -swipeThreshold && activeIndex < items.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }

    if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Sticky Wrapper */}
      <div className="md:sticky md:top-[0px] md:h-screen">
        <StatementSection
          title={`Built for Critical\nIndustries`}
          description="We support companies in Food, Pharma, Retail, and Manufacturing with Tailored Logistics."
        />
        {!isMobile && (
          <div
            className="
            max-w-[1400px] mx-auto w-full
            flex flex-col md:flex-row
            gap-6 md:gap-10
            px-4 md:px-0
            py-10 md:py-0
          "
          >
            {/* LEFT IMAGE → DESKTOP ONLY */}
            <div
              className="hidden md:block relative rounded-xl overflow-hidden shrink-0 group cursor-pointer"
              style={{
                width: "clamp(240px, 80vw, 480px)",
                height: "clamp(260px, 60vw, 520px)",
              }}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src="/images/industries-new.png"
                  alt="Industries"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Overlay */}
              <Link
                href="/industries"
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div
                  className="
    absolute inset-0
    bg-black/60
    opacity-0
    flex items-center justify-center
    transition-opacity duration-300
    group-hover:opacity-100
    group-active:opacity-100
    group-focus-visible:opacity-100
  "
                >
                  <span className="text-white text-xl tracking-wide flex items-center">
                    View more <span className="ml-1 text-2xl leading-none">→</span>
                  </span>
                </div>


              </Link>
            </div>

            {/* DESKTOP RIGHT SCROLL-BASED CARDS */}

            <div className="w-full relative overflow-hidden">
              <motion.div style={{ x }} className="flex gap-8">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-neutral-200 shadow-sm rounded-xl flex-shrink-0 p-8 flex flex-col"
                    style={{
                      width: "clamp(240px, 80vw, 480px)",
                      height: "clamp(260px, 60vw, 520px)",
                    }}
                  >
                    <div className="w-[60px] h-[60px] relative mb-20">
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="w-full h-full object-contain filter hue-rotate-30 saturate-150"
                        />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-col justify-end h-[13rem] mb-4">
                        <h3
                          className="text-black"
                          style={{
                            fontFamily: "Instrument Sans",
                            fontWeight: 600,
                            fontSize: "clamp(26px, 5vw, 42px)",
                            lineHeight: '48px'
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <ul className="flex flex-col list-disc pl-5 mr-0 md:mr-15">
                        {item.points.map((line, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 2.5,
                              delay: i * 0.25,
                              ease: "easeOut",
                            }}
                            className="text-[#A8A8A8] marker:text-neutral-400"
                            style={{
                              fontFamily: "Instrument Sans",
                              fontSize: "clamp(14px, 3vw, 16px)",
                            }}
                          >
                            {line}
                          </motion.li>
                        ))}
                      </ul>

                    </div>
                  </div>
                ))}
              </motion.div>

              {/* DESKTOP CTA AFTER LAST CARD */}
              {!isMobile && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    activeIndex === totalSlides
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 40 }
                  }
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pr-6"
                  style={{
                    pointerEvents: activeIndex === totalSlides ? 'auto' : 'none',
                  }}
                >
                  <Link
                    href="/industries"
                    className="
        inline-flex items-center gap-3
        rounded-full
        px-8 py-4
        text-white text-lg font-medium
        shadow-lg
        transition-transform hover:scale-105
      "
                    style={{ backgroundColor: 'var(--bright-orange)' }}
                  >
                    Learn More
                    <span className="text-2xl leading-none">→</span>
                  </Link>
                </motion.div>
              )}

            </div>
          </div>
        )}

        {/* MOBILE VERSION */}
        {isMobile && (
          <div className="w-full p-5 pb-10 flex flex-col gap-6">
            {/* TOP IMAGE */}
            <div className="w-full h-[320px] rounded-xl overflow-hidden relative bg-white">
              <motion.div
                initial={{ opacity: 0.5, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={"/images/industries-new.png"}
                  alt="mobile-image"
                  fill
                  className="object-cover"
                />
                <Link
                  href="/industries"
                  className="absolute inset-0 z-10 flex items-end justify-center"
                >
                  <div className="mb-4 bg-black/70 text-white px-6 py-2 rounded-full text-sm flex items-center">
                    View more <span className="ml-1 text-2xl leading-none">→</span>
                  </div>
                </Link>

              </motion.div>
            </div>

            {/* MOBILE CAROUSEL */}
            <div className="relative w-full overflow-hidden" ref={viewportRef}>
              {/* TRACK */}
              <motion.div
                drag="x"
                onDragEnd={handleDragEnd}
                dragConstraints={{ left: 0, right: 0 }}
                animate={{
                  x: viewportWidth
                    ? centerOffset - activeIndex * (cardWidth + gap)
                    : 0,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="flex gap-4 touch-pan-y"
              >
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`
              bg-white rounded-xl shadow-sm flex-shrink-0 p-6
              transition-all duration-300
              ${activeIndex === i ? "scale-[1.03]" : "opacity-70"}
            `}
                    style={{ width: cardWidth }}
                  >
                    {item.icon && (
                      <div className="w-12 h-12 relative mb-4">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}

                    <h3
                      className="text-black font-semibold"
                      style={{
                        fontFamily: "Instrument Sans",
                        fontWeight: 600,
                        fontSize: "clamp(26px, 5vw, 40px)",
                      }}
                    >
                      {item.title}
                    </h3>

                    <ul className="mt-3 space-y-2 text-black/70">
                      {item.points.map((p, j) => (
                        <li key={j} className="flex gap-2 text-sm">
                          <span className="text-neutral-400">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              {/* DOTS */}
              <div className="mt-5 flex justify-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300
              ${activeIndex === i ? "w-6 bg-black" : "w-2 bg-black/30"}
            `}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={activeIndex === i}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop scroll spacer */}
      {!isMobile && <div style={{ height: `${items.length * 100}vh` }} />}
    </section>
  );
}
