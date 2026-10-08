"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { artworks } from "@/data/artworks";
import { ease } from "./motion";

type Props = {
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

const VIEW_SIZE = 384;

// Works slide in from the side you're walking towards.
const slide: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
  exit: (direction: number) => ({ opacity: 0, x: direction * -48, transition: { duration: 0.2 } }),
};

export default function Lightbox({ index, onChange, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [direction, setDirection] = useState(1);

  // The native <dialog> gives us the top layer and focus trapping. It opens right away,
  // but only closes once the exit animation has finished (see onExitComplete).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (index !== null && dialog && !dialog.open) dialog.showModal();
  }, [index]);

  const step = (delta: number) => {
    if (index === null) return;
    setDirection(delta);
    onChange((index + delta + artworks.length) % artworks.length);
  };

  const art = index === null ? null : artworks[index];
  // Whole-number zoom keeps every pixel square.
  const zoom = art ? Math.max(1, Math.floor(VIEW_SIZE / Math.max(art.width, art.height))) : 1;

  return (
    <dialog
      ref={dialogRef}
      onCancel={(e) => {
        // Escape: animate out first instead of letting the browser close instantly.
        e.preventDefault();
        onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
      aria-label={art?.title}
      className="lightbox fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none overflow-hidden bg-transparent p-0 text-ink"
    >
      <AnimatePresence onExitComplete={() => dialogRef.current?.close()}>
        {art && index !== null && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="absolute inset-0 bg-wall/95 backdrop-blur-md"
          />
        )}
        {art && index !== null && (
          <motion.div
            key="stage"
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.25 } }}
            transition={{ duration: 0.55, ease }}
            className="pointer-events-none relative flex min-h-full items-center justify-center p-4"
          >
            <div className="pointer-events-auto flex flex-col items-center gap-8 md:flex-row md:items-end md:gap-12">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={art.file}
                  custom={direction}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="frame frame-ink [--frame-w:12px]"
                >
                  <div className="mat bg-[var(--mat-butter)] p-6 md:p-10">
                    <div className="mat-window p-3">
                      <Image
                        src={`/pixel-art-image/${art.file}`}
                        alt={art.title}
                        width={art.width * zoom}
                        height={art.height * zoom}
                        unoptimized
                        style={{ width: art.width * zoom }}
                        className="pixelated h-auto max-h-[52vh] max-w-[calc(100vw-9rem)] object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="w-64 border border-line bg-[var(--frame-white)] p-5 shadow-sm">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={art.file}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease, delay: 0.1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  >
                    <p className="font-pixel text-[9px] tracking-[0.2em] text-ink-soft">
                      No. {String(index + 1).padStart(2, "0")} / {artworks.length}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.65rem] leading-[1.1] italic">{art.title}</h3>
                    <p className="mt-1.5 text-sm text-accent">Known as “{art.alias}”</p>
                    <p className="mt-3 text-sm text-ink-soft">
                      Pixel art on screen
                      <br />
                      {art.width} × {art.height} px
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                  <div className="flex gap-2">
                    <motion.button
                      type="button"
                      onClick={() => step(-1)}
                      whileHover={{ x: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Previous work"
                      className="grid size-9 place-items-center rounded-full border border-line transition-colors hover:border-ink"
                    >
                      ←
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => step(1)}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Next work"
                      className="grid size-9 place-items-center rounded-full border border-line transition-colors hover:border-ink"
                    >
                      →
                    </motion.button>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
}
