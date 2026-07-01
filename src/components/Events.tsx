function Events() {
  const eventGroups = [
    {
      title: "LIVE EVENTS",
      color: "text-red-500",
      events: [
        {
          name: "Robo Race Championship",
          date: "12 Aug 2025",
          place: "Pune",
        },
        {
          name: "Robo War League",
          date: "18 Aug 2025",
          place: "Mumbai",
        },
      ],
    },
    {
      title: "UPCOMING",
      color: "text-yellow-400",
      events: [
        {
          name: "FPV Drone Racing",
          date: "25 Aug 2025",
          place: "Nagpur",
        },
        {
          name: "RC Racing Cup",
          date: "30 Aug 2025",
          place: "Nashik",
        },
      ],
    },
    {
      title: "RESULTS",
      color: "text-green-400",
      events: [
        {
          name: "Line Follower",
          date: "Winner: Team Alpha",
          place: "#1 National Rank",
        },
        {
          name: "Robo Hockey",
          date: "Winner: RoboX",
          place: "#2 National Rank",
        },
      ],
    },
  ];

  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-center text-red-500 uppercase tracking-[8px] text-sm">
          EVENTS
        </p>

        <h2 className="text-center text-white text-5xl font-bold mt-4">
          EXPLORE ROBOTICS EVENTS
        </h2>

        <p className="text-center text-gray-400 mt-5 text-lg">
          Participate in exciting robotics competitions across India.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {eventGroups.map((group, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#252525] rounded-2xl p-6 hover:border-red-500 transition duration-300"
            >
              <h3 className={`text-2xl font-bold mb-6 ${group.color}`}>
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.events.map((event, i) => (
                  <div
                    key={i}
                    className="border border-[#2a2a2a] rounded-xl p-4"
                  >
                    <h4 className="text-white font-semibold text-lg">
                      {event.name}
                    </h4>

                    <p className="text-gray-400 mt-2">
                      {event.date}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {event.place}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Events;