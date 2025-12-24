import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/assets/css/globals.css";

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

import { SEO_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
	metadataBase: new URL(SEO_CONFIG.SITE_URL),
	title: {
		default: SEO_CONFIG.SITE_TITLE,
		template: `%s | ${SEO_CONFIG.SITE_NAME}`,
	},
	description: SEO_CONFIG.SITE_DESCRIPTION,
	keywords: SEO_CONFIG.DEFAULT_KEYWORDS,
	authors: [{ name: SEO_CONFIG.ORGANIZATION.name }],
	creator: SEO_CONFIG.ORGANIZATION.name,
	publisher: SEO_CONFIG.ORGANIZATION.name,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.png",
		apple: "/favicon.png",
	},
	openGraph: {
		type: "website",
		locale: SEO_CONFIG.DEFAULT_LOCALE,
		url: SEO_CONFIG.SITE_URL,
		siteName: SEO_CONFIG.SITE_NAME,
		title: SEO_CONFIG.SITE_TITLE,
		description: SEO_CONFIG.SITE_DESCRIPTION,
		images: [
			{
				url: SEO_CONFIG.IMAGES.ogDefault,
				width: 1200,
				height: 630,
				alt: SEO_CONFIG.SITE_NAME,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: SEO_CONFIG.SOCIAL.twitter,
		creator: SEO_CONFIG.SOCIAL.twitter,
		title: SEO_CONFIG.SITE_TITLE,
		description: SEO_CONFIG.SITE_DESCRIPTION,
		images: [SEO_CONFIG.IMAGES.ogDefault],
	},
	verification: {
		// TODO: Add verification codes after setting up in respective platforms
		google: "", // Add Google Search Console verification code
		// yandex: '',
		// bing: '',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
