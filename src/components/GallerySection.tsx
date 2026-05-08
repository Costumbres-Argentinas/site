import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { galleryImages } from "../content";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FFF8F0] py-20 lg:py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#A8D4F0]">Nuestro Proceso</p>
          <h2 className="text-4xl font-black text-[#1B3A6B] md:text-5xl">De la masa a tu mesa</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#E63946]" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`${image.label}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/80 via-[#1B3A6B]/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-0 p-4 sm:translate-y-full sm:group-hover:translate-y-0 sm:transition-transform sm:duration-300">
                <p className="text-lg font-bold text-white">{image.label}</p>
              </div>
              <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#E63946]">
                <span className="text-sm font-bold text-white">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}