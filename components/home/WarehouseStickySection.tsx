'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const items = [
  {
    label: "WAREHOUSE",
    title: ["Inventory accuracy,", "pallet movement,", "dock coordination"],
    gif: "/videos/warehouse.gif",
    color: "orange"
  },
  {
    label: "WORKFORCE",
    title: ["Skilled deployment", "across 3PL/4PL", "environments"],
    gif: "/videos/warehouse.gif",
    color: "orange"
  },
  {
    label: "FACILITY",
    title: ["Safe, clean, efficient", "industrial spaces"],
    gif: "/videos/warehouse.gif",
    color: "orange"
  },
  {
    label: "GOVERNANCE",
    title: ["Compliance, audits,", "transparency & MIS"],
    gif: "/videos/warehouse.gif",
    color: "orange"
  }
]

export default function WarehouseStickySection() {
  const [active, setActive] = useState(0)
  const stepsRef = useRef<HTMLDivElement[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const carouselRef = useRef<HTMLDivElement>(null)
  const [dragWidth, setDragWidth] = useState(0)

  // detect mobile
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      setDragWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      )
    }
  }, [carouselRef.current])

  // desktop scroll tracking
  useEffect(() => {
    if (isMobile) return

    const handler = () => {
      const targetY = window.innerHeight * 0.45
      const distances = stepsRef.current.map((el) => {
        const rect = el.getBoundingClientRect()
        return Math.abs(rect.top - targetY)
      })
      const closest = distances.indexOf(Math.min(...distances))
      setActive(closest)
    }

    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [isMobile])

  // handle arrows
  const goPrev = () => {
    setActive(prev => Math.max(prev - 1, 0))
  }

  const goNext = () => {
    setActive(prev => Math.min(prev + 1, items.length - 1))
  }

  // drag ending detection
  const handleDragEnd = (event: any, info: any) => {
    if (!carouselRef.current) return

    const containerWidth = carouselRef.current.offsetWidth
    const scrollX = Math.abs(info.point.x)

    const newIndex = Math.round(scrollX / containerWidth)
    setActive(Math.min(Math.max(newIndex, 0), items.length - 1))
  }

  return (
    <section className="relative w-full bg-[rgba(217,217,217,0.2)]">

      {/* 1400px container */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-0 relative">

        {/* ================= MOBILE ================= */}
        {isMobile && (
          <div className="w-full p-5 pb-10 flex flex-col gap-6">

            {/* TOP IMAGE */}
            <div className="w-full h-[320px] rounded-xl overflow-hidden relative bg-white">
              <motion.div
                key={active}
                initial={{ opacity: 0.5, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={items[active].gif}
                  alt="mobile-gif"
                  fill
                  className="object-cover"
                />

                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      items[active].color === "orange"
                        ? "rgba(255,124,54,0.65)"
                        : "rgba(0,0,0,0.25)"
                  }}
                />
              </motion.div>
            </div>

            {/* CAROUSEL WRAPPER */}
            <div className="relative w-full">

              {/* LEFT ARROW */}
              <button
                onClick={goPrev}
                disabled={active === 0}
                className={`
                  absolute left-2 top-1/2 -translate-y-1/2 z-20
                  p-3 rounded-full shadow-lg 
                  bg-white/60
                  ${active === 0 ? "opacity-40" : ""}
                `}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={goNext}
                disabled={active === items.length - 1}
                className={`
                  absolute right-2 top-1/2 -translate-y-1/2 z-20
                  p-3 rounded-full shadow-lg 
                  bg-white/60
                  ${active === items.length - 1 ? "opacity-40" : ""}
                `}
              >
                <ChevronRight size={20} />
              </button>


              {/* CAROUSEL */}
              <motion.div
                ref={carouselRef}
                className="overflow-hidden"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -dragWidth, right: 0 }}
                  onDragEnd={handleDragEnd}
                  animate={{
                    x: -(active * (carouselRef.current?.offsetWidth || 0))
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="flex"
                >
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      className={`
                w-full flex-shrink-0
                p-6 bg-white rounded-xl shadow-sm
                transition-all duration-300
                ${active === i ? "scale-[1.01]" : "opacity-80"}
              `}
                    >
                      <span className="text-xs tracking-widest text-black/50">
                        {item.label}
                      </span>

                      <h3
                        className="mt-2 text-black"
                        style={{
                          fontFamily: "Instrument Sans",
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: "1.3"
                        }}
                      >
                        {item.title.map((t, j) => (
                          <span key={j}>{t}<br /></span>
                        ))}
                      </h3>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

            </div>

          </div>
        )}

        {/* ================= DESKTOP (unchanged) ================= */}
        {!isMobile && (
          <>
            {/* sticky desktop layout */}
            <div className="py-10 md:sticky md:top-0 md:h-screen flex gap-10">
              <div className="w-1/2 bg-white rounded-xl p-10 flex items-center">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="text-xs text-black/50 tracking-widest">
                    {items[active].label}
                  </span>
                  <h3 className="mt-3 text-[40px] font-semibold leading-tight">
                    {items[active].title.map((t, j) => (
                      <span key={j}>{t}<br /></span>
                    ))}
                  </h3>
                </motion.div>
              </div>

              <div className="w-1/2 relative rounded-xl overflow-hidden bg-white">
                <motion.div
                  key={active}
                  initial={{ opacity: 0.4, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={items[active].gif}
                    alt="desktop-gif"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 mix-blend-multiply bg-[rgba(255,124,54,0.75)]" />
                </motion.div>
              </div>
            </div>

            <div className="h-[300vh]">
              {items.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    stepsRef.current[i] = el!
                  }}
                  className="h-screen"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
