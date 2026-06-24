import Image from "next/image";
import { CircleCheck, ArrowRight } from "lucide-react";
import Scallop from "@/components/Scallop";

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
    pt-[120px]
    pb-[80px]
    md:pt-[140px]
    md:pb-[100px]
  "
    >

      <Scallop />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] items-center gap-12 lg:gap-20">

          {/* IMAGE SIDE */}
          <div className="order-1 flex justify-center lg:justify-start">

            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#DDF7F4]
                  rounded-full
                  blur-[140px]
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
                  max-w-[320px]
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

              {/* Floating Card */}
              <div
                className="
                  absolute
                  z-20
                  bottom-10
                  right-6
                  bg-white
                  rounded-3xl
                  border
                  border-[#E7EFEF]
                  shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                  px-6
                  py-5
                "
              >
                <h3 className="text-[#005659] text-[40px] font-bold leading-none">
                  +42%
                </h3>

                <p className="text-[14px] text-[#4B5563] leading-6 mt-2">
                  More Monthly
                  <br />
                  Bookings
                </p>
              </div>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div className="order-2 text-center lg:text-left w-full">

            {/* HEADING */}
            <h2
              className="
                text-[#005659]
                mb-10
                text-[32px]
                sm:text-[42px]
                md:text-[54px]
                lg:text-[62px]
              "
              style={{
                fontFamily: "Namdhinggo",
                fontWeight: 600,
                lineHeight: "1.05",
                letterSpacing: "-1px",
              }}
            >
              <span className="block">
                What If Your Calendar Was Full
              </span>

              <span className="block">
                Next Month?
              </span>
            </h2>

            {/* CHECKLIST */}
            <div className="space-y-5 mb-12 max-w-[560px] mx-auto lg:mx-0">

              {points.map((point, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    p-5
                    rounded-2xl
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

                  <span className="text-[16px] text-[#1B1C1C] text-left leading-7">
                    {point}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="border-t border-[#D9E3E3] pt-8 max-w-[560px] mx-auto lg:mx-0">

              <p className="mb-8 text-[#005659] text-[16px] leading-7">
                That's exactly what our Patient Growth System is designed to
                create.
              </p>

              <div className="flex justify-center lg:justify-start">

                <a
                  href="#pricing"
                  className="
                    min-h-[56px]
                    px-8
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#005659]
                    text-white
                    text-[16px]
                    font-medium
                    shadow-lg
                    hover:bg-[#00484A]
                    hover:scale-[1.02]
                    transition-all
                    duration-300
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