function Categories() {
  const categories = [
    {
      title: "MINI MAKERS",
      desc: "Creative young innovators building their first robots.",
      icon: "🤖",
    },
    {
      title: "JUNIOR INNOVATORS",
      desc: "Engineering, design and robotics competition skills.",
      icon: "⚙️",
    },
    {
      title: "YOUNG ENGINEERS",
      desc: "Advanced robotics challenges and strategy.",
      icon: "🚀",
    },
    {
      title: "ROBO MINDS",
      desc: "Esports, AI and next generation robotics.",
      icon: "🏆",
    },
  ];

  return (
    <section className="bg-black py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <p className="text-center text-[#ff3b3b] uppercase tracking-[12px] text-[12px] font-medium">
          CATEGORIES
        </p>

        <h2 className="mt-3 text-center text-white text-[48px] md:text-[72px] font-black leading-[0.9]">
          FIND YOUR CATEGORY
        </h2>

        <p className="mt-6 text-center text-[#94A3B8] text-[18px] md:text-[20px]">
          Discover the right competition for your age and skills.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-8 text-center hover:border-[#ff3b3b] hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,59,59,0.25)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#ff3b3b] flex items-center justify-center text-4xl bg-[#1a1a1a]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-white text-[24px] font-bold leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-[#94A3B8] leading-7 text-[16px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;