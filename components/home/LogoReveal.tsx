'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LogoReveal({ onFinish }: { onFinish: () => void }) {
    const [text, setText] = useState("");
    const [zoom, setZoom] = useState(false);
    const fullText = "EXPRESS HR SOLUTION";

    useEffect(() => {
        let i = 0;

        // Typing animation
        const typer = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
                clearInterval(typer);

                // Trigger smooth zoom AFTER text finishes
                setTimeout(() => setZoom(true), 250);
            }
        }, 70);

        // End splash
        const finishTimer = setTimeout(() => {
            onFinish();
        }, 2600);

        return () => {
            clearInterval(typer);
            clearTimeout(finishTimer);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[999] bg-white flex items-center justify-center overflow-hidden">

            {/* LOGO + TEXT */}
            <div className="absolute flex flex-col items-center z-20">
                <Image
                    src="/images/logos/footer-logo.png"
                    alt="Logo"
                    width={180}
                    height={60}
                />
                <p className="mt-4 text-black text-lg font-medium tracking-wide">
                    {text}
                </p>
            </div>

            {/* SMOOTH CENTER EXPANDING SQUARE */}
            <motion.div
                initial={{
                    scale: 0,        // we animate this
                    opacity: 1,
                }}
                animate={
                    zoom
                        ? { scale: 120, opacity: 1 }  // BIG smooth zoom
                        : { scale: 0 }
                }
                transition={{
                    duration: 1.3,
                    ease: [0.16, 1, 0.3, 1], // smooth cubic
                }}
                className="absolute w-32 h-32 bg-white rounded-2xl"
            />
        </div>
    );
}
