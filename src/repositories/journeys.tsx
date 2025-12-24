import {
	Brain,
	Code,
	FileCheck,
	Globe,
	Heart,
	Lightbulb,
	Rocket,
	Target,
	Trophy,
	Users,
} from "lucide-react";

export interface Journey {
	id: number;
	title: string;
	description: string;
	icon: React.ReactNode;
	iconBgColor: string;
}

export const journeys: Journey[] = [
	{
		id: 1,
		title: "Dimulai dari Sebuah Kegelisahan",
		description:
			'Terinspirasi oleh perjuangan nyata di keluarga kami sendiri, kami menyaksikan betapa sulit dan mahalnya akses terapi autisme di Indonesia. Sebagai mahasiswa informatika, kami tergerak: "Bagaimana jika keahlian kami di bidang IT bisa menjadi solusi?"',
		icon: <Heart className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-red-500",
	},
	{
		id: 2,
		title: "Menemukan Jawaban pada AI (LLM)",
		description:
			'Kami mendalami tren Artificial Intelligence (AI) dan Large Language Model (LLM) seperti ChatGPT. Sebuah pertanyaan muncul: "Bisakah teknologi yang sama digunakan untuk terapi?" Terinspirasi oleh riset global (seperti paper ChatASD), kami menemukan celah besar sekaligus peluang: belum ada yang fokus pada dataset dan konteks Bahasa Indonesia.',
		icon: <Brain className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-purple-600",
	},
	{
		id: 3,
		title: "Lahirnya prototipe",
		description:
			'Kami memutuskan untuk membangunnya sendiri. Dengan menggunakan base model Llama, kami memulai proses fine-tuning untuk menciptakan sebuah LLM yang "memahami" kebutuhan terapi anak autisme Indonesia.',
		icon: <Code className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-blue-600",
	},
	{
		id: 4,
		title: "Kami Tidak Berjalan Sendiri",
		description:
			"Kami tahu teknologi saja tidak cukup. Untuk memastikan solusi kami tepat guna, kami berkolaborasi intensif dengan para ahli di Malang Autism Center (MAC). Masukan mereka sangat krusial dalam membentuk cara AI kami berinteraksi.",
		icon: <Users className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-teal-600",
	},
	{
		id: 5,
		title: "Memperluas Jaringan Global",
		description:
			"Misi kami ternyata selaras dengan visi global. Kami menjalin kemitraan strategis dengan LetsConnect, sebuah perusahaan Kanada yang juga berfokus pada pengembangan aplikasi untuk anak autisme.",
		icon: <Globe className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-indigo-600",
	},
	{
		id: 6,
		title: "Pencapaian Awal",
		description:
			"Setelah berbulan-bulan pengembangan (menggunakan dataset sintetis sebagai bukti konsep), kami membawa prototipe aplikasi kami ke Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN).",
		icon: <Lightbulb className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-yellow-500",
	},
	{
		id: 7,
		title: "Meraih Juara 2 Nasional",
		description:
			"Perjuangan kami terbayar. Inovasi kami dianugerahi Juara 2 Kategori Cipta Inovasi TIK - Inovasi Kerja Sama Tim. Ini adalah validasi besar bahwa ide kami tidak hanya inovatif, tetapi juga diakui memiliki potensi dampak yang nyata.",
		icon: <Trophy className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-amber-500",
	},
	{
		id: 8,
		title: "Dari Prototipe Menuju Realisasi",
		description:
			"Penghargaan KMIPN bukanlah garis finis; ini adalah garis start. Kami bangga dengan pencapaian ini, namun kami sadar bahwa prototipe kami (dengan dataset sintetis) harus terus dikembangkan.",
		icon: <Rocket className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-orange-600",
	},
	{
		id: 9,
		title: "Komitmen Jangka Panjang Kami",
		description:
			"Kami berkomitmen penuh untuk menyempurnakan produk ini. Rencana kami ke depan jelas: mengganti data sintetis dengan data klinis yang valid, memperkaya fitur, dan melakukan uji coba lapangan yang lebih luas.",
		icon: <FileCheck className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-emerald-600",
	},
	{
		id: 10,
		title: "Tujuan Akhir: Terapi yang Terjangkau untuk Semua",
		description:
			"Mimpi besar kami adalah melihat aplikasi ini terealisasi penuh dan digunakan oleh anak-anak autisme di seluruh penjuru Indonesia. Kami berjuang agar teknologi ini bisa menjadi alat bantu terapi yang efektif, mudah diakses, dan terutama, terjangkau bagi setiap keluarga yang membutuhkan.",
		icon: <Target className="w-6 h-6 md:w-10 md:h-10 text-white" />,
		iconBgColor: "bg-jade-green",
	},
];
