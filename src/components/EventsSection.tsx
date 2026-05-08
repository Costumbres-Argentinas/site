import { motion, useInView } from "framer-motion";
import { Gift, PartyPopper, Users } from "lucide-react";
import { useRef } from "react";
import { empanadasImage, pizzaCloseupImage } from "../content";

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="eventos" className="relative overflow-hidden py-20 lg:py-28" ref={ref}>
      <div className="absolute inset-0">
        <img src={pizzaCloseupImage} alt="Celebración en Costumbres Argentinas" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#1B3A6B]/80" />
      </div>

      <div className="absolute inset-x-0 top-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,0 L0,0 Z" fill="#FFF8F0" />
        </svg>
      </div>

      <div className="relative z-10 container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#A8D4F0]">Eventos privados</p>
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              ¿Qué tal una
              <br />
              <span className="text-[#F4A261]">Pizza Party?</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/85">
              Un cumpleaños, un festejo con familia o una reunión con amigos en la peña
              puede ser una excelente ocasión para disfrutar de una rica pizza.
              Además, el día de tu cumpleaños te esperamos en nuestro local para
              celebrarlo y te regalamos una pizza.
            </p>

            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#A8D4F0]/20">
                  <PartyPopper className="text-[#A8D4F0]" size={24} />
                </div>
                <p className="text-sm font-bold text-white">Cumpleaños</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4A261]/20">
                  <Users className="text-[#F4A261]" size={24} />
                </div>
                <p className="text-sm font-bold text-white">Reuniones</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#E63946]/20">
                  <Gift className="text-[#E63946]" size={24} />
                </div>
                <p className="text-sm font-bold text-white">Pizza gratis</p>
              </div>
            </div>

            <a
              href="tel:976663344"
              className="inline-block rounded-full bg-[#E63946] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#c62d3a]"
            >
              Reservar evento
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img src={empanadasImage} alt="Empanadas argentinas" className="w-full rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#F4A261] p-6 text-white shadow-xl">
                <p className="text-3xl font-black">20+</p>
                <p className="text-sm font-bold">Años de experiencia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" preserveAspectRatio="none">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#FFF8F0" />
        </svg>
      </div>
    </section>
  );
}