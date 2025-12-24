"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Member } from "@/repositories/members";
import { useState } from "react";

export default function PersonCard({
	member,
	className = "",
}: {
	member: Member;
	className?: string;
}) {
	const [imageSrc, setImageSrc] = useState(member.imageUrl);

	const CardContent = () => (
		<div className="relative w-full h-full group cursor-pointer">
			{/* Image */}
			<div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/60">
				<Image
					src={imageSrc}
					alt={member.name}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					onError={() => setImageSrc("/images/default-avatar.svg")}
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
			</div>

			{/* Arrow Icon */}
			<div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
				<ArrowUpRight className="w-5 h-5 text-foreground" />
			</div>

			{/* Text Content */}
			<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
				<h3
					className="text-xl md:text-2xl font-bold mb-1"
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					{member.name}
				</h3>
				<p
					className="text-sm md:text-base text-white/90"
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					{member.role}
				</p>
			</div>
		</div>
	);

	if (member.link) {
		return (
			<a
				href={member.link}
				target="_blank"
				rel="noopener noreferrer"
				className={`block w-full aspect-[3/4] ${className}`}
			>
				<CardContent />
			</a>
		);
	}

	return (
		<div className={`w-full aspect-[3/4] ${className}`}>
			<CardContent />
		</div>
	);
}
