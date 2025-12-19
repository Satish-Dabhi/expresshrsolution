"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FlipkartBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#d9d9d93b] mt-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto w-full max-w-[1400px] py-12 px-4 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6 md:mb-0 md:justify-start"
        >
          <Image
            src="/images/flipkart-logo.png"
            alt="Flipkart"
            width={432}
            height={114}
            className="object-contain w-[200px] sm:w-[300px] md:w-[432px] h-auto"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center md:text-right max-w-md"
        >
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed">
            We support companies in Food, Pharma, Retail, and Manufacturing with
            Tailored Logistics.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
