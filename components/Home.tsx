import { Press_Start_2P } from "next/font/google";
const pixelFont = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const Home = () => {
  return (
    <div
      className={`${pixelFont.className} flex flex-row justify-around p-15 bg-[#0f1020]`}
    >
      <section className="flex justify-center items-center">
        <img
          src="/home/homepage.gif"
          style={{ imageRendering: "pixelated" }}
          width={350}
          height={200}
          className="rounded-2xl"
        />
      </section>
      <div className="flex ">
        <p className=" flex flex-col justify-center items-center gap-1 text-xs tracking-[0.2em] uppercase text-slate-200/80 leading-11">
          <span>breathe in</span>
          <span>breathe out</span>
          <span>enjoy the pixels</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
