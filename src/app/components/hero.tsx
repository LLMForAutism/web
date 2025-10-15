import { Heart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/app/assets/img/hero-image.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/30 rounded-full">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                Empowering Through Technology
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Building a Better Future for{" "}
              <span className="text-primary-dark">Autism Support</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We're a volunteer-driven organization using AI and innovative
              software to create accessible learning tools, communication aids,
              and support systems for individuals with autism and their
              families.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Involved
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage.src}
              alt="Volunteers helping children with autism using technology and educational apps"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
