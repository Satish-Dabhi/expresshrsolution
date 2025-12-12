'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LogoReveal({ children }: { children: React.ReactNode }) {
    const [text, setText] = useState("")
    const [hideLogo, setHideLogo] = useState(false)
    const [showSquare, setShowSquare] = useState(false)
    const [expandSquare, setExpandSquare] = useState(false)
    const [hideSplash, setHideSplash] = useState(false)

    // NEW → Enable scroll after clipPath animation ends
    const [scrollEnabled, setScrollEnabled] = useState(false)

    const fullText = "EXPRESS HR SOLUTION"

    useEffect(() => {
        let i = 0

        const typer = setInterval(() => {
            setText(fullText.slice(0, i + 1))
            i++
            if (i === fullText.length) clearInterval(typer)
        }, 55)

        setTimeout(() => setHideLogo(true), 1200)
        setTimeout(() => setShowSquare(true), 1300)
        setTimeout(() => setExpandSquare(true), 1400)

        // square expand duration → 5.4s
        setTimeout(() => {
            setHideSplash(true)
            setScrollEnabled(true) 
        }, 4400)

        return () => clearInterval(typer)
    }, [])

    return (
        <div className="relative w-full min-h-screen">

            {/* =======================================
                MAIN CONTENT (clipPath reveal)
            ======================================== */}
            <motion.div
                initial={{ clipPath: "inset(50% 50% 50% 50% round 20px)" }}
                animate={expandSquare ? { clipPath: "inset(0% 0% 0% 0% round 0px)" } : {}}
                transition={{
                    duration: 2.4,
                    ease: [0.76, 0, 0.24, 1],
                }}
                className={`
                    absolute inset-0 z-10
                    ${scrollEnabled ? "overflow-auto" : "overflow-hidden"}
                `}
            >
                <div className="relative w-full min-h-[250vh]">
                    {children}
                </div>
            </motion.div>

            {/* =======================================
                SPLASH SCREEN
            ======================================== */}
            {!hideSplash && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={expandSquare ? { opacity: 0 } : { opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="
                        fixed inset-0 z-40 
                        bg-white
                        flex items-center justify-center
                        pointer-events-none
                    "
                >

                    {/* LOGO + TEXT */}
                    {!hideLogo && (
                        <div className="absolute z-50 flex flex-col items-center">
                            <Image
                                src="/images/logos/footer-logo.png"
                                alt="Logo"
                                width={150}
                                height={60}
                            />
                            <p className="mt-4 text-black text-lg tracking-wide font-medium">
                                {text}
                            </p>
                        </div>
                    )}

                    {/* EXPANDING SQUARE */}
                    {showSquare && (
                        <motion.div
                            initial={{ scale: 0.3 }}
                            animate={expandSquare ? { scale: 40 } : { scale: 0.3 }}
                            transition={{
                                duration: 5.4,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="
                                absolute
                                w-64 h-64
                                bg-white
                                rounded-2xl
                                z-30
                            "
                        />
                    )}
                </motion.div>
            )}
        </div>
    )
}
