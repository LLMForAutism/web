import Image from "next/image";
import { Sun, Droplet, Zap, Target } from "lucide-react";
import RoadPath from "./ui/road-path";
import checkpointIcon from "@/app/assets/img/checkpoint-icon.webp";

interface JourneyItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

export default function OurJourney() {
  const journeyItems: JourneyItem[] = [
    {
      id: 1,
      title: "Type Your Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Sun className="w-6 h-6 text-white" />,
      iconBgColor: "bg-orange-500",
    },
    {
      id: 2,
      title: "Type Your Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Zap className="w-6 h-6 text-white" />,
      iconBgColor: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Type Your Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Droplet className="w-6 h-6 text-white" />,
      iconBgColor: "bg-blue-400",
    },
    {
      id: 4,
      title: "Type Your Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Target className="w-6 h-6 text-white" />,
      iconBgColor: "bg-orange-500",
    },
		{
      id: 5,
      title: "Type Your Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Target className="w-6 h-6 text-white" />,
      iconBgColor: "bg-orange-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-whitesmoke py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span
              className="bg-jade-green text-white px-6 py-2 rounded-full font-semibold text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              History
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Perjalanan Kami
          </h2>
        </div>

        {/* Journey Timeline */}
        <div className="relative max-w-4xl mx-auto">
					<div className="flex flex-col items-center pt-4 pb-10 pr-32 gap-8">
						<h2 className="font-semibold text-center text-2xl">Start</h2>
						<Image src={checkpointIcon} alt="Checkpoint icon" className="w-24" />
					</div>
          {journeyItems.map((item, index) => (
            <div key={item.id} className="relative last:mb-0">
              {/* Road Path */}
              {index == 0 ? (
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
                    className={`w-20 h-20 rounded-full ${item.iconBgColor} flex items-center justify-center shadow-lg ring-4 ring-white`}
                  >
                    {item.icon}
                  </div>
                  {/* Connecting Line */}
                  <div
                    className={`absolute top-1/2 ${
                      index % 2 === 0 ? "left-full" : "right-full"
                    } w-8 h-1 bg-gray-300 transform -translate-y-1/2`}
                  ></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3
                    className="text-xl md:text-2xl font-bold text-foreground mb-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {String(item.id).padStart(2, "0")} {item.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
