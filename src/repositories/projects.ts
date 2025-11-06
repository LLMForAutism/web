export interface Project {
  idHtml: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  imageUrl: string;
  imagePosition: "left" | "right";
  status: "done" | "ongoing" | "planned";
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
    imagePosition: "left",
    status: "done",
  },
  {
    idHtml: "project-a-voice-for-you",
    title: "A Voice for You",
    subtitle: "Inovasi Komunikasi Nonverbal untuk Anak Autisme Indonesia",
    description:
      "Berdasarkan riset mendalam dan masukan langsung dari Malang Autism Center (MAC), kami mengidentifikasi kebutuhan mendesak akan alat bantu komunikasi nonverbal (AAC) yang disesuaikan dengan konteks Indonesia. Proyek ini berfokus pada pengembangan platform intuitif untuk membantu anak dengan autisme mengekspresikan diri. Saat ini, proyek tersebut sedang dalam tahap pengembangan.",
    date: "Juli 2025 - Sekarang",
    imageUrl: "/images/projects/a-voice-for-you-mockup-project.webp",
    imagePosition: "right",
    status: 'ongoing'
  },
];
