import Image from "next/image";

export default function GrowthSection() {
  const benefits = [
    "More appointment bookings",
    "Less dependence on referrals",
    "Higher chair utilization",
    "More revenue without adding staff",
  ];

  return (
    <section
      id="services"
      className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Top Scallop Border */}
      <div className="absolute top-0 left-0 w-full h-14 overflow-hidden">
        <div className="flex w-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="w-14 h-14 border border-[#D9F3EE] rounded-full -mt-7 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[120px] items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h2 className="text-[30px] sm:text-[34px] lg:text-[40px] leading-[1.2] font-serif font-bold text-[#106965] mb-8 lg:mb-10">
              Small Clinics Deserve Big Growth
            </h2>

            <p className="text-[#3E4949] text-[15px] sm:text-[16px] leading-[24px] mb-10 lg:mb-12 max-w-[500px] mx-auto lg:mx-0">
              Whether you're running a single-chair practice or a small clinic,
              your schedule should be full. We help dentists generate a steady
              stream of qualified patient bookings using proven local patient
              acquisition systems.
            </p>

            {/* BENEFITS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mb-10 lg:mb-12 max-w-[760px] mx-auto lg:mx-0">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border border-[#BEC9C9] rounded-[10px] px-4 py-4 bg-[#FFFFFF]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#A1DFDA] flex items-center justify-center text-[#106965] text-xs font-bold flex-shrink-0">
                    ✓
                  </div>

                  <span className="text-[14px] text-[#1B1C1C] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center lg:items-center justify-center lg:justify-start gap-5 lg:gap-10">
              <button className="bg-[#106965] text-white px-8 py-3 rounded-[8px] hover:bg-[#0c5652] transition">
                Scale Your Practice
              </button>

              <a
                href="#case-studies"
                className="text-[#106965] font-medium flex items-center gap-2"
              >
                View Case Studies
                <span>→</span>
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[470px] h-[420px] sm:h-[500px] md:h-[560px]">

              <Image
                src="/images/clinic-room.png"
                alt="Clinic"
                fill
                className="object-cover rounded-t-[160px] md:rounded-t-[220px]"
              />

              {/* STATS CARD */}
              <div className="absolute -left-2 sm:-left-4 md:-left-6 bottom-8 md:bottom-12 bg-white border border-[#BEC9C9] rounded-2xl shadow-lg p-4 md:p-5 w-[160px] md:w-[180px]">

                <h3 className="text-[#106965] text-[22px] md:text-[26px] font-bold mb-1">
                  +45%
                </h3>

                <p className="text-[#3E4949] text-[12px] md:text-[14px] leading-5">
                  Avg. Increase in monthly bookings for single-chair clinics.
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}