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
  const [hasScrolled, setHasScrolled] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const delay = Number(animationDelay) / 1000;

  const renderAnimatedText = (text: string, delayStart = 0) => {
    // Split text into words
    const words = text.split(" ");

    return (
      <h1
        className="
        text-white font-semibold leading-tight
        text-[64px] max-[1199px]:text-[48px] max-[767px]:text-[32px]
        w-full text-center
        whitespace-normal
      "
      >
        {words.map((word, index) => (
          <motion.span
  key={index}
  className="inline-block mr-[8px]"
  initial={{ opacity: 0, y: 20 }}
  animate={shouldAnimate && hasScrolled ? { opacity: 1, y: 0 } : {}}
  transition={{
    duration: 1.4,
    delay: delayStart + Math.sin(index / words.length * Math.PI) * 0.7, // wave effect
    ease: "easeOut",
  }}
>
  {word}
</motion.span>


        ))}
      </h1>
    );
  };


  /* ----------------------------------------
     IMAGE / MASK ANIMATION (UNCHANGED)
  ---------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* ----------------------------------------
     USER SCROLL DETECTION (TEXT ONLY)
  ---------------------------------------- */
  useEffect(() => {
    const onUserScroll = (e: Event) => {
      // only real user interactions
      if (!e.isTrusted) return;

      setHasScrolled(true);

      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
    };

    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchmove", onUserScroll, { passive: true });
    window.addEventListener("keydown", onUserScroll);

    return () => {
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
    };
  }, []);


  /* ----------------------------------------
     TYPEWRITER EFFECT (ON SCROLL)
  ---------------------------------------- */
  // useEffect(() => {
  //   if (!shouldAnimate || !hasScrolled) return;

  //   let titleIndex = 0;
  //   let subtitleIndex = 0;
  //   let lastTime = 0;

  //   const step = (timestamp: number) => {
  //     if (!lastTime) lastTime = timestamp;
  //     const delta = timestamp - lastTime;

  //     // control speed by titleSpeed (ms per character)
  //     if (delta >= titleSpeed) {
  //       if (titleIndex < title.length) {
  //         setTypedTitle(title.slice(0, titleIndex + 1));
  //         titleIndex++;
  //       } else if (subtitle && subtitleIndex < subtitle.length) {
  //         setTypedSubtitle(subtitle.slice(0, subtitleIndex + 1));
  //         subtitleIndex++;
  //       }
  //       lastTime = timestamp;
  //     }

  //     if (titleIndex < title.length || (subtitle && subtitleIndex < subtitle.length)) {
  //       requestAnimationFrame(step);
  //     }
  //   };

  //   requestAnimationFrame(step);
  // }, [shouldAnimate, hasScrolled, title, subtitle, titleSpeed]);


  /* ----------------------------------------
     FRAMER MOTION VARIANTS (UNCHANGED)
  ---------------------------------------- */
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
          style={{ position: "absolute", left: 0, zIndex: 2 }}
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
          style={{ position: "absolute", right: 0, zIndex: 2 }}
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 50px",
          }}
        >
          {/* Smooth animated title */}
          <div style={{ marginTop: titleMarginTop }}>
            {renderAnimatedText(title)}
          </div>

          {/* Smooth animated subtitle */}
          {subtitle && (
            <p className="mt-[50px] text-[24px] font-semibold text-[#A8A8A8] leading-none">
              {subtitle.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={shouldAnimate && hasScrolled ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + index * 0.02, // start after title
                    ease: [0.77, 0, 0.175, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </p>
          )}
        </motion.div>

      </div>
    </section>
  );
}
