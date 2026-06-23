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
      className="relative py-16 md:py-20 lg:py-[110px] overflow-hidden"
      style={{ backgroundColor: "#F8F9F8" }}
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

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <h2
          className="text-center mb-12 md:mb-16 lg:mb-20 text-[#106965] font-bold text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.2]"
          style={{
            fontFamily: "Namdhinggo",
          }}
        >
          Does This Sound Familiar?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-16">

          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="max-w-[290px] mx-auto text-center"
              >
                <div className="flex justify-center mb-5 md:mb-6">
                  <Icon
                    size={34}
                    strokeWidth={1.6}
                    color="#48C9BE"
                  />
                </div>

                <h3
                  className="mb-4 text-[18px] md:text-[20px] font-bold text-black"
                >
                  {item.title}
                </h3>

                <p
                  className="text-black text-[15px] md:text-[16px] leading-7 md:leading-8 font-medium"
                >
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