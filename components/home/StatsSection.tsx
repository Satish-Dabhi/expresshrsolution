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

    // start value stored in a motion value
    const motionVal = useMotionValue(from);

    // watch visibility (start animation once when visible)
    const inView = useInView(triggerRef, { once: true, margin: "0px 0px -10% 0px" });

    useEffect(() => {
        if (!inView) return;

        const controls = animate(motionVal, to, {
            duration,
            ease: [0.22, 1, 0.36, 1], // smooth ease-out
            onUpdate(latest) {
                if (!nodeRef.current) return;

                const display = Math.floor(latest).toString();
                nodeRef.current.textContent = format
                    ? Number(display).toLocaleString("en-IN")
                    : display;
            },
        });

        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, to]);

    // initial render text = from
    return (
        // triggerRef is used by useInView; nodeRef is the span we update
        <span ref={triggerRef}>
            <span ref={nodeRef}>{format ? Number(from).toLocaleString("en-IN") : from}</span>
        </span>
    );
}

function motionHeading() {
    // keep normal import-free simple heading with motion like you already used elsewhere
    // Putting a plain element here keeps the example self-contained; you can replace with motion.* if needed
    return (
        <>
            <h2 className="font-[Instrument Sans] font-semibold text-[32px] md:text-[48px] leading-[1.1] text-black max-w-3xl">
                Make data driven decisions with real time insights and ensure every reward aligns with your business objectives.
            </h2>

            <p className="font-[Instrument Sans] text-[16px] md:text-[20px] text-gray-500 leading-6 mt-6 max-w-2xl">
                Gone are the days of complex spreadsheets and manual processes. Simplify compensation planning with a single platform that puts you in control of every decision.
            </p>
        </>
    );
}


export default function StatsSection() {
    return (
        <section className="w-full px-6 md:px-20 py-24">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-[30%_70%]">
                {/* LEFT BLANK SPACE (desktop only) */}
                <div className="hidden lg:block" />

                {/* RIGHT CONTENT */}
                <div>
                    <h2 className="font-[Instrument Sans] font-semibold text-[32px] md:text-[48px] leading-[1.1] text-black max-w-3xl">
                        Make data driven decisions with real time insights and ensure every reward aligns with your business objectives.
                    </h2>

                    <p className="font-[Instrument Sans] text-[16px] md:text-[20px] text-gray-500 leading-6 mt-6 max-w-2xl">
                        Gone are the days of complex spreadsheets and manual processes. Simplify compensation planning with a single platform that puts you in control of every decision.
                    </p>
                    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-12 md:gap-x-0">
                        {/* 1 */}
                        <div>
                            <p className="text-[32px] md:text-[40px] font-semibold text-black">
                                <CounterTS to={15000} />+
                            </p>
                            <p className="mt-2 text-[14px] text-gray-500 leading-5">Workforce <br /> deployed</p>
                        </div>

                        {/* 2 */}
                        <div>
                            <p className="text-[32px] md:text-[40px] font-semibold text-black">
                                <CounterTS to={200} />
                                +
                            </p>
                            <p className="mt-2 text-[14px] text-gray-500 leading-5">Active <br /> Sites</p>
                        </div>

                        {/* 3 */}
                        <div>
                            <p className="text-[32px] md:text-[40px] font-semibold text-black">
                                <CounterTS to={10} />
                                +
                            </p>
                            <p className="mt-2 text-[14px] text-gray-500 leading-5">
                                Presence <br /> in Cities <br /> PAN India
                            </p>
                        </div>

                        {/* 4 */}
                        <div>
                            <p className="text-[32px] md:text-[40px] font-semibold text-black">
                                <CounterTS to={50} />
                                +
                            </p>
                            <p className="mt-2 text-[14px] text-gray-500 leading-5">
                                Corporate <br /> Clients served
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
