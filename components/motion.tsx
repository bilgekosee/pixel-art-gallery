"use client";

import { MotionConfig, motion, type HTMLMotionProps } from "framer-motion";

// A soft "settle into place" curve shared by every transition on the site.
export const ease = [0.22, 1, 0.36, 1] as const;

// Honour the visitor's reduced-motion setting everywhere: movement is dropped, fades stay.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

// Fades a block up into place the first time it scrolls into view.
export function Reveal({ delay = 0, y = 24, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
      {...props}
    />
  );
}
