import Image from "next/image";
import { Calendar } from "lucide-react";

export default function ProjectCard({
  title,
  subtitle,
  description,
  date,
  imageUrl,
  imagePosition = "left",
  className = "",
}: {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
  className?: string;
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 items-center ${className}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden bg-gray-200">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        {/* Date Badge */}
        <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 bg-jade-green text-white px-4 py-2 rounded-lg shadow-md">
            <Calendar className="w-4 h-4" />
            <span className="font-semibold text-sm">{date}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>

        {/* Subtitle */}
        <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
          {subtitle}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>

        {/* Read More Link */}
        <a
          href="#"
          className="inline-block text-jade-green font-semibold hover:underline text-base md:text-lg"
        >
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
}