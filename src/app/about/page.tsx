import type { Metadata } from "next";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import AboutUs from "./components/about-us";
import OurRoadmap from "./components/our-journey";
import { SEO_CONFIG, getCanonicalUrl } from "@/lib/seo-config";

export const metadata: Metadata = {
	title: "Tentang Kami",
	description:
		"LLMForAutism adalah organisasi yang mengembangkan teknologi Large Language Model (LLM) untuk mendukung anak-anak dengan autism spectrum disorder. Pelajari lebih lanjut tentang visi, misi, dan perjalanan kami dalam membantu anak-anak autism berkembang.",
	keywords: [
		...SEO_CONFIG.DEFAULT_KEYWORDS,
		"tentang llmforautism",
		"visi misi",
		"tim llmforautism",
		"organisasi autism",
	],
	alternates: {
		canonical: getCanonicalUrl("/about"),
	},
	openGraph: {
		title: "Tentang Kami - LLMForAutism",
		description:
			"Organisasi yang mengembangkan teknologi AI untuk mendukung anak-anak dengan autism spectrum disorder",
		url: getCanonicalUrl("/about"),
		type: "website",
		images: [
			{
				url: SEO_CONFIG.IMAGES.ogDefault,
				width: 1200,
				height: 630,
				alt: "Tentang LLMForAutism",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tentang Kami - LLMForAutism",
		description:
			"Organisasi yang mengembangkan teknologi AI untuk mendukung anak-anak dengan autism",
		images: [SEO_CONFIG.IMAGES.ogDefault],
	},
};

export default function About() {
	return (
		<div className="bg-whitesmoke">
			<Navbar />
			<AboutUs />
			<OurRoadmap />
			<Footer />
		</div>
	);
}
