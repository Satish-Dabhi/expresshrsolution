"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ReadyToMove() {
  const ref = useRef(null);

  // Detect when section enters viewport
  const isInView = useInView(ref, {
    once: true,        // 🔥 Runs only 1 time
    margin: "-20% 0px", // start animation slightly before fully visible
  });

  return (
    <section
      ref={ref}
      className="w-full pb-20 md:pb-28 px-6 md:px-0 flex justify-start"
    >
      <h2
        className="
          font-semibold text-black
          text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px]
          flex items-center flex-wrap
          leading-tight
        "
      >
        Ready to m

        {/* OUTER SHAPE */}
        <div
          className="
            relative 
            overflow-hidden
            h-[0.65em] w-[3.5em]
            border-[3px] border-orange-500
            rounded-full mx-2
            inline-flex items-center
          "
        >
          {/* ORANGE FILL (Starts only when in view) */}
          <motion.div
            className="absolute left-0 top-0 h-full bg-orange-500 z-[1]"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
          />

          {/* MOVING DOT (Starts only when in view) */}
          <motion.div
            className="
              h-[0.55em] w-[0.55em] 
              border-[3px] border-black
              rounded-full absolute 
              z-[2]
            "
            style={{ backgroundColor: "white" }}
            initial={{ x: "0%" }}
            animate={isInView ? { x: "510%" } : { x: "0%" }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
          />
        </div>

        ve smarter?
      </h2>
    </section>
  );
}
