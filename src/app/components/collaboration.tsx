import BrandSmallCard from "./ui/brand-small-card";

export default function Collaboration() {
  return (
    <section className="bg-whitesmoke text-center py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Heading */}
          <h2 
            className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-jade-green">Berkolaborasi </span>
            <span className="text-foreground">dengan</span>
          </h2>

          {/* Brand Cards Container */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center">
            <BrandSmallCard 
              logoUrl="/logo/logo-mac.webp" 
              brandName="Malang Autism Center"
              className="w-full sm:w-auto"
            />
            <BrandSmallCard 
              logoUrl="/logo/logo-letsconnect-canada.webp" 
              brandName="Let'sConnect Canada"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Optional: Additional text */}
          <p 
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Bermitra dengan organisasi terkemuka untuk memberikan solusi terbaik
          </p>
        </div>
      </div>
    </section>
  );
}