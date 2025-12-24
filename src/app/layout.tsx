import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/assets/css/globals.css";

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "LLMForAutism",
	description: "LLMForAutism homepage",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.png",
		apple: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
