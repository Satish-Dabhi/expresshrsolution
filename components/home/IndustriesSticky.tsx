"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IndustryItem {
  title: string;
  points: string[];
  image: string;
}

interface IndustriesStickyProps {
  items: IndustryItem[];
}

export default function IndustriesSticky({ items }: IndustriesStickyProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(480);

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;

      if (w < 500) {
        setCardWidth(w - 40);
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

  /* ----------------------------------
      MOBILE CAROUSEL REF
  ---------------------------------- */
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative w-full">

      {/* Sticky Wrapper */}
      <div
        className="
    max-w-[1400px] mx-auto w-full
    md:sticky md:top-[80px] md:h-screen
    flex flex-col md:flex-row
    gap-6 md:gap-10
    px-4 md:px-0
    py-10 md:py-0
  "
      >

        {/* LEFT IMAGE → DESKTOP ONLY */}
        <div
          className="hidden md:block relative rounded-xl overflow-hidden shrink-0"
          style={{
            width: "clamp(240px, 80vw, 480px)",
            height: "clamp(260px, 60vw, 520px)",
          }}
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={items[activeIndex].image}
              alt="Active"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* DESKTOP RIGHT SCROLL-BASED CARDS */}
        {!isMobile && (
          <div className="w-full relative overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-neutral-200 shadow-sm rounded-xl flex-shrink-0 p-8 
                    flex flex-col justify-end"
                  style={{
                    width: "clamp(240px, 80vw, 480px)",
                    height: "clamp(260px, 60vw, 520px)",
                  }}
                >
                  <h3
                    className="text-black mb-4"
                    style={{
                      fontFamily: "Instrument Sans",
                      fontWeight: 600,
                      fontSize: "clamp(26px, 5vw, 40px)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div className="flex flex-col gap-1">
                    {item.points.map((line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 2.5,
                          delay: i * 0.25,
                          ease: "easeOut",
                        }}
                        className="text-black/70 
        flex items-start gap-2"
                        style={{
                          fontFamily: "Instrument Sans",
                          fontSize: "clamp(14px, 3vw, 18px)",
                        }}
                      >
                        <span className="text-neutral-400 text-xl leading-none">•</span>
                        <span>{line}</span>
                      </motion.p>
                    ))}
                  </div>


                  {/* <ul className="space-y-3">
                    {item.points.map((p, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-black/70"
                        style={{
                          fontFamily: "Instrument Sans",
                          fontSize: "clamp(14px, 3vw, 18px)",
                        }}
                      >
                        <span className="text-neutral-400 text-xl leading-none">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* MOBILE VERSION */}
        {isMobile && (
          <div className="w-full p-5 pb-10 flex flex-col gap-6">

            {/* TOP IMAGE */}
            <div className="w-full h-[320px] rounded-xl overflow-hidden relative bg-white">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0.5, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={items[activeIndex].image}
                  alt="mobile-image"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* MOBILE CAROUSEL */}
            <div className="relative w-full">

              {/* LEFT ARROW */}
              <button
                onClick={() => {
                  const next = Math.max(activeIndex - 1, 0);
                  setActiveIndex(next);
                  carouselRef.current?.scrollTo({
                    left: next * cardWidth,
                    behavior: "smooth",
                  });
                }}
                className={`
          absolute left-2 top-1/2 -translate-y-1/2 z-20
          p-3 rounded-full shadow-lg bg-white/70 
          ${activeIndex === 0 ? "opacity-40" : "opacity-100"}
        `}
              >
                <ChevronLeft size={20} />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={() => {
                  const next = Math.min(activeIndex + 1, items.length - 1);
                  setActiveIndex(next);
                  carouselRef.current?.scrollTo({
                    left: next * cardWidth,
                    behavior: "smooth",
                  });
                }}
                className={`
          absolute right-2 top-1/2 -translate-y-1/2 z-20
          p-3 rounded-full shadow-lg bg-white/70
          ${activeIndex === items.length - 1 ? "opacity-40" : "opacity-100"}
        `}
              >
                <ChevronRight size={20} />
              </button>

              {/* MOBILE TRACK — NO FRAMER-MOTION X ANIMATE HERE */}
              <div
                ref={carouselRef}
                className="overflow-x-hidden snap-x snap-mandatory"
                onScroll={(e) => {
                  const idx = Math.round(e.currentTarget.scrollLeft / cardWidth);
                  if (idx !== activeIndex) setActiveIndex(idx);
                }}
              >
                <div className="flex gap-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      drag="x"
                      dragDirectionLock
                      dragElastic={0.05}
                      dragConstraints={{
                        left: -((items.length - 1) * cardWidth),
                        right: 0,
                      }}
                      onDragEnd={(e, info) => {
                        let next = activeIndex;

                        if (info.offset.x < -50)
                          next = Math.min(activeIndex + 1, items.length - 1);
                        if (info.offset.x > 50)
                          next = Math.max(activeIndex - 1, 0);

                        setActiveIndex(next);
                        carouselRef.current?.scrollTo({
                          left: next * cardWidth,
                          behavior: "smooth",
                        });
                      }}
                      className={`bg-white rounded-xl shadow-sm flex-shrink-0 snap-center
        p-6 transition-all duration-300
        ${activeIndex === i ? "scale-[1.02] opacity-100" : "scale-95 opacity-60"}`}
                      style={{
                        width: cardWidth,
                        height: "auto",     // ⭐ allow card to auto-grow
                      }}
                    >
                      <span className="text-xs tracking-widest text-black/50">
                        {item.title}
                      </span>

                      <h3
                        className="mt-2 text-black font-semibold"
                        style={{
                          fontSize: "20px",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.points[0]}
                      </h3>

                      <ul className="mt-2 space-y-2 text-black/70">
                        {item.points.slice(1).map((p, j) => (
                          <li key={j} className="flex gap-2 text-sm leading-snug">
                            • {p}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}


      </div>

      {/* Desktop scroll spacer */}
      {!isMobile && (
        <div style={{ height: `${items.length * 100}vh` }} />
      )}
    </section>
  );
}
