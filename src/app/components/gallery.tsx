import Image from "next/image";

export default function Gallery() {
  const galleryItems = [
    { id: 1, type: "image", url: "/images/gallery-1.jpg", span: "col-span-1 row-span-2" },
    { 
      id: 2, 
      type: "text", 
      content: "Lorem ipsum dolor sit amet consectetur. Sed nunc porttitor ullamcorper ullamcorper.",
      span: "col-span-1 row-span-1"
    },
    { id: 3, type: "image", url: "/images/gallery-2.jpg", span: "col-span-1 row-span-1" },
    { id: 4, type: "image", url: "/images/gallery-3.jpg", span: "col-span-1 row-span-1" },
    { id: 5, type: "image", url: "/images/gallery-4.jpg", span: "col-span-1 row-span-1" },
    { id: 6, type: "image", url: "/images/gallery-5.jpg", span: "col-span-1 row-span-2" },
    { id: 7, type: "image", url: "/images/gallery-6.jpg", span: "col-span-1 row-span-1" },
    { id: 8, type: "image", url: "/images/gallery-7.jpg", span: "col-span-1 row-span-1" },
    { id: 9, type: "empty", span: "col-span-1 row-span-1" },
    { id: 10, type: "image", url: "/images/gallery-8.jpg", span: "col-span-1 row-span-1" },
    { id: 11, type: "image", url: "/images/gallery-9.jpg", span: "col-span-1 row-span-2" },
    { 
      id: 12, 
      type: "text", 
      content: "Lorem ipsum dolor sit amet consectetur.",
      span: "col-span-1 row-span-1"
    },
    { id: 13, type: "image", url: "/images/gallery-10.jpg", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="bg-whitesmoke py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-right mb-12 max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-jade-green">Galery</span> Dokumentasi
          </h2>
          <p 
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Sekilas momen di balik layar — proses, tim, dan perjalanan kami saat mengembangkan
            berbagai proyek dengan dedikasi dan kolaborasi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`${item.span} rounded-2xl overflow-hidden ${
                  item.type === "empty" ? "bg-transparent" : "bg-gray-200"
                }`}
              >
                {item.type === "image" && item.url && (
                  <div className="relative w-full h-full group cursor-pointer">
                    <Image
                      src={item.url}
                      alt={`Gallery image ${item.id}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                
                {item.type === "text" && (
                  <div className="w-full h-full flex items-center justify-center p-6 bg-white">
                    <p 
                      className="text-foreground text-sm md:text-base leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}