import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
const pixelFont = Press_Start_2P({ weight: "400", subsets: ["latin"] });
export default function Header() {
  return (
    <header className="relative p-3 bg-[#050A1A] border-b border-zinc-800 flex justify-between items-center text-white overflow-hidden max-[830px]:flex-col  max-[830px]:gap-10 ">
      <div>
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="pixelated ml-2"
        />
        <div className="absolute top-0 left-[50px] w-[200px] h-full min-[710px]:left-[100px] max-[565px]:left-[30px] ">
          <Image
            src="/logo/star1.png"
            alt="star1"
            width={50}
            height={50}
            className="pixelated absolute top-2 left-10 animate-twinkle pointer-events-none select-none"
          />
          <Image
            src="/logo/star2.png"
            alt="star2"
            width={30}
            height={30}
            className="pixelated absolute top-10 left-28 animate-twinkle max-[830px]:top-20 max-[565px]:left-15 pointer-events-none select-none"
          />
          <Image
            src="/logo/ghost.png"
            alt="ghost"
            width={35}
            height={35}
            className="pixelated absolute top-6 left-44 animate-float max-[830px]:left-104 max-[540px]:left-85 max-[460px]:left-70 max-[420px]:left-60 pointer-events-none select-none"
          />
          <Image
            src="/logo/buny.png"
            alt="buny"
            width={40}
            height={40}
            className="pixelated absolute bottom-1 left-16 animate-float animate-float-slow max-[830px]:left-114 max-[830px]:bottom-5 max-[655px]:left-90 max-[540px]:left-75 max-[420px]:left-55 pointer-events-none select-none"
          />
          <Image
            src="/logo/kahvee.png"
            alt="buny"
            width={30}
            height={30}
            className="pixelated absolute bottom-2 left-36 animate-float max-[830px]:left-144 max-[830px]:bottom-15 max-[655px]:left-120 max-[540px]:left-100 max-[460px]:left-90 max-[420px]:left-75 max-[345px]:left-65 pointer-events-none select-none"
          />
          <Image
            src="/logo/moon.png"
            alt="buny"
            width={50}
            height={50}
            className="pixelated absolute bottom-5 left-55 animate-twinkle  max-[830px]:bottom-15 max-[830px]:left-45 max-[600px]:left-35 max-[470px]:left-25 max-[400px]:left-0 pointer-events-none select-none"
          />
        </div>
      </div>

      <div className="">
        <div
          className={`${pixelFont.className} flex justify-end items-center gap-10 text-sm max-[460px]:text-xs max-[460px]:gap-5`}
        >
          <a>Home</a>
          <a>Gallery</a>
          <a>About</a>
          <a>Connect</a>
        </div>
      </div>
    </header>
  );
}
