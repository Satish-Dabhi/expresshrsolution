'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedLogo() {
  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full h-screen bg-black"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut'
      }}
    >
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Image
          src="/logo.png"  // update with your logo
          alt="Brand Logo"
          width={120}
          height={120}
        />
      </motion.div>
    </motion.div>
  )
}
