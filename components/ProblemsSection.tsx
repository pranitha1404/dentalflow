import {
  Sofa,
  Eye,
  Calendar,
  TrendingDown,
  Handshake,
  Target,
} from "lucide-react";

export default function ProblemsSection() {
  const problems = [
    {
      icon: Sofa,
      title: "Empty Chairs",
      text: "Some days your chair sits empty, and the silence is costing you more than just time.",
    },
    {
      icon: Eye,
      title: "Tough Competition",
      text: "Competitors seem to get all the attention and new patient bookings despite your superior care.",
    },
    {
      icon: Calendar,
      title: "Unpredictable Flow",
      text: "Patient flow is unpredictable, making it nearly impossible to forecast your month with confidence.",
    },
    {
      icon: TrendingDown,
      title: "Low ROI",
      text: "You spend money on marketing but see little return, feeling like your budget is disappearing into a void.",
    },
    {
      icon: Handshake,
      title: "Stagnant Referrals",
      text: "Your once-reliable referrals have slowed down, and organic growth has hit a plateau.",
    },
    {
      icon: Target,
      title: "Attraction Struggle",
      text: "You're a great dentist but struggle to attract new patients consistently in a digital world.",
    },
  ];

  return (
    <section
      className="relative py-20 lg:py-[120px] overflow-hidden bg-[#F8F9F8]"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
        <div className="flex">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full border border-[#A1DFDA] -mt-6 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">

          <h2
            style={{ fontFamily: "Namdhinggo" }}
            className="leading-none"
          >
            <span className="block text-[#106965] text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
              Does This Sound
            </span>

            <span className="block mt-2 text-[#106965] text-[50px] sm:text-[62px] md:text-[72px] lg:text-[82px] font-bold">
              Familiar?
            </span>
          </h2>

          <p className="mt-6 text-[#4B5563] text-[16px] md:text-[18px] leading-8 max-w-[650px] mx-auto">
            Most dental clinics face these challenges before building a
            predictable patient acquisition system.
          </p>

        </div>

        {/* Problems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-20 gap-x-10 lg:gap-x-14">

          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center max-w-[320px] mx-auto group"
              >
                {/* Icon */}
                <div className="relative flex justify-center mb-6">

                  <div className="absolute w-14 h-14 rounded-full bg-[#48C9BE]/20 blur-xl group-hover:scale-125 transition duration-500" />

                  <div className="relative z-10">
                    <Icon
                      size={42}
                      strokeWidth={1.7}
                      color="#48C9BE"
                      className="group-hover:-translate-y-2 transition duration-500"
                    />
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#111827] mb-5">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-[#4B5563] text-[16px] leading-8">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}