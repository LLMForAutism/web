import { projects } from "@/repositories/projects";
import ProjectCard from "./ui/project-card";

export default function ProjectShowcase() {
	return (
		<section className="bg-whitesmoke py-20 md:py-32">
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16 max-w-4xl mx-auto">
					<h2
						className="text-4xl md:text-5xl font-bold mb-6"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						Project <span className="text-jade-green">Showcase</span>
					</h2>
					<p
						className="text-muted-foreground text-base md:text-lg leading-relaxed"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						Inisiatif riset untuk mengembangkan model bahasa besar (LLM) yang
						memahami dan mendukung komunikasi anak dengan spektrum autisme
					</p>
				</div>

				{/* Project Cards */}
				<div className="space-y-24 max-w-6xl mx-auto">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
