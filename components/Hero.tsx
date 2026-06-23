import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-[#F7F8FD] pt-[60px] md:pt-[80px] pb-[80px]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-12 lg:gap-0">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h1
              className="text-[#10233A] text-[34px] sm:text-[40px] lg:text-4xl sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "Namdhinggo",
                lineHeight: "1.1",
                fontWeight: 600,
                letterSpacing: "-1px",
              }}
            >
              Fill Your Empty Dental
              <br />
              Chairs With{" "}
              <span className="text-[#0B766E]">
                20–40 New
              </span>
              <br />
              <span className="text-[#0B766E]">
                Patients
              </span>{" "}
              Every Month
            </h1>

            <p
              className="mt-8 max-w-[470px] mx-auto lg:mx-0"
              style={{
                color: "#4F5B67",
                fontSize: "16px",
                lineHeight: "1.6",
                fontWeight: 500,
              }}
            >
              Get a predictable flow of local patients without relying on
              referrals, random walk-ins, or expensive marketing
              experiments.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <a
                href="#pricing"
                className="
                  min-h-[52px]
                  px-8
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#0B766E]
                  text-white
                  text-[16px]
                  font-medium
                  text-center
                "
              >
                Get Your Free Patient Growth Check
              </a>

              <a
                href="#services"
                className="
                  min-h-[52px]
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
                  text-center
                "
              >
                See How It Works
              </a>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-14">

              <div>
                <h3 className="text-[15px] text-[#475569]">
                  4.9/5
                </h3>

                <p className="uppercase text-[15px] text-[#64748B]">
                  Average ROI
                </p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#D8DEE8]" />

              <div>
                <h3 className="text-[15px] text-[#475569]">
                  12k+
                </h3>

                <p className="uppercase text-[15px] text-[#64748B]">
                  Patients Booked
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">

            {/* Glow */}
            <div
              className="absolute z-0"
              style={{
                width: "700px",
                height: "700px",
                borderRadius: "9999px",
                background:
                  "radial-gradient(circle, rgba(120,255,235,0.28) 0%, rgba(120,255,235,0.12) 45%, transparent 75%)",
                filter: "blur(80px)",
              }}
            />

            <Image
              src="/images/hero-main-doctor.png"
              alt="Dental Hero"
              width={620}
              height={620}
              priority
              className="
                relative
                z-10
                w-full
                max-w-[340px]
                sm:max-w-[450px]
                md:max-w-[550px]
                lg:max-w-[700px]
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