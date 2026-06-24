import Image from "next/image";
import { CircleCheck, ArrowRight } from "lucide-react";

export default function CalendarSection() {
  const points = [
    "New patient inquiries every week",
    "A calendar filled with qualified bookings",
    "More high-value treatment opportunities",
    "Predictable monthly growth",
    "Confidence knowing where your next patients come from",
  ];

  return (
    <section className="relative bg-[#FFFFFF] py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Top Scallop Border */}
      <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
        <div className="flex">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 border border-[#A1DFDA] rounded-full -mt-6 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#DDF7F4] rounded-full blur-[120px] opacity-60" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[120px] items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">

              <Image
                src="/images/calendar-team-meeting.png"
                alt="Calendar Team"
                width={454}
                height={530}
                className="
                  w-full
                  max-w-[320px]
                  sm:max-w-[400px]
                  md:max-w-[430px]
                  lg:max-w-[454px]
                  h-auto
                  object-contain
                  hover:scale-[1.03]
                  transition-all
                  duration-700
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                "
              />

              {/* Floating Card */}
              <div
                className="
                  absolute
                  -bottom-4
                  -right-2
                  bg-white
                  rounded-2xl
                  border
                  border-[#E7EFEF]
                  shadow-xl
                  px-5
                  py-4
                "
              >
                <h3 className="text-[#005659] text-[28px] font-bold">
                  +42%
                </h3>

                <p className="text-[13px] text-[#4B5563] leading-5">
                  More Monthly
                  <br />
                  Bookings
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">

            <h2
              className="mb-10 text-[#005659] text-[30px] sm:text-[34px] lg:text-[38px]"
              style={{
                fontFamily: "Namdhinggo",
                fontWeight: 700,
                lineHeight: "1.3",
                letterSpacing: "-0.96px",
              }}
            >
              What If Your Calendar Was Full
              <br />
              Next Month?
            </h2>

            {/* Checklist */}
            <div className="space-y-4 mb-10">

              {points.map((point, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-3
                    p-4
                    rounded-xl
                    hover:bg-[#F4FBFA]
                    transition-all
                    duration-300
                  "
                >
                  <CircleCheck
                    size={20}
                    strokeWidth={1.8}
                    className="text-[#005659] flex-shrink-0 mt-1"
                  />

                  <span className="text-[15px] md:text-[16px] leading-7 text-[#1B1C1C] text-left">
                    {point}
                  </span>
                </div>
              ))}

            </div>

            {/* Bottom Area */}
            <div className="border-t border-[#D9E3E3] pt-8">

              <p className="mb-6 text-[#005659] text-[14px] leading-6">
                That's exactly what our Patient Growth System is designed to create.
              </p>

              <div className="flex justify-center lg:justify-start">

                <a
                  href="#pricing"
                  className="
                    bg-[#005659]
                    hover:bg-[#00484A]
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    flex
                    items-center
                    gap-3
                    shadow-lg
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-[16px] font-medium">
                    Start Growing Today
                  </span>

                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}