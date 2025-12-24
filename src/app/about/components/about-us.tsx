import Image from "next/image";
import visitToMac from "@/assets/img/kunjungan-ke-mac.jpg";

export default function AboutUs() {
	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-mint-green to-whitesmoke py-20 md:py-32 mt-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h1
							className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							<span className="text-foreground">Tentang </span>
							<span className="text-jade-green">Kami</span>
						</h1>
						<p
							className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Mengembangkan solusi terapi berbasis AI untuk membantu anak-anak
							dengan spektrum autisme di Indonesia.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
						{/* Image */}
						<div className="order-1 lg:order-2">
							<div className="relative rounded-2xl overflow-hidden shadow-2xl">
								<Image
									src={visitToMac}
									alt="Potret kunjungan ke MAC (Malang Autism Center)"
									className="w-full h-auto object-cover"
								/>
							</div>
						</div>

						{/* Content */}
						<div className="order-2 lg:order-1 space-y-8">
							{/* About Description */}
							<div>
								<p
									className="text-base md:text-lg text-muted-foreground leading-relaxed"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									LLMForAutism adalah organisasi nirlaba yang berfokus pada
									pengembangan solusi terapi berbasis teknologi Artificial
									Intelligence (AI), khususnya Large Language Model (LLM), untuk
									membantu anak-anak dengan spektrum autisme. Kami percaya bahwa
									teknologi dapat menjadi jembatan untuk menciptakan terapi yang
									lebih mudah diakses, terjangkau, dan efektif bagi anak-anak
									dan keluarga mereka di seluruh Indonesia.
								</p>
							</div>

							{/* Divider */}
							<div className="flex justify-center lg:justify-start">
								<hr className="w-24 border-t-2 border-jade-green" />
							</div>

							{/* Vision */}
							<div className="bg-white p-6 rounded-xl shadow-md border border-border">
								<h2
									className="font-bold text-2xl md:text-3xl mb-4 text-jade-green"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Visi
								</h2>
								<p
									className="text-base md:text-lg text-muted-foreground leading-relaxed"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Mewujudkan sistem terapi berbasis AI yang inklusif, mudah
									diakses, dan terjangkau untuk mendukung perkembangan
									anak-anak dengan autisme di Indonesia.
								</p>
							</div>

							{/* Mission */}
							<div className="bg-white p-6 rounded-xl shadow-md border border-border">
								<h2
									className="font-bold text-2xl md:text-3xl mb-4 text-jade-green"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Misi
								</h2>
								<ul className="space-y-3 text-base md:text-lg text-muted-foreground">
									<li
										className="flex items-start gap-3"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										<span className="text-jade-green font-bold mt-1 flex-shrink-0">
											•
										</span>
										<span className="leading-relaxed">
											Mengembangkan model AI yang mampu membantu proses terapi,
											komunikasi, dan pembelajaran bagi anak-anak autisme.
										</span>
									</li>
									<li
										className="flex items-start gap-3"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										<span className="text-jade-green font-bold mt-1 flex-shrink-0">
											•
										</span>
										<span className="leading-relaxed">
											Berkolaborasi dengan yayasan dan tenaga profesional untuk
											memastikan setiap inovasi selaras dengan kebutuhan nyata
											di lapangan.
										</span>
									</li>
									<li
										className="flex items-start gap-3"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										<span className="text-jade-green font-bold mt-1 flex-shrink-0">
											•
										</span>
										<span className="leading-relaxed">
											Memberikan edukasi kepada masyarakat tentang pemanfaatan
											teknologi untuk mendukung inklusivitas dan pemahaman
											terhadap autisme.
										</span>
									</li>
									<li
										className="flex items-start gap-3"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										<span className="text-jade-green font-bold mt-1 flex-shrink-0">
											•
										</span>
										<span className="leading-relaxed">
											Mendorong keterlibatan relawan dan peneliti untuk
											bersama-sama menciptakan solusi terbuka (open-source) yang
											bermanfaat luas.
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
