import {
  FaTools,
  FaTrophy,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

function UserJourney() {
  const steps = [
    {
      step: "STEP 1",
      title: "BUILD YOUR TEAM",
      icon: <FaTools />,
    },
    {
      step: "STEP 2",
      title: "COMPETE ACROSS INDIA",
      icon: <FaUniversity />,
    },
    {
      step: "STEP 3",
      title: "EARN NATIONAL RANKING",
      icon: <FaTrophy />,
    },
    {
      step: "STEP 4",
      title: "JOIN THE LEAGUE",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="bg-black py-24 px-8 md:px-16">
      {/* Heading */}
      <p className="text-center text-red-500 tracking-[8px] uppercase text-sm">
        USER JOURNEY
      </p>

      <h2 className="text-center text-white text-5xl md:text-6xl font-extrabold mt-4">
        YOUR PATH TO THE LEAGUE
      </h2>

      <p className="text-center text-gray-400 mt-4 text-lg">
        Build • Compete • Rank • Join
      </p>

      {/* Timeline */}
      <div className="relative mt-24">
        {/* Horizontal Line */}
        <div className="absolute top-10 left-0 w-full h-[2px] bg-[#2d3547]"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circle */}
              <div className="w-20 h-20 rounded-full border-[3px] border-red-500 bg-black flex items-center justify-center text-red-500 text-3xl shadow-[0_0_20px_rgba(255,59,59,0.4)] z-10">
                {item.icon}
              </div>

              {/* Step */}
              <p className="mt-8 text-red-500 text-sm tracking-[3px] uppercase">
                {item.step}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-white text-2xl font-bold leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserJourney;