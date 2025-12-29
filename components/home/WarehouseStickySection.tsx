"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    label: "WAREHOUSE",
    title: ["Inventory accuracy,", "pallet movement,", "dock coordination"],
    gif: "/videos/home/WAREHOUSE.mp4",
    color: "orange",
  },
  {
    label: "WORKFORCE",
    title: ["Skilled deployment", "across 3PL/4PL", "environments"],
    gif: "/videos/home/WORKFORCE.mp4",
    color: "orange",
  },
  {
    label: "FACILITY",
    title: ["Safe, clean, efficient", "industrial spaces"],
    gif: "/videos/home/FACILITY.mp4",
    color: "orange",
  },
  {
    label: "GOVERNANCE",
    title: ["Compliance, audits,", "transparency & MIS"],
    gif: "/videos/home/GOVERNANCE.mp4",
    color: "orange",
  },
];

export default function WarehouseStickySection() {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
                <div className="w-full h-[400px] rounded-xl overflow-hidden relative bg-white">
                  <motion.div
                    initial={{ opacity: 0.5, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <video
                      src={item.gif}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>

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
                  <video
                    src={items[active].gif}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
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
