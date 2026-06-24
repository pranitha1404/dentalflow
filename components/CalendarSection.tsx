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
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-[80px]
        md:py-[100px]
      "
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] items-center gap-12 lg:gap-16">

          {/* IMAGE SIDE */}
          <div className="order-1 flex justify-center lg:justify-start">

            <div className="relative">

              {/* Glow follows image */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#DDF7F4]
                  rounded-full
                  blur-[120px]
                  opacity-70
                  scale-110
                "
              />

              <Image
                src="/images/calendar-team-meeting.png"
                alt="Calendar Team"
                width={620}
                height={620}
                className="
                  relative
                  z-10
                  w-full
                  max-w-[280px]
                  sm:max-w-[420px]
                  md:max-w-[520px]
                  lg:max-w-[620px]
                  h-auto
                  object-contain
                  transition-all
                  duration-700
                  hover:scale-[1.02]
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                "
              />

              {/* Floating Stat Card */}
              <div
                className="
                  absolute
                  z-20
                  bottom-4
                  right-0
                  sm:right-4
                  bg-white
                  rounded-2xl
                  border
                  border-[#E7EFEF]
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
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

          {/* CONTENT SIDE */}
          <div className="order-2 text-center lg:text-left w-full">

            {/* Heading */}
            <h2
              className="text-[#005659] mb-8"
              style={{
                fontFamily: "Namdhinggo",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "-1px",
              }}
            >
              <span
                className="block whitespace-nowrap"
                style={{
                  fontSize: "clamp(1.3rem,4vw,3.875rem)",
                }}
              >
                What If Your Calendar Was Full
              </span>

              <span
                className="block"
                style={{
                  fontSize: "clamp(1.3rem,4vw,3.875rem)",
                }}
              >
                Next Month?
              </span>
            </h2>

            {/* Checklist */}
            <div className="space-y-4 mt-10 mb-10 max-w-[560px] mx-auto lg:mx-0">

              {points.map((point, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-xl
                    bg-white
                    border
                    border-[#E7EFEF]
                    shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                    hover:bg-[#F4FBFA]
                    transition-all
                    duration-300
                  "
                >
                  <CircleCheck
                    size={22}
                    strokeWidth={1.8}
                    className="text-[#005659] flex-shrink-0"
                  />

                  <span className="text-[14px] sm:text-[16px] text-[#1B1C1C] text-left leading-6">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Area */}
            <div className="border-t border-[#D9E3E3] pt-8 max-w-[560px] mx-auto lg:mx-0">

              <p className="mb-6 text-[#005659] text-[15px] leading-7">
                That's exactly what our Patient Growth System is designed to
                create.
              </p>

              <div className="flex justify-center lg:justify-start">

                <a
                  href="#pricing"
                  className="
                    min-h-[54px]
                    px-8
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-[10px]
                    bg-[#005659]
                    text-white
                    text-[16px]
                    font-medium
                    shadow-lg
                    hover:bg-[#00484A]
                    transition
                  "
                >
                  <span>Start Growing Today</span>
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