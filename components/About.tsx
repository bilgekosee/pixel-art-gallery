"use client";

import { motion, type Variants } from "framer-motion";
import { ease } from "./motion";

const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-100px" } } as const;

const sequence: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const heading = ["Where", "pixels", "breathe."];

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-wall px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <motion.div variants={sequence} {...inView}>
          <motion.p variants={rise} className="font-pixel text-[10px] uppercase tracking-[0.3em] text-accent">
            About
          </motion.p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight">
            {heading.map((word) => (
              // Each word rises out from under its own line.
              <span key={word} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span variants={rise} className={`inline-block pr-[0.25em] ${word === "breathe." ? "italic" : ""}`}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } }}
          {...inView}
          className="space-y-5 text-lg leading-relaxed text-ink-soft"
        >
          <motion.p variants={rise}>
            Welcome to a tiny corner of the internet where time slows down. This gallery is a
            collection of small moments, drawn one pixel at a time, curated to bring a little
            nostalgia, peace and magic.
          </motion.p>
          <motion.p variants={rise}>
            Put on the audio guide, wander along the wall and get lost in the grid. No rush, no
            stress. Just you and the pixels.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        id="visit"
        variants={sequence}
        {...inView}
        className="relative mx-auto mt-24 flex max-w-5xl scroll-mt-20 flex-col items-start justify-between gap-6 pt-10 text-sm text-ink-soft md:flex-row md:items-center"
      >
        {/* The divider draws itself in from the left. */}
        <motion.span
          aria-hidden
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 1.2, ease } },
          }}
          className="absolute inset-x-0 top-0 h-px origin-left bg-line"
        />
        <motion.p variants={rise}>
          <span className="font-serif text-2xl text-ink">Pixel Gallery</span>
          <span className="ml-3">Open every day, all night long.</span>
          <span className="mt-2 block text-xs">
            Music: Erik Satie, Gymnopédie No. 1, performed by Robin Alciatore (public domain, via{" "}
            <a href="https://musopen.org" className="underline underline-offset-2 hover:text-ink">
              Musopen
            </a>
            ).
          </span>
        </motion.p>
        <motion.a
          variants={rise}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          href="https://github.com/bilgekosee"
          className="rounded-full border border-ink px-5 py-2 text-ink transition-colors hover:bg-ink hover:text-wall"
        >
          Say hello on GitHub
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
