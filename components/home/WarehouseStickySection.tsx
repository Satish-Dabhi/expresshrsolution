'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WarehouseStickySection() {
  return (
    <section className="relative w-full bg-white">

      {/* Scroll Area – Sticky plays only on large screens */}
      <div className="md:h-[200vh] relative">

        {/* STICKY wrapper (only sticky on md+) */}
        <div className="md:sticky md:top-0 md:h-screen flex flex-col md:flex-row">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full md:w-1/2 flex items-center px-6 sm:px-10 md:px-20 py-16 md:py-0">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <span className="block text-xs tracking-widest text-black/50 mb-3">
                WAREHOUSE
              </span>

              <h3
                className="text-black"
                style={{
                  fontFamily: 'Instrument Sans',
                  fontWeight: 600,
                  fontSize: 'clamp(26px, 4vw, 40px)',
                  lineHeight: '1.2'
                }}
              >
                Inventory accuracy,<br />
                pallet movement,<br />
                dock coordination
              </h3>
            </motion.div>

          </div>

          {/* ================= RIGHT GIF ================= */}
          <div className="w-full md:w-1/2 relative h-[300px] sm:h-[380px] md:h-full">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <Image
                src="/videos/warehouse.gif"
                alt="Warehouse Operations"
                fill
                priority
                className="object-cover"
              />

              {/* ORANGE OVERLAY */}
              <div className="absolute inset-0 bg-orange-500/75 mix-blend-multiply" />
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  )
}
