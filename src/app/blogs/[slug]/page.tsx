import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
// import { useMDXComponents } from "../../../../mdx-components";
import { useMDXComponents } from "@root/mdx-components";

export async function generateStaticParams() {
    const slugs = getAllBlogSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
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
        components: useMDXComponents(),
    });

    return <>{content}</>;
}
