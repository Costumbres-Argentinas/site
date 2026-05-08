import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { empanadasImage, heroImage, pizzaCloseupImage } from "../content";

const historyImages = [
  { src: heroImage, alt: "Preparación artesanal", className: "h-48" },
  { src: pizzaCloseupImage, alt: "Pizzas recién horneadas", className: "h-64" },
  { src: empanadasImage, alt: "Especialidades argentinas", className: "h-64" },
  { src: heroImage, alt: "Masa y horno", className: "h-48" },
];

export default function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="historia" className="bg-[#FFF8F0] py-20 lg:py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#A8D4F0]">Nuestra Historia</p>
          <h2 className="text-4xl font-black text-[#1B3A6B] md:text-5xl">Pasión por la Pizza</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#E63946]" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-[#1B3A6B]/80">
              Desde 2005 elaboramos cada día de manera artesanal las mejores pizzas,
              empanadas, pastas frescas y especialidades para que las disfrutes en
              nuestro local o en tu casa.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[#1B3A6B]/80">
              Nuestra masa se prepara diariamente con ingredientes seleccionados y
              fermenta naturalmente para lograr ese sabor único que nos caracteriza.
              Cada pizza es una obra de arte que combina la tradición argentina con
              los mejores productos locales.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:976663344"
                className="rounded-full bg-[#1B3A6B] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#142d54]"
              >
                Pedir para llevar
              </a>
              <a
                href="#ubicacion"
                className="rounded-full border-2 border-[#1B3A6B] px-6 py-3 font-bold text-[#1B3A6B] transition-all duration-300 hover:bg-[#1B3A6B] hover:text-white"
              >
                Comer en el local
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              {historyImages.slice(0, 2).map((image) => (
                <div key={image.alt} className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img src={image.src} alt={image.alt} className={`w-full object-cover ${image.className}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/45 to-transparent" />
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {historyImages.slice(2).map((image) => (
                <div key={image.alt} className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img src={image.src} alt={image.alt} className={`w-full object-cover ${image.className}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/45 to-transparent" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}