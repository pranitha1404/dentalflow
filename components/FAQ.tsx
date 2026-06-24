"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Will this work for a small clinic?",
    answer:
      "Yes. Our system is specifically designed for solo dentists and small practices. We understand the unique challenges of smaller teams and focus on high-impact strategies that don't require internal marketing departments.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most clinics begin seeing measurable improvements within the first few weeks. Results vary based on location and competition.",
  },
  {
    question: "Do I need a large marketing budget?",
    answer:
      "No. We focus on maximizing results from your existing resources before increasing advertising spend.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. We handle the technical implementation while keeping everything simple and easy to understand.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-white py-[80px] md:py-[100px] overflow-hidden"
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

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-[100px] items-start">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <h2
              className="
                text-[#106965]
                mb-8
                text-[34px]
                sm:text-[42px]
                md:text-[52px]
                lg:text-[58px]
              "
              style={{
                fontFamily: "Namdhinggo",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "-1px",
              }}
            >
              Frequently Asked Questions
            </h2>

            <p
              className="
                text-[#171C1F]
                text-[16px]
                md:text-[17px]
                leading-8
                max-w-[380px]
                mx-auto
                lg:mx-0
                mb-10
              "
            >
              Not sure what to expect, how to pay or if our system is the right
              fit for your clinic? Let us help.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                type="button"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  border
                  border-[#29406B]
                  rounded-full
                  px-8
                  py-4
                  text-[#29406B]
                  text-[16px]
                  hover:bg-[#29406B]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Explore FAQs

                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>

          </div>

          {/* FAQ LIST */}
          <div
            className="flex flex-col gap-6"
            onMouseLeave={() => setActive(null)}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className={`
                  rounded-[24px]
                  border
                  cursor-pointer
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    active === index
                      ? "border-[#D7F1EC] bg-white shadow-[0_15px_40px_rgba(16,105,101,0.12)]"
                      : "border-[#F2F4F7] bg-[#FCFDFD]"
                  }
                `}
              >
                <div className="p-5 sm:p-6 md:p-8">

                  <div className="flex items-start gap-4">

                    <div
                      className={`
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                        transition-all
                        duration-300
                        ${
                          active === index
                            ? "bg-[#106965] text-white"
                            : "border border-[#29406B] text-[#29406B]"
                        }
                      `}
                    >
                      {active === index ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">

                      <h3
                        className="
                          text-[18px]
                          sm:text-[20px]
                          md:text-[22px]
                          font-semibold
                          text-[#171C1F]
                          leading-[1.35]
                        "
                      >
                        {faq.question}
                      </h3>

                      <div
                        className={`
                          overflow-hidden
                          transition-all
                          duration-500
                          ${
                            active === index
                              ? "max-h-[300px] opacity-100 mt-5"
                              : "max-h-0 opacity-0"
                          }
                        `}
                      >
                        <p
                          className="
                            text-[15px]
                            md:text-[16px]
                            leading-7
                            text-[#475569]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}