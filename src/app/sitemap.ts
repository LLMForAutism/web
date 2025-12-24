import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blogs";
import { SEO_CONFIG } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
	const blogPosts = getAllBlogPosts();

	// Static pages
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: SEO_CONFIG.SITE_URL,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${SEO_CONFIG.SITE_URL}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${SEO_CONFIG.SITE_URL}/blogs`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.9,
		},
		{
			url: `${SEO_CONFIG.SITE_URL}/gallery`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
	];

	// Dynamic blog post pages
	const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
		url: `${SEO_CONFIG.SITE_URL}/blogs/${post.slug}`,
		lastModified: post.lastModified
			? new Date(post.lastModified)
			: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticPages, ...blogPages];
}
