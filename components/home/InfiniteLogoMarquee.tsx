"use client";

import { motion } from "framer-motion";

interface InfiniteLogoMarqueeProps {
  logos: string[]; // Array of image URLs
  speed?: number; // px per second
}

export default function InfiniteLogoMarquee({
  logos,
  speed = 50,
}: InfiniteLogoMarqueeProps) {
  if (logos.length === 0) return null;

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden w-full relative mb-15">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: (logos.length * 2 * 100) / speed, // adjust duration by speed
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 py-4"
            style={{ minWidth: "150px" }} // adjust size
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="object-contain w-full h-16 md:h-20"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
