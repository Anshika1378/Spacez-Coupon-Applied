export default function Offers() {
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Left */}
          <h1 className="text-gray-700 font-bold text-xl sm:text-3xl lg:w-1/4">
            Offers
          </h1>

          {/* Center */}
          <p className="text-gray-500 text-sm sm:text-base lg:text-center lg:w-2/4">
            Sign in to unlock exclusive additional rewards.
          </p>

          {/* Right */}
          <button
            className="
              bg-[#c56e3d]
              hover:bg-[#b65b2e] 
              text-white 
              px-10 
              py-2 
              rounded-md 
              w-full 
              lg:w-auto
            "
          >
            Sign in
          </button>

        </div>
      </div>
    </div>
  );
}
