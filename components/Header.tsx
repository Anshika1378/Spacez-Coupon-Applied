"use client";
import { useState } from "react";
import { BsPentagon } from "react-icons/bs"; 
import Offers from "./Offers";
import CouponsSection from "./CouponSections";
import BonusGiftCardSection from "./BonusGift";
import PaymentsSection from "./Payments";
import Footer from "./Footer";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left Logo */}
        <h1 className=" flex  gap-2 text-3xl font-bold text-red-500">
            <BsPentagon />SPACEZ
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-brown-700">Contact</a>
          <a href="#" className="hover:text-brown-700">Support</a>
          <a href="#" className="hover:text-brown-700">App</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3 text-lg">
          <a href="#" className="block">Contact</a>
          <a href="#" className="block">Support</a>
          <a href="#" className="block">App</a>
        </div>
      )}
    </nav>
    <Offers />
    <CouponsSection />
    <BonusGiftCardSection />
    <PaymentsSection />
    <Footer />
    </>
  );
}
