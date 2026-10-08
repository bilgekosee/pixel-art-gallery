import About from "@/components/About";
import AudioGuide from "@/components/AudioGuide";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SalonWall from "@/components/SalonWall";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SalonWall />
        <About />
      </main>
      <AudioGuide />
    </>
  );
}
