import Image from "next/image";
import { Target } from "lucide-react";
import childrenFunWithGuitar from "@/app/assets/img/children-fun-with-guitar.jpg";

export default function VisiMisi() {
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
                Lorem ipsum dolor sit amet consectetur. Cras vitae dolor sed vestibulum venenatis. Auctor euismod dignissim cursus tellus leo volutpat lacus id. Et proin proin ut risus etiam adipiscing nec interdum. Consectetur consectetur proin morbi donec nibh.
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
          <div className="bg-gradient-to-br from-jade-green to-primary-dark rounded-3xl p-8 md:p-12 shadow-lg text-white relative">
            <div className="relative z-10">
              <div className="flex items-center justify-end gap-3 mb-6">
                <h2 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Misi Kami
                </h2>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
              </div>
              
              <div className="space-y-6">
                <p 
                  className="text-white/90 text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Lorem ipsum dolor sit amet consectetur. Cras vitae dolor sed vestibulum venenatis. Auctor euismod dignissim cursus tellus leo volutpat lacus id. Et proin proin ut risus etiam adipiscing nec interdum. Consectetur consectetur proin morbi donec nibh.
                </p>

                <p 
                  className="text-white/90 text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Lorem ipsum dolor sit amet consectetur. Cras vitae dolor sed vestibulum venenatis. Auctor euismod dignissim cursus tellus leo volutpat lacus id. Et proin proin ut risus etiam adipiscing nec interdum. Consectetur consectetur proin morbi donec nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}