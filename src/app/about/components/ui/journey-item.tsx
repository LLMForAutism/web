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
		<div className="relative text-sm">
			<div className="grid grid-cols-5 gap-4 items-center">
				{/* Left content (odd index) */}
				{index % 2 === 1 ? (
					<div className="col-span-2 text-right">
						<div className="bg-white p-4 rounded-lg shadow-md border border-primary/20">
							<h3 className="font-semibold text-lg mb-2">{roadmap.activity}</h3>
							<p className="text-muted-foreground">
								{formattedDate(roadmap.date)}
							</p>
						</div>
					</div>
				) : (
					<div className="col-span-2"></div>
				)}

				{/* Center number */}
				<div className="col-span-1 flex justify-center">
					<div className="w-12 h-12 min-w-12 min-h-12 max-w-12 max-h-12 rounded-full bg-mint-green font-bold text-lg flex items-center justify-center z-10 border-4 border-white shadow-lg">
						{index + 1}
					</div>
				</div>

				{/* Right content (even index) */}
				{index % 2 === 0 ? (
					<div className="col-span-2 text-left">
						<div className="bg-white p-4 rounded-lg shadow-md border border-primary/20">
							<h3 className="font-semibold text-lg mb-2">{roadmap.activity}</h3>
							<p className="text-muted-foreground">
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
					<div className="w-0.5 h-8 bg-primary/30 mt-4"></div>
				</div>
			)}
		</div>
	);
}
