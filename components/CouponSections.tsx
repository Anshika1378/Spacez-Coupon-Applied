"use client";
import { useState } from "react";

export default function CouponsSection() {
  const [activeTab, setActiveTab] = useState("Giftcards");

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">

      {/* Tabs */}
      <div className="flex justify-between border-b mb-8 text-sm sm:text-base lg:text-lg">
        {["Coupons", "Giftcards", "Payment Offers"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 ${
              activeTab === tab
                ? "font-semibold border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <h2 className="font-semibold text-gray-700 mb-6 text-base lg:text-lg">
        Sitewide coupons:
      </h2>

      {/* Cards */}
      <div className="space-y-8">
        <CouponCard price="₹1,500" title="LONGSTAY" />
        <CouponCard price="₹3,000" title="EARLYBIRD" />
        <CouponCard price="Flat 10%" title="RUSHDEAL" />
      </div>
    </div>
  );
}

/* ---------------- Coupon Card ---------------- */

function CouponCard({ price, title }: { price: string; title: string }) {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    alert(`Coupon "${title}" applied! 🎉`);
  };

  return (
    <div className="flex bg-[#fff7f2] rounded-xl overflow-hidden border min-h-[150px] lg:min-h-[220px]">

      {/* Left Strip */}
      <div className="bg-[#c56e3d] text-white flex items-center justify-center px-6">
        <span className="rotate-[-90deg] font-bold text-lg lg:text-2xl whitespace-nowrap">
          {price}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 lg:p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-700 text-base lg:text-xl">
              {title}
            </h3>

            <button className="text-[#c56e3d] text-sm lg:text-base font-medium flex items-center gap-2">
              📋 Copy
            </button>
          </div>

          <p className="text-sm lg:text-base text-gray-500 mt-3 max-w-3xl">
            15% off when you book for 5 days or more and 20% off when you book for 30 days or more.
          </p>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className={`mt-4 text-sm lg:text-base font-medium px-4 py-2 rounded-lg ${
            applied
              ? "bg-green-100 text-green-800 cursor-not-allowed"
              : "bg-[#c56e3d] text-white hover:bg-[#b65b2e]"
          }`}
          disabled={applied}
        >
          {applied ? "Applied ✓" : "Apply Coupon"}
        </button>
      </div>
    </div>
  );
}
