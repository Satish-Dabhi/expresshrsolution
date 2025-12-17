"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type StickySectionItem = {
  title: string;
  image: string;
  services: string[];
  outcome: string[];
};

export function MobileCarousel({ items }: { items: StickySectionItem[] }) {
  const [active, setActive] = useState(0);

  const current = items[active];

  return (
    <div className="lg:hidden">
      {/* IMAGE */}
      <div className="relative h-64 w-full mb-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="px-4"
        >
          {/* Title */}
          <motion.h3
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-xl font-semibold mb-4"
          >
            {current.title}
          </motion.h3>

          {/* Services */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-medium mb-2">Services</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
              {current.services.map((s, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Outcome */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-medium mb-2">Outcome</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {current.outcome.map((o, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {o}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="flex justify-center gap-2 my-6">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="relative h-2 w-2 rounded-full bg-gray-300"
          >
            {active === i && (
              <motion.span
                layoutId="active-dot"
                className="absolute inset-0 rounded-full bg-black"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
