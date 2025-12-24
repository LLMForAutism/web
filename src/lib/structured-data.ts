import { SEO_CONFIG, getCanonicalUrl, getImageUrl } from "./seo-config";
import { BlogPost } from "./blogs";

/**
 * Structured Data (JSON-LD) Generators
 * These functions generate schema.org structured data for better SEO
 */

export interface OrganizationSchema {
	"@context": string;
	"@type": string;
	name: string;
	legalName: string;
	description: string;
	url: string;
	logo: string;
	foundingDate: string;
	email: string;
	sameAs: string[];
}

export function generateOrganizationSchema(): OrganizationSchema {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SEO_CONFIG.ORGANIZATION.name,
		legalName: SEO_CONFIG.ORGANIZATION.legalName,
		description: SEO_CONFIG.ORGANIZATION.description,
		url: SEO_CONFIG.SITE_URL,
		logo: getImageUrl(SEO_CONFIG.IMAGES.logo),
		foundingDate: SEO_CONFIG.ORGANIZATION.foundingDate,
		email: SEO_CONFIG.ORGANIZATION.email,
		sameAs: [
			`https://twitter.com/${SEO_CONFIG.SOCIAL.twitter.replace("@", "")}`,
			`https://facebook.com/${SEO_CONFIG.SOCIAL.facebook}`,
			`https://instagram.com/${SEO_CONFIG.SOCIAL.instagram}`,
			`https://linkedin.com/${SEO_CONFIG.SOCIAL.linkedin}`,
		],
	};
}

export interface WebSiteSchema {
	"@context": string;
	"@type": string;
	name: string;
	description: string;
	url: string;
	potentialAction?: {
		"@type": string;
		target: {
			"@type": string;
			urlTemplate: string;
		};
		"query-input": string;
	};
}

export function generateWebSiteSchema(
	includeSearchAction: boolean = true,
): WebSiteSchema {
	const schema: WebSiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SEO_CONFIG.SITE_NAME,
		description: SEO_CONFIG.SITE_DESCRIPTION,
		url: SEO_CONFIG.SITE_URL,
	};

	if (includeSearchAction) {
		schema.potentialAction = {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${SEO_CONFIG.SITE_URL}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		};
	}

	return schema;
}

export interface BlogPostingSchema {
	"@context": string;
	"@type": string;
	headline: string;
	description: string;
	image?: string;
	datePublished: string;
	dateModified: string;
	author: {
		"@type": string;
		name: string;
	};
	publisher: {
		"@type": string;
		name: string;
		logo: {
			"@type": string;
			url: string;
		};
	};
	mainEntityOfPage: {
		"@type": string;
		"@id": string;
	};
	articleSection?: string;
	keywords?: string[];
}

export function generateBlogPostingSchema(
	post: BlogPost,
	slug: string,
): BlogPostingSchema {
	const url = getCanonicalUrl(`/blogs/${slug}`);

	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.excerpt,
		image: post.image ? getImageUrl(post.image) : undefined,
		datePublished: post.date,
		dateModified: post.lastModified || post.date,
		author: {
			"@type": "Person",
			name: post.author,
		},
		publisher: {
			"@type": "Organization",
			name: SEO_CONFIG.ORGANIZATION.name,
			logo: {
				"@type": "ImageObject",
				url: getImageUrl(SEO_CONFIG.IMAGES.logo),
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		articleSection: post.category,
		keywords: post.keywords,
	};
}

export interface BreadcrumbItem {
	name: string;
	url: string;
}

export interface BreadcrumbListSchema {
	"@context": string;
	"@type": string;
	itemListElement: Array<{
		"@type": string;
		position: number;
		name: string;
		item: string;
	}>;
}

export function generateBreadcrumbSchema(
	items: BreadcrumbItem[],
): BreadcrumbListSchema {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

/**
 * Helper function to render JSON-LD script tag
 */
export function renderJsonLd(data: object): string {
	return JSON.stringify(data);
}
