import BrandSmallCard from "./ui/brand-small-card"

export default function Collaboration() {
  return (
		<section className="bg-whitesmoke text-center py-16">
			<div className="container mx-auto flex flex-col gap-6">
				<h2 className="font-bold text-3xl">
					<span className="text-jade-green">Berkolaborasi </span>
					<span>dengan</span>
				</h2>

				<div className="flex gap-8 justify-center">
					<BrandSmallCard logoUrl="/logo/logo-mac.webp" brandName="Malang Autism Center" />
					<BrandSmallCard logoUrl="/logo/logo-hey-kai.webp" brandName="HeyKai" />
				</div>
			</div>
		</section>
	);
}
