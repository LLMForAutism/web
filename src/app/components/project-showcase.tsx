import ProjectCard from "./ui/project-card";

export default function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      title: "Projek lomba bisnis",
      subtitle: "Projek lomba bisnis",
      description: "Lorem ipsum dolor sit amet consectetur. Sed nunc porttitor ullamcorper ullamcorper. Feugiat volutpat dis lectus placerat in amet enim dignissim. Molestie malesuada vel ac mauris euismod consequat nisl. Ma...",
      date: "20 Mei 2025",
      imageUrl: "/images/project-image.jpg",
      imagePosition: "left" as const,
    },
    {
      id: 2,
      title: "Projek lomba bisnis",
      subtitle: "Projek lomba bisnis",
      description: "Lorem ipsum dolor sit amet consectetur. Sed nunc porttitor ullamcorper ullamcorper. Feugiat volutpat dis lectus placerat in amet enim dignissim. Molestie malesuada vel ac mauris euismod consequat nisl. M...",
      date: "20 Mei 2025",
      imageUrl: "/images/project-image.jpg",
      imagePosition: "right" as const,
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