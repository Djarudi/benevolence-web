import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-1.png";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-2.png";
import gallery15 from "@/assets/Change_Makers.png";
import gallery16 from "@/assets/gallery-17.jpg";


const images = [
  { src: gallery1, alt: "Children in classroom" },
  { src: gallery2, alt: "Children reading under a tree" },
  { src: gallery3, alt: "Award ceremony" },
  { src: gallery4, alt: "Children on playground" },
  { src: gallery5, alt: "Community event" },
  { src: gallery6, alt: "Community Giving" },
  { src: gallery7, alt: "Children with school supplies at blackboard" },
  { src: gallery8, alt: "Child graduation ceremony" },
  { src: gallery9, alt: "Children playing sports" },
  { src: gallery10, alt: "Group photo with children and books" },
  { src: gallery11, alt: "Children with notebooks at blackboard" },
  { src: gallery12, alt: "Children receiving gift bags" },
  { src: gallery13, alt: "Community group photo with children" },
  { src: gallery14, alt: "Community Thanks Giving" },
  { src: gallery15, alt: "Community Thanks Giving" },
  { src: gallery16, alt: "Community Thanks Giving" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-accent">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground">Gallery</h1>
          <p className="text-accent-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Moments of learning, joy, and community empowerment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="overflow-hidden rounded-xl group focus:outline-none focus:ring-2 focus:ring-primary break-inside-avoid block w-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 p-2 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
