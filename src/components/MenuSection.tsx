import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { menuCategories } from "../content";

const categoryIcons: Record<string, string> = {
  Empanadas: "🥟",
  Pastas: "🍝",
  Pizzas: "🍕",
  Bebidas: "🥤",
  "Postres y Café": "🍮",
};

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<number>(menuCategories[0].id);

  const currentCategory = menuCategories.find((category) => category.id === activeCategory) ?? menuCategories[0];

  return (
    <section id="menu" className="relative py-20 lg:py-28" ref={ref}>
      <div className="absolute inset-0 bg-[#FFF8F0]" />

      <div className="absolute inset-x-0 top-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#A8D4F0" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#A8D4F0]">Nuestra Carta</p>
          <h2 className="text-4xl font-black text-[#1B3A6B] md:text-5xl">Menú</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#E63946]" />
          <p className="mx-auto mt-4 max-w-lg text-[#1B3A6B]/70">{currentCategory.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-300 md:px-6 md:text-base ${
                activeCategory === category.id
                  ? "scale-105 bg-[#1B3A6B] text-white shadow-lg"
                  : "bg-white text-[#1B3A6B] shadow-sm hover:bg-[#1B3A6B]/10"
              }`}
            >
              <span className="mr-1.5">{categoryIcons[category.name] ?? "📋"}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className={`group rounded-xl border bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#A8D4F0]/50 hover:shadow-md ${
                item.isHighlighted ? "border-[#F4A261] ring-1 ring-[#F4A261]/30" : "border-[#A8D4F0]/20"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h4 className="font-bold text-[#1B3A6B] transition-colors group-hover:text-[#E63946]">
                    {item.isHighlighted && <span className="mr-1 text-[#F4A261]">★</span>}
                    {item.name}
                  </h4>
                  {item.description && <p className="mt-1 text-sm leading-snug text-[#1B3A6B]/60">{item.description}</p>}
                </div>
                <span className="whitespace-nowrap text-lg font-black text-[#E63946]">{item.price} €</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}