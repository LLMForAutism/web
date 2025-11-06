"use client";

import { useState, useRef } from "react";
import PersonCard from "./ui/person-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { members } from "@repositories/members";

export default function AboutUs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === "left" 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
      
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="bg-whitesmoke py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12 max-w-7xl mx-auto">
          <div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Tentang <span className="text-jade-green">Kami</span>
            </h2>
            <p 
              className="text-muted-foreground text-base md:text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Kami menciptakan teknologi AI yang peduli dan bermanfaat bagi manusia.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "border-gray-300 hover:border-jade-green hover:text-jade-green cursor-pointer"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollRight
                  ? "border-gray-300 hover:border-jade-green hover:text-jade-green cursor-pointer"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Team Cards Scrollable Container */}
        <div className="max-w-7xl mx-auto">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {members.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
              >
                <PersonCard
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  link={member.link}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
              canScrollLeft
                ? "border-gray-300 hover:border-jade-green hover:text-jade-green"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
              canScrollRight
                ? "border-gray-300 hover:border-jade-green hover:text-jade-green"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}