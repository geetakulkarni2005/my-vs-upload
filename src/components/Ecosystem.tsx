import {
  FaChalkboardTeacher,
  FaIndustry,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";

function Ecosystem() {
  const ecosystem = [
    {
      title: "Students",
      desc: "Learn robotics, compete nationally and build your future.",
      icon: <FaUserGraduate />,
    },
    {
      title: "Schools & Colleges",
      desc: "Empower students with robotics competitions and innovation.",
      icon: <FaSchool />,
    },
    {
      title: "Mentors",
      desc: "Guide the next generation of robotics innovators.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Industry",
      desc: "Connect with skilled talent and future engineers.",
      icon: <FaIndustry />,
    },
  ];

  return (
    <section className="bg-black py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-center text-red-500 uppercase tracking-[8px] text-sm font-semibold">
          ECOSYSTEM
        </p>

        <h2 className="text-center text-white text-4xl md:text-6xl font-black mt-4">
          BUILDING THE ROBOTICS ECOSYSTEM
        </h2>

        <p className="text-center text-gray-400 mt-5 text-lg">
          Bringing together students, institutions and industry.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {ecosystem.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#111]
                border
                border-gray-800
                rounded-3xl
                p-10
                text-center
                hover:border-red-500
                hover:-translate-y-3
                hover:shadow-[0_0_30px_rgba(255,59,59,.20)]
                transition-all
                duration-500
                group
              "
            >
              {/* Icon */}
              <div
                className="
                  w-24
                  h-24
                  mx-auto
                  rounded-full
                  border-2
                  border-red-500
                  flex
                  items-center
                  justify-center
                  text-red-500
                  text-4xl
                  group-hover:bg-red-500
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-bold mt-8">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Ecosystem;