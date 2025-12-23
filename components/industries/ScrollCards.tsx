"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------------- TYPES ---------------- */

interface CardData {
  title: string;
  image: string;
  painPoints: string[];
  solutions: {
    label: string;
    description: string;
  }[];
  outcome: string;
}

/* ---------------- DATA ---------------- */

const cards: CardData[] = [
  {
    title: "FMCG & Food",
    image: "/videos/warehouse.gif",
    painPoints: [
      "Expired or near-expiry stock reaching market",
      "Missed delivery timelines impacting distribution confidence",
      "Poor inventory visibility across high-volume SKUs",
      "FIFO failures at warehouse and dispatch level",
    ],
    solutions: [
      {
        label: "Expiry Control Audits",
        description:
          "Mandatory expiry checks at inbound, storage, and dispatch stages to ensure expired material is never delivered.",
      },
      {
        label: "Operational Discipline",
        description:
          "Structured shift planning and dispatch readiness to ensure consistent on-time deliveries.",
      },
      {
        label: "Inventory Lifecycle Audits",
        description:
          "Regular stock ageing and movement audits to maintain full inventory lifecycle control.",
      },
      {
        label: "Strategic FIFO Staging",
        description:
          "Dedicated FIFO and Best-before-Date zones for accurate material rotation and freshness compliance.",
      },
    ],
    outcome:
      "Reduced expiry losses, higher fill rates, and predictable store replenishment.",
  },
  {
    title: "Retail & Lifestyle",
    image: "/videos/warehouse.gif",
    painPoints: [
      "High manpower attrition across stores and malls",
      "Inconsistent service quality impacting brand experience",
      "Delayed issue resolution at store level",
    ],
    solutions: [
      {
        label: "Targeted Hiring Models",
        description:
          "Manpower sourcing through local networks and social platforms to ensure faster, location-fit hiring.",
      },
      {
        label: "Manpower Sustainability Programs",
        description:
          "Recognition & rewards (R&R), engagement activities, and structured celebrations to improve retention.",
      },
      {
        label: "Real-Time Issue Resolution",
        description:
          "Defined escalation matrices and rapid response protocols for store-level manpower issues.",
      },
    ],
    outcome:
      "Stable staffing, improved in-store experience, and higher customer satisfaction.",
  },
  {
    title: "E-Commerce & Q-Commerce",
    image: "/videos/warehouse.gif",
    painPoints: [
      "Stock unavailable due to poor assortment planning",
      "Over-commitment on delivery timelines without rider availability",
      "Product quality issues due to handling and packaging lapses",
    ],
    solutions: [
      {
        label: "Area-wise Assorted Mapping",
        description:
          "Inventory planning based on location-specific demand patterns to reduce stock-outs.",
      },
      {
        label: "Commitment-Based Delivery Planning",
        description:
          "Delivery promises aligned strictly with available workforce strength to avoid service failures.",
      },
      {
        label: "Quality Control at Source",
        description:
          "Material quality checks and neat, clean packaging standards before dispatch.",
      },
    ],
    outcome:
      "Higher order fulfilment, fewer cancellations, and consistent delivery performance.",
  },
  {
    title: "Pharma & Healthcare",
    image: "/videos/warehouse.gif",
    painPoints: [
      "Risk of contamination or handling errors",
      "Strict compliance and document requirements",
      "Zero tolerance for delivery delays",
    ],
    solutions: [
      {
        label: "Trained & Controlled Workforce",
        description:
          "Dedicated teams trained for pharma-grade handling protocols.",
      },
      {
        label: "Process-Led Operations",
        description:
          "Clear SOPs for material movement, hygiene and documentation.",
      },
      {
        label: "Time-Critical Execution",
        description:
          "Shift planning and dispatch controls to meet strict delivery timelines.",
      },
    ],
    outcome:
      "Safe handling, audit-ready operations, and uninterrupted healthcare supply chains.",
  },
  {
    title: "Manufacturing & Packaging",
    image: "/videos/warehouse.gif",
    painPoints: [
      "Unavailability of skilled manpower during peak cycles",
      "Production delays due to raw material mismanagement",
    ],
    solutions: [
      {
        label: "Skilled Workforce Pooling/migrants",
        description:
          "Ready to deploy trained manpower for production, packing, and material handling.",
      },
      {
        label: "Inbound Material Coordination",
        description:
          "Structured unloading, staging, and internal movement to keep production lines uninterrupted.",
      },
    ],
    outcome:
      "Higher line efficiency, reduces downtime, and predictable production flow.",
  },
  {
    title: "Port, Rail & Industrial Infrastructure",
    image: "/videos/warehouse.gif",
    painPoints: [
      "Delays in rake unloading impacting downstream supply chains",
      "Safety risk in high-volume industrial environments",
      "Coordination challenges across multiple stakeholders",
    ],
    solutions: [
      {
        label: "Bulk & Rake Handling Expertise",
        description:
          "Experienced teams for high-volume train unloading and industrial material movement.",
      },
      {
        label: "Safety-First Execution",
        description:
          "PPE enforcement, site supervision, and shift-wise control.",
      },
      {
        label: "On-Ground Coordination",
        description:
          "Structured workforce deployment aligned with site timelines and operational plans.",
      },
    ],
    outcome:
      "Faster turnaround times, safer sites, and smooth industrial operations.",
  },
];

