"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [text, setText] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [expandSquare, setExpandSquare] = useState(false);

  const fullText = "EXPRESS HR SOLUTION";

  useEffect(() => {
    let i = 0;
    const typer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typer);
    }, 55);

    const timers = [
      setTimeout(() => setExpandSquare(true), 1200),
      setTimeout(() => setShowSplash(false), 1500),
    ];

    return () => {
      clearInterval(typer);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      {/* NORMAL APP FLOW — NEVER BROKEN */}
      <div>{children}</div>

      {/* SPLASH OVERLAY */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="
              fixed inset-0 z-50
              bg-white
              flex items-center justify-center
            "
          >
            {/* LOGO + TEXT */}
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

            {/* EXPANDING SQUARE */}
            <motion.div
              initial={{ scale: 0.3 }}
              animate={expandSquare ? { scale: 40 } : { scale: 0.3 }}
              transition={{
                duration: 3.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                absolute
                w-64 h-64
                bg-white
                rounded-2xl
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
