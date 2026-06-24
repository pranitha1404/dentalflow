import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/cta-bg.png"
        alt="CTA Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          min-h-[340px]
          sm:min-h-[420px]
          md:min-h-[500px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* HERO STYLE HEADING */}
        <h2
          className="text-[#152B4C]"
          style={{
            fontFamily: "Namdhinggo",
            fontWeight: 500,
            lineHeight: "1.12",
            letterSpacing: "-1px",
          }}
        >
          <span
            className="block whitespace-nowrap"
            style={{
              fontSize: "clamp(1.15rem,4vw,3.75rem)",
            }}
          >
            Your Next Patient Is Looking For A
          </span>

          <span
            className="block"
            style={{
              fontSize: "clamp(1.15rem,4vw,3.75rem)",
            }}
          >
            Dentist Right Now
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            md:mt-6
            max-w-[720px]
            text-[#000000]
            text-[14px]
            sm:text-[16px]
            md:text-[18px]
            leading-relaxed
          "
        >
          The question is: Will they find your clinic—or your competitor&apos;s?
        </p>

        {/* Button */}
        <button
          className="
            mt-8
            md:mt-10
            flex
            items-center
            justify-center
            gap-3
            rounded-[12px]
            bg-[#179C98]
            px-7
            sm:px-9
            py-4
            text-[15px]
            sm:text-[16px]
            font-medium
            text-white
            shadow-[0_10px_30px_rgba(0,0,0,0.10)]
            transition-all
            duration-300
            hover:bg-[#128884]
            hover:scale-[1.02]
          "
        >
          Book My Free Patient Growth Check

          <ArrowRight
            size={18}
            strokeWidth={2.2}
          />
        </button>

      </div>
    </section>
  );
}