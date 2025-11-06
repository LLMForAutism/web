import Image from "next/image";
import visitToMac from "@assets/img/kunjungan-ke-mac.jpg";

export default function AboutUs() {
    return (
		<section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/30 py-20 md:py-32">
				<div className="flex container mx-auto px-4 gap-20 flex-col md:flex-row">
					<div className="w-full order-2 md:order-1 md:w-1/2 md:max-w-1/2">
					<p>LLMForAutism adalah organisasi nirlaba yang berfokus pada pengembangan solusi terapi berbasis teknologi Artificial Intelligence (AI), khususnya Large Language Model (LLM), untuk membantu anak-anak dengan spektrum autisme.
Kami percaya bahwa teknologi dapat menjadi jembatan untuk menciptakan terapi yang lebih mudah diakses, terjangkau, dan efektif bagi anak-anak dan keluarga mereka di seluruh Indonesia.</p>

					<div className="flex justify-center">
						<hr className="my-6 w-1/2" />
					</div>

					<h2 className="font-bold text-2xl">Visi</h2>
					<p>Mewujudkan sistem terapi berbasis AI yang inklusif, mudah diakses, dan terjangkau untuk mendukung perkembangan anak-anak dengan autisme di Indonesia.</p>

					<h2 className="font-bold text-2xl">Misi</h2>
					<ul>
						<li>Mengembangkan model AI yang mampu membantu proses terapi, komunikasi, dan pembelajaran bagi anak-anak autisme.</li>
						<li>Berkolaborasi dengan yayasan dan tenaga profesional untuk memastikan setiap inovasi selaras dengan kebutuhan nyata di lapangan.</li>
						<li>Memberikan edukasi kepada masyarakat tentang pemanfaatan teknologi untuk mendukung inklusivitas dan pemahaman terhadap autisme.</li>
						<li>Mendorong keterlibatan relawan dan peneliti untuk bersama-sama menciptakan solusi terbuka (open-source) yang bermanfaat luas.</li>
					</ul>
				</div>

				<div className="w-full order-1 md:order-2 md:w-1/2 md:max-w-1/2 flex justify-center items-center">
					<Image src={visitToMac} alt="Potret kunjungan ke MAC (Malang Autism Center)" className="relative rounded-3xl shadow-2xl w-full h-auto object-cover" />
				</div>
			</div>
		</section>
	);
}