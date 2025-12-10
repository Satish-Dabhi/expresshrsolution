"use client";

import { motion } from "framer-motion";

export default function ReadyToMove() {
  return (
    <section className="w-full pb-20 md:pb-28 px-6 md:px-0 flex justify-start">
      <h2
        className="
          font-semibold text-black
          text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px]
          flex items-center flex-wrap
          leading-tight
        "
      >
        Ready to m

        {/* FIXED OUTER O SHAPE */}
        <div
          className="
            relative overflow-hidden
            h-[0.65em] w-[3.5em]
            border-[3px] border-orange-500
            rounded-full mx-2
            inline-flex items-center
          "
        >
          {/* MOVING INNER O */}
          <motion.div
            className="h-[0.55em] w-[0.55em] border-[3px] border-orange-500 rounded-full absolute"
            animate={{ x: ["0%", "510%", "0%"] }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
        ve smarter?
      </h2>
    </section>
  );
}