const CARD_WIDTH = 650;
const GAP = 24;

/* ---------------- COMPONENT ---------------- */

export default function ScrollCards() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mobileViewportRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Separate heights for desktop and mobile
  const [desktopCardHeight, setDesktopCardHeight] = useState<number | null>(
    null
  );
  const [mobileCardHeight, setMobileCardHeight] = useState<number | null>(null);

  /* ---------------- RESPONSIVE ---------------- */

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!mobileViewportRef.current) return;
    const update = () =>
      setViewportWidth(mobileViewportRef.current?.offsetWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile]);

  /* ---------------- DESKTOP SCROLL ---------------- */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalSteps = Math.max(cards.length - 2, 0);
  const maxX = totalSteps * (CARD_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  useEffect(() => {
    if (isMobile) return;
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = Math.round(v * totalSteps);
      setActiveIndex(idx);
    });
    return () => unsub();
  }, [scrollYProgress, totalSteps, isMobile]);

  // Refs for measuring card heights
  const desktopRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Measure desktop card heights
  useEffect(() => {
    if (isMobile) return;
    const heights = desktopRefs.current
      .filter((el): el is HTMLDivElement => el !== null)
      .map((el) => el.getBoundingClientRect().height);
    if (heights.length) setDesktopCardHeight(Math.max(...heights));
  }, [isMobile]);

  // Measure mobile card heights
  useEffect(() => {
    if (!isMobile) return;
    const heights = mobileRefs.current
      .filter((el): el is HTMLDivElement => el !== null)
      .map((el) => el.getBoundingClientRect().height);
    if (heights.length) setMobileCardHeight(Math.max(...heights));
  }, [isMobile, viewportWidth]);

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* STICKY */}
      <div className="md:sticky md:top-0 md:h-screen flex items-center">
        <div className="mx-auto w-full max-w-[1400px] px-4">
          {/* DESKTOP */}
          {!isMobile && (
            <div className="overflow-hidden">
              <div
                className="mx-auto overflow-hidden py-4"
                style={{ width: `${CARD_WIDTH * 2 + GAP}px` }}
              >
                <motion.div
                  style={{ x }}
                  className="flex gap-[24px] will-change-transform"
                >
                  {cards.map((card, i) => (
                    <DesktopCard
                      key={card.title}
                      card={card}
                      height={desktopCardHeight}
                      refCallback={(el) => {
                        desktopRefs.current[i] = el;
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          )}

          {/* MOBILE */}
          {isMobile && (
            <div ref={mobileViewportRef} className="overflow-hidden w-full">
              <motion.div
                className="flex"
                drag="x"
                dragConstraints={{
                  left: -(cards.length - 1) * viewportWidth,
                  right: 0,
                }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  const swipeThreshold = viewportWidth / 4;
                  if (
                    info.offset.x < -swipeThreshold &&
                    activeIndex < cards.length - 1
                  ) {
                    setActiveIndex((i) => i + 1);
                  } else if (
                    info.offset.x > swipeThreshold &&
                    activeIndex > 0
                  ) {
                    setActiveIndex((i) => i - 1);
                  }
                }}
                animate={{ x: -activeIndex * viewportWidth }}
                transition={{ type: "spring", stiffness: 160, damping: 28 }}
              >
                {cards.map((card, i) => (
                  <div
                    key={card.title}
                    className="flex-shrink-0 px-4"
                    style={{
                      width: viewportWidth,
                      height: mobileCardHeight ?? "auto",
                    }}
                  >
                    <MobileCard
                      card={card}
                      active={i === activeIndex}
                      refCallback={(el) => {
                        mobileRefs.current[i] = el;
                      }}
                    />
                  </div>
                ))}
              </motion.div>

              {/* DOTS */}
              <div className="mt-6 flex justify-center gap-2">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === i ? "w-6 bg-black" : "w-2 bg-black/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SCROLL SPACER: only scroll as many steps as cards - 2 */}
      {!isMobile && <div style={{ height: `${totalSteps * 100}vh` }} />}
    </section>
  );
}

/* ---------------- DESKTOP CARD ---------------- */

function DesktopCard({
  card,
  height,
  refCallback,
}: {
  card: CardData;
  height: number | null;
  refCallback: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={refCallback}
      className="rounded-2xl overflow-hidden bg-white shadow-lg flex-shrink-0 flex flex-col"
      style={{
        width: CARD_WIDTH,
        height: height ?? "auto",
        maxHeight: "90vh",
      }}
    >
      <div className="relative h-[200px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          unoptimized
        />
        <h3 className="absolute bottom-4 left-4 text-white text-[32px] md:text-[48px] font-semibold">
          {card.title}
        </h3>
      </div>

      <div className="p-6 space-y-5">
        <div>
          <h4 className="font-semibold mb-2">Pain Points</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            {card.painPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Our Solutions</h4>
          <ul className="space-y-2 text-sm">
            {card.solutions.map((s, i) => (
              <li key={i}>
                <span className="font-semibold">{s.label}:</span>{" "}
                <span className="text-gray-600">{s.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-orange-600 mb-1">Outcome</h4>
          <p className="text-sm text-gray-600">{card.outcome}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MOBILE CARD ---------------- */

function MobileCard({
  card,
  active,
  refCallback,
}: {
  card: CardData;
  active: boolean;
  refCallback: (el: HTMLDivElement | null) => void;
}) {
  return (
    <motion.div
      ref={refCallback}
      className={`rounded-2xl bg-white shadow-lg flex flex-col transition-all ${
        active ? "scale-[1.02]" : "opacity-70"
      }`}
    >
      <div className="relative h-[260px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h3 className="absolute bottom-4 left-4 right-4 text-white text-[26px] font-semibold">
          {card.title}
        </h3>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h4 className="font-semibold mb-1">Pain Points</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {card.painPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Our Solutions</h4>
          <ul className="space-y-1 text-sm">
            {card.solutions.map((s, i) => (
              <li key={i}>
                <span className="font-semibold">{s.label}:</span>{" "}
                <span className="text-gray-600">{s.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-orange-600">Outcome</h4>
          <p className="text-sm text-gray-600">{card.outcome}</p>
        </div>
      </div>
    </motion.div>
  );
}
