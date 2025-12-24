/**
 * Centralized SEO Configuration
 * Update SITE_URL with your production domain
 */

export const SEO_CONFIG = {
	// TODO: Update this with your actual production domain
	SITE_URL: "https://llmforautism.com",
	SITE_NAME: "LLMForAutism",
	SITE_TITLE: "LLMForAutism - Teknologi AI untuk Mendukung Anak Autism",
	SITE_DESCRIPTION:
		"LLMForAutism menggunakan teknologi Large Language Model (LLM) untuk membantu anak-anak dengan autism berkembang melalui komunikasi yang konsisten, pembelajaran yang dipersonalisasi, dan dukungan teknologi inovatif.",
	DEFAULT_LOCALE: "id-ID",
	DEFAULT_LANGUAGE: "id",

	// Organization Information
	ORGANIZATION: {
		name: "LLMForAutism",
		legalName: "LLMForAutism",
		description:
			"Organisasi yang mengembangkan teknologi AI untuk mendukung anak-anak dengan autism spectrum disorder",
		email: "contact@llmforautism.com", // TODO: Update with actual email
		foundingDate: "2024",
	},

	// Social Media (TODO: Update with actual handles)
	SOCIAL: {
		twitter: "@llmforautism",
		facebook: "llmforautism",
		instagram: "llmforautism",
		linkedin: "company/llmforautism",
	},

	// Default Images
	IMAGES: {
		ogDefault: "/images/og-default.jpg", // TODO: Create this image
		logo: "/logo/logo.png",
		favicon: "/favicon.ico",
	},

	// Keywords
	DEFAULT_KEYWORDS: [
		"autism",
		"autism spectrum disorder",
		"ASD",
		"teknologi autism",
		"LLM",
		"large language model",
		"AI untuk autism",
		"terapi autism",
		"dukungan autism",
		"anak autism",
		"pendidikan autism",
		"teknologi pendidikan",
	],
};

export const getCanonicalUrl = (path: string = ""): string => {
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${SEO_CONFIG.SITE_URL}${cleanPath}`;
};

export const getImageUrl = (imagePath: string): string => {
	if (imagePath.startsWith("http")) {
		return imagePath;
	}
	const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
	return `${SEO_CONFIG.SITE_URL}${cleanPath}`;
};
