import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useRef } from "react";
import { heroImage } from "../content";

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ubicacion" className="bg-[#FFF8F0] py-20 lg:py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#A8D4F0]">Ubicación y Horarios</p>
          <h2 className="text-4xl font-black text-[#1B3A6B] md:text-5xl">¡Descubre un sabor inolvidable!</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#E63946]" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-[#A8D4F0]/20 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B3A6B]">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#1B3A6B]">Dirección</h3>
                  <p className="text-[#1B3A6B]/70">Calle Toril 2</p>
                  <p className="text-[#1B3A6B]/70">50600, Ejea de los Caballeros</p>
                  <p className="text-[#1B3A6B]/70">Zaragoza, Aragón</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#A8D4F0]/20 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E63946]">
                  <Clock className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#1B3A6B]">Horarios de atención</h3>
                  <p className="text-[#1B3A6B]/70">Lunes a Domingo</p>
                  <p className="font-semibold text-[#1B3A6B]/70">desde las 20:00 hasta las 23:00</p>
                  <p className="mt-2 text-sm font-bold text-[#E63946]">Martes cerrado (excepto festivos y vísperas)</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#A8D4F0]/20 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4A261]">
                  <Phone className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#1B3A6B]">Teléfono</h3>
                  <a href="tel:976663344" className="text-xl font-bold text-[#1B3A6B] transition-colors hover:text-[#E63946]">
                    976 66 33 44
                  </a>
                  <p className="mt-1 text-sm text-[#1B3A6B]/60">Pedidos y reservas</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+Toril+2+Ejea+de+los+Caballeros"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B3A6B] px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#142d54]"
            >
              <Navigation size={18} />
              Cómo llegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <img src={heroImage} alt="Pizzería Costumbres Argentinas" className="h-64 w-full object-cover" />
              <div className="bg-white p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.5!2d-1.1373!3d42.1267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA3JzM2LjEiTiAxwrAwOCcxNC4zIlc!5e0!3m2!1ses!2ses!4v1"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Pizzería Costumbres Argentinas"
                  className="embed-reset rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}