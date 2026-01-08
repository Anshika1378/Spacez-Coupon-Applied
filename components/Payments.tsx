"use client";

export default function PaymentsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 mt-10 space-y-6">
      {/* Section Title */}
      <h2 className="text-gray-700 font-semibold text-lg lg:text-xl">
        Payment Offers:
      </h2>

      {/* Card */}
      <div className="bg-[#fff4eb] rounded-xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row lg:items-center">
        {/* Left side content */}
        <div className="flex-1 p-5 lg:p-8 flex flex-col">
          <p className="text-gray-500 mb-2 text-sm lg:text-base">
            Save more on your bookings
          </p>
          <p className="text-2xl lg:text-3xl font-bold text-[#c56e3d] mb-2">
            Upto 15% Off
          </p>
          <p className="text-[#c56e3d] text-sm lg:text-base mb-4">
            on select payment methods
          </p>

          {/* Button full width on small screens */}
          <button className="bg-[#c56e3d] text-white px-3 py-2 lg:py-3 rounded-lg font-medium text-sm lg:text-base hover:bg-[#b65b2e] transition w-full lg:w-[22%]">
            Unlock Offers &raquo;
          </button>
        </div>

        {/* Right side image */}
        <div className="flex gap-3 p-5 lg:p-8 justify-center lg:justify-end items-center flex-wrap lg:flex-nowrap">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8drIxtDf4jHtpN516SSGDfOb-4PaDG9av9w&s"
            alt="Payment"
            className="h-20 w-20"
          />
        </div>
      </div>
    </div>
  );
}
