import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMdx = createMdx({
	// Add markdown plugins here, as desired
});

export default withMdx(nextConfig);
