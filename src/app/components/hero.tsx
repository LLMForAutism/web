import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import ingtonIcon from "@/app/assets/img/ington-icon.png";
import arrowCurvedRight from "@/app/assets/img/curved-right-arrow.webp";
import arrowCurvedLeft from "@/app/assets/img/curved-left-arrow.webp";
import PhoneMockup from "./ui/phone-mockup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-mint-green/30 via-background to-mint-green/20 py-20 md:py-32 mt-20"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl md:text-9xl font-bold mb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-foreground">LLMFOR</span>
            <span className="text-jade-green">AUTISM</span>
          </h1>

          <div className="flex items-center justify-center gap-8 mb-8">
            <p
              className="text-muted-foreground max-w-xs text-right"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Selalu menjadi teman yang selalu menemani
            </p>

            {/* Robot Icon Placeholder */}
            <div className="w-16 h-16 rounded-full bg-mint-green flex items-center justify-center">
              <Image src={ingtonIcon} alt="Ington icon" />
            </div>

            <p
              className="text-muted-foreground max-w-xs text-left"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Selalu menjadi teman yang selalu menemani
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-jade-green text-jade-green hover:bg-jade-green hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Perjalanan kami
            </Button>
            <Button
              variant="default"
              size="lg"
              className="bg-jade-green hover:bg-white hover:text-jade-green text-white font-semibold px-8 py-3 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Coba Sekarang
            </Button>
          </div>
        </div>

        {/* Main Content with Phone Mockup */}
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto relative">
          {/* Fog Effect Overlay */}
          {/* <div className="absolute inset-x-0 -bottom-10 h-64 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-20"></div> */}

          {/* Left Content */}
          <div className="space-y-8 relative self-start mt-20">
            <div className="text-center lg:text-right">
              <h3
                className="text-xl font-medium mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Visi & Misi
                <br />
                yang mulia
              </h3>

              <div className="inline-flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                <div className="text-left">
                  <p
                    className="font-bold text-lg"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Calm Rate Today
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    1 56% ~ 14 sesi tenang
                  </p>
                </div>
              </div>

              <p
                className="text-muted-foreground mt-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Teknologi yang mengerti,
                <br />
                bukan sekadar pintar.
              </p>
            </div>

            <div className="absolute -right-8">
              <Image
                src={arrowCurvedLeft}
                alt="Curved arrow pointing from phone"
                width={128}
                height={128}
                className="mx-auto lg:mr-auto"
              />
            </div>
          </div>

          {/* Center - Phone Mockup */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>

          {/* Right Content */}
          <div className="space-y-8 relative self-start mt-8">
            <div className="text-center lg:text-left">
              <h3
                className="text-xl font-medium mb-8"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Teman digital
                <br />
                yang peka dan
                <br />
                sabar
              </h3>

              <div className="inline-flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
                <div className="text-left">
                  <p
                    className="text-xs text-muted-foreground mb-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Average Time to Calm
                  </p>
                  <p
                    className="font-bold text-2xl"
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
                    className="text-xs text-muted-foreground mt-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Rata-rata durasi dari &quot;mulai regulasi&quot; ~
                    &quot;tenang&quot;,
                    <br />
                    dengan bubble kecil per hari (5-6)
                  </p>
                </div>
                <span className="text-3xl">⏳</span>
              </div>
            </div>

            <div className="absolute -left-8">
              <Image
                src={arrowCurvedRight}
                alt="Curved arrow pointing from phone"
                width={128}
                height={128}
                className="mx-auto lg:mr-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
