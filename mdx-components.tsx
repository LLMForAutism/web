import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components: MDXComponents = {
	h1: (props: HeadingProps) => (
		<h1
			className="text-3xl md:text-4xl lg:text-5xl font-bold text-jade-green mb-3 mt-0 leading-tight"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	h2: (props: HeadingProps) => (
		<h2
			className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 pb-2 border-b-2 border-mint-green"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	h3: (props: HeadingProps) => (
		<h3
			className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	h4: (props: HeadingProps) => (
		<h4
			className="text-lg md:text-xl font-semibold text-foreground mt-6 mb-2"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	p: (props: ParagraphProps) => (
		<p
			className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	ol: (props: ListProps) => (
		<ol
			className="text-muted-foreground list-decimal pl-6 space-y-3 mb-6 text-base md:text-lg"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	ul: (props: ListProps) => (
		<ul
			className="text-muted-foreground list-disc pl-6 space-y-3 mb-6 text-base md:text-lg"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	li: (props: ListItemProps) => (
		<li
			className="pl-2"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	em: (props: ComponentPropsWithoutRef<"em">) => (
		<em className="italic text-foreground" {...props} />
	),
	strong: (props: ComponentPropsWithoutRef<"strong">) => (
		<strong className="font-semibold text-foreground" {...props} />
	),
	a: ({ href, children, ...props }: AnchorProps) => {
		const className =
			"text-jade-green hover:text-primary-dark underline underline-offset-2 transition-colors duration-200 font-medium";
		if (href?.startsWith("/")) {
			return (
				<Link href={href} className={className} {...props}>
					{children}
				</Link>
			);
		}
		if (href?.startsWith("#")) {
			return (
				<a href={href} className={className} {...props}>
					{children}
				</a>
			);
		}
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				{...props}
			>
				{children}
			</a>
		);
	},
	code: (props: ComponentPropsWithoutRef<"code">) => (
		<code
			className="bg-mint-green text-jade-green px-2 py-1 rounded text-sm font-mono border border-jade-green/20"
			{...props}
		/>
	),
	pre: (props: ComponentPropsWithoutRef<"pre">) => (
		<pre
			className="bg-foreground text-white rounded-xl p-5 md:p-6 overflow-x-auto mb-6 shadow-lg border-2 border-jade-green/20"
			{...props}
		/>
	),
	hr: (props: ComponentPropsWithoutRef<"hr">) => (
		<hr className="border-t-2 border-mint-green my-10" {...props} />
	),
	table: (props: ComponentPropsWithoutRef<"table">) => (
		<div className="overflow-x-auto mb-6 rounded-lg border border-border shadow-md">
			<table
				className="min-w-full border-collapse"
				style={{ fontFamily: "Poppins, sans-serif" }}
				{...props}
			/>
		</div>
	),
	thead: (props: ComponentPropsWithoutRef<"thead">) => (
		<thead className="bg-mint-green" {...props} />
	),
	tbody: (props: ComponentPropsWithoutRef<"tbody">) => (
		<tbody className="bg-white" {...props} />
	),
	tr: (props: ComponentPropsWithoutRef<"tr">) => (
		<tr
			className="border-b border-border hover:bg-mint-green/20 transition-colors duration-150"
			{...props}
		/>
	),
	th: (props: ComponentPropsWithoutRef<"th">) => (
		<th
			className="px-4 py-3 text-left font-semibold text-foreground border-r border-border last:border-r-0"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	td: (props: ComponentPropsWithoutRef<"td">) => (
		<td
			className="px-4 py-3 text-muted-foreground border-r border-border last:border-r-0"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	blockquote: (props: BlockquoteProps) => (
		<blockquote
			className="border-l-4 border-jade-green bg-mint-green/30 pl-6 pr-4 py-4 my-6 italic text-muted-foreground rounded-r-lg shadow-sm"
			style={{ fontFamily: "Poppins, sans-serif" }}
			{...props}
		/>
	),
	img: (props: ComponentPropsWithoutRef<"img">) => (
		<img
			className="rounded-xl shadow-lg my-8 w-full border-2 border-mint-green"
			{...props}
		/>
	),
};

export function getMDXComponents(): MDXComponents {
	return components;
}
