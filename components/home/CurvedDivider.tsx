"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CurvedDividerScrollFixed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const distance = useTransform(scrollYProgress, [0, 1], [0, pathLength]);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    return distance.on("change", (d) => {
      if (!pathRef.current) return;
      const p = pathRef.current.getPointAtLength(d);
      setPos({ x: p.x, y: p.y });
    });
  }, [distance]);

  return (
    <div ref={containerRef} className="relative w-full pt-32">
      {/* === SVG Wrapper === */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 1400 200"
          className="w-full h-auto"
        >
          {/* Path */}
          <path
            ref={pathRef}
            d="M0 50 H850 C950 50, 1000 150, 1100 150 L1400 150"
            stroke="#E5E5E5"
            strokeWidth="2"
            fill="none"
          />

          {/* Glow Definition */}
          <defs>
            <radialGradient id="orangeGlow">
              <stop offset="0%" stopColor="#F97316" stopOpacity="1" />
              <stop offset="60%" stopColor="#F97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Moving Ellipse INSIDE THE SAME SVG */}
          <motion.ellipse
            cx={pos.x}
            cy={pos.y}
            rx="40"
            ry="14"
            fill="url(#orangeGlow)"
          />
        </svg>
      </div>
    </div>
  );
}
