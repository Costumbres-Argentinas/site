import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroImage } from "../content";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Pizza argentina en horno de leña" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/85 via-[#1B3A6B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/40 to-transparent" />
      </div>

      <div className="relative z-10 container pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-bold uppercase tracking-widest text-[#A8D4F0]"
          >
            Pizzería
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mb-4 text-5xl leading-tight font-black text-white md:text-7xl lg:text-8xl"
          >
            Costumbres
            <br />
            <span className="text-[#A8D4F0]">Argentinas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display mb-8 text-xl font-semibold italic text-white/90 md:text-2xl"
          >
            Sabés lo que comés
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-white/80"
          >
            Desde 2005 elaboramos cada día de manera artesanal las mejores pizzas,
            empanadas y pastas frescas en Ejea de los Caballeros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="rounded-full bg-[#E63946] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#c62d3a] hover:shadow-2xl"
            >
              Ver nuestro menú
            </a>
            <a
              href="#ubicacion"
              className="rounded-full border-2 border-white/60 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="text-white/70" size={32} />
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" preserveAspectRatio="none">
          <path d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,150 L0,150 Z" fill="#A8D4F0" fillOpacity="0.6" />
          <path d="M0,75 C300,120 600,30 900,75 C1100,100 1300,40 1440,70 L1440,150 L0,150 Z" fill="#FFFFFF" fillOpacity="0.7" />
          <path d="M0,90 C200,120 500,60 750,90 C1000,120 1250,60 1440,85 L1440,150 L0,150 Z" fill="#A8D4F0" fillOpacity="0.35" />
          <path d="M0,110 C360,140 720,100 1080,120 C1260,130 1380,110 1440,115 L1440,150 L0,150 Z" fill="#FFF8F0" />
        </svg>
        <div className="absolute right-12 top-2 hidden sm:block">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L18.5 13.5L30 16L18.5 18.5L16 30L13.5 18.5L2 16L13.5 13.5L16 2Z" fill="#F4A261" />
          </svg>
        </div>
      </div>
    </section>
  );
}