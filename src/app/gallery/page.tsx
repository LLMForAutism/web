'use client'

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar, Users, Code, ImageIcon } from "lucide-react";
import Navbar from "../components/navbar";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Gallery items with metadata
  const galleryItems = [
    {
      id: 1,
      src: "/images/gallery/team-meeting-1.jpg",
      alt: "Tim volunteer sedang berdiskusi tentang pengembangan aplikasi LLM untuk anak autisme",
      title: "Tim Meeting - Perencanaan Aplikasi",
      date: "2024-09-15",
      category: "Pengembangan",
      description: "Sesi brainstorming tim untuk merancang fitur-fitur aplikasi pembelajaran interaktif."
    },
    {
      id: 2,
      src: "/images/gallery/coding-session.jpg", 
      alt: "Developer volunteer mengkoding aplikasi AI untuk membantu komunikasi anak autisme",
      title: "Coding Session - AI Development",
      date: "2024-09-20",
      category: "Teknologi",
      description: "Pengembangan model bahasa untuk membantu komunikasi anak dengan spektrum autisme."
    },
    {
      id: 3,
      src: "/images/gallery/testing-with-kids.jpg",
      alt: "Volunteer menguji aplikasi bersama anak-anak autisme dan terapis",
      title: "User Testing dengan Anak-anak",
      date: "2024-10-05",
      category: "Testing",
      description: "Sesi testing langsung dengan anak-anak untuk memastikan aplikasi mudah digunakan."
    },
    {
      id: 4,
      src: "/images/gallery/workshop-parents.jpg",
      alt: "Workshop untuk orang tua tentang penggunaan teknologi AI dalam terapi autisme",
      title: "Workshop Orang Tua",
      date: "2024-10-12",
      category: "Edukasi",
      description: "Pelatihan untuk orang tua dalam menggunakan tools teknologi untuk mendukung anak mereka."
    },
    {
      id: 5,
      src: "/images/gallery/app-demo.jpg",
      alt: "Demo aplikasi LLM yang membantu anak autisme belajar komunikasi",
      title: "Demo Aplikasi Terbaru",
      date: "2024-10-18",
      category: "Produk",
      description: "Presentasi fitur terbaru aplikasi yang membantu pembelajaran sosial dan komunikasi."
    },
    {
      id: 6,
      src: "/images/gallery/volunteer-training.jpg",
      alt: "Pelatihan volunteer baru tentang autism spectrum disorder dan teknologi assistive",
      title: "Pelatihan Volunteer Baru",
      date: "2024-10-25",
      category: "Pengembangan",
      description: "Orientasi dan pelatihan untuk volunteer baru tentang autisme dan teknologi pendukung."
    }
  ];

  const categories = ["Semua", "Pengembangan", "Teknologi", "Testing", "Edukasi", "Produk"];
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems = selectedCategory === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleImageError = (itemId: number) => {
    setImageErrors(prev => new Set(prev).add(itemId));
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Pengembangan": return <Users className="w-4 h-4" />;
      case "Teknologi": return <Code className="w-4 h-4" />;
      case "Testing": return <Users className="w-4 h-4" />;
      case "Edukasi": return <Users className="w-4 h-4" />;
      case "Produk": return <Code className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const ImagePlaceholder = ({ className }: { className?: string }) => (
    <div className={`bg-muted flex items-center justify-center ${className}`}>
      <div className="text-center">
        <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">Gambar tidak tersedia</p>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Galeri Kami
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dokumentasi perjalanan kami dalam mengembangkan teknologi AI untuk membantu 
              anak-anak dengan spektrum autisme dan keluarga mereka.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-white text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => openModal(index)}
              >
                <div className="relative aspect-video overflow-hidden">
                  {imageErrors.has(item.id) ? (
                    <ImagePlaceholder className="w-full h-full" />
                  ) : (
                    <>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => handleImageError(item.id)}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(item.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long', 
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada gambar untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="relative aspect-video mb-4">
              {imageErrors.has(filteredItems[selectedImage].id) ? (
                <ImagePlaceholder className="w-full h-full rounded-lg" />
              ) : (
                <Image
                  src={filteredItems[selectedImage].src}
                  alt={filteredItems[selectedImage].alt}
                  fill
                  className="object-contain"
                  onError={() => handleImageError(filteredItems[selectedImage].id)}
                />
              )}
            </div>

            {/* Image Info */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                {getCategoryIcon(filteredItems[selectedImage].category)}
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {filteredItems[selectedImage].category}
                </span>
              </div>
              
              <h3 className="font-semibold text-xl mb-2">
                {filteredItems[selectedImage].title}
              </h3>
              
              <p className="text-muted-foreground mb-3">
                {filteredItems[selectedImage].description}
              </p>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(filteredItems[selectedImage].date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}