import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import BrandMark from "./BrandMark";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#historia", label: "Nuestra Historia" },
  { href: "#menu", label: "Menú" },
  { href: "#eventos", label: "Eventos" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="#inicio" aria-label="Ir al inicio" title="Ir al inicio" className="rounded-xl px-1 py-1">
            <BrandMark inverted={!isScrolled} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                  isScrolled
                    ? "text-[#1B3A6B] hover:text-[#E63946]"
                    : "text-white hover:text-[#A8D4F0]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <a
              href="tel:976663344"
              className="flex items-center gap-2 rounded-full bg-[#E63946] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#c62d3a]"
            >
              <Phone size={16} />
              976 66 33 44
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`rounded-lg p-2 lg:hidden ${isScrolled ? "text-[#1B3A6B]" : "text-white"}`}
            aria-label="Abrir navegación"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white/98 shadow-xl backdrop-blur-md lg:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 py-2 text-lg font-bold text-[#1B3A6B] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:976663344"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#E63946] px-5 py-3 text-base font-bold text-white"
            >
              <Phone size={18} />
              976 66 33 44
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}