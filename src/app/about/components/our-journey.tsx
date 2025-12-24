import Roadmap from "../models/roadmap";
import RoadmapItem from "./ui/journey-item";

export default function OurRoadmap() {
	const roadmaps: Roadmap[] = [
		{
			date: new Date("2024-09"),
			activity: "Gabriel memulai ide terkait solusi terapi anak autisme",
		},
		{
			date: new Date("2024-11"),
			activity:
				"Ditemukan sebuah solusi yang bisa membantu terapi anak autisme, yaitu melalui LLM",
		},
		{
			date: new Date("2025-02"),
			activity: "Memulai kerja sama dengan MAC",
		},
		{
			date: new Date("2025-02"),
			activity:
				"Memulai proyek dengan fokus membantu komunikasi verbal anak autisme",
		},
		{
			date: new Date("2025-06"),
			activity:
				"Memulai proyek dengan fokus membantu komunikasi non-verbal anak autisme",
		},
		{
			date: new Date("2025-09"),
			activity:
				"Kami mencoba mendaftarkan inovasi penerapan LLM untuk autisme pada kompetisi KMIPN 2025",
		},
		{
			date: new Date("2025-10"),
			activity:
				"Hasil inovasi kami berhasil mendapatkan nominasi juara 2 dalam kategori kerja sama tim dalam bidang cipta inovasi",
		},
		{
			date: new Date("2025-11"),
			activity:
				"Kami terus berlanjut mengembangkan teknologi LLM untuk para anak autisme",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-gradient-to-b from-whitesmoke to-whitesmoke">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12 md:mb-16">
					<h2
						className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						<span className="text-foreground">Perjalanan </span>
						<span className="text-jade-green">Kami</span>
					</h2>
					<p
						className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						Dari ide awal hingga inovasi yang berdampak nyata untuk anak-anak
						dengan autisme
					</p>
				</div>

				{/* Timeline */}
				<div className="max-w-4xl mx-auto">
					{roadmaps.map((item, index) => (
						<RoadmapItem
							key={index}
							index={index}
							roadmap={item}
							roadmapsLength={roadmaps.length}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
