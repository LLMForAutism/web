import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-jade-green text-white rounded-t-[3rem] mt-20">
			<div className="container mx-auto px-6 md:px-8 py-12 md:py-16">
				<div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
					{/* Brand Section */}
					<div className="md:col-span-5 lg:col-span-4">
						<h3
							className="text-2xl md:text-3xl font-bold mb-4"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							LLMFor<span className="text-foreground">Autism</span>
						</h3>
						<p
							className="text-white/90 text-sm md:text-base leading-relaxed"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Sebuah organisasi sukarelawan yang berdedikasi untuk memanfaatkan
							teknologi dan kecerdasan buatan (AI) dalam menciptakan solusi
							inovatif dan mudah diakses bagi komunitas autisme.
						</p>
					</div>

					{/* Vertical Divider - Hidden on mobile */}
					<div className="hidden md:block md:col-span-1 lg:col-span-1">
						<div className="h-full w-px bg-white/30 mx-auto"></div>
					</div>

					{/* Menu Section */}
					<div className="md:col-span-3 lg:col-span-3">
						<h4
							className="text-xl md:text-2xl font-bold mb-6"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Menu
						</h4>
						<ul className="space-y-3 text-white/90">
							<li>
								<Link
									href="/"
									className="hover:text-white transition-colors text-sm md:text-base"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white transition-colors text-sm md:text-base"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Portofolio
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-white transition-colors text-sm md:text-base"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									blog
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-white transition-colors text-sm md:text-base"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Tentang Kami
								</Link>
							</li>
						</ul>
					</div>

					{/* Vertical Divider - Hidden on mobile */}
					<div className="hidden md:block md:col-span-1 lg:col-span-1">
						<div className="h-full w-px bg-white/30 mx-auto"></div>
					</div>

					{/* Contact Section */}
					<div className="md:col-span-3 lg:col-span-3 min-w-fit">
						<h4
							className="text-xl md:text-2xl font-bold mb-6"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Kontak
						</h4>

						{/* Email Box */}
						<Link
							href="mailto:hello@llmforautism.com"
							className="flex items-center gap-3 bg-white text-jade-green px-4 py-3 rounded-xl hover:bg-white/95 transition-colors mb-6"
						>
							<Mail className="w-5 h-5 flex-shrink-0" />
							<span
								className="font-medium text-sm md:text-base"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								hello@llmforautism.com
							</span>
						</Link>

						{/* Social media Section */}
						<h5
							className="text-lg md:text-xl font-bold mb-4"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Media Sosial
						</h5>
						<div className="flex gap-4">
							<Link
								href="#"
								className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
								target="_blank"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-6 h-6" />
							</Link>
							<Link
								href="https://github.com/LLMForAutism"
								className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
								target="_blank"
								aria-label="GitHub"
							>
								<Github className="w-6 h-6" />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-white/30 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/90 text-sm">
					<p style={{ fontFamily: "Poppins, sans-serif" }}>
						© {new Date().getFullYear()} LLMForAutism
					</p>
					<div className="flex gap-6">
						<Link
							href="#"
							className="hover:text-white transition-colors"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Syarat penggunaan
						</Link>
						<span className="text-white/30">|</span>
						<Link
							href="#"
							className="hover:text-white transition-colors"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Kebijakan privasi
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
