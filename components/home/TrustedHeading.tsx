"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function TrustedHeading() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    const fullTitle = `Trusted by industry leaders looking for real resource innovation`;
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        if (!isInView) return;

        let i = 0;
        const speed = 40; // typing speed

        const interval = setInterval(() => {
            setTypedText(fullTitle.slice(0, i));
            i++;
            if (i > fullTitle.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section ref={ref} className="w-full text-center pt-12 md:pt-[160px] pb-8">
            {/* <motion.p
                className="text-gray-400"
                style={{
                    fontFamily: "Instrument Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    marginBottom: "24px",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Trusted by Operators
            </motion.p> */}

            <h2
                className="text-black text-[32px] md:text-[48px] lg:text-[64px] "
                style={{
                    fontFamily: "Instrument Sans",
                    fontWeight: 600,
                    lineHeight: "1.15",
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                {typedText}
            </h2>
        </section>
    );
}
