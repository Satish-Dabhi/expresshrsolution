'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LogoReveal from './LogoReveal'

export default function HeroRevealSection() {
    const [showHero, setShowHero] = useState(false);
    const [text, setText] = useState("");
    const fullText = "Building India’s Most Reliable Workforce-Driven Logistics Ecosystem";

    // TYPEWRITER
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 95);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ================= TERMINAL STYLE LOGO REVEAL ================= */}
            {!showHero && (
                <LogoReveal onFinish={() => setShowHero(true)} />
            )}

            {/* ================= HERO CONTENT ================= */}
            {showHero && (
                <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden py-10 px-4 md:px-8">
                    <div className="relative h-[650px] md:h-[850px] lg:h-[1000px] rounded-2xl">

                        {/* === TOP MASK === */}
                        <motion.div
                            initial={{ y: "40%", width: "70%" }}
                            animate={{ y: "0%", width: "44%" }}
                            transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
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
                            initial={{ y: "-40%", width: "72%" }}
                            animate={{ y: "0%", width: "64%" }}
                            transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
                            className="absolute bottom-0 right-0 z-20"
                        >
                            <svg width="893" height="183" viewBox="0 0 893 183" fill="none">
                                <path
                                    d="M893 182.975H5.04187C3.17889 182.994 1.48993 182.994 0 182.975H5.04187C22.8814 182.79 56.6785 180.796 84.5 176C115.227 170.703 140.339 162.31 148.464 158.298C160.774 152.479 189.532 137.954 206.077 126.397C226.758 111.952 248.951 83.2043 255.5 75.5C264 65.5 278.5 48.5001 299 31C306 25.0244 327.5 12.9572 340.5 8.50006C358 2.50006 371.5 -1.52588e-05 408 -1.52588e-05H519.255H644.083H893V182.975Z"
                                    fill="white"
                                />
                            </svg>
                        </motion.div>

                        {/* === Background Image + Reveal Animation === */}
                        <motion.div
                            initial={{ clipPath: "inset(40% 0 36% 0)" }}
                            animate={{ clipPath: "inset(0 0 0 0)" }}
                            transition={{ duration: 2.6, ease: [0.77, 0, 0.175, 1] }}
                            className="w-full h-full bg-cover bg-center flex items-end p-8 md:p-20 rounded-2xl"
                            style={{
                                backgroundImage: "url('images/home-hero.jpg')",
                            }}
                        >
                            {/* TEXT */}
                            <div className="text-white max-w-6xl mx-auto text-center pb-[7rem]">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                                    {text}
                                    <span className="animate-pulse">|</span>
                                </h1>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}
        </>
    )
}