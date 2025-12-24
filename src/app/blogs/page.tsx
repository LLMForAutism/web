import type { Metadata } from "next";
import BlogCard from "@/components/blog-card";
import { getAllBlogPosts } from "@/lib/blogs";
import { SEO_CONFIG, getCanonicalUrl } from "@/lib/seo-config";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Artikel, cerita, dan wawasan tentang autism, teknologi LLM, dan perjalanan kami membantu anak-anak dengan autism berkembang. Temukan informasi terkini tentang terapi autism, dukungan keluarga, dan inovasi teknologi AI.",
	keywords: [
		...SEO_CONFIG.DEFAULT_KEYWORDS,
		"blog autism",
		"artikel autism",
		"informasi autism",
		"cerita autism",
		"tips orang tua autism",
	],
	alternates: {
		canonical: getCanonicalUrl("/blogs"),
	},
	openGraph: {
		title: "Blog LLMForAutism",
		description:
			"Artikel dan wawasan tentang autism, teknologi LLM, dan dukungan untuk anak-anak dengan autism spectrum disorder",
		url: getCanonicalUrl("/blogs"),
		type: "website",
		images: [
			{
				url: SEO_CONFIG.IMAGES.ogDefault,
				width: 1200,
				height: 630,
				alt: "Blog LLMForAutism",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog LLMForAutism",
		description:
			"Artikel dan wawasan tentang autism, teknologi LLM, dan dukungan untuk anak-anak dengan autism",
		images: [SEO_CONFIG.IMAGES.ogDefault],
	},
};

export default function BlogsPage() {
	const blogPosts = getAllBlogPosts();

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
							<span className="text-foreground">Blog </span>
							<span className="text-jade-green">LLMForAutism</span>
						</h1>
						<p
							className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Artikel, cerita, dan wawasan tentang autism, teknologi LLM, dan
							perjalanan kami membantu anak-anak dengan autism berkembang.
						</p>
					</div>
				</div>
			</section>

			{/* Blog Grid */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<BlogCard key={post.slug} {...post} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
