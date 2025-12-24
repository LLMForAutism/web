import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	author: string;
	readTime: string;
	category: string;
	content: string;
	keywords?: string[];
	image?: string;
	lastModified?: string;
}

export function getAllBlogSlugs() {
	const fileNames = fs.readdirSync(blogsDirectory);
	return fileNames
		.filter((fileName) => fileName.endsWith(".mdx"))
		.map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getBlogBySlug(slug: string): BlogPost | null {
	try {
		const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			title: data.title || "Untitled",
			excerpt: data.excerpt || "",
			date: data.date || "",
			author: data.author || "Tim LLMForAutism",
			readTime: data.readTime || "5 menit",
			category: data.category || "Artikel",
			content,
			keywords: data.keywords || [],
			image: data.image || undefined,
			lastModified: data.lastModified || data.date || "",
		};
	} catch (error) {
		console.error("Failed to load blog:", error);
		return null;
	}
}

export function getAllBlogPosts(): BlogPost[] {
	const slugs = getAllBlogSlugs();
	const posts = slugs
		.map((slug) => getBlogBySlug(slug))
		.filter((post): post is BlogPost => post !== null)
		.sort((a, b) => {
			// Sort by date (newest first)
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});

	return posts;
}
