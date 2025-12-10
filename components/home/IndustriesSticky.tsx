"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IndustryItem {
  title: string;
  points: string[];
  image: string;
}

interface IndustriesStickyProps {
  items: IndustryItem[];
}

export default function IndustriesSticky({ items }: IndustriesStickyProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate list to create infinite loop
  const loopItems = [...items, ...items, ...items];

  // Detect centered card
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = Array.from(container.children);
      let minDiff = Infinity;
      let current = 0;

      children.forEach((child, i) => {
        const box = (child as HTMLElement).getBoundingClientRect();
        const diff = Math.abs(box.left + box.width / 2 - window.innerWidth * 0.5);
        if (diff < minDiff) {
          minDiff = diff;
          current = i % items.length;
        }
      });

      setActiveIndex(current);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [items]);

  // DRAG-TO-SCROLL (desktop)
useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const onMouseDown = (e: MouseEvent) => {
    isDown = true;
    container.classList.add("dragging");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
    container.classList.remove("dragging");
  };

  const onMouseUp = () => {
    isDown = false;
    container.classList.remove("dragging");
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.4; // drag speed
    container.scrollLeft = scrollLeft - walk;
  };

  container.addEventListener("mousedown", onMouseDown);
  container.addEventListener("mouseleave", onMouseLeave);
  container.addEventListener("mouseup", onMouseUp);
  container.addEventListener("mousemove", onMouseMove);

  return () => {
    container.removeEventListener("mousedown", onMouseDown);
    container.removeEventListener("mouseleave", onMouseLeave);
    container.removeEventListener("mouseup", onMouseUp);
    container.removeEventListener("mousemove", onMouseMove);
  };
}, []);


  return (
    <section className="w-full py-10 md:py-16 flex flex-col md:flex-row gap-10 px-4 md:px-20">

      {/* FIXED LEFT IMAGE */}
      <div className="rounded-xl overflow-hidden relative" style={{
        width: "clamp(260px, 70vw, 519px)", height: "clamp(340px, 80vw, 598px)",
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"

          >
            <Image
              src={items[activeIndex].image}
              alt="industry-image"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* INFINITE SCROLL CARDS */}
      <div
        ref={scrollRef}
        className="
          flex gap-6 md:gap-8 
          overflow-x-auto no-scrollbar
          snap-x snap-mandatory
          md:w-[60%]
          min-w-0
          pb-8
          select-none cursor-grab
        "
        style={{ scrollBehavior: "smooth" }}
      >
        {loopItems.map((item, index) => (
          <div
            key={index}
            className="
            bg-white border border-neutral-200 
            shadow-sm rounded-xl flex-shrink-0
            p-6 md:p-10
            flex flex-col justify-end
          "
            style={{
              width: "clamp(260px, 70vw, 519px)", height: "clamp(340px, 80vw, 598px)",
            }}
          >
            <h3
              className="text-black mb-4"
              style={{
                fontFamily: "Instrument Sans",
                fontWeight: 600,
                fontSize: "clamp(26px, 5vw, 40px)",
                lineHeight: "110%",
              }}
            >
              {item.title}
            </h3>

            <ul className="space-y-3">
              {item.points.map((p, i) => (
                <li
                  key={i}
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
            </ul>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar {
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
