import Image from "next/image";
import { Calendar, CheckCircle2, Clock, ClipboardList } from "lucide-react";
import { Project } from "@/repositories/projects";

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const isImageLeft = project.imagePosition === "left";

  // Status configuration
  const statusConfig = {
    done: {
      label: "Selesai",
      icon: <CheckCircle2 className="w-4 h-4" />,
      bgColor: "bg-emerald-500",
      textColor: "text-white",
    },
    ongoing: {
      label: "Sedang Berjalan",
      icon: <Clock className="w-4 h-4" />,
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    planned: {
      label: "Direncanakan",
      icon: <ClipboardList className="w-4 h-4" />,
      bgColor: "bg-amber-500",
      textColor: "text-white",
    },
  };

  const currentStatus = statusConfig[project.status];

  return (
    <div
      id={project.idHtml}
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 items-center ${className}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden bg-gray-200">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />

          {/* Status Badge on Image */}
          <div className="absolute top-4 left-4">
            <div
              className={`inline-flex items-center gap-2 ${currentStatus.bgColor} ${currentStatus.textColor} px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
            >
              {currentStatus.icon}
              <span className="font-semibold text-xs md:text-sm">
                {currentStatus.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        {/* Date Badge */}
        <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 bg-jade-green text-white px-4 py-2 rounded-lg shadow-md">
            <Calendar className="w-4 h-4" />
            <span className="font-semibold text-sm">{project.date}</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {project.title}
        </h2>

        <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
          {project.subtitle}
        </h3>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {project.description}
        </p>

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
