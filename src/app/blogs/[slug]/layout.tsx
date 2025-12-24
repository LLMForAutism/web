import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{/* Hero Section with Gradient Background */}
			<section className="bg-gradient-to-b from-mint-green to-whitesmoke pt-32 pb-12 md:pt-40 md:pb-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						{/* Back to Blog Link */}
						<Link
							href="/blogs"
							className="inline-flex items-center gap-2 text-jade-green hover:text-primary-dark transition-colors duration-200 mb-6 group"
						>
							<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
							<span
								className="font-medium"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								Kembali ke Blog
							</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Blog Post Container */}
			<article className="pb-16 md:pb-24 -mt-8">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						{/* Main Content Card */}
						<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
							{/* Content Area with Proper Padding */}
							<div className="px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14">
								{/* MDX Content */}
								<div
									className="prose prose-lg max-w-none"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									{children}
								</div>
							</div>

							{/* Bottom Divider */}
							<div className="border-t-2 border-mint-green"></div>

							{/* Call to Action Section */}
							<div className="px-6 py-8 md:px-12 md:py-10 bg-gradient-to-br from-mint-green/30 to-white">
								<div className="text-center">
									<h3
										className="text-2xl font-bold text-foreground mb-3"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										Tertarik untuk Terlibat?
									</h3>
									<p
										className="text-muted-foreground mb-6 max-w-2xl mx-auto"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										Bergabunglah dengan komunitas kami dan bantu kami membuat
										perbedaan dalam kehidupan anak-anak dengan autism.
									</p>
									<div className="flex flex-col sm:flex-row gap-4 justify-center">
										<Link
											href="/#get-involved"
											className="inline-block bg-jade-green hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
											style={{ fontFamily: "Poppins, sans-serif" }}
										>
											Hubungi Kami
										</Link>
										<Link
											href="/blogs"
											className="inline-block border-2 border-jade-green text-jade-green hover:bg-jade-green hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
											style={{ fontFamily: "Poppins, sans-serif" }}
										>
											Baca Artikel Lain
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Share Section */}
						<div className="mt-8 text-center">
							<p
								className="text-sm text-muted-foreground"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								Bagikan artikel ini untuk membantu lebih banyak orang memahami
								autism
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
