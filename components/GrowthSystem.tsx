"use client";

import { useState } from "react";
import Image from "next/image";

export default function GrowthSystem() {
  const [active, setActive] = useState<number | null>(0);

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
      className="relative py-16 md:py-20 lg:py-28 bg-[#FBF9F8] overflow-hidden"
    >
      {/* Top Scallop Border */}
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

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <h2
          className="text-center text-[#106965] text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold mb-12 md:mb-16 lg:mb-20"
          style={{ fontFamily: "Namdhinggo" }}
        >
          The Simple 3-Step Patient Growth System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {steps.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className={`
                cursor-pointer
                bg-white
                rounded-[28px]
                overflow-hidden
                border
                border-[#E2E8F0]
                transition-all
                duration-300
                ${
                  active === index
                    ? "-translate-y-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    : "shadow-sm hover:-translate-y-2 hover:shadow-lg"
                }
              `}
            >
              {/* IMAGE */}
              <div className="relative h-[220px] sm:h-[240px] md:h-[260px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">

                <span className="inline-block px-4 py-2 rounded-full bg-[#F1F5F9] text-[#000000] text-[11px] md:text-xs tracking-[2px]">
                  {item.step}
                </span>

                <h3 className="mt-5 md:mt-6 text-[18px] md:text-[20px] font-semibold text-[#17212A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] md:text-[16px] leading-7 md:leading-8 text-[#000000]">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}