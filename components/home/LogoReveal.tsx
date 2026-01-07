"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* NORMAL APP FLOW */}
      <div>{children}</div>

      {/* SPLASH OVERLAY */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="
              fixed inset-0 z-50
              bg-white
              flex items-center justify-center
            "
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* LOGO ZOOM */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.35, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1], // cinematic
              }}
            >
              <Image
                src="/images/logos/express-logo.png"
                alt="Express HR Solutions Logo"
                width={160}
                height={64}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
