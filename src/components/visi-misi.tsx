import Image from "next/image";
import { Target } from "lucide-react";
import childrenFunWithGuitar from "@/assets/img/children-fun-with-guitar.jpg";

export default function VisiMisi() {
  const misiItems = [
    {
      id: 1,
      title: "Mengembangkan Teknologi Tepat Guna",
      description: "Terus menyempurnakan platform terapi digital berbasis LLM yang aman, efektif, dan dirancang khusus untuk kebutuhan unik anak autisme."
    },
    {
      id: 2,
      title: "Menjembatani Kesenjangan Akses",
      description: "Menyediakan layanan terapi berbiaya rendah yang mampu menembus batasan geografis, sehingga dapat dijangkau oleh keluarga di seluruh penjuru Indonesia."
    },
    {
      id: 3,
      title: "Berkolaborasi Secara Aktif",
      description: "Bekerja sama secara erat dengan terapis, yayasan, orang tua, dan para ahli untuk memastikan solusi kami selalu relevan, teruji, dan memberikan dampak nyata."
    },
    {
      id: 4,
      title: "Mengintegrasikan Metode Terapi Terbaik",
      description: "Mengimplementasikan dan mengadaptasi teknik-teknik terapi yang terbukti secara klinis (seperti Manding, FCT, ABC, dan Roleplay) ke dalam pengalaman aplikasi yang interaktif dan menarik."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-whitesmoke py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visi Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative">
            {/* Quote Icon */}
            <div className="absolute left-8 text-9xl text-gray-200 font-serif">&ldquo;</div>
            
            <div className="mt-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-jade-green mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Visi Kami
              </h2>
              
              <p 
                className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Terwujudnya kesetaraan kesempatan bagi setiap anak autisme di Indonesia untuk bertumbuh dan mencapai potensi terbaik mereka, didukung oleh teknologi terapi yang inovatif, terjangkau, dan dapat diakses di mana saja.
              </p>

              {/* Image */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src={childrenFunWithGuitar}
                  alt="Children playing together with guitar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Misi Card */}
          <div className="bg-gradient-to-br from-jade-green to-emerald-700 rounded-3xl p-8 md:p-12 shadow-lg text-white relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <h2 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Misi Kami
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {misiItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="group"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      {/* Number Badge */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span 
                          className="text-sm font-bold"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 
                          className="text-base md:text-lg font-bold mb-2 text-white"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="text-white/90 text-sm md:text-base leading-relaxed"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Divider - not for last item */}
                    {index < misiItems.length - 1 && (
                      <div className="ml-11 mt-4 md:mt-6 border-t border-white/20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}