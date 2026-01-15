"use client";

import {
  AnimatePresence,
  motion,
  PanInfo,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export type StickySectionItem = {
  title: string;
  image: string;
  services: string[];
  outcome: string[];
};

export function MobileCarousel({ items }: { items: StickySectionItem[] }) {
  const [active, setActive] = useState(0);

  const x = useMotionValue(0);
  const swipeThreshold = 100;

  const current = items[active];

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -swipeThreshold && active < items.length - 1) {
      setActive((v) => v + 1);
    } else if (info.offset.x > swipeThreshold && active > 0) {
      setActive((v) => v - 1);
    }

    x.set(0);
  };

  return (
    <div className="lg:hidden overflow-hidden">
      {/* IMAGE (SYNCED) */}
      <div className="relative h-64 w-full mb-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            style={{ x }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT (DRAG SOURCE) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 touch-pan-y"
        >
          <h3 className="text-xl font-semibold mb-4">{current.title}</h3>

          <p className="font-medium mb-2">Services</p>
          <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
            {current.services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <p className="font-medium mb-2">Outcome</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            {current.outcome.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="flex justify-center gap-2 my-6">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setActive(i);
              x.set(0);
            }}
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
