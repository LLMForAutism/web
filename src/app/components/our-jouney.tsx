import Image from "next/image";
import {
  Heart,
  Brain,
  Code,
  Users,
  Globe,
  Lightbulb,
  Trophy,
  Rocket,
  FileCheck,
  Target,
} from "lucide-react";
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
      title: "Dimulai dari Sebuah Kegelisahan",
      description:
        'Terinspirasi oleh perjuangan nyata di keluarga kami sendiri, kami menyaksikan betapa sulit dan mahalnya akses terapi autisme di Indonesia. Sebagai mahasiswa informatika, kami tergerak: "Bagaimana jika keahlian kami di bidang IT bisa menjadi solusi?"',
      icon: <Heart className="w-10 h-10 text-white" />,
      iconBgColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Menemukan Jawaban pada AI (LLM)",
      description:
        'Kami mendalami tren Artificial Intelligence (AI) dan Large Language Model (LLM) seperti ChatGPT. Sebuah pertanyaan muncul: "Bisakah teknologi yang sama digunakan untuk terapi?" Terinspirasi oleh riset global (seperti paper ChatASD), kami menemukan celah besar sekaligus peluang: belum ada yang fokus pada dataset dan konteks Bahasa Indonesia.',
      icon: <Brain className="w-10 h-10 text-white" />,
      iconBgColor: "bg-purple-600",
    },
    {
      id: 3,
      title: "Lahirnya prototipe",
      description:
        'Kami memutuskan untuk membangunnya sendiri. Dengan menggunakan base model Llama, kami memulai proses fine-tuning untuk menciptakan sebuah LLM yang "memahami" kebutuhan terapi anak autisme Indonesia.',
      icon: <Code className="w-10 h-10 text-white" />,
      iconBgColor: "bg-blue-600",
    },
    {
      id: 4,
      title: "Kami Tidak Berjalan Sendiri",
      description:
        "Kami tahu teknologi saja tidak cukup. Untuk memastikan solusi kami tepat guna, kami berkolaborasi intensif dengan para ahli di Malang Autism Center (MAC). Masukan mereka sangat krusial dalam membentuk cara AI kami berinteraksi.",
      icon: <Users className="w-10 h-10 text-white" />,
      iconBgColor: "bg-teal-600",
    },
    {
      id: 5,
      title: "Memperluas Jaringan Global",
      description:
        "Misi kami ternyata selaras dengan visi global. Kami menjalin kemitraan strategis dengan LetsConnect, sebuah perusahaan Kanada yang juga berfokus pada pengembangan aplikasi untuk anak autisme.",
      icon: <Globe className="w-10 h-10 text-white" />,
      iconBgColor: "bg-indigo-600",
    },
    {
      id: 6,
      title: "Pencapaian Awal",
      description:
        "Setelah berbulan-bulan pengembangan (menggunakan dataset sintetis sebagai bukti konsep), kami membawa prototipe aplikasi kami ke Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN).",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      iconBgColor: "bg-yellow-500",
    },
    {
      id: 7,
      title: "Meraih Juara 2 Nasional",
      description:
        "Perjuangan kami terbayar. Inovasi kami dianugerahi Juara 2 Kategori Cipta Inovasi TIK - Inovasi Kerja Sama Tim. Ini adalah validasi besar bahwa ide kami tidak hanya inovatif, tetapi juga diakui memiliki potensi dampak yang nyata.",
      icon: <Trophy className="w-10 h-10 text-white" />,
      iconBgColor: "bg-amber-500",
    },
    {
      id: 8,
      title: "Dari Prototipe Menuju Realisasi",
      description:
        "Penghargaan KMIPN bukanlah garis finis; ini adalah garis start. Kami bangga dengan pencapaian ini, namun kami sadar bahwa prototipe kami (dengan dataset sintetis) harus terus dikembangkan.",
      icon: <Rocket className="w-10 h-10 text-white" />,
      iconBgColor: "bg-orange-600",
    },
    {
      id: 9,
      title: "Komitmen Jangka Panjang Kami",
      description:
        "Kami berkomitmen penuh untuk menyempurnakan produk ini. Rencana kami ke depan jelas: mengganti data sintetis dengan data klinis yang valid, memperkaya fitur, dan melakukan uji coba lapangan yang lebih luas.",
      icon: <FileCheck className="w-10 h-10 text-white" />,
      iconBgColor: "bg-emerald-600",
    },
    {
      id: 10,
      title: "Tujuan Akhir: Terapi yang Terjangkau untuk Semua",
      description:
        "Mimpi besar kami adalah melihat aplikasi ini terealisasi penuh dan digunakan oleh anak-anak autisme di seluruh penjuru Indonesia. Kami berjuang agar teknologi ini bisa menjadi alat bantu terapi yang efektif, mudah diakses, dan terutama, terjangkau bagi setiap keluarga yang membutuhkan.",
      icon: <Target className="w-10 h-10 text-white" />,
      iconBgColor: "bg-jade-green",
    },
  ];

  return (
    <section id="our-journey" className="relative overflow-hidden bg-whitesmoke py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span
              className="bg-jade-green text-white px-6 py-2 rounded-full font-semibold text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Histori
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
          <div className="flex flex-col items-center pt-4 pb-0 pl-4 pr-32">
            <h2 className="font-semibold text-center text-3xl">Start</h2>
            <Image
              src={checkpointIcon}
              alt="Checkpoint icon"
              className="w-36"
            />
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
                    className={`w-28 h-28 rounded-full ${item.iconBgColor} flex items-center justify-center shadow-lg ring-4 ring-white`}
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
