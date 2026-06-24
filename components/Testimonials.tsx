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
  return (
    <section className="relative bg-[#FBF9F8] py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Scallop Border */}
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

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">

        <h2
          className="text-center text-[#106965] font-bold text-[30px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-12 md:mb-16"
          style={{ fontFamily: "Namdhinggo" }}
        >
          Why Dentists Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                h-full
                flex
                flex-col
                group
                bg-white
                rounded-[20px]
                border
                border-[#EEF2F7]
                p-5 md:p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              {/* Badge */}
              <p className="text-[11px] tracking-[2px] uppercase text-[#171C1F] mb-5">
                {item.badge}
              </p>

              {/* Image */}
              <div className="overflow-hidden rounded-[12px] h-[180px] sm:h-[200px] mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={300}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Quote Icon */}
              <div className="text-[#000000] text-[34px] font-black leading-none mb-2">
                ❞
              </div>

              {/* Quote */}
              <p className="flex-1 text-[#000000] text-[15px] md:text-[16px] leading-8">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-[#000000] mt-6 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A3D8FE] flex items-center justify-center flex-shrink-0">
                  <User size={18} className="text-[#106965]" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#031F41] text-[15px]">
                    {item.name}
                  </h4>

                  <p className="text-[#000000] text-sm">
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