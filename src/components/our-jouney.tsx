import Image from "next/image";
import RoadPath from "./ui/road-path";
import checkpointIcon from "@assets/img/checkpoint-icon.webp";
import { journeys } from "repositories/journeys";


export default function OurJourney() {
  return (
    <section id="our-journey" className="relative overflow-hidden bg-whitesmoke py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span
              className="bg-jade-green text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full font-semibold text-xs md:text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Histori
            </span>
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Perjalanan Kami
          </h2>
        </div>

        {/* Journey Timeline */}
        <div className="relative max-w-4xl mx-auto ">
          {/* Start Checkpoint */}
          <div className="flex flex-col items-center pt-4 pb-0 px-4 md:pl-4 md:pr-28">
            <h2 
              className="font-semibold text-center text-2xl md:text-3xl mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Start
            </h2>
            <Image
              src={checkpointIcon}
              alt="Checkpoint icon"
              className="w-24 md:w-36"
            />
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {journeys.map((item, index) => (
              <div key={item.id} className="relative mb-0 last:mb-0">
                {/* Road Path */}
                {index === 0 ? (
                  <RoadPath direction="left" length="half" />
                ) : index % 2 === 1 ? (
                  <RoadPath direction="right" />
                ) : (
                  <RoadPath direction="left" />
                )}

                {/* Content */}
                <div
                  className={`absolute -bottom-20 flex items-start gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-20 h-20 lg:w-28 lg:h-28 rounded-full ${item.iconBgColor} flex items-center justify-center shadow-lg ring-4 ring-white`}
                    >
                      {item.icon}
                    </div>
                    {/* Connecting Line */}
                    <div
                      className={`absolute top-1/2 ${
                        index % 2 === 0 ? "left-full" : "right-full"
                      } w-6 lg:w-8 h-1 bg-gray-300 transform -translate-y-1/2`}
                    ></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3
                      className="text-lg lg:text-xl xl:text-2xl font-bold text-foreground mb-3"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {String(item.id).padStart(2, "0")} {item.title}
                    </h3>
                    <p
                      className="text-muted-foreground text-sm lg:text-base leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline - Vertical Layout */}
          <div className="md:hidden space-y-8">
            {journeys.map((item) => (
              <div key={item.id} className="relative">
                {/* Vertical Line - except for last item */}
                {item.id !== journeys.length && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300 -z-0"></div>
                )}

                <div className="flex gap-4">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full ${item.iconBgColor} flex items-center justify-center shadow-lg ring-4 ring-white`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                    <h3
                      className="text-base font-bold text-foreground mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {String(item.id).padStart(2, "0")} {item.title}
                    </h3>
                    <p
                      className="text-muted-foreground text-sm leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* End Checkpoint */}
          <div className="flex flex-col items-center pt-8 sm:pt-32 px-4">
            <h2 
              className="font-semibold text-center text-2xl md:text-3xl mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sekarang & masa depan
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}