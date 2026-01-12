"use client";

import { motion } from "framer-motion";

interface LogoMarqueeProps {
  logos: string[];
  height?: string; // optional, default height of logos
}

export default function InfiniteLogoMarquee({ logos, height = "h-20" }: LogoMarqueeProps) {
  // Duplicate logos array for seamless infinite scroll
  const logosLoop = [...logos, ...logos];

  return (
    <div className={`overflow-hidden relative w-full ${height} bg-white mb-15`}>
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: logos.length * 2, // adjust speed: more logos = slower
          ease: "linear",
        }}
      >
        {logosLoop.map((logo, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 flex items-center justify-center ${height}`}
            style={{ width: "200px" }} // adjust logo width if needed
          >
            <img
              src={logo}
              alt={`Logo ${idx}`}
              className="object-contain max-h-full max-w-full grayscale"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
