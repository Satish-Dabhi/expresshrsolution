"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MobileCarousel } from "./MobileCarousel";

type Item = {
  title: string;
  image: string;
  services: string[];
  outcome: string[];
};

export default function StickyScrollSection({ items }: { items: Item[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const index = useTransform(
    scrollYProgress,
    items.map((_, i) => i / items.length),
    items.map((_, i) => i)
  );

  useEffect(() => {
    const unsub = index.on("change", (latest) => {
      setActiveIndex(Math.min(items.length - 1, Math.round(latest)));
    });
    return () => unsub();
  }, [index, items.length]);

  const activeItem = items[activeIndex];

  return (
    <>
      <section
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: `${items.length * 100}vh` }}
      >
        {/* IMAGE (80vh) */}
        <div className="sticky top-0 h-[65vh] w-full overflow-hidden">
          <motion.div
            key={activeItem.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="relative h-full w-full"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-8 max-w-[1400px] flex items-end">
              {/* <motion.h3
                key={activeItem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white font-semibold max-w-[60%] text-[24px] md:text-[40px] mr-5"
              >
                0{activeIndex + 1}
              </motion.h3> */}
              <motion.h2
                key={activeItem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white font-semibold max-w-[100%] text-[24px] md:text-[48px]"
              >
                0{activeIndex + 1}. {activeItem.title}
              </motion.h2>
            </div>
          </motion.div>
        </div>

        {/* SERVICES + OUTCOME (25vh) */}
        <div className="sticky top-[65vh] h-[35vh] bg-white">
          <div className="mx-auto w-full max-w-[1400px] px-8 h-full flex justify-between items-start gap-16 pt-6">
            {/* Services */}
            <motion.div
              key={`services-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="mb-3"
                style={{
                  fontFamily: "Instrument Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "1.3",
                  color: "#AFAFAF",
                }}
              >
                SERVICES:
              </h3>
              <ul className="space-y-2 text-black">
                {activeItem.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex gap-2"
                    style={{
                      fontFamily: "Instrument Sans",
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "1.1",
                    }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outcome */}
            <motion.div
              key={`outcome-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3
                className="mb-3"
                style={{
                  fontFamily: "Instrument Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "1.3",
                  color: "#AFAFAF",
                }}
              >
                OUTCOME:
              </h3>
              <ul className="space-y-2 text-black">
                {activeItem.outcome.map((result, i) => (
                  <li
                    key={i}
                    className="flex gap-2"
                    style={{
                      fontFamily: "Instrument Sans",
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "1.1",
                    }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" />
                    {result}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* MOBILE */}
      </section>
      <MobileCarousel items={items} />
    </>
  );
}
