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
      className="relative overflow-hidden bg-white py-[80px] md:py-[100px]"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#48C9BE]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#106965]/10 rounded-full blur-[120px]" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] items-center gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* HEADING */}
            {/* HEADING */}
            <h2
              className="
    text-[#10233A]
    text-center
    lg:text-left
    mb-8
  "
              style={{
                fontFamily: "Namdhinggo",
                fontWeight: 600,
                lineHeight: "1.05",
                letterSpacing: "-0.03em",
              }}
            >
              <span
                className="
    block
    whitespace-nowrap
    text-[36px]
    sm:text-[48px]
    md:text-[56px]
    lg:text-[62px]
  "
              >
                Small Clinics Deserve
              </span>

              <span
                className="
    block
    whitespace-nowrap
    text-[46px]
    sm:text-[45px]
    md:text-[70px]
    lg:text-[82px]
    font-black
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

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                md:mt-8
                max-w-[520px]
                mx-auto
                lg:mx-0
                text-center
                lg:text-left
                text-[#3E4949]
                text-[16px]
                leading-[1.7]
                font-medium
              "
            >
              Whether you're running a single-chair practice or a small clinic,
              your schedule should be full. We help dentists generate a steady
              stream of qualified patient bookings using proven local patient
              acquisition systems.
            </p>

            {/* BENEFITS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 w-full max-w-[700px] mx-auto lg:mx-0">

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="
                    h-[84px]
                    flex
                    items-center
                    gap-4
                    px-5
                    rounded-2xl
                    bg-white
                    border
                    border-[#DDE8E8]
                    shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(16,105,101,0.15)]
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      min-w-[40px]
                      rounded-full
                      bg-gradient-to-r
                      from-[#106965]
                      to-[#48C9BE]
                      flex
                      items-center
                      justify-center
                      text-white
                      font-bold
                      shadow-lg
                    "
                  >
                    ✓
                  </div>

                  <span
                    className="
                      flex-1
                      text-left
                      text-[15px]
                      font-medium
                      text-[#1B1C1C]
                      leading-[1.4]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start w-full">

              <a
                href="#pricing"
                className="
                  min-h-[54px]
                  px-8
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#106965]
                  text-white
                  text-[16px]
                  font-medium
                  shadow-lg
                  hover:bg-[#0C5652]
                  transition
                "
              >
                Scale Your Practice
              </a>

              <a
                href="#case-studies"
                className="
                  min-h-[54px]
                  px-8
                  flex
                  items-center
                  justify-center
                  rounded-[10px]
                  border
                  border-[#106965]
                  bg-white
                  text-[#106965]
                  text-[16px]
                  font-medium
                  hover:bg-[#106965]
                  hover:text-white
                  transition
                "
              >
                View Case Studies
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

            <div
              className="
                relative
                w-full
                max-w-[280px]
                sm:max-w-[420px]
                md:max-w-[520px]
                lg:max-w-[620px]
                h-[380px]
                sm:h-[500px]
                md:h-[560px]
                lg:h-[620px]
              "
            >
              <Image
                src="/images/clinic-room.png"
                alt="Clinic Room"
                fill
                className="
                  object-cover
                  rounded-t-[140px]
                  md:rounded-t-[220px]
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-700
                  hover:scale-[1.02]
                "
              />

              {/* Floating Card */}
              <div
                className="
                  absolute
                  left-3
                  md:left-6
                  bottom-6
                  md:bottom-12
                  bg-white
                  border
                  border-[#DDE8E8]
                  rounded-3xl
                  shadow-2xl
                  p-5
                  w-[150px]
                  sm:w-[180px]
                "
              >
                <h3 className="text-[#106965] text-[28px] font-bold">
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