"use client";

import { motion } from "framer-motion";

export default function AnimatedCTA() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.6 },
        },
      }}
      className="flex flex-col items-center text-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        We Express HR Solutions Will Assist You 24/7
      </h2>
      <a
        href="tel:022-27898875"
        className="inline-block bg-primary text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
      >
        022-27898875
      </a>
    </motion.div>
  );
}
