
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
      className="relative bg-gradient-to-b from-white to-[#F8FBFB] py-20 lg:py-24 overflow-hidden"
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

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#48C9BE]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#106965]/10 rounded-full blur-[120px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[120px] items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* HEADING */}
            <h2
              className="mb-8 lg:mb-10 leading-none"
              style={{ fontFamily: "Namdhinggo" }}
            >
              <span
                className="
                  block
                  text-[#106965]
                  text-[34px]
                  sm:text-[46px]
                  lg:text-[58px]
                  font-semibold
                "
              >
                Small Clinics Deserve
              </span>

              <span
                className="
                  block
                  mt-2
                  text-[58px]
                  sm:text-[74px]
                  lg:text-[84px]
                  font-black
                  tracking-tight
                  bg-gradient-to-r
                  from-[#106965]
                  via-[#1AA89D]
                  to-[#48C9BE]
                  bg-clip-text
                  text-transparent
                "
              >
                BIG GROWTH
              </span>
            </h2>

            {/* TEXT */}
            <p className="text-[#3E4949] text-[16px] sm:text-[17px] leading-8 mb-12 max-w-[560px] mx-auto lg:mx-0">
              Whether you're running a single-chair practice or a small clinic,
              your schedule should be full. We help dentists generate a steady
              stream of qualified patient bookings using proven local patient
              acquisition systems.
            </p>

            {/* BENEFITS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    h-full
                    min-h-[80px]
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    px-5
                    py-5
                    bg-white
                    border
                    border-[#DDE8E8]
                    shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                    hover:-translate-y-2
                    hover:shadow-[0_15px_35px_rgba(16,105,101,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-10 h-10 min-w-[40px] rounded-full bg-gradient-to-r from-[#106965] to-[#48C9BE] flex items-center justify-center text-white font-bold shadow-lg">
                    ✓
                  </div>

                  <span className="text-[15px] text-[#1B1C1C] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">

              <a
                href="#pricing"
                className="
                  bg-[#106965]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  shadow-lg
                  hover:bg-[#0C5652]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Scale Your Practice
              </a>

              <a
                href="#case-studies"
                className="
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-[#106965]
                  text-[#106965]
                  font-semibold
                  hover:bg-[#106965]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                View Case Studies →
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[470px] h-[420px] sm:h-[520px] md:h-[560px]">

              <Image
                src="/images/clinic-room.png"
                alt="Clinic"
                fill
                className="
                  object-cover
                  rounded-t-[160px]
                  md:rounded-t-[220px]
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  hover:scale-[1.03]
                  transition-all
                  duration-700
                "
              />

              {/* FLOATING CARD */}
              <div
                className="
                  absolute
                  left-3
                  md:-left-6
                  bottom-6
                  md:bottom-12
                  bg-white
                  border
                  border-[#DDE8E8]
                  rounded-3xl
                  shadow-2xl
                  p-5
                  w-[180px]
                "
              >
                <h3 className="text-[#106965] text-[30px] font-bold">
                  +45%
                </h3>

                <p className="text-[#3E4949] text-[13px] leading-5">
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
