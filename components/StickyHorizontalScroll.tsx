"use client";

import { useRef, useEffect, useState } from "react";

export default function StickyHorizontalScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [stickyWidth, setStickyWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    const cardsWidth = sticky.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = cardsWidth - viewportWidth;

    setStickyWidth(scrollDistance);

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const start = rect.top;
      const end = rect.bottom - window.innerHeight;

      if (start <= 0 && end >= 0) {
        const progress = start / end;
        const moveX = progress * scrollDistance;
        sticky.style.transform = `translateX(${-moveX}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full bg-black"
    >
      {/* sticky row */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex items-center gap-10 px-20 will-change-transform"
        style={{ width: "fit-content" }}
      >
        {children}
      </div>
    </div>
  );
}
