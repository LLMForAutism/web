import BlogCard from "@/components/blog-card";
import { getAllBlogPosts } from "@/lib/blogs";

export default function BlogsPage() {
	const blogPosts = getAllBlogPosts();

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-mint-green to-white py-20 md:py-32 mt-20">
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
