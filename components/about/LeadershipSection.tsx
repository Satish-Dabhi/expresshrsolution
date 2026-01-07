"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  PanInfo,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

interface Props {
  leaders: Leader[];
}

interface LeaderImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: string | number;
  width?: string | number;
}

function LeaderImage({
  src,
  alt,
  className = "",
  height = "100%",
  width = "100%",
}: LeaderImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden shadow-xl ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height,
        width,
        backgroundColor: imgError ? "#EB7575" : "transparent",
      }}
    >
      {!imgError && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
          priority
        />
      )}
    </motion.div>
  );
}

export default function LeadershipSection({ leaders }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);
  const swipeThreshold = 80;

  const containerRef = useRef<HTMLDivElement>(null);

  /** DESKTOP SCROLL */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const index = Math.min(
      leaders.length - 1,
      Math.floor(latest * leaders.length)
    );
    setActiveIndex(index);
  });

  /** MOBILE SWIPE */
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -swipeThreshold && activeIndex < leaders.length - 1) {
      setActiveIndex((v) => v + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex((v) => v - 1);
    }
    x.set(0);
  };

  const current = leaders[activeIndex];

  return (
    <section className="relative bg-white py-10  max-w-[1440px] mx-auto">
      {/* ================= DESKTOP ================= */}
      <div
        ref={containerRef}
        className="relative hidden lg:block bg-white"
        style={{ height: `${leaders.length * 100}vh` }}
      >
        <div className="sticky top-0 flex items-center min-h-screen max-w-[1600px] mx-auto">

          {/* IMAGE */}
          <div className="w-1/2 flex items-center justify-center px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
            w-full
            max-w-[520px]
            h-[600px]
            flex
            items-center
            justify-center
          "
              >
                <LeaderImage
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>


          {/* CONTENT */}
          <div className="w-1/2 px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col max-w-[640px]"
              >
                <h2
                  className="text-[64px] font-semibold tracking-widest mb-10"
                  style={{ lineHeight: "64px" }}
                >
                  Founder
                </h2>

                <h3 className="text-[36px] font-semibold">
                  {current.name}
                </h3>

                <p className="mt-2 text-[25px] text-gray-600">
                  {current.role}
                </p>

                <p className="mt-6 text-[25px] leading-relaxed">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            drag="x"
            style={{ x }}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center px-4"
          >
            {/* IMAGE */}
            <div className="w-full h-[650px] mb-6">
              <LeaderImage
                src={current.image}
                alt={current.name}
                className="w-full h-full"
              />
            </div>

            {/* CONTENT */}
            <div className="text-center max-w-md">
              <h2 className="text-[32px] font-semibold tracking-widest mb-6">
                Founder
              </h2>
              <h3 className="text-[28px] font-semibold">{current.name}</h3>
              <p className="text-[22px] text-gray-500 mt-1">{current.role}</p>
              <p className="mt-4 text-[22px] text-gray-600">{current.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {leaders.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                x.set(0);
              }}
              className="relative h-2.5 w-2.5 rounded-full bg-gray-300"
            >
              {activeIndex === i && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute inset-0 rounded-full bg-black"
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                />
              )}
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
}
