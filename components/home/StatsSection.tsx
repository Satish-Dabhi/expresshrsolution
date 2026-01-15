"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

function CounterTS({
  from = 0,
  to,
  duration = 1.8,
  format = true,
}: {
  from?: number;
  to: number;
  duration?: number;
  format?: boolean;
}) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const triggerRef = useRef<HTMLSpanElement | null>(null);

  const motionVal = useMotionValue(from);
  const inView = useInView(triggerRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(motionVal, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        if (!nodeRef.current) return;
        const display = Math.floor(latest).toString();
        nodeRef.current.textContent = format
          ? Number(display).toLocaleString("en-IN")
          : display;
      },
    });

    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={triggerRef}>
      <span ref={nodeRef}>
        {format ? Number(from).toLocaleString("en-IN") : from}
      </span>
    </span>
  );
}

function LegendItem({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-[18px] text-[#A8A8A8] font-semibold">
          {label}
        </span>
      </div>
      <span className="text-[20px] font-semibold text-black">
        {value}
      </span>
    </div>
  );
}


export default function StatsSection() {
  return (
    <section className="w-full px-6 md:px-20 py-24 flex justify-center row">
      <div className="hidden md:block md:w-1/4"></div>
      <div className="max-w-6xl flex flex-col w-full md:w-3/4">
        <h2 className="font-[Instrument Sans] font-semibold text-[32px] md:text-[48px] leading-[1.1] text-black">
          Make data driven decisions with real time insights. We take complete
          ownership of manpower operations, compliance, and payroll management
        </h2>

        <p className="font-[Instrument Sans] text-[16px] md:text-[20px] text-[#A8A8A8] leading-6 mt-6">
          Our live attendance and efficiency insights give you control without
          daily involvement.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-12 md:gap-x-8 justify-center">
          <div>
            <p className="text-[32px] md:text-[40px] font-semibold text-black">
              <CounterTS to={15000} />+
            </p>
            <p className="mt-2 text-[18px] md:text-[24px] text-[#A8A8A8] font-semibold">
              Workforce <br /> deployed
            </p>
          </div>

          <div>
            <p className="text-[32px] md:text-[40px] font-semibold text-black">
              <CounterTS to={200} />+
            </p>
            <p className="mt-2 text-[18px] md:text-[24px] text-[#A8A8A8] font-semibold">
              Active <br /> Sites
            </p>
          </div>

          <div>
            <p className="text-[32px] md:text-[40px] font-semibold text-black">
              <CounterTS to={10} />+
            </p>
            <p className="mt-2 text-[18px] md:text-[24px] text-[#A8A8A8] font-semibold">
              Cities Served <br /> Across India
            </p>
          </div>

          <div>
            <p className="text-[32px] md:text-[40px] font-semibold text-black">
              <CounterTS to={50} />+
            </p>
            <p className="mt-2 text-[18px] md:text-[24px] text-[#A8A8A8] font-semibold">
              Corporate <br /> Clients served
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
