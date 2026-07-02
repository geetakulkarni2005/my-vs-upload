function About() {
  const stats = [
    {
      number: "10K+",
      title: "Students",
    },
    {
      number: "500+",
      title: "Teams",
    },
    {
      number: "100+",
      title: "Events",
    },
    {
      number: "50+",
      title: "Cities",
    },
  ];

  return (
    <section className="bg-[#050505] py-24 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-red-500 uppercase tracking-[8px] text-sm">
            ABOUT BOTLEAGUE
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            INDIA'S BIGGEST
            <br />
            ROBOTICS SPORTS PLATFORM
          </h2>

          <p className="text-gray-400 mt-8 leading-8 text-lg">
            BotLeague is building India's largest robotics sports ecosystem.
            We connect students, schools, colleges, mentors and industries
            through exciting robotics competitions and national rankings.
          </p>

          <button className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#252525] rounded-2xl p-8 text-center hover:border-red-500 transition duration-300"
            >
              <h3 className="text-red-500 text-5xl font-bold">
                {item.number}
              </h3>

              <p className="text-white mt-4 text-xl">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;