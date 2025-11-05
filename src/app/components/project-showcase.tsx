import ProjectCard from "./ui/project-card";

export default function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      title: "Aplikasi Mobile Prototipe - Ceriaku",
      subtitle: "Inovasi Terapi Autisme Berbasis AI",
      description: "Ceriaku adalah prototipe aplikasi terapi digital yang kami rancang untuk membawa kebahagiaan bagi anak autisme. Aplikasi ini mengintegrasikan kekuatan AI (LLM) yang ramah anak dengan metode terapi teruji (seperti ABC, FCT, dan Roleplay) serta gamifikasi yang menarik. Ini adalah langkah awal kami mewujudkan terapi yang ceria dan mudah diakses.",
      date: "Feb-Okt 2025",
      imageUrl: "/images/projects/ceriaku-prototype-project.webp",
      imagePosition: "left" as const,
    },
  ];

  return (
    <section className="bg-whitesmoke py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Project <span className="text-jade-green">Showcase</span>
          </h2>
          <p 
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Inisiatif riset untuk mengembangkan model bahasa besar (LLM) yang memahami
            dan mendukung komunikasi anak dengan spektrum autisme
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              date={project.date}
              imageUrl={project.imageUrl}
              imagePosition={project.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}