import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, ChevronRight, ChevronLeft, X } from "lucide-react";
import heroImg from "@assets/generated_images/hero.jpg";
import hairStyling from "@assets/generated_images/hair-styling.jpg";
import hairColoring from "@assets/generated_images/hair-coloring.jpg";
import bridalMakeup from "@assets/generated_images/bridal-makeup.jpg";
import bridalDramatic from "@assets/generated_images/bridal-dramatic.jpg";
import hydraFacial from "@assets/generated_images/hydra-facial.jpg";
import salonDetails from "@assets/generated_images/salon-details.jpg";
import manicure from "@assets/generated_images/manicure.jpg";
import products from "@assets/generated_images/products.jpg";
import mehndi from "@assets/generated_images/mehndi.jpg";

type GalleryCategory = "All" | "Salon Interior" | "Hair Styling" | "Hair Color" | "Bridal Makeup" | "Beauty Products" | "Mehndi";

interface GalleryImage {
  id: number;
  src: string;
  category: GalleryCategory;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: heroImg, category: "Salon Interior", alt: "Salon interior luxury view" },
  { id: 2, src: bridalMakeup, category: "Bridal Makeup", alt: "Elegant bridal makeup" },
  { id: 3, src: hairStyling, category: "Hair Styling", alt: "Glossy hair styling waves" },
  { id: 4, src: hairColoring, category: "Hair Color", alt: "Rich hair coloring balayage" },
  { id: 5, src: hydraFacial, category: "Salon Interior", alt: "Hydra facial treatment" },
  { id: 6, src: bridalDramatic, category: "Bridal Makeup", alt: "Dramatic bridal look" },
  { id: 7, src: salonDetails, category: "Salon Interior", alt: "Salon details and vanity" },
  { id: 8, src: manicure, category: "Salon Interior", alt: "Luxury manicure" },
  { id: 9, src: products, category: "Beauty Products", alt: "Premium beauty products" },
  { id: 10, src: mehndi, category: "Mehndi", alt: "Intricate bridal mehndi" }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = ["All", "Salon Interior", "Hair Styling", "Hair Color", "Bridal Makeup", "Beauty Products", "Mehndi"];

  const filteredImages = activeTab === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Gallery" 
          subtitle="A glimpse into the artistry, elegance, and transformations at Nabhia's Salon."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-secondary hover:bg-primary/10 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm"
              onClick={() => openLightbox(idx)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <Search className="text-white h-8 w-8 mb-2" />
                <span className="text-white font-medium tracking-wider text-sm uppercase">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-md flex items-center justify-center"
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[110]"
              >
                <X size={32} />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-4 md:left-10 text-white hover:text-primary transition-colors z-[110]"
              >
                <ChevronLeft size={40} />
              </button>
              
              <div className="w-full max-w-5xl max-h-[80vh] px-4 flex items-center justify-center relative">
                <img 
                  src={filteredImages[lightboxIndex].src} 
                  alt={filteredImages[lightboxIndex].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
                />
                <div className="absolute bottom-[-40px] text-white font-serif text-lg">
                  {lightboxIndex + 1} / {filteredImages.length}
                </div>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-4 md:right-10 text-white hover:text-primary transition-colors z-[110]"
              >
                <ChevronRight size={40} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
