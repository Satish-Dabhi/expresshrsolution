"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedImageSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  titleSpeed?: number;
  titleMarginTop?: string;
  animationDelay?: number;
  height?: string;
}

export default function AnimatedImageSection({
  image,
  title,
  subtitle,
  titleSpeed = 145,
  height = "1023px",
  titleMarginTop = "0",
  animationDelay = 0,
}: AnimatedImageSectionProps) {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const delay = Number(animationDelay) / 1000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect(); // stop observing after triggered
        }
      },
      { threshold: 0.4 } // triggers when 40% of section is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    let i = 0;
    const titleInterval = setInterval(() => {
      setTypedTitle(title.slice(0, i));
      i++;
      if (i > title.length) {
        clearInterval(titleInterval);

        if (subtitle) {
          let j = 0;
          const subtitleInterval = setInterval(() => {
            setTypedSubtitle(subtitle.slice(0, j));
            j++;
            if (j > subtitle.length) {
              clearInterval(subtitleInterval);
            }
          }, titleSpeed);
        }
      }
    }, titleSpeed);

    return () => clearInterval(titleInterval);
  }, [shouldAnimate, title, subtitle, titleSpeed]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timer = setTimeout(() => {
      controls.start("animate");
    }, Number(animationDelay));

    return () => clearTimeout(timer);
  }, [shouldAnimate, controls]);

  const imageVariants = {
    initial: { clipPath: "inset(41% 0 36% 0 round 25px)" },
    animate: { clipPath: "inset(0% 0% 0% 0% round 0px)" },
  };

  const topMaskVariants = {
    initial: { top: "40%", width: "62%" },
    animate: { top: 0, width: "44%" },
  };

  const bottomMaskVariants = {
    initial: { bottom: "35%", width: "74.5%" },
    animate: { bottom: 0, width: "64%" },
  };

  return (
    <section
      ref={ref}
      style={{
        height,
        overflow: "hidden",
        background: "#ffffff",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "62px 30px 35px",
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>
        {/* TOP MASK */}
        <motion.div
          variants={topMaskVariants}
          initial="initial"
          animate={shouldAnimate ? "animate" : "initial"}
          transition={{
            duration: 2.5,
            delay,
            ease: [0.77, 0, 0.175, 1],
          }}
          style={{
            position: "absolute",
            left: 0,
            zIndex: 2,
          }}
        >
          <svg width="100%" viewBox="0 0 605 153" fill="none">
            <path
              d="M0 0.02H598.463C585.73 0.18 564.07 1.3 546.5 5.02
              C525.7 9.42 509.5 17.18 504 20.52
              C495.667 25.35 476.2 37.42 465 47.02
              C451 59.02 441 68.02 435.5 73.02
              C430 78.02 400.5 105.02 395 108.52
              C389.5 112.02 373 123.02 317.5 145.52
              C293.5 151.02 267 152.02 253 152.02H0V0.02Z"
              fill="white"
            />
          </svg>
        </motion.div>

        {/* BOTTOM MASK */}
        <motion.div
          variants={bottomMaskVariants}
          initial="initial"
          animate={shouldAnimate ? "animate" : "initial"}
          transition={{
            duration: 2.5,
            delay,
            ease: [0.77, 0, 0.175, 1],
          }}
          style={{
            position: "absolute",
            right: 0,
            zIndex: 2,
          }}
        >
          <svg width="100%" viewBox="0 0 893 183" fill="none">
            <path
              d="M893 182.975H5.04
              C22.88 182.79 56.67 180.79 84.5 176
              C115.22 170.7 140.33 162.31 148.46 158.29
              C160.77 152.47 189.53 137.95 206.07 126.39
              C226.75 111.95 248.95 83.2 255.5 75.5
              C264 65.5 278.5 48.5 299 31
              C327.5 12.95 358 2.5 408 0H893V182.975Z"
              fill="white"
            />
          </svg>
        </motion.div>

        {/* IMAGE REVEAL */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={shouldAnimate ? "animate" : "initial"}
          transition={{
            duration: 2.5,
            delay,
            ease: [0.77, 0, 0.175, 1],
          }}
          style={{
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column", // <-- add this line
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 50px",
          }}
        >
          {/* <div className="w-full flex justify-center"> */}
          <h1
            className="
                text-white font-semibold leading-none
                text-[64px]
                max-[1199px]:text-[48px]
              "
            style={{ marginTop: titleMarginTop }}
          >
            {typedTitle}
          </h1>

          {subtitle && (
            <p className="mt-[50px] text-[24px] font-semibold text-[#A8A8A8] leading-none">
              {typedSubtitle}
            </p>
          )}
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
}
