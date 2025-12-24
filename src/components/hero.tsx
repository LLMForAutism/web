import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import ingtonIcon from "@/assets/img/ington-icon.png";
import arrowCurvedRight from "@/assets/img/curved-right-arrow.webp";
import arrowCurvedLeft from "@/assets/img/curved-left-arrow.webp";
import PhoneMockup from "@/components/ui/phone-mockup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-whitesmoke py-12 md:py-20 lg:py-32 mt-16 md:mt-20"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-foreground">LLMFOR</span>
            <span className="text-jade-green">AUTISM</span>
          </h1>

          {/* Icon and Text Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8 px-4">
            {/* Left Text - Hidden on mobile */}
            <p
              className="hidden md:block text-muted-foreground max-w-xs text-right text-sm lg:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Selalu menjadi teman yang selalu menemani
            </p>

            {/* Robot Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-mint-green flex items-center justify-center flex-shrink-0">
              <Image 
                src={ingtonIcon} 
                alt="Ington icon" 
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>

            {/* Mobile Text - Centered */}
            <p
              className="md:hidden text-muted-foreground max-w-xs text-center text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Selalu menjadi teman yang selalu menemani
            </p>

            {/* Right Text - Hidden on mobile */}
            <p
              className="hidden md:block text-muted-foreground max-w-xs text-left text-sm lg:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Selalu menjadi teman yang selalu menemani
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Link href="#our-journey" scroll={true}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-jade-green text-jade-green hover:bg-jade-green hover:text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-all duration-200 cursor-pointer text-sm md:text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Perjalanan kami
              </Button>
            </Link>
            <Link href="#project-ceriaku" scroll={true}>
              <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto bg-jade-green hover:bg-white hover:text-jade-green text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer text-sm md:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Coba Sekarang
            </Button>
            </Link>
          </div>
        </div>

        {/* Main Content with Phone Mockup */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto relative">
          {/* Left Content */}
          <div className="hidden md:block space-y-4 md:space-y-8 relative lg:self-start lg:mt-20 order-1 lg:order-none">
            <div className="text-center lg:text-right">
              <h3
                className="text-lg md:text-xl font-medium mb-3 md:mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Visi & Misi
                <br className="hidden lg:block" />
                <span className="lg:hidden"> </span>
                yang mulia
              </h3>

              <div className="inline-flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-md">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500 fill-red-500 flex-shrink-0" />
                <div className="text-left">
                  <p
                    className="font-bold text-base md:text-lg"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Calm Rate Today
                  </p>
                  <p
                    className="text-xs md:text-sm text-muted-foreground"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    1 56% ~ 14 sesi tenang
                  </p>
                </div>
              </div>

              <p
                className="text-muted-foreground mt-3 md:mt-4 text-sm md:text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Teknologi yang mengerti,
                <br />
                bukan sekadar pintar.
              </p>
            </div>

            {/* Arrow - Hidden on mobile and tablet */}
            <div className="hidden lg:block absolute -right-8 -bottom-20 -translate-y-1/2">
              <Image
                src={arrowCurvedLeft}
                alt="Curved arrow pointing from phone"
                width={96}
                height={96}
                className="opacity-60"
              />
            </div>
          </div>

          {/* Center - Phone Mockup */}
          <div className="flex justify-center order-2 lg:order-none">
            <div className="scale-75 sm:scale-90 md:scale-100">
              <PhoneMockup />
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden md:block space-y-4 md:space-y-8 relative lg:self-start lg:mt-8 order-3 lg:order-none">
            <div className="text-center lg:text-left">
              <h3
                className="text-lg md:text-xl font-medium mb-4 md:mb-8"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Teman digital
                <br className="hidden lg:block" />
                <span className="lg:hidden"> </span>
                yang peka dan
                <br className="hidden lg:block" />
                <span className="lg:hidden"> </span>
                sabar
              </h3>

              <div className="inline-flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow-md max-w-sm">
                <div className="text-left flex-1">
                  <p
                    className="text-xs text-muted-foreground mb-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Average Time to Calm
                  </p>
                  <p
                    className="font-bold text-xl md:text-2xl"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    6m 12s
                  </p>
                  <p
                    className="text-xs text-jade-green"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +2.7% ↑
                  </p>
                  <p
                    className="text-xs text-muted-foreground mt-2 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Rata-rata durasi dari &quot;mulai regulasi&quot; ~
                    &quot;tenang&quot;,
                    <br className="hidden md:block" />
                    <span className="md:hidden"> </span>
                    dengan bubble kecil per hari (5-6)
                  </p>
                </div>
                <span className="text-2xl md:text-3xl flex-shrink-0">⏳</span>
              </div>
            </div>

            {/* Arrow - Hidden on mobile and tablet */}
            <div className="hidden lg:block absolute -left-8 -bottom-16 -translate-y-1/2">
              <Image
                src={arrowCurvedRight}
                alt="Curved arrow pointing from phone"
                width={96}
                height={96}
                className="opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}