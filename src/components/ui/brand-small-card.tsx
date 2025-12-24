import Image from "next/image";

export default function BrandSmallCard({
	logoUrl,
	brandName,
	logoWidth = 80,
	logoHeight = 80,
	className = "",
}: {
	logoUrl: string;
	brandName: string;
	logoWidth?: number;
	logoHeight?: number;
	className?: string;
}) {
	return (
		<div
			className={`cursor-pointer inline-flex items-center gap-4 rounded-xl px-6 py-4 hover:shadow-md transition-shadow duration-200 ${className}`}
			style={{ fontFamily: "Poppins, sans-serif" }}
		>
			<div
				className="relative flex-shrink-0"
				style={{ width: logoWidth, height: logoHeight }}
			>
				<Image
					src={logoUrl}
					alt={`${brandName} logo`}
					fill
					className="object-contain"
				/>
			</div>
			<p className="font-bold text-base md:text-2xl text-foreground whitespace-nowrap">
				{brandName}
			</p>
		</div>
	);
}
