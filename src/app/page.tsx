import type { Metadata } from "next";
import AboutUs from "../components/about-us";
import Collaboration from "../components/collaboration";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import OurJourney from "../components/our-jouney";
import ProjectShowcase from "../components/project-showcase";
import VisiMisi from "../components/visi-misi";
import Gallery from "../components/gallery";
import { SEO_CONFIG, getCanonicalUrl } from "@/lib/seo-config";
import {
	generateOrganizationSchema,
	generateWebSiteSchema,
	renderJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = {
	title: "Beranda",
	description: SEO_CONFIG.SITE_DESCRIPTION,
	alternates: {
		canonical: getCanonicalUrl("/"),
	},
	openGraph: {
		title: SEO_CONFIG.SITE_TITLE,
		description: SEO_CONFIG.SITE_DESCRIPTION,
		url: getCanonicalUrl("/"),
		type: "website",
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
		title: SEO_CONFIG.SITE_TITLE,
		description: SEO_CONFIG.SITE_DESCRIPTION,
		images: [SEO_CONFIG.IMAGES.ogDefault],
	},
};

export default function Home() {
	const organizationSchema = generateOrganizationSchema();
	const websiteSchema = generateWebSiteSchema();

	return (
		<div className="bg-whitesmoke">
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: renderJsonLd(organizationSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: renderJsonLd(websiteSchema),
				}}
			/>

			<Navbar />
			<Hero />
			<VisiMisi />
			<Collaboration />
			<OurJourney />
			<ProjectShowcase />
			<Gallery />
			<AboutUs />
			<Footer />
		</div>
	);
}
