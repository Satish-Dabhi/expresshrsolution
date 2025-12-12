"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface AnimatedImageSectionProps {
    image: string;
    title: string;
    subtitle?: string;
    titleSpeed?: number;
    height?: string;
}

export default function AnimatedImageSection({
    image,
    title,
    subtitle,
    titleSpeed = 145,
    height = "850px",
}: AnimatedImageSectionProps) {

    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const [typedTitle, setTypedTitle] = useState("");
    const [shouldAnimate, setShouldAnimate] = useState(false);

    /* ------------------------------------------------------------------
        1) Start animation ONLY when section enters viewport
    ------------------------------------------------------------------ */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldAnimate(true);
                    observer.disconnect(); // run only once
                }
            },
            { threshold: 0.4 } // fire when 40% visible
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    /* ------------------------------------------------------------------
        2) TYPEWRITER EFFECT (only after shouldAnimate = true)
    ------------------------------------------------------------------ */
    useEffect(() => {
        if (!shouldAnimate) return;

        let i = 0;
        const interval = setInterval(() => {
            setTypedTitle(title.slice(0, i));
            i++;
            if (i > title.length) clearInterval(interval);
        }, titleSpeed);

        return () => clearInterval(interval);
    }, [shouldAnimate, title, titleSpeed]);

    /* ------------------------------------------------------------------
        3) Trigger Framer Motion animation when visible
    ------------------------------------------------------------------ */
    useEffect(() => {
        if (shouldAnimate) {
            controls.start("animate");
        }
    }, [shouldAnimate, controls]);

    return (
        <section
            ref={ref}
            className="w-full max-w-[1440px] mx-auto px-4 py-10 md:px-6 relative"
        >
            <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height }}
            >

                {/* === TOP MASK === */}
                <motion.div
                    variants={{
                        initial: { y: "40%", width: "70%" },
                        animate: { y: "0%", width: "44%" },
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{
                        duration: 1.6,
                        ease: [0.77, 0, 0.175, 1],
                    }}
                    className="absolute top-0 left-0 z-20"
                >
                    <svg width="605" height="153" viewBox="0 0 605 153" fill="none">
                        <path
                            d="M0 0.0206976H598.463C600.804 -0.00855934 602.843 -0.00518762 604.5 0.0206976H598.463C585.73 0.179817 564.07 1.30407 546.5 5.0207C525.7 9.4207 509.5 17.1874 504 20.5207C495.667 25.354 476.2 37.4207 465 47.0207C451 59.0207 441 68.0207 435.5 73.0207C430 78.0207 400.5 105.021 395 108.521C389.5 112.021 383.5 117.021 373 123.021C362.5 129.021 341.5 140.021 317.5 145.521C293.5 151.021 267 152.021 253 152.021H168.5H0V0.0206976Z"
                            fill="white"
                        />
                    </svg>
                </motion.div>

                {/* === BOTTOM MASK === */}
                <motion.div
                    variants={{
                        initial: { y: "-40%", width: "72%" },
                        animate: { y: "0%", width: "64%" },
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{
                        duration: 1.6,
                        ease: [0.77, 0, 0.175, 1],
                    }}
                    className="absolute bottom-0 right-0 z-20"
                >
                    <svg width="893" height="183" viewBox="0 0 893 183" fill="none">
                        <path
                            d="M893 182.975H5.04187C3.17889 182.994 1.48993 182.994 0 182.975H5.04187C22.8814 182.79 56.6785 180.796 84.5 176C115.227 170.703 140.339 162.31 148.464 158.298C160.774 152.479 189.532 137.954 206.077 126.397C226.758 111.952 248.951 83.2043 255.5 75.5C264 65.5 278.5 48.5001 299 31C306 25.0244 327.5 12.9572 340.5 8.50006C358 2.50006 371.5 -1.52588e-05 408 -1.52588e-05H519.255H644.083H893V182.975Z"
                            fill="white"
                        />
                    </svg>
                </motion.div>

                {/* === IMAGE REVEAL === */}
                <motion.div
                    variants={{
                        initial: { clipPath: "inset(40% 0 36% 0)" },
                        animate: { clipPath: "inset(0 0 0 0)" },
                    }}
                    initial="initial"
                    animate={controls}
                    transition={{
                        duration: 1.6,
                        ease: [0.77, 0, 0.175, 1],
                    }}
                    className="w-full h-full bg-cover bg-center flex flex-col items-center p-10 md:p-20 text-center text-white"
                    style={{ backgroundImage: `url(${image})`, justifyContent: "center" }}
                >
                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                        {typedTitle}
                        {shouldAnimate && <span className="animate-pulse">|</span>}
                    </h2>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-200">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
