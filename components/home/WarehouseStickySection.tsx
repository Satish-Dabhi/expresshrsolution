"use client";

import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    label: "WAREHOUSE",
    title: ["Inventory accuracy,", "pallet movement,", "dock coordination"],
    gif: "/videos/warehouse.gif",
    color: "orange",
  },
  {
    label: "WORKFORCE",
    title: ["Skilled deployment", "across 3PL/4PL", "environments"],
    gif: "/videos/WORKFORCE.gif",
    color: "orange",
  },
  {
    label: "FACILITY",
    title: ["Safe, clean, efficient", "industrial spaces"],
    gif: "/videos/FACILITY.gif",
    color: "orange",
  },
  {
    label: "GOVERNANCE",
    title: ["Compliance, audits,", "transparency & MIS"],
    gif: "/videos/GOVERNANCE.gif",
    color: "orange",
  },
];

export default function WarehouseStickySection() {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  // detect mobile
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      setDragWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, [carouselRef.current]);

  // desktop scroll tracking
  useEffect(() => {
    if (isMobile) return;

    const handler = () => {
      const targetY = window.innerHeight * 0.65; // LOWER so card never jumps up

      const distances = stepsRef.current.map((el) => {
        const rect = el.getBoundingClientRect();

        // prevent negative snap on last card
        if (rect.top < 0 && stepsRef.current.indexOf(el) === items.length - 1) {
          return 999999; // keep last card at its position
        }

        return Math.abs(rect.top - targetY);
      });

      const closest = distances.indexOf(Math.min(...distances));
      setActive(closest);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [isMobile]);

  // drag ending detection

  useEffect(() => {
    if (!carouselRef.current) return;

    const el = carouselRef.current;
    setDragWidth(el.scrollWidth - el.offsetWidth);
  }, [items]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const slideWidth = carouselRef.current?.offsetWidth ?? 0;

    if (info.offset.x < -slideWidth / 4 && active < items.length - 1) {
      setActive((prev) => prev + 1);
    }

    if (info.offset.x > slideWidth / 4 && active > 0) {
      setActive((prev) => prev - 1);
    }
  };

  return (
    <section className="relative w-full bg-[rgba(217,217,217,0.2)]">
      {/* 1400px container */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-0 relative">
        {/* ================= MOBILE ================= */}
        {isMobile && (
          <div className="w-full pb-10 flex flex-col gap-10">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col gap-6">
                {/* IMAGE */}
                <div className="w-full h-[320px] rounded-xl overflow-hidden relative bg-white">
                  <motion.div
                    initial={{ opacity: 0.5, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.gif}
                      alt={item.label}
                      fill
                      className="object-cover"
                      unoptimized
                    />

                    <div
                      className="absolute inset-0 mix-blend-multiply"
                      style={{
                        background:
                          item.color === "orange"
                            ? "rgba(255,124,54,0.65)"
                            : "rgba(0,0,0,0.25)",
                      }}
                    />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="p-6 bg-white rounded-xl shadow-sm"
                >
                  <span
                    className="block mb-4"
                    style={{
                      fontFamily: "Instrument Sans",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "1.3",
                      color: "#AFAFAF",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {item.label}
                  </span>

                  <h3
                    className="text-black"
                    style={{
                      fontFamily: "Instrument Sans",
                      fontWeight: 600,
                      fontSize: "26px",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.title.map((t, j) => (
                      <span key={j}>
                        {t}
                        <br />
                      </span>
                    ))}
                  </h3>
                </motion.div>
              </div>
            ))}
          </div>
        )}

        {/* ================= DESKTOP (unchanged) ================= */}
        {!isMobile && (
          <>
            {/* sticky desktop layout */}
            <div className="py-10 md:sticky md:top-0 md:h-screen flex gap-10">
              <div className="w-1/2 bg-white rounded-xl p-10 flex items-center">
                <motion.div
                  key={active}
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                  }}
                >
                  <span
                    className="tracking-widest"
                    style={{
                      fontFamily: "Instrument Sans",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "1.3",
                      color: "#AFAFAF",
                    }}
                  >
                    {items[active].label}
                  </span>

                  <div className="mt-3">
                    {items[active].title.map((t, j) => (
                      <motion.p
                        key={j}
                        variants={{
                          hidden: { opacity: 0, y: 28 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 1.55,
                              ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
                            },
                          },
                        }}
                        className="font-semibold leading-tight text-black"
                        style={{
                          fontFamily: "Instrument Sans",
                          fontWeight: 600,
                          fontSize: "36px",
                          lineHeight: "1.3",
                        }}
                      >
                        {t}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="w-1/2 relative rounded-xl overflow-hidden bg-white">
                <motion.div
                  key={active}
                  initial={{ opacity: 0.4, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={items[active].gif}
                    alt="desktop-gif"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 mix-blend-multiply bg-[rgba(255,124,54,0.75)]" />
                </motion.div>
              </div>
            </div>

            <div className="h-[300vh]">
              {items.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    stepsRef.current[i] = el!;
                  }}
                  className="h-screen"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
