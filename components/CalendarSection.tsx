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
    <section className="relative bg-[#FFFFFF] py-[60px] md:py-[80px] overflow-hidden">
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

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[120px] items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/calendar-team-meeting.png"
              alt="Calendar Team"
              width={454}
              height={530}
              className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[454px] h-auto"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[620px] text-center lg:text-left">

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

            <div className="space-y-5 mb-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <CircleCheck
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#005659] flex-shrink-0"
                  />

                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#1B1C1C",
                      fontWeight: 400,
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#BEC9C9] pt-6">

              <p
                className="mb-6"
                style={{
                  color: "#005659",
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: 400,
                }}
              >
                That's exactly what our Patient Growth System is designed to create.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  className="
                    bg-[#005659]
                    hover:bg-[#00484A]
                    text-white
                    px-8
                    py-3
                    rounded-[8px]
                    flex
                    items-center
                    gap-2
                    transition
                  "
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    Start Growing Today
                  </span>

                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}