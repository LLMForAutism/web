import type { Metadata } from "next";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@root/mdx-components";
import { SEO_CONFIG, getCanonicalUrl, getImageUrl } from "@/lib/seo-config";
import {
	generateBlogPostingSchema,
	generateBreadcrumbSchema,
	renderJsonLd,
} from "@/lib/structured-data";

export async function generateStaticParams() {
	const slugs = getAllBlogSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = getBlogBySlug(slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	const canonicalUrl = getCanonicalUrl(`/blogs/${slug}`);
	const imageUrl = post.image
		? getImageUrl(post.image)
		: SEO_CONFIG.IMAGES.ogDefault;

	return {
		title: post.title,
		description: post.excerpt,
		keywords: [
			...SEO_CONFIG.DEFAULT_KEYWORDS,
			...(post.keywords || []),
			post.category,
		],
		authors: [{ name: post.author }],
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			type: "article",
			title: post.title,
			description: post.excerpt,
			url: canonicalUrl,
			siteName: SEO_CONFIG.SITE_NAME,
			publishedTime: post.date,
			modifiedTime: post.lastModified || post.date,
			authors: [post.author],
			section: post.category,
			tags: post.keywords,
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			images: [imageUrl],
			creator: SEO_CONFIG.SOCIAL.twitter,
		},
	};
}

export default async function BlogPost({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const post = getBlogBySlug(slug);

	if (!post) {
		notFound();
	}

	const { content } = await compileMDX({
		source: post.content,
		options: { parseFrontmatter: true },
		components: getMDXComponents(),
	});

	// Generate structured data
	const blogPostingSchema = generateBlogPostingSchema(post, slug);
	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: "Beranda", url: getCanonicalUrl("/") },
		{ name: "Blog", url: getCanonicalUrl("/blogs") },
		{ name: post.title, url: getCanonicalUrl(`/blogs/${slug}`) },
	]);

	return (
		<>
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: renderJsonLd(blogPostingSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: renderJsonLd(breadcrumbSchema),
				}}
			/>

			{content}
		</>
	);
}
