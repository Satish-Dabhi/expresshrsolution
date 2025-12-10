'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroRevealSection() {
    const [showHero, setShowHero] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const timer = setTimeout(() => {
            setShowHero(true)
            document.body.style.overflow = 'auto'
        }, 1500)

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <>
            {/* ================= LOGO INTRO ================= */}
            {!showHero && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">

                    {/* EXTREMELY SMOOTH + SLOW BACKGROUND EXPANSION */}
                    <motion.div
                        initial={{
                            width: 180,
                            height: 110,
                            borderRadius: 26,
                            backgroundColor: "rgba(0,0,0,0.55)",
                            opacity: 0,
                            scale: 0.9,
                            backdropFilter: "blur(14px)",
                        }}
                        animate={{
                            width: "260vw",
                            height: "260vh",
                            borderRadius: 0,
                            opacity: 1,
                            scale: 1,
                            backgroundColor: "rgba(0,0,0,0.88)",
                            backdropFilter: "blur(0px)",
                        }}
                        transition={{
                            duration: 2.8,                   // MUCH smoother
                            ease: [0.15, 0.85, 0.25, 1],     // buttery curve
                        }}
                        className="absolute"
                    />

                    {/* SMOOTH LATE-APPEARING LOGO */}
                    <motion.div
                        initial={{
                            scale: 0.75,
                            opacity: 0,
                            y: 40,
                            filter: "blur(14px)",
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 1.6,
                            delay: 0.9,                     // waits for expansion to *begin* before appearing
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="z-50"
                    >
                        <Image
                            src="/images/logos/express-hr-logo.png"
                            alt="Brand Logo"
                            width={180}
                            height={60}
                            priority
                        />
                    </motion.div>

                </div>
            )}

            {/* ================= HERO CONTENT ================= */}
            {showHero && (
                <section className="relative min-h-screen overflow-hidden bg-white">

                    {/* === CLIP PATH === */}
                    <svg width="0" height="0">
                        <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
                            <path
                                d="
                                    M0.08 0.12
                                    L0.40 0.10
                                    C0.46 0.03 0.54 0 0.60 0
                                    L1 0
                                    L1 0.82
                                    C0.85 0.80 0.85 1 0.4 1  
                                    L0 1
                                    L0 0.12
                                    Z
                                "
                            />
                        </clipPath>
                    </svg>



                    {/* ===== IMAGE REVEAL (~ LINE CENTER → FULL) ===== */}
                    <motion.div
                        className="absolute inset-0 will-change-[clip-path]"
                        initial={{
                            clipPath: 'inset(50% 0% 49% 0%)'
                        }}
                        animate={{
                            clipPath: 'inset(0% 0% 0% 0%)'
                        }}
                        transition={{
                            duration: 1.6,
                            ease: [0.77, 0, 0.175, 1],
                        }}
                    >

                        <Image
                            src="/images/home-hero.jpg"
                            alt="Hero"
                            fill
                            priority
                            className="object-cover"
                            style={{ clipPath: 'url(#hero-clip)' }}
                        />

                        {/* Contrast for white text/logo */}
                        <div className="absolute inset-0 " />
                    </motion.div>

                    {/* ================= BOTTOM TEXT ================= */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 z-10 flex justify-center text-center px-6 pb-14 md:pb-28"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,
                                    delayChildren: 0.6,
                                },
                            },
                        }}
                    >
                        <h1
                            className="max-w-6xl leading-none text-white"
                            style={{
                                fontFamily: 'Instrument Sans',
                                fontWeight: 600,
                                fontSize: 'clamp(30px, 6vw, 64px)',
                                lineHeight: '100%',
                            }}
                        >
                            {"Building India’s Most Reliable Workforce-Driven Logistics Ecosystem"
                                .split(' ')
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        className="inline-block mr-3"
                                        variants={{
                                            hidden: {
                                                y: 40,
                                                opacity: 0,
                                                filter: 'blur(8px)',
                                            },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                filter: 'blur(0px)',
                                            },
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.25, 0.8, 0.25, 1],
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                    </motion.div>
                </section>
                // <section className="relative min-h-screen overflow-hidden bg-white">

                //     {/* ===================== TOP MASK ===================== */}
                //     <motion.div
                //         className="absolute top-0 left-0 z-20 w-[60%]"
                //         initial={{ top: "40%" }}
                //         animate={{ top: "0%" }}
                //         transition={{
                //             duration: 1.6,
                //             ease: [0.77, 0, 0.175, 1],
                //         }}
                //     >
                //         <svg width="1187" height="191" viewBox="0 0 1187 191" fill="none">
                //             <path
                //                 d="M964.937 94.0649C899.272 162.282 778.459 193.472 731.991 190.847L0 190.847V84.5584V0H1187C1118.23 0.723938 1030.44 26.018 964.937 94.0649Z"
                //                 fill="white"
                //             />
                //         </svg>
                //     </motion.div>

                //     {/* ===================== BOTTOM MASK ===================== */}
                //     <motion.div
                //         className="absolute bottom-0 right-0 z-20 w-[63%]"
                //         initial={{ bottom: "40%" }}
                //         animate={{ bottom: "0%" }}
                //         transition={{
                //             duration: 1.6,
                //             ease: [0.77, 0, 0.175, 1],
                //         }}
                //     >
                //         <svg width="1186" height="191" viewBox="0 0 1186 191" fill="none">
                //             <path
                //                 d="M234.114 87.0306C299.577 18.7115 408.197 -2.40984 454.625 0.213585L1186 0.213615V106.469V191H0C68.7138 190.276 171.329 152.555 234.114 87.0306Z"
                //                 fill="white"
                //             />
                //         </svg>
                //     </motion.div>

                //     {/* ===================== IMAGE REVEAL ===================== */}
                //     <motion.div
                //         className="absolute inset-0"
                //         initial={{ clipPath: "inset(41% 0 41% 0)" }}
                //         animate={{ clipPath: "inset(0 0 0 0)" }}
                //         transition={{
                //             duration: 1.6,
                //             ease: [0.77, 0, 0.175, 1],
                //         }}
                //     >
                //         <div className="relative w-full h-screen flex flex-col items-end justify-end px-12 md:px-16 lg:px-20 pb-[200px]">
                //             <Image
                //                 src="/images/home-hero.jpg"
                //                 alt="Hero"
                //                 fill
                //                 priority
                //                 className="object-cover"
                //             />
                //         </div>
                //     </motion.div>

                //     {/* ================= BOTTOM TEXT ================= */}
                //     <motion.div
                //         className="absolute bottom-0 left-0 right-0 z-10 flex justify-center text-center px-6 pb-14 md:pb-28"
                //         initial="hidden"
                //         animate="visible"
                //         variants={{
                //             visible: {
                //                 transition: {
                //                     staggerChildren: 0.12,
                //                     delayChildren: 0.6,
                //                 },
                //             },
                //         }}
                //     >
                //         <h1
                //             className="max-w-6xl leading-none text-white"
                //             style={{
                //                 fontFamily: 'Instrument Sans',
                //                 fontWeight: 600,
                //                 fontSize: 'clamp(30px, 6vw, 64px)',
                //                 lineHeight: '100%',
                //             }}
                //         >
                //             {"Building India’s Most Reliable Workforce-Driven Logistics Ecosystem"
                //                 .split(' ')
                //                 .map((word, index) => (
                //                     <motion.span
                //                         key={index}
                //                         className="inline-block mr-3"
                //                         variants={{
                //                             hidden: {
                //                                 y: 40,
                //                                 opacity: 0,
                //                                 filter: 'blur(8px)',
                //                             },
                //                             visible: {
                //                                 y: 0,
                //                                 opacity: 1,
                //                                 filter: 'blur(0px)',
                //                             },
                //                         }}
                //                         transition={{
                //                             duration: 0.8,
                //                             ease: [0.25, 0.8, 0.25, 1],
                //                         }}
                //                     >
                //                         {word}
                //                     </motion.span>
                //                 ))}
                //         </h1>
                //     </motion.div>

                // </section>
            )}
        </>
    )
}
