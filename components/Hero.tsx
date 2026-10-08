"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { artworks } from "@/data/artworks";
import { ease } from "./motion";
import { HangingWire } from "./WallFixtures";

// Little characters that keep the featured piece company.
const companions = [
  { src: "/logo/moon.png", className: "-left-10 -top-8 w-12", motion: "animate-drift-twinkle", delay: 0 },
  { src: "/logo/star1.png", className: "-right-6 -top-10 w-10", motion: "animate-drift-twinkle", delay: 900 },
  { src: "/logo/star2.png", className: "right-10 -top-14 w-6", motion: "animate-drift-twinkle", delay: 1800 },
  { src: "/logo/ghost.png", className: "-right-12 top-1/3 w-10", motion: "animate-float", delay: 0 },
  { src: "/logo/buny.png", className: "-left-12 bottom-6 w-11", motion: "animate-float", delay: 800 },
  { src: "/logo/kahvee.png", className: "-right-8 -bottom-6 w-9", motion: "animate-float", delay: 1500 },
];

const intro: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

// The spot over the featured piece switches on like an old gallery lamp: a couple of
// flickers, then it holds. The frame's shade lifts in step with the light.
const SWITCH_ON_DELAY = 0.9;
const flicker = {
  light: [0, 0.7, 0.1, 0.85, 0.35, 1],
  shade: [1, 0.35, 0.9, 0.2, 0.65, 0],
  times: [0, 0.18, 0.3, 0.45, 0.58, 1],
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  // No flashing for visitors who asked for less motion: the light simply fades up.
  const reduceMotion = useReducedMotion();
  const switchOn = {
    duration: reduceMotion ? 0.8 : 1.4,
    delay: SWITCH_ON_DELAY,
    times: reduceMotion ? undefined : flicker.times,
    ease: "linear" as const,
  };
  // As you walk on towards the salon, the entrance drifts back and dims.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  return (
    <section ref={sectionRef} id="top" className="entrance-wall relative isolate overflow-hidden px-5 pt-16 pb-24 md:px-8 md:pt-24">
      <motion.div
        style={{ y: drift, opacity: fade }}
        className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_1fr]"
      >
        <motion.div variants={intro} initial="hidden" animate="show">
          <motion.p variants={rise} className="font-pixel text-[10px] uppercase tracking-[0.3em] text-accent">
            Now showing · {artworks.length} works
          </motion.p>
          <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            <motion.span variants={rise} className="block">
              Breathe in.
            </motion.span>
            <motion.span variants={rise} className="block">
              Breathe out.
            </motion.span>
            <motion.em variants={rise} className="block text-accent">
              Enjoy the pixels.
            </motion.em>
          </h1>
          <motion.p variants={rise} className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            A quiet salon of small pixel paintings: cats, spirits, mountains and other tiny friends,
            hung close together the old-fashioned way.
          </motion.p>
          <motion.a
            variants={rise}
            href="#salon"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-wall"
          >
            Enter the salon
            <span aria-hidden>↓</span>
          </motion.a>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.35 }}
          className="relative isolate mx-auto w-full max-w-sm"
        >
          {companions.map((c, i) => (
            <motion.div
              key={c.src}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1 + i * 0.08 }}
              className={`pointer-events-none absolute select-none max-sm:hidden ${c.className}`}
            >
              {/* Inline delay (the CSS animation shorthand would reset a class-based one).
                  Negative, so each starts mid-cycle right away instead of standing still first. */}
              <Image
                src={c.src}
                alt=""
                width={48}
                height={48}
                unoptimized
                style={{ animationDelay: `-${c.delay}ms` }}
                className={`pixelated h-auto w-full ${c.motion}`}
              />
            </motion.div>
          ))}
          <div className="relative">
            <motion.span
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: reduceMotion ? 1 : flicker.light }}
              transition={switchOn}
              className="featured-spotlight"
            />
            <HangingWire className="-top-10 h-10" />
            <div className="frame frame-oak relative [--frame-w:12px]">
              <div className="mat bg-[var(--mat-lavender)] p-6 md:p-8">
                <div className="mat-window p-2">
                  <Image
                    src="/home/homepage.gif"
                    alt="An animated pixel scene"
                    width={256}
                    height={256}
                    unoptimized
                    priority
                    className="pixelated h-auto w-full"
                  />
                </div>
              </div>
              {/* The piece sits in shadow until its light comes on. */}
              <motion.span
                aria-hidden
                initial={{ opacity: 1 }}
                animate={{ opacity: reduceMotion ? 0 : flicker.shade }}
                transition={switchOn}
                className="pointer-events-none absolute inset-0 bg-[rgb(40_32_24/0.32)]"
              />
            </div>
          </div>
          <motion.figcaption
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.1 }}
            className="mx-auto mt-6 w-fit border border-line bg-[var(--frame-white)] px-4 py-2 text-center shadow-sm"
          >
            <span className="block font-serif text-lg italic">Featured</span>
            <span className="block text-xs text-ink-soft">Animated pixel art, 256 × 256 px</span>
          </motion.figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}
