function Advantage() {
  const features = [
    {
      title: "NATIONAL RECOGNITION",
      desc: "Benchmark your skills on India's official robotics leaderboard.",
    },
    {
      title: "FAIR JUDGING",
      desc: "Compete with confidence under expert evaluation and transparent scoring.",
    },
    {
      title: "CAREER OPPORTUNITIES",
      desc: "Connect with colleges, recruiters and industry experts.",
    },
    {
      title: "HIGH-ENERGY ECOSYSTEM",
      desc: "Become part of India's fastest growing robotics community.",
    },
  ];

  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-center uppercase tracking-[8px] text-red-500 text-sm">
          WHY REGISTER ?
        </p>

        <h2 className="text-center text-white text-5xl font-bold mt-4">
          THE LEAGUE ADVANTAGE
        </h2>

        <p className="text-center text-gray-400 mt-5 text-lg">
          Everything you need to grow in India's Robotics League.
        </p>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left Side */}
          <div className="space-y-6">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-[#121212] border border-[#252525] rounded-2xl p-7 hover:border-red-500 duration-300"
              >
                <h3 className="text-red-500 font-bold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-8">
                  {item.desc}
                </p>
              </div>

            ))}

          </div>

          {/* Right Side */}
          <div className="bg-[#121212] border border-[#252525] rounded-3xl p-10 flex flex-col justify-center items-center">

            <div className="w-32 h-32 rounded-full bg-red-500 flex items-center justify-center text-6xl">
              🏆
            </div>

            <h3 className="text-white text-3xl font-bold mt-8">
              National Leaderboard
            </h3>

            <p className="text-gray-400 text-center mt-5 leading-8">
              Track your rankings, compete with the best teams across India,
              and earn national recognition through verified robotics events.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Advantage;