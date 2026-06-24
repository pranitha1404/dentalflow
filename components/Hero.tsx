"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        bg-[#F7F8FD]
        pt-[95px]
        md:pt-[110px]
        pb-[70px]
        md:pb-[100px]
      "
    >
      {/* ===================== */}
      {/* PREMIUM BACKGROUND */}
      {/* ===================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Glow 1 */}
        <div
          className="
            absolute
            -top-32
            -left-24
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#78FFEB]/20
            blur-[140px]
            animate-pulse
          "
        />

        {/* Glow 2 */}
        <div
          className="
            absolute
            top-[20%]
            right-[-120px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0B766E]/12
            blur-[150px]
          "
        />

        {/* Glow 3 */}
        <div
          className="
            absolute
            bottom-[-150px]
            left-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#78FFEB]/10
            blur-[120px]
          "
        />

        {/* Decorative Ring */}
        <div
          className="
            hidden
            lg:block
            absolute
            right-[10%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#0B766E]/10
          "
        />

        <div
          className="
            hidden
            lg:block
            absolute
            right-[13%]
            top-[23%]
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-[#0B766E]/10
          "
        />

      </div>

      {/* ===================== */}
      {/* CONTAINER */}
      {/* ===================== */}

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[58%_42%]
            items-center
            gap-4
            md:gap-8
            lg:gap-0
          "
        >

          {/* ===================== */}
          {/* IMAGE SIDE */}
          {/* ===================== */}

          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
              lg:justify-end
              relative
            "
          >

            {/* Floating Glass Badge */}

            <div
              className="
                hidden
                md:flex
                absolute
                top-[10%]
                left-[5%]
                z-20
                px-4
                py-3
                rounded-2xl
                bg-white/80
                backdrop-blur-xl
                border
                border-white/60
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                animate-[float_6s_ease-in-out_infinite]
              "
            >
              <div>
                <p className="text-[11px] uppercase tracking-widest text-[#64748B]">
                  Average ROI
                </p>

                <h4 className="text-[20px] font-bold text-[#10233A]">
                  4.9/5
                </h4>
              </div>
            </div>

            {/* Floating Glass Badge */}

            <div
              className="
                hidden
                md:flex
                absolute
                bottom-[12%]
                right-[2%]
                z-20
                px-4
                py-3
                rounded-2xl
                bg-white/80
                backdrop-blur-xl
                border
                border-white/60
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                animate-[float_7s_ease-in-out_infinite]
              "
            >
              <div>
                <p className="text-[11px] uppercase tracking-widest text-[#64748B]">
                  Patients Booked
                </p>

                <h4 className="text-[20px] font-bold text-[#10233A]">
                  12k+
                </h4>
              </div>
            </div>

            {/* Main Glow Behind Doctor */}

            <div
              className="
                absolute
                z-0
                h-[700px]
                w-[700px]
                rounded-full
                bg-[#78FFEB]/25
                blur-[160px]
              "
            />

            {/* Doctor Image */}

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
                max-w-[300px]
                sm:max-w-[450px]
                md:max-w-[560px]
                lg:max-w-[720px]
                h-auto
                object-contain
                animate-[float_6s_ease-in-out_infinite]
                transition-all
                duration-700
                hover:scale-[1.03]
              "
            />
          </div>

          {/* ===================== */}
          {/* CONTENT SIDE */}
          {/* ===================== */}

          <div
            className="
              order-2
              lg:order-1
              text-center
              lg:text-left
            "
          >

            {/* Premium Trust Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-[#DDE7F0]
                bg-white/80
                backdrop-blur-xl
                shadow-sm
                mb-5
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#0B766E] animate-pulse" />

              <span className="text-[13px] font-medium text-[#475569]">
                Trusted By Growth-Focused Dentists
              </span>
            </div>
            <h1
              className="
    text-[#10233A]
    text-center
    lg:text-left
    mx-auto
    lg:mx-0
    w-full
    text-[24px]
    sm:text-[34px]
    md:text-[46px]
    lg:text-[58px]
    xl:text-[68px]
  "
              style={{
                fontFamily: "Namdhinggo",
                fontWeight: 600,
                lineHeight: "1.05",
                letterSpacing: "-0.03em",
              }}
            >
              Fill Your Empty Dental
              <br />
              Chairs With <span className="text-[#0B766E]">20–40 New</span>
              <br />
              <span className="text-[#0B766E]">Patients Every Month</span>
            </h1>
            {/* Description */}

            <p
              className="
                mt-6
                md:mt-8
                max-w-[560px]
                mx-auto
                lg:mx-0
                text-[#4F5B67]
              "
              style={{
                fontSize: "clamp(1rem,1.1vw,1.15rem)",
                lineHeight: "1.8",
                fontWeight: 500,
              }}
            >
              Get a predictable flow of local patients without relying on
              referrals, random walk-ins, or expensive marketing
              experiments.
            </p>

            {/* CTA Buttons */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-8
                md:mt-10
                justify-center
                lg:justify-start
              "
            >

              {/* Primary CTA */}

              <a
                href="#pricing"
                className="
                  group
                  relative
                  overflow-hidden
                  min-h-[60px]
                  px-8
                  flex
                  items-center
                  justify-center
                  rounded-[14px]
                  bg-[#0B766E]
                  text-white
                  font-semibold
                  shadow-[0_20px_60px_rgba(11,118,110,0.30)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:shadow-[0_30px_80px_rgba(11,118,110,0.40)]
                "
              >
                <span className="relative z-10">
                  Get Your Free Patient Growth Check →
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    bg-[#08625C]
                    translate-y-full
                    transition-transform
                    duration-300
                    group-hover:translate-y-0
                  "
                />
              </a>

              {/* Secondary CTA */}

              <a
                href="#services"
                className="
                  min-h-[60px]
                  px-8
                  flex
                  items-center
                  justify-center
                  rounded-[14px]
                  border
                  border-[#D8DEE8]
                  bg-white/80
                  backdrop-blur-xl
                  text-[#10233A]
                  font-medium
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0B766E]
                  hover:bg-white
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
                "
              >
                See How It Works
              </a>

            </div>

            {/* Trust Row */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-start
                gap-4
                text-[#64748B]
              "
            >

              <div className="flex items-center gap-2">
                <span className="text-[#0B766E]">✓</span>
                <span className="text-[14px]">
                  No Long-Term Contracts
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#0B766E]">✓</span>
                <span className="text-[14px]">
                  Predictable Growth
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#0B766E]">✓</span>
                <span className="text-[14px]">
                  ROI Focused
                </span>
              </div>

            </div>

            {/* Premium Stats */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-4
                mt-12
              "
            >

              {/* Stat Card */}

              <div
                className="
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white/60
                  shadow-[0_15px_40px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div className="flex items-center gap-1 text-[#F59E0B] text-[14px]">
                  ★★★★★
                </div>

                <h3 className="text-[22px] font-bold text-[#10233A]">
                  4.9/5
                </h3>

                <p className="uppercase text-[11px] tracking-widest text-[#64748B]">
                  Average ROI
                </p>
              </div>

              {/* Stat Card */}

              <div
                className="
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white/60
                  shadow-[0_15px_40px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <h3 className="text-[22px] font-bold text-[#10233A]">
                  12k+
                </h3>

                <p className="uppercase text-[11px] tracking-widest text-[#64748B]">
                  Patients Booked
                </p>
              </div>

              {/* Stat Card */}

              <div
                className="
                  px-5
                  py-4
                  rounded-2xl
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-white/60
                  shadow-[0_15px_40px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <h3 className="text-[22px] font-bold text-[#10233A]">
                  20–40
                </h3>

                <p className="uppercase text-[11px] tracking-widest text-[#64748B]">
                  New Patients / Month
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}