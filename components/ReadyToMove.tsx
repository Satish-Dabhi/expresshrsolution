"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ReadyToMove() {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size on mount and on resize
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect when section enters viewport
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px",
  });

  // Animation values based on screen size
  const orangeFillDuration = 4.8;
  const orangeFillWidth = "100%";

  // Dot x movement for mobile and desktop
  const dotX = isDesktop ? "1510%" : "1510%"; // Smaller move on mobile

  return (
    <section
      ref={ref}
      className="w-full pb-20 md:pb-28 px-6 md:px-0 flex justify-start"
    >
      <h2
        className="
          font-semibold text-black
          text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px]
          leading-tight
          flex flex-wrap
          items-center
        "
      >
        {/* First line: 'Ready to' always */}
        <span className="w-full md:w-auto">Ready to</span>

        {/* Second line on mobile, inline on desktop */}
        <span className="flex w-full md:inline-flex md:w-auto items-center my-1 md:my-0 mx-0 md:mx-2">
          {/* Text before animated shape */}
          <span>m</span>

          {/* Animated shape */}
          <div
            className="
              relative
              overflow-hidden
              h-[0.65em] w-[9em]
              border-[3px] border-orange-500
              rounded-full mx-2
              inline-flex items-center
            "
          >
            {/* Orange fill */}
            <motion.div
              className="absolute left-0 top-0 h-full bg-orange-500 z-[1]"
              initial={{ width: "0%" }}
              animate={isInView ? { width: orangeFillWidth } : { width: "0%" }}
              transition={{
                duration: orangeFillDuration,
                ease: "easeInOut",
              }}
            />

            {/* Moving dot */}
            <motion.div
              className="
                h-[0.55em] w-[0.55em] 
                border-[3px] border-black
                rounded-full absolute 
                z-[2]
              "
              style={{ backgroundColor: "white" }}
              initial={{ x: "0%" }}
              animate={isInView ? { x: dotX } : { x: "0%" }}
              transition={{
                duration: orangeFillDuration,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Text after animated shape */}
          <span>ve</span>
        </span>

        {/* Third line always */}
        <span className="w-full md:w-auto ml-0 md:ml-2">smarter?</span>
      </h2>
    </section>
  );
}
