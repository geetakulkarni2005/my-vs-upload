import hero from "../assets/Robot.jpg";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={hero}
        alt="Robot Arena"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "80% center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.92) 18%, rgba(0,0,0,.75) 38%, rgba(0,0,0,.45) 60%, rgba(0,0,0,.10) 80%, transparent 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-[620px] ml-20">

          {/* Small Heading */}
          <p className="text-[#ff3b3b] uppercase tracking-[12px] text-base mb-6">
            INDIA'S ULTIMATE
          </p>

          {/* Main Heading */}
          <h1 className="text-white font-black leading-[0.88] text-[82px] md:text-[105px]">
            ROBOTICS
            <br />
            ARENA
          </h1>

          {/* Description */}
          <p className="mt-8 text-white text-[22px] leading-10">
            Build. Compete. Rank.
            <br />
            The National Ecosystem For Robotics Sports.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">

            <button
              className="
              bg-[#ff3b3b]
              hover:bg-red-600
              px-10
              py-4
              rounded-md
              text-white
              font-semibold
              text-lg
              transition"
            >
              CREATE ACCOUNT
            </button>

            <button
              className="
              border
              border-white/30
              hover:border-white
              px-10
              py-4
              rounded-md
              text-white
              text-lg
              transition"
            >
              EXPLORE EVENTS
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;