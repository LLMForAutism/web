export interface Project {
    idHtml: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    imageUrl: string;
    imagePosition: "left" | "right";
}

export const projects: Project[] = [
  {
    idHtml: "project-ceriaku",
    title: "Aplikasi Mobile Prototipe - Ceriaku",
    subtitle: "Inovasi Terapi Autisme Berbasis AI",
    description:
      "Ceriaku adalah prototipe aplikasi terapi digital yang kami rancang untuk membawa kebahagiaan bagi anak autisme. Aplikasi ini mengintegrasikan kekuatan AI (LLM) yang ramah anak dengan metode terapi teruji (seperti ABC, FCT, dan Roleplay) serta gamifikasi yang menarik. Ini adalah langkah awal kami mewujudkan terapi yang ceria dan mudah diakses.",
    date: "Feb-Okt 2025",
    imageUrl: "/images/projects/ceriaku-prototype-project.webp",
    imagePosition: "left" as const,
  },
];
