import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";

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
      className="relative bg-white py-16 md:py-20 lg:py-28 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h2
              className="text-[#106965] font-bold text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.2] mb-6 lg:mb-8"
              style={{ fontFamily: "Namdhinggo" }}
            >
              Free Patient Growth Plan
            </h2>

            <p className="text-[#1B1C1C] text-[16px] md:text-[18px] leading-7 md:leading-8 max-w-[520px] mx-auto lg:mx-0 mb-10 lg:mb-12">
              Get a personalized growth blueprint showing exactly where your
              practice stands and how to capture more market share.
            </p>

            <h3 className="text-[18px] md:text-[19px] font-semibold mb-6 lg:mb-8">
              Your blueprint includes:
            </h3>

            <div className="space-y-5 mb-10 lg:mb-12">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 justify-center lg:justify-start"
                >
                  <div className="w-6 h-6 rounded-full bg-[#106965] flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>

                  <p className="text-[15px] md:text-[16px] text-[#1B1C1C] text-left">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-8">
              <button className="bg-[#106965] hover:bg-[#0C5754] text-white px-8 py-4 rounded-xl shadow-lg transition whitespace-nowrap">
                Get My Free Growth Plan
              </button>

              <div className="flex items-center gap-3 text-[#1B1C1C]">
                <ShieldCheck size={20} />
                <span className="text-[15px] md:text-[16px] whitespace-nowrap">
                  HIPAA Compliant Data Handling
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Image
              src="/images/growth-lost-patient-analysis.png"
              alt="Growth Plan"
              width={950}
              height={950}
              priority
              className="
                w-full
                max-w-[420px]
                sm:max-w-[550px]
                md:max-w-[700px]
                lg:max-w-[950px]
                h-auto
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}