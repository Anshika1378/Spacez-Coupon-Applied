"use client";

import { FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { MdLocalOffer } from "react-icons/md";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-around items-center py-4">
          
          {/* Explore */}
          <div className="flex flex-col items-center text-gray-500 hover:text-gray-700 cursor-pointer">
            <FiSearch className="text-2xl mb-1" />
            <span className="text-xs">Explore</span>
          </div>

          {/* Offers */}
          <div className="flex flex-col items-center text-gray-500 hover:text-gray-700 cursor-pointer">
            <MdLocalOffer className="text-2xl mb-1" />
            <span className="text-xs">Offers</span>
          </div>

          {/* Free Booking */}
          <div className="flex flex-col items-center text-gray-500 hover:text-gray-700 cursor-pointer">
            <BsFillPlayCircleFill className="text-2xl mb-1" />
            <span className="text-xs">Free Booking</span>
          </div>

          {/* Wishlist */}
          <div className="flex flex-col items-center text-gray-500 hover:text-gray-700 cursor-pointer">
            <FiHeart className="text-2xl mb-1" />
            <span className="text-xs">Wishlist</span>
          </div>

          {/* Sign In */}
          <div className="flex flex-col items-center text-gray-500 hover:text-gray-700 cursor-pointer">
            <FiUser className="text-2xl mb-1" />
            <span className="text-xs">Sign In</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
