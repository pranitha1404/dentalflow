import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-[#F7F8FD] pt-[110px] md:pt-[120px] lg:pt-[120px] pb-[60px] md:pb-[80px]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-10 lg:gap-0">

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">

            {/* Glow Effect */}
            <div
              className="absolute z-0 hidden lg:block"
              style={{
                width: "650px",
                height: "650px",
                borderRadius: "9999px",
                background:
                  "radial-gradient(circle, rgba(120,255,235,0.28) 0%, rgba(120,255,235,0.12) 45%, transparent 75%)",
                filter: "blur(80px)",
              }}
            />

            <Image
              src="/images/hero-main-doctor.png"
              alt="Dental Hero"
              width={700}
              height={700}
              priority
              className="
                relative
                z-10
                w-full
                max-w-[280px]
                sm:max-w-[420px]
                md:max-w-[520px]
                lg:max-w-[700px]
                h-auto
                object-contain
                animate-[float_4s_ease-in-out_infinite]
              "
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h1
              className="
                text-[#10233A]
                text-[38px]
                sm:text-[46px]
                md:text-[56px]
                lg:text-[62px]
                text-center
                lg:text-left
              "
              style={{
                fontFamily: "Namdhinggo",
                lineHeight: "1.15",
                fontWeight: 600,
                letterSpacing: "-1.5px",
              }}
            >
              <span className="block">
                Fill Your Empty Dental
              </span>

              <span className="block">
                Chairs With{" "}
                <span className="text-[#0B766E]">
                  20–40 New
                </span>
              </span>

              <span className="block">
                <span className="text-[#0B766E]">
                  Patients
                </span>{" "}
                Every Month
              </span>
            </h1>

            <p
              className="mt-6 md:mt-8 max-w-[520px] mx-auto lg:mx-0"
              style={{
                color: "#4F5B67",
                fontSize: "16px",
                lineHeight: "1.7",
                fontWeight: 500,
              }}
            >
              Get a predictable flow of local patients without relying on
              referrals, random walk-ins, or expensive marketing
              experiments.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 justify-center lg:justify-start">

              <a
                href="#pricing"
                className="
                  min-h-[54px]
                  px-8
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#0B766E]
                  text-white
                  text-[16px]
                  font-medium
                  shadow-lg
                  hover:bg-[#08625C]
                  transition
                "
              >
                Get Your Free Patient Growth Check
              </a>

              <a
                href="#services"
                className="
                  min-h-[54px]
                  px-8
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  border
                  border-[#D8DEE8]
                  bg-white
                  text-[#10233A]
                  text-[16px]
                  hover:bg-[#F8FAFC]
                  transition
                "
              >
                See How It Works
              </a>

            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start items-center gap-8 mt-12 md:mt-14 flex-wrap">

              <div className="text-center lg:text-left">
                <h3 className="text-[15px] text-[#475569]">
                  4.9/5
                </h3>

                <p className="uppercase text-[13px] text-[#64748B] tracking-wide">
                  Average ROI
                </p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#D8DEE8]" />

              <div className="text-center lg:text-left">
                <h3 className="text-[15px] text-[#475569]">
                  12k+
                </h3>

                <p className="uppercase text-[13px] text-[#64748B] tracking-wide">
                  Patients Booked
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}