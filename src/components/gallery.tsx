import Image from "next/image";
import fs from "fs";
import path from "path";

// Server Component - reads files at build time
async function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
  
  try {
    const files = fs.readdirSync(galleryDir);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    );
    
    return imageFiles.map((file, index) => ({
      id: index + 1,
      url: `/images/gallery/${file}`,
      name: file.replace(/\.[^/.]+$/, ""), // Remove extension
    }));
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}

// Generate dynamic layout pattern based on image count
function generateLayoutPattern(imageCount: number) {
  const items: Array<{
    id: number;
    type: "image" | "text" | "empty";
    span: string;
    imageIndex?: number;
    content?: string;
  }> = [];

  let imageIndex = 0;
  let currentId = 1;

  // Pattern: tall image, text, 2 regular images, repeat
  while (imageIndex < imageCount) {
    // Every 5th position: tall image (2 rows)
    if (imageIndex < imageCount) {
      items.push({
        id: currentId++,
        type: "image",
        span: "col-span-1 row-span-2",
        imageIndex: imageIndex++,
      });
    }

    // Add text card
    items.push({
      id: currentId++,
      type: "text",
      span: "col-span-1 row-span-1",
      content: "Dokumentasi kegiatan dan momen penting dalam perjalanan kami.",
    });

    // Add 2 regular images
    for (let i = 0; i < 2 && imageIndex < imageCount; i++) {
      items.push({
        id: currentId++,
        type: "image",
        span: "col-span-1 row-span-1",
        imageIndex: imageIndex++,
      });
    }

    // Add empty space for breathing room
    if (imageIndex < imageCount - 2) {
      items.push({
        id: currentId++,
        type: "empty",
        span: "col-span-1 row-span-1",
      });
    }
  }

  return items;
}

export default async function Gallery() {
  const images = await getGalleryImages();
  const layoutItems = generateLayoutPattern(images.length);

  if (images.length === 0) {
    return (
      <section className="bg-whitesmoke py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">No images found in gallery.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-whitesmoke py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-right mb-12 max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-jade-green">Galeri</span> Dokumentasi
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
            {layoutItems.map((item) => (
              <div
                key={item.id}
                className={`${item.span} rounded-2xl overflow-hidden ${
                  item.type === "empty" ? "bg-transparent" : item.type === "text" ? "bg-white" : "bg-gray-200"
                }`}
              >
                {item.type === "image" && item.imageIndex !== undefined && (
                  <div className="relative w-full h-full group cursor-pointer overflow-hidden">
                    <Image
                      src={images[item.imageIndex].url}
                      alt={images[item.imageIndex].name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                )}

                {item.type === "text" && (
                  <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-jade-green/10 to-jade-green/5 border border-jade-green/20">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-jade-green/20 flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-6 h-6 text-jade-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p
                        className="text-foreground text-sm md:text-base leading-relaxed font-medium"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}

                {item.type === "empty" && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jade-green/10 to-jade-green/5 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-jade-green/20"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Count Indicator */}
        <div className="text-center mt-8">
          <p
            className="text-muted-foreground text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Menampilkan {images.length} foto dokumentasi
          </p>
        </div>
      </div>
    </section>
  );
}