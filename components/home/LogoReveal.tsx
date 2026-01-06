"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * The brand logo appears in an opening splash sequence
 * and smoothly transitions into the homepage.
 */
export default function LogoReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const [expandLogo, setExpandLogo] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setExpandLogo(true), 800),
      setTimeout(() => setShowSplash(false), 1600),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* NORMAL APP FLOW */}
      <div>{children}</div>

      {/* SPLASH OVERLAY */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          >
            {/* EXPANDING LOGO */}
            <motion.div
              initial={{ scale: 1 }}
              animate={expandLogo ? { scale: 35 } : { scale: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="relative"
            >
              <Image
                src="/images/logos/express-logo.png"
                alt="Logo"
                width={150}
                height={60}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
