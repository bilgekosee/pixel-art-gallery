"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ease } from "./motion";

const links = [
  { href: "#salon", label: "Salon" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Connect" },
];

// Tracks which section sits in the middle of the screen. Sections can be nested
// (#visit lives inside #about), so the innermost one in the middle band wins.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const order = ["top", ...ids];
    const inBand = new Map<string, boolean>();

    const update = () => {
      // The last section is too short to ever reach the middle, so the bottom of the page counts as it.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? order[order.length - 1] : (order.findLast((id) => inBand.get(id)) ?? null));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Entries only report what changed, so keep the full picture ourselves.
        entries.forEach((entry) => inBand.set(entry.target.id, entry.isIntersecting));
        update();
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    order.flatMap((id) => document.getElementById(id) ?? []).forEach((el) => observer.observe(el));
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [ids]);

  return active;
}

const sectionIds = links.map((link) => link.href.slice(1));

export default function Header() {
  const active = useActiveSection(sectionIds);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="sticky top-0 z-40 border-b border-line/70 bg-wall/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="" width={36} height={36} unoptimized className="pixelated" />
          <span className="font-serif text-2xl leading-none tracking-tight whitespace-nowrap">
            Pixel <em className="text-accent">Gallery</em>
          </span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm text-ink-soft md:gap-3">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block px-2 py-1 transition-colors hover:text-ink md:px-3 ${isActive ? "text-ink" : ""}`}
                  >
                    {link.label}
                    {isActive && (
                      // Slides between links as you move through the rooms.
                      <motion.span
                        layoutId="nav-marker"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent md:inset-x-3"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
