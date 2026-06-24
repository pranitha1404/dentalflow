import Image from "next/image";
import { User } from "lucide-react";

const testimonials = [
{
badge: "+12 NEW WEEKLY BOOKINGS",
image: "/images/testimonial-clinic.png",
quote:
"We went from relying completely on referrals to getting new patient bookings every week. The predictable growth has allowed us to expand our clinical team.",
name: "Dr. James Mitchell",
role: "Principal Dentist",
},
{
badge: "+45% CHAIR OCCUPANCY",
image: "/images/testimonial-tablet.png",
quote:
"Our chair occupancy increased significantly within the first few months. The quality of leads coming through is exactly what we were looking for.",
name: "Dr. Sarah Chen",
role: "Esthetic Specialist",
},
{
badge: "PREDICTABLE GROWTH SYSTEM",
image: "/images/testimonial-doctor.png",
quote:
"We finally have a predictable system instead of hoping referrals come in. It has completely changed our business outlook for the next five years.",
name: "Dr. Robert Miller",
role: "Clinical Director",
},
];

export default function Testimonials() {
return ( <section className="relative overflow-hidden bg-[#FBF9F8] py-16 md:py-20 lg:py-28">
{/* Background Glow */} <div className="absolute top-20 left-0 w-[350px] h-[350px] bg-[#48C9BE]/10 rounded-full blur-[120px]" /> <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#106965]/10 rounded-full blur-[120px]" />

  <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <h2
      className="
        text-center
        text-[#106965]
        mb-12
        md:mb-16
        whitespace-nowrap
      "
      style={{
        fontFamily: "Namdhinggo",
        fontWeight: 600,
        lineHeight: "1.1",
        letterSpacing: "-1px",
        fontSize: "clamp(1.35rem, 4vw, 3.6rem)",
      }}
    >
      Why Dentists Choose Us
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

      {testimonials.map((item, index) => (
        <div
          key={index}
          className="
            flex
            flex-col
            h-full
            bg-white
            rounded-[24px]
            border
            border-[#E8EEF2]
            p-5
            md:p-6
            shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
        >
          {/* Badge */}
          <p className="text-[11px] tracking-[2px] uppercase text-[#106965] font-semibold mb-4">
            {item.badge}
          </p>

          {/* Image */}
          <div className="overflow-hidden rounded-[16px] mb-6">
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={300}
              className="
                w-full
                h-[220px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>

          {/* Quote Icon */}
          <div className="text-[#106965] text-[32px] leading-none mb-3">
            ❝
          </div>

          {/* Quote */}
          <p className="flex-1 text-[#17212A] text-[15px] sm:text-[16px] leading-7">
            {item.quote}
          </p>

          {/* Author */}
          <div className="border-t border-[#E8EEF2] mt-6 pt-5 flex items-center gap-4">

            <div className="w-11 h-11 rounded-full bg-[#DDF7F4] flex items-center justify-center flex-shrink-0">
              <User size={18} className="text-[#106965]" />
            </div>

            <div>
              <h4 className="font-semibold text-[#17212A] text-[15px]">
                {item.name}
              </h4>

              <p className="text-[#64748B] text-[14px]">
                {item.role}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

);
}
