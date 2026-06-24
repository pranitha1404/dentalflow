"use client";

import Image from "next/image";
import Scallop from "@/components/Scallop";

export default function GrowthSystem() {
  const steps = [
    {
      step: "STEP 01",
      title: "Attract Local Patients",
      description:
        "Target people actively looking for dental services in your area with precision-engineered local SEO and paid search campaigns.",
      image: "/images/step1-local-patients.png",
    },
    {
      step: "STEP 02",
      title: "Convert Into Bookings",
      description:
        "We use optimized booking funnels and conversion rate optimization that turn cold inquiries into high-value patient appointments.",
      image: "/images/step2-bookings.png",
    },
    {
      step: "STEP 03",
      title: "Grow Consistently",
      description:
        "Track real-time results and continuously improve your patient flow month after month with our data-driven feedback loops.",
      image: "/images/step3-consistency.png",
    },
  ];

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[#FBF9F8] pt-[120px] pb-[80px] md:pt-[140px] md:pb-[100px]"
    >

      <Scallop />

      {/* Background Glow */}
      <div className="absolute top-40 left-10 w-[350px] h-[350px] bg-[#48C9BE]/10 rounded-full blur-[120px]" />
      {/* Background Glow */}
      <div className="absolute top-40 left-10 w-[350px] h-[350px] bg-[#48C9BE]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[#106965]/10 rounded-full blur-[120px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14 lg:mb-20">

          <h2
            className="text-[#106965] whitespace-nowrap"
            style={{
              fontFamily: "Namdhinggo",
              fontWeight: 700,
              lineHeight: "1.1",
              letterSpacing: "-1px",
              fontSize: "clamp(1.1rem, 3vw, 3.375rem)",
            }}
          >
            The Simple 3-Step Patient Growth System
          </h2>

          <p className="mt-5 text-[#64748B] text-[16px] max-w-[650px] mx-auto leading-7">
            A proven framework that helps dental clinics attract more patients,
            increase bookings and grow consistently every month.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((item, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[30px]
                bg-white
                border
                border-[#E8EEF3]
                shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(16,105,101,0.12)]
                transition-all
                duration-500
              "
            >
              {/* Top Accent */}
              <div className="h-[4px] bg-gradient-to-r from-[#106965] via-[#48C9BE] to-[#106965]" />

              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8 text-center flex flex-col items-center">

                {/* Step Badge */}
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#106965]
                    to-[#48C9BE]
                    text-white
                    text-[11px]
                    font-semibold
                    tracking-[2px]
                    shadow-lg
                  "
                >
                  {item.step}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    whitespace-nowrap
                    text-[#17212A]
                  "
                  style={{
                    fontWeight: 700,
                    lineHeight: "1.15",
                    letterSpacing: "-0.5px",
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[16px] leading-8 text-[#475569] text-center">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div
                  className="
                    mt-8
                    h-[4px]
                    w-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#106965]
                    to-[#48C9BE]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}