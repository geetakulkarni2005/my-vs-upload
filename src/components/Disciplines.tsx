import drone from "../assets/dron.jpg";
import lineFollower from "../assets/line-follower.jpg";
import rcRacing from "../assets/rc-racing.jpg";
import roboHockey from "../assets/robo-hockey.png";
import roboRace from "../assets/robo-race.png";
import roboWar from "../assets/robo-war.png";

function Disciplines() {
  const disciplines = [
    {
      title: "Robo Race",
      image: roboRace,
      desc: "Speed, precision and engineering excellence.",
    },
    {
      title: "Line Follower",
      image: lineFollower,
      desc: "Navigate tracks with intelligent autonomous robots.",
    },
    {
      title: "RC Racing",
      image: rcRacing,
      desc: "High-speed remote-controlled racing competition.",
    },
    {
      title: "FPV Drone Racing",
      image: drone,
      desc: "Fly through exciting obstacle courses.",
    },
    {
      title: "Robo Hockey",
      image: roboHockey,
      desc: "Fast-paced robotic sports action.",
    },
    {
      title: "Robo War",
      image: roboWar,
      desc: "Battle robots in the ultimate arena.",
    },
  ];

  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-center text-red-500 uppercase tracking-[8px] text-sm">
          SPORTS
        </p>

        <h2 className="text-center text-white text-5xl font-bold mt-4">
          COMPETITION DISCIPLINES
        </h2>

        <p className="text-center text-gray-400 mt-5 text-lg">
          Choose your favourite robotics competition discipline.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {disciplines.map((item, index) => (

            <div
              key={index}
              className="bg-[#121212] rounded-2xl overflow-hidden border border-[#252525] hover:border-red-500 hover:-translate-y-2 duration-300"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-7">

                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

                <button className="mt-6 text-red-500 font-semibold hover:text-red-400">
                  Learn More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Disciplines;