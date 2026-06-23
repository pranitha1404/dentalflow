"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5">

        <div
          className="
            h-[70px]
            md:h-[81px]
            px-4
            md:px-6
            flex
            items-center
            justify-between
            rounded-[18px]
            border
            border-white/30
            bg-white/20
            backdrop-blur-[80px]
            shadow-[0_10px_40px_rgba(15,23,42,0.08)]
          "
        >
          {/* Logo */}
          <a
            href="#hero"
            className="text-[18px] md:text-[20px] font-bold text-[#10233A]"
          >
            DentalFlow
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#services"
              className="text-[14px] font-medium text-[#2B3440] hover:text-[#0B766E] transition"
            >
              Services
            </a>

            <a
              href="#case-studies"
              className="text-[14px] font-medium text-[#2B3440] hover:text-[#0B766E] transition"
            >
              Case Studies
            </a>

            <a
              href="#pricing"
              className="text-[14px] font-medium text-[#2B3440] hover:text-[#0B766E] transition"
            >
              Pricing
            </a>

            <a
              href="#faq"
              className="text-[14px] font-medium text-[#2B3440] hover:text-[#0B766E] transition"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Button */}
          <a
            href="#hero"
            className="
              hidden
              lg:flex
              h-[46px]
              px-7
              items-center
              rounded-[8px]
              bg-[#0B766E]
              text-white
              text-[14px]
              font-medium
              hover:bg-[#08625C]
              transition
            "
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#10233A]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              lg:hidden
              mt-2
              rounded-[18px]
              border
              border-white/30
              bg-white
              shadow-lg
              p-6
            "
          >
            <nav className="flex flex-col gap-5">

              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-medium text-[#2B3440]"
              >
                Services
              </a>

              <a
                href="#case-studies"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-medium text-[#2B3440]"
              >
                Case Studies
              </a>

              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-medium text-[#2B3440]"
              >
                Pricing
              </a>

              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-medium text-[#2B3440]"
              >
                FAQ
              </a>

              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="
                  mt-2
                  h-[46px]
                  flex
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-[#0B766E]
                  text-white
                  text-[14px]
                  font-medium
                "
              >
                Get Started
              </a>

            </nav>
          </div>
        )}

      </div>
    </header>
  );
}