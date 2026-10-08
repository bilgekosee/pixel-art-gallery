"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AudioGuide() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        // The browser refused to play; the button stays in its paused state.
      }
    } else {
      audio.pause();
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 22, delay: 1.4 }}
      className="fixed right-4 bottom-4 z-30 flex items-center gap-3 rounded-full border border-line bg-[var(--frame-white)]/90 py-2 pr-3 pl-2 shadow-lg backdrop-blur-md md:right-6 md:bottom-6"
    >
      <audio
        ref={audioRef}
        src="/sound/gymnopedie-1.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => {
          const { currentTime, duration } = e.currentTarget;
          if (duration) setProgress((currentTime / duration) * 100);
        }}
      />

      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause audio guide" : "Play audio guide"}
        className="grid size-10 place-items-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isPlaying ? "pause" : "play"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={isPlaying ? "/sound/pause.png" : "/sound/play.png"}
              alt=""
              width={36}
              height={36}
              unoptimized
              className="pixelated"
            />
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <div className="w-36 max-sm:hidden">
        <p className="text-xs leading-tight font-medium">Audio guide</p>
        <p className="text-[11px] leading-tight text-ink-soft">Satie · Gymnopédie No. 1</p>
        <div className="mt-1.5 h-0.5 overflow-hidden rounded-full bg-line">
          <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="grid size-8 place-items-center opacity-70 transition-opacity hover:opacity-100"
      >
        <Image
          src={isMuted ? "/sound/Of.png" : "/sound/On.png"}
          alt=""
          width={24}
          height={24}
          unoptimized
          className="pixelated"
        />
      </button>
    </motion.div>
  );
}
