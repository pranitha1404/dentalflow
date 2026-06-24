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
      className="relative bg-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
        <div className="flex">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 border border-[#D7F1EC] rounded-full -mt-6 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#48C9BE]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#106965]/10 rounded-full blur-[120px]" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            {/* HEADING */}
            <h2
              className="
                text-center
                lg:text-left
                text-[#106965]
                text-[36px]
                sm:text-[42px]
                md:text-[50px]
                lg:text-[58px]
                leading-none
                mb-6
                lg:whitespace-nowrap
              "
              style={{ fontFamily: "Namdhinggo" }}
            >
              Free Patient Growth Plan
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#475569] text-[17px] leading-8 max-w-[580px] mb-10 text-center lg:text-left">
              Get a personalized growth blueprint showing exactly where your
              practice stands, uncover hidden opportunities, and build a clear
              path to attracting more patients consistently.
            </p>

            {/* SUBTITLE */}
            <h3 className="text-[22px] font-semibold text-[#17212A] mb-8 text-center lg:text-left">
              Your blueprint includes:
            </h3>

            {/* CHECKLIST */}
            <div className="space-y-5 mb-12">

              {items.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
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
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#106965] to-[#48C9BE] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <Check size={18} />
                  </div>

                  <p className="text-[16px] text-[#17212A] font-medium">
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
                  group
                  bg-[#106965]
                  hover:bg-[#0B5A56]
                  text-white
                  px-10
                  py-4
                  rounded-2xl
                  shadow-[0_15px_35px_rgba(16,105,101,0.25)]
                  flex
                  items-center
                  gap-3
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Get My Free Growth Plan

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
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
                  max-w-[420px]
                  sm:max-w-[550px]
                  lg:max-w-[800px]
                  h-auto
                  object-contain
                  hover:scale-105
                  transition-all
                  duration-700
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