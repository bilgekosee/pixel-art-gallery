const About = () => {
  return (
    <div className="w-full flex-none bg-[#0a0b18] py-20 px-8 md:px-24 border-t border-slate-800/50 flex flex-col items-center shadow-[inset_0_20px_30px_rgba(0,0,0,0.5)]">
      <h2 className="text-center text-slate-500 mb-8 text-lg md:text-xl tracking-[0.4em] uppercase">
        About
      </h2>
      <div className="max-w-3xl text-center space-y-8">
        <p className="text-slate-300 text-xs md:text-sm leading-8 tracking-wide drop-shadow-md">
          Welcome to a tiny corner of the internet where pixels breathe and time slows down. 
          This gallery is a digital sanctuary—a collection of moments curated to bring you nostalgia, peace, and a little bit of magic.
        </p>
        <p className="text-slate-400 text-[10px] md:text-xs leading-7 tracking-widest uppercase opacity-80">
          Put on your headphones, let the melodies wash over you, and get lost in the grid. 
          No rush, no stress. Just you and the pixels.
        </p>
      </div>
    </div>
  );
};

export default About;
