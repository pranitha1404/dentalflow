export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8EEF3] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">

          {/* Left */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#171C1F] text-[16px] font-medium mb-5">
              Dental Flow
            </h3>

            <p className="text-[#5D6676] text-[14px] leading-7 max-w-[240px] mx-auto sm:mx-0">
              Advanced patient acquisition systems for modern dental practices.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-4 mt-6">

              {/* Instagram */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#171C1F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer hover:opacity-70 transition"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" />
              </svg>

              {/* Share */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#171C1F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer hover:opacity-70 transition"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>

            </div>
          </div>

          {/* Explore */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#171C1F] text-[14px] font-medium mb-5">
              Explore
            </h4>

            <div className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-[#5D6676] text-[14px] hover:text-[#106965] transition"
              >
                Services
              </a>

              <a
                href="#case-studies"
                className="text-[#5D6676] text-[14px] hover:text-[#106965] transition"
              >
                Case Studies
              </a>

              <a
                href="#pricing"
                className="text-[#5D6676] text-[14px] hover:text-[#106965] transition"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="text-[#171C1F] text-[14px] font-medium mb-5">
              Support
            </h4>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="text-[#5D6676] text-[14px] hover:text-[#106965] transition text-center sm:text-left"
              >
                Contact Support
              </button>

              <button
                type="button"
                className="text-[#5D6676] text-[14px] hover:text-[#106965] transition text-center sm:text-left"
              >
                Privacy Policy
              </button>

              <button
                type="button"
                className="text-[#5D6676] text-[14px] hover:text-[#106965] transition text-center sm:text-left"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}