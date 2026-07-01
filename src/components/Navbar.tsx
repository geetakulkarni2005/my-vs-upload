function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1440px] mx-auto h-[84px] flex items-center justify-between px-16">

        {/* Logo */}
        <div className="text-[42px] font-black tracking-tight leading-none cursor-pointer">
          <span className="text-white">Bot</span>
          <span className="text-[#ff3b3b]">League</span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-16">

          <a
            href="#"
            className="text-white text-[18px] font-medium hover:text-[#ff3b3b] transition duration-300"
          >
            Events
          </a>

          <a
            href="#"
            className="text-white text-[18px] font-medium hover:text-[#ff3b3b] transition duration-300"
          >
            Programs
          </a>

          <a
            href="#"
            className="text-white text-[18px] font-medium hover:text-[#ff3b3b] transition duration-300"
          >
            Community
          </a>

          <a
            href="#"
            className="text-white text-[18px] font-medium hover:text-[#ff3b3b] transition duration-300"
          >
            Ranks
          </a>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-5">

          <button className="h-[52px] w-[130px] border border-white/30 rounded-lg text-white font-semibold hover:border-white transition duration-300">
            LOGIN
          </button>

          <button className="h-[52px] px-10 rounded-lg bg-[#ff3b3b] text-white font-bold hover:bg-red-600 transition duration-300 shadow-lg shadow-red-500/20">
            REGISTER NOW
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;