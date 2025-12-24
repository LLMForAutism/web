import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

export default function BlogCard({
	slug,
	title,
	excerpt,
	date,
	author,
	readTime,
	category,
	image,
}: {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	author: string;
	readTime: string;
	category: string;
	image?: string;
}) {
	return (
		<Link href={`/blogs/${slug}`}>
			<div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer border border-border hover:border-jade-green">
				{/* Image Placeholder */}
				<div className="relative h-48 bg-gradient-to-br from-mint-green to-jade-green overflow-hidden">
					{image ? (
						<Image
							src={image}
							alt={title}
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<span className="text-6xl opacity-30">📝</span>
						</div>
					)}
					{/* Category Badge */}
					<div className="absolute top-4 left-4">
						<span className="bg-white text-jade-green px-3 py-1 rounded-full text-xs font-semibold shadow-md">
							{category}
						</span>
					</div>
				</div>

				{/* Content */}
				<div className="p-6 flex-1 flex flex-col">
					{/* Title */}
					<h3
						className="text-xl font-bold text-foreground mb-3 group-hover:text-jade-green transition-colors duration-200 line-clamp-2"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						{title}
					</h3>

					{/* Excerpt */}
					<p
						className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						{excerpt}
					</p>

					{/* Meta Information */}
					<div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
						<div className="flex items-center gap-1">
							<Calendar className="w-4 h-4" />
							<span>{date}</span>
						</div>
						<div className="flex items-center gap-1">
							<Clock className="w-4 h-4" />
							<span>{readTime}</span>
						</div>
						<div className="flex items-center gap-1">
							<User className="w-4 h-4" />
							<span>{author}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
