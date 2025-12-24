import Roadmap from "../../models/roadmap";

export default function RoadmapItem({
	index,
	roadmap,
	roadmapsLength,
}: {
	index: number;
	roadmap: Roadmap;
	roadmapsLength: number;
}) {
	const formattedDate = (date: Date) => {
		return date.toLocaleString("id-ID", {
			month: "long",
			year: "numeric",
		});
	};

	return (
		<div className="relative">
			{/* Desktop Layout (hidden on mobile) */}
			<div className="hidden md:block">
				<div className="grid grid-cols-5 gap-4 items-center">
					{/* Left content (odd index) */}
					{index % 2 === 1 ? (
						<div className="col-span-2 text-right">
							<div className="bg-white p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
								<h3
									className="font-semibold text-lg mb-2 text-foreground"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									{roadmap.activity}
								</h3>
								<p
									className="text-sm text-muted-foreground"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									{formattedDate(roadmap.date)}
								</p>
							</div>
						</div>
					) : (
						<div className="col-span-2"></div>
					)}

					{/* Center number */}
					<div className="col-span-1 flex justify-center">
						<div className="w-12 h-12 min-w-12 min-h-12 max-w-12 max-h-12 rounded-full bg-jade-green text-white font-bold text-lg flex items-center justify-center z-10 border-4 border-white shadow-lg">
							{index + 1}
						</div>
					</div>

					{/* Right content (even index) */}
					{index % 2 === 0 ? (
						<div className="col-span-2 text-left">
							<div className="bg-white p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
								<h3
									className="font-semibold text-lg mb-2 text-foreground"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									{roadmap.activity}
								</h3>
								<p
									className="text-sm text-muted-foreground"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									{formattedDate(roadmap.date)}
								</p>
							</div>
						</div>
					) : (
						<div className="col-span-2"></div>
					)}
				</div>

				{/* Vertical line connector (except for last item) */}
				{index < roadmapsLength - 1 && (
					<div className="flex justify-center">
						<div className="w-0.5 h-8 bg-jade-green/30 mt-4"></div>
					</div>
				)}
			</div>

			{/* Mobile Layout (visible on mobile only) */}
			<div className="md:hidden">
				<div className="flex gap-4 items-start">
					{/* Number */}
					<div className="flex flex-col items-center flex-shrink-0">
						<div className="w-10 h-10 rounded-full bg-jade-green text-white font-bold text-base flex items-center justify-center border-4 border-white shadow-lg">
							{index + 1}
						</div>
						{/* Vertical line connector (except for last item) */}
						{index < roadmapsLength - 1 && (
							<div className="w-0.5 h-full min-h-8 bg-jade-green/30 mt-2"></div>
						)}
					</div>

					{/* Content */}
					<div className="flex-1 pb-6">
						<div className="bg-white p-4 rounded-xl shadow-md border border-border">
							<h3
								className="font-semibold text-base mb-2 text-foreground"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								{roadmap.activity}
							</h3>
							<p
								className="text-xs text-muted-foreground"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								{formattedDate(roadmap.date)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
