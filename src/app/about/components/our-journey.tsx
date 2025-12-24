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
		<section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/30 py-20 md:py-32">
			<div className="container mx-auto px-4 flex flex-col gap-8">
				<h2 className="font-bold text-3xl text-center">Perjalanan Kami</h2>

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
