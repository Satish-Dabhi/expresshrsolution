"use client";

import { motion } from "framer-motion";

const values = ["Integrity", "Safety", "Transparency", "Impact", "Innovation"];

export default function CoreValues() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[32px] md:text-[48px] lg:text-[64px] font-bold"
        >
          Core Values
        </motion.h2>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-8 flex flex-wrap justify-center gap-x-2 gap-y-2 text-gray-700 text-base md:text-lg"
        >
          {values.map((value, index) => (
            <motion.span
              key={value}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="flex items-center text-[15px] md:text-[25px]"
            >
              {value}
              {index !== values.length - 1 && <span className="mx-3 text-[15px] md:text-[25px]">·</span>}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
