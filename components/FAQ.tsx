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
      className="relative bg-white py-[70px] md:py-[100px] overflow-hidden"
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

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-[110px] items-start">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2
              className="text-[#106965] text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.1] mb-8"
              style={{ fontFamily: "Namdhinggo" }}
            >
              Frequently Asked Questions
            </h2>

            <p className="text-[#171C1F] text-[16px] md:text-[18px] leading-[32px] md:leading-[42px] max-w-[350px] mx-auto lg:mx-0 mb-12">
              Not sure what to expect, how to pay or if our system is the right
              fit for your clinic? Let us help.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                type="button"
                className="group flex items-center gap-2 border border-[#29406B] rounded-full px-8 py-4 text-[#29406B] hover:bg-[#29406B] hover:text-white transition-all duration-300"
              >
                Explore FAQs
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="flex flex-col gap-10 md:gap-14 lg:gap-20"
            onMouseLeave={() => setActive(0)}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="cursor-pointer"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-7 h-7 rounded-full border border-[#29406B] flex items-center justify-center flex-shrink-0">
                    {active === index ? (
                      <Minus size={14} className="text-[#29406B]" />
                    ) : (
                      <Plus size={14} className="text-[#29406B]" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[17px] md:text-[18px] font-semibold text-[#171C1F]">
                      {faq.question}
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        active === index
                          ? "max-h-[250px] opacity-100 mt-5"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[15px] md:text-[16px] leading-[28px] md:leading-[34px] text-[#171C1F] max-w-[620px]">
                        {faq.answer}
                      </p>
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