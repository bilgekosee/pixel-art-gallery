"use client";

import { useState, useRef, useEffect } from "react";
import { Press_Start_2P } from "next/font/google";
import About from "./About";

const pixelFont = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const images = [
  "japan-cat.png", "kurpiks.png", "view.png", "japan.png", "badcat.png", "fuji.png", "sad.png", "4.kapak.png", "kopecik.png", "bimo.png", "popi.png", "nahcekmeyenkedi.png", "verysad-1.png", "3.kapak.png", "winniethepooh.png", "page.png", "pikachuuu.png", "baloncuk1.png", "keltos.png", "catss.png", "kara-kedicik.png", "noddle.png", "idk.png", "1.kapak.png", "alevcik.png", "pikipuku.png", "book.png", "happy.png", "farecik.png", "kaonashi.png", "nahcekenkedi.png", "smile.png", "2.kapak.png", "pikacuuu.png", "notr.png", "tatlis-kurbik.png", "totoro.png", "tontik.png", "van_gogh.png", "kapibara.png", "hunterhunter.png", "baloncuk2.png"
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Audio state
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Attempt autoplay when component mounts
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Tarayıcı otomatik oynatmayı engelledi. Kullanıcı etkileşimi bekleniyor.", e);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`bg-[#0f1020] min-h-screen flex flex-col overflow-x-hidden ${pixelFont.className}`}>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-around p-8 lg:p-15 gap-12 lg:gap-0 flex-none z-10 relative">
        <section className="flex justify-center items-center">
          <img
            src="/home/homepage.gif"
            style={{ imageRendering: "pixelated" }}
            width={500}
            height={300}
            className="rounded-2xl max-w-full h-auto drop-shadow-2xl"
          />
        </section>
        
        <div className="flex flex-col items-center gap-6">
          <p className="flex flex-col justify-center items-center gap-3 text-base tracking-[0.2em] uppercase text-slate-200/80 leading-11">
            <span>breathe in</span>
            <span>breathe out</span>
            <span>enjoy the pixels</span>
          </p>

          {/* Audio Player UI */}
          <div className="flex flex-col items-center gap-3 bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <audio 
              ref={audioRef} 
              src="/sound/cozy.mp3" 
              loop 
              onTimeUpdate={handleTimeUpdate} 
            />
            
            <div className="flex items-center gap-6">
              {/* Play/Pause Button */}
              <button onClick={togglePlay} className="hover:scale-110 active:scale-95 transition-transform" aria-label={isPlaying ? "Pause" : "Play"}>
                <img 
                  src={isPlaying ? "/sound/pause.png" : "/sound/play.png"} 
                  alt={isPlaying ? "Pause" : "Play"} 
                  className="w-8 h-8 object-contain" 
                  style={{ imageRendering: "pixelated" }} 
                />
              </button>
              
              {/* Progress Bar */}
              <div className="w-32 md:w-48 h-2 bg-slate-900 shadow-inner rounded-full overflow-hidden border border-slate-700/50 relative">
                <div 
                  className="absolute top-0 left-0 bottom-0 bg-slate-300 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Mute/Unmute Button */}
              <button onClick={toggleMute} className="hover:scale-110 active:scale-95 transition-transform" aria-label={isMuted ? "Unmute" : "Mute"}>
                <img 
                  src={isMuted ? "/sound/Of.png" : "/sound/On.png"} 
                  alt={isMuted ? "Unmute" : "Mute"} 
                  className="w-8 h-8 object-contain" 
                  style={{ imageRendering: "pixelated" }} 
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Carousel Section */}
      <div className="w-full pb-20 pt-8 relative flex flex-col items-center flex-1">
        <h2 className="text-center text-slate-300 mb-8 text-sm md:text-base tracking-widest uppercase">
          Gallery
        </h2>
        
        <div 
          className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] flex justify-center items-center"
          style={{ perspective: "1200px" }}
        >
          {/* Left Arrow */}
          <button 
            onClick={scrollLeft}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md border border-slate-500/50 text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={scrollRight}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md border border-slate-500/50 text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {images.map((img, index) => {
              let offset = index - activeIndex;

               // Make array circular
              if (offset > images.length / 2) offset -= images.length;
              if (offset < -images.length / 2) offset += images.length;

              const absOffset = Math.abs(offset);

              // Render only nearby cards to save performance and avoid overlap messes
              if (absOffset > 5) return null;

              const scale = offset === 0 ? 1.3 : 0.9 - (absOffset * 0.1);
              const zIndex = 40 - absOffset;
              const opacity = absOffset > 3 ? 0 : 1 - (absOffset * 0.1);
              
              const translateXPercent = offset * 100; 
              const rotateY = offset === 0 ? 0 : offset > 0 ? -40 : 40;
              const translateZ = offset === 0 ? 80 : absOffset * -120; // 3D derinlik hissini ciddi şekilde artırır

              return (
                <div 
                  key={index}
                  className="absolute transition-all duration-500 ease-out cursor-pointer pointer-events-auto flex justify-center items-center"
                  style={{
                    transform: `translateX(${translateXPercent}%) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex,
                    opacity,
                    visibility: opacity === 0 ? 'hidden' : 'visible'
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={`/pixel-art-image/${img}`}
                    alt={img}
                    className="h-[180px] md:h-[280px] lg:h-[360px] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)] hover:scale-110 transition-transform duration-300"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <About />
    </div>
  );
};

export default Home;
