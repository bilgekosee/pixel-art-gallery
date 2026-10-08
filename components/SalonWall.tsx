"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { artworks, type Artwork } from "@/data/artworks";
import Lightbox from "./Lightbox";
import { Reveal, ease } from "./motion";
import { HangingWire } from "./WallFixtures";

const mats = ["--mat-lavender", "--mat-peach", "--mat-mint", "--mat-butter", "--mat-sky"];
const frames = ["frame-ink", "frame-oak", "frame-white"];

// Bigger canvases get more wall; the grid's dense flow packs the small ones around them.
function spanFor({ width, height }: Artwork) {
  if (height > width * 1.3) return width >= 192 ? "col-span-2 row-span-3" : "row-span-2";
  if (width >= 128) return "col-span-2 row-span-2";
  return "";
}

// Smaller canvases get smaller frames, nudged to different spots in their cell,
// so the wall reads as hand-hung rather than a strict grid.
const smallFrameSizes: Record<number, string> = { 32: "h-[72%] w-[72%]", 48: "h-[86%] w-[86%]" };
const nudges = ["items-start justify-center", "items-end justify-start", "items-center justify-end", "items-start justify-end", "items-end justify-center"];

function hangFor(art: Artwork, i: number) {
  const size = smallFrameSizes[Math.max(art.width, art.height)];
  // Nothing hung by hand is perfectly level: a steady, per-piece tilt between -0.6° and 0.6°.
  const tilt = (((i * 7) % 9) - 4) * 0.15;
  const isLarge = art.width >= 128;
  return size
    ? { li: nudges[i % nudges.length], button: size, tilt, isLarge }
    : { li: "", button: "h-full w-full", tilt, isLarge };
}

export default function SalonWall() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="salon" className="gallery-wall scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-pixel text-[10px] uppercase tracking-[0.3em] text-accent">Salon I</p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">The Pixel Wall</h2>
          </div>
          <p className="max-w-xs text-sm text-ink-soft">
            Hung salon-style, frame to frame. Step closer to any piece to read its label.
          </p>
        </Reveal>

        <ul className="isolate mt-14 grid grid-flow-dense auto-rows-[100px] grid-cols-[repeat(auto-fill,minmax(92px,1fr))] gap-4 pb-20 md:auto-rows-[136px] md:grid-cols-[repeat(auto-fill,minmax(136px,1fr))] md:gap-8">
          {artworks.map((art, i) => {
            const hang = hangFor(art, i);
            return (
              <motion.li
                key={art.file}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                // A small per-column delay so each row is hung left to right.
                transition={{ duration: 0.7, ease, delay: (i % 6) * 0.06 }}
                className={`flex ${spanFor(art)} ${hang.li}`}
              >
                {/* Sized like the frame, so the wire centres on it rather than on the cell. */}
                <span className={`relative flex ${hang.button}`}>
                  {hang.isLarge && <HangingWire />}
                  <motion.button
                    // Straightens up as you lean in, the way you'd nudge a crooked frame.
                    animate={{ rotate: hang.tilt }}
                    whileHover={{ y: -6, rotate: 0 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`Look closer at ${art.title}`}
                    className={`frame ${frames[i % frames.length]} flex h-full w-full cursor-zoom-in outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent`}
                  >
                    <span
                      className="mat flex h-full w-full p-2 md:p-3"
                      style={{ background: `var(${mats[(i * 2) % mats.length]})` }}
                    >
                      <span className="mat-window flex h-full w-full items-center justify-center p-1 md:p-1.5">
                        <Image
                          src={`/pixel-art-image/${art.file}`}
                          alt=""
                          width={art.width}
                          height={art.height}
                          unoptimized
                          className="pixelated h-full w-full object-contain"
                        />
                      </span>
                    </span>
                  </motion.button>
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Skirting board where the wall meets the floor. */}
      <div aria-hidden className="h-3 border-t border-line bg-[var(--frame-white)]" />
      <div aria-hidden className="h-10 bg-gradient-to-b from-floor to-wall" />

      <Lightbox
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
