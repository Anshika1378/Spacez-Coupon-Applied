"use client";

export default function BonusGiftCardSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 mt-10 space-y-6">
      {/* Section Title */}
      <h2 className="text-gray-700 font-semibold text-lg lg:text-xl">
        Bonus gift cards:
      </h2>

      {/* Card */}
      <div className="bg-[#fff4eb] rounded-xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row lg:items-center">
        {/* Left side content */}
        <div className="flex-1 p-5 lg:p-8 flex flex-col">
          <p className="text-gray-500 mb-2 text-sm lg:text-base">
            Assured vouchers up to
          </p>
          <p className="text-2xl lg:text-3xl font-bold text-[#c56e3d] mb-2">
            ₹1000 ✨
          </p>
          <p className="text-gray-500 text-sm lg:text-base mb-4">
            of trending brands
          </p>

          {/* Button full width on small screens */}
          <button className="bg-[#c56e3d] text-white px-3 py-2 lg:py-3 rounded-lg font-medium text-sm lg:text-base hover:bg-[#b65b2e] transition w-full lg:w-[22%]">
            Claim gift cards &raquo;
          </button>
        </div>

        {/* Right side gift card images */}
        <div className="flex gap-3 p-5 lg:p-8 justify-center lg:justify-end items-center flex-wrap lg:flex-nowrap">
          <div className="bg-[#f7931e] text-white rounded-lg w-24 h-14 lg:w-32 lg:h-20 flex items-center justify-center text-sm lg:text-base font-semibold">
            ₹400 Gift card
          </div>
          <div className="bg-[#1e40af] text-white rounded-lg w-24 h-14 lg:w-32 lg:h-20 flex items-center justify-center text-sm lg:text-base font-semibold">
            ₹500 Gift card
          </div>
        </div>
      </div>
    </div>
  );
}
