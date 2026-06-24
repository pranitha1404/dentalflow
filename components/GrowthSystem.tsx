"use client";

import Image from "next/image";

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
      className="relative py-20 md:py-24 lg:py-32 bg-[#FBF9F8] overflow-hidden"
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
      <div className="absolute top-40 left-10 w-[350px] h-[350px] bg-[#48C9BE]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[#106965]/10 rounded-full blur-[120px]" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14 lg:mb-20">

          <h2
            className="text-[#106965] font-bold leading-tight whitespace-nowrap"
            style={{
              fontFamily: "Namdhinggo",
              fontSize: "clamp(32px,5vw,54px)",
            }}
          >
            The Simple 3-Step Patient Growth System
          </h2>

          <p className="mt-5 text-[#64748B] text-[16px] max-w-[650px] mx-auto">
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
                relative
                overflow-hidden
                rounded-[30px]
                bg-white
                border
                border-[#E8EEF3]
                shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                hover:-translate-y-5
                hover:shadow-[0_30px_70px_rgba(16,105,101,0.18)]
                transition-all
                duration-500
              "
            >
              {/* Top Glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#106965] via-[#48C9BE] to-[#106965]" />

              {/* Image */}
              <div className="relative overflow-hidden h-[250px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">

                <div
                  className="
                    inline-flex
                    items-center
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

                <h3 className="mt-6 text-[24px] font-bold text-[#17212A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[16px] leading-8 text-[#475569]">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div
                  className="
                    mt-8
                    h-[4px]
                    w-0
                    bg-gradient-to-r
                    from-[#106965]
                    to-[#48C9BE]
                    rounded-full
                    group-hover:w-full
                    transition-all
                    duration-700
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