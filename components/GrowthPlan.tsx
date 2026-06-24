import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export default function GrowthPlan() {
  const items = [
    "How many patients you're currently losing",
    "Local opportunities in your specific area",
    "Quick wins to increase bookings today",
    "A patient acquisition roadmap for the next 90 days",
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-[80px] md:py-[100px]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#48C9BE]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#106965]/10 rounded-full blur-[120px]" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div
            className="
              order-2
              lg:order-1
              w-full
              text-center
              lg:text-left
              mx-auto
            "
          >

            {/* HEADING */}
            <h2
              className="
                text-[#106965]
                mb-6
                text-center
                whitespace-nowrap
              "
              style={{
                fontFamily: "Namdhinggo",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "-1px",
                fontSize: "clamp(1.3rem, 4vw, 3.6rem)",
              }}
            >
              Free Patient Growth Plan
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-[#475569]
                text-[15px]
                sm:text-[16px]
                leading-7
                max-w-[560px]
                mx-auto
                lg:mx-0
                mb-10
                text-center
                lg:text-left
              "
            >
              Get a personalized growth blueprint showing exactly where your
              practice stands, uncover hidden opportunities, and build a clear
              path to attracting more patients consistently.
            </p>

            {/* SUBTITLE */}
            <h3 className="text-[22px] font-semibold text-[#17212A] mb-8 text-center lg:text-left">
              Your blueprint includes:
            </h3>

            {/* CHECKLIST */}
            <div className="space-y-5 mb-12 max-w-[560px] mx-auto lg:mx-0">

              {items.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    p-5
                    rounded-2xl
                    bg-[#F8FBFB]
                    border
                    border-[#E5F4F2]
                    hover:bg-white
                    hover:shadow-[0_15px_35px_rgba(16,105,101,0.12)]
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-gradient-to-r
                      from-[#106965]
                      to-[#48C9BE]
                      flex
                      items-center
                      justify-center
                      text-white
                      shadow-lg
                      flex-shrink-0
                    "
                  >
                    <Check size={18} />
                  </div>

                  <p className="text-[14px] sm:text-[16px] text-[#17212A] font-medium leading-6 text-left">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* CTA BUTTON */}
            <div className="flex justify-center lg:justify-start">

              <button
                type="button"
                className="
                  min-h-[54px]
                  px-8
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-[10px]
                  bg-[#106965]
                  text-white
                  text-[16px]
                  font-medium
                  shadow-lg
                  hover:bg-[#0B5A56]
                  transition
                "
              >
                Get My Free Growth Plan
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-[#48C9BE]/20 blur-[120px] rounded-full" />

              <Image
                src="/images/growth-lost-patient-analysis.png"
                alt="Growth Plan"
                width={900}
                height={900}
                priority
                className="
                  relative
                  z-10
                  w-full
                  max-w-[280px]
                  sm:max-w-[420px]
                  md:max-w-[520px]
                  lg:max-w-[800px]
                  h-auto
                  object-contain
                  transition-all
                  duration-700
                  hover:scale-[1.02]
                "
              />

              {/* FLOATING CARD */}
              <div
                className="
                  hidden
                  lg:block
                  absolute
                  -bottom-4
                  -left-10
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-2xl
                  border
                  border-[#E5F4F2]
                "
              >
                <div className="text-[#106965] text-3xl font-bold">
                  +90 Days
                </div>

                <p className="text-sm text-[#475569] mt-2">
                  Complete patient acquisition roadmap
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}