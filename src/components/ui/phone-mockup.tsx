import { ChevronLeft, ArrowUp, Signal, Battery } from "lucide-react";
import Image from "next/image";
import ingtonIcon from "@assets/img/ington-icon.png";

export default function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[560px] bg-black rounded-[50px] shadow-2xl p-3">
      {/* Phone Frame */}
      <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 pt-2 px-6 z-20 flex justify-between items-center text-[0.5rem]">
          <span className="font-semibold">10:01</span>
          <div className="flex gap-1 items-center">
						<Signal className="w-2.5 h-2.5" />
						<Battery className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Phone Content */}
        <div className="h-full bg-white pt-12 px-6 relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="p-2">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
              New Voice
            </h2>
            <div className="w-10 h-10 rounded-full overflow-hidden">
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mt-16">
            <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Hello Ington!
            </h1>
            <p className="text-sm text-gray-400" style={{ fontFamily: "Poppins, sans-serif" }}>
              Please swap it 
              <br />
              to talk to me !
            </p>
          </div>

          {/* Swap Icon */}
          <div className="flex flex-col items-center mt-12">
            <div className="w-14 h-14 rounded-full border-4 border-mint-green flex items-center justify-center mb-2">
              <ArrowUp className="w-6 h-6 text-mint-green" strokeWidth={4} />
            </div>
            <p className="text-sm text-gray-400" style={{ fontFamily: "Poppins, sans-serif" }}>
              Swap It
            </p>
          </div>

          {/* Bottom Curved Section with Robot */}
          <div className="absolute bottom-0 left-0 right-0 h-48">
            <svg
              viewBox="0 0 280 200"
              className="absolute bottom-0 left-0 right-0 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 100 Q 140 0, 280 100 L 280 200 L 0 200 Z"
                fill="#CEF1DC"
                className="fill-mint-green"
              />
            </svg>
            
            {/* Robot Icon Container */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
              <Image src={ingtonIcon} alt="Ington icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>
      <div className="absolute right-0 top-40 w-1 h-16 bg-gray-800 rounded-l"></div>
      <div className="absolute right-0 top-60 w-1 h-16 bg-gray-800 rounded-l"></div>
      <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r"></div>
    </div>
  );
}