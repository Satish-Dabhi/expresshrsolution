"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialRevealSection() {
    return (
        <section className="w-full py-8 px-4 md:px-20">

            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-20%" }}
                className="
          relative w-full overflow-hidden shadow-md mask-wave
          rounded-[18px] md:rounded-[24px] bg-black/10
        "
                style={{
                    height: "clamp(340px, 60vw, 600px)",
                }}
            >
                {/* IMAGE */}
                <Image
                    src="/images/box.jpg"
                    alt="testimonial"
                    fill
                    priority
                    className="object-cover"
                />

                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12">

                    <h2
                        style={{
                            fontFamily: "Instrument Sans",
                            fontWeight: 600,
                            fontSize: "clamp(24px, 6vw, 64px)",
                            lineHeight: "110%",
                        }}
                        className="text-white max-w-[900px]"
                    >
                        “Express HR Solutions turned finance from a bottleneck into a partner”
                    </h2>

                    <p
                        className="text-white/80 mt-4 md:mt-6"
                        style={{
                            fontFamily: "Instrument Sans",
                            fontSize: "clamp(14px, 2.2vw, 20px)",
                        }}
                    >
                        Ankit Ahuja, XYZ Co.
                    </p>

                </div>
            </motion.div>

            {/* Responsive SVG MASK */}
            <style jsx>{`
        .mask-wave {
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='1400' height='800' viewBox='0 0 1400 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 70 Q200 0 400 70 T800 70 T1200 70 Q1300 110 1400 70 V730 Q1250 770 1150 730 T900 730 T650 730 Q500 770 350 730 T100 730 Q50 700 0 730 Z' fill='white'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg width='1400' height='800' viewBox='0 0 1400 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 70 Q200 0 400 70 T800 70 T1200 70 Q1300 110 1400 70 V730 Q1250 770 1150 730 T900 730 T650 730 Q500 770 350 730 T100 730 Q50 700 0 730 Z' fill='white'/%3E%3C/svg%3E");
          mask-size: cover;
          -webkit-mask-size: cover;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>
        </section>
    );
}
