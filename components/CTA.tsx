import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative min-h-[380px] md:min-h-[430px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/cta-bg.png"
        alt="CTA Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[380px] md:min-h-[430px] flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">

        <h2
          className="
            text-[#152B4C]
            text-[26px]
            sm:text-[34px]
            md:text-[48px]
            lg:text-[58px]
            leading-[1.15]
            max-w-[1100px]
          "
          style={{
            fontFamily: "Namdhinggo",
            fontWeight: 400,
          }}
        >
          <span className="block whitespace-nowrap">
            Your Next Patient Is Looking For A
          </span>

          <span className="block">
            Dentist Right Now
          </span>
        </h2>

        <p className="mt-5 md:mt-7 text-[15px] sm:text-[16px] md:text-[18px] text-[#000000] max-w-[700px] leading-relaxed">
          The question is: Will they find your clinic—or your competitor&apos;s?
        </p>

        <button
          className="
            mt-8 md:mt-10
            flex
            items-center
            justify-center
            gap-3
            rounded-[10px]
            bg-[#179C98]
            px-6
            sm:px-8
            lg:px-10
            py-4
            sm:py-5
            text-[15px]
            sm:text-[16px]
            font-medium
            text-white
            shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            transition-all
            duration-300
            hover:bg-[#128884]
            hover:scale-[1.02]
          "
        >
          Book My Free Patient Growth Check
          <ArrowRight size={18} strokeWidth={2.2} />
        </button>

      </div>
    </section>
  );
}