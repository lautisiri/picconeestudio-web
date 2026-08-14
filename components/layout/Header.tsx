"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navItems } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        solid
          ? "bg-cream/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-content items-center justify-between xl:h-24">
        <a
          href="#inicio"
          className="shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <Logo tone={solid ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap font-sans text-[0.8rem] font-medium uppercase tracking-wider transition-colors duration-300 ease-premium ${
                solid
                  ? "text-ink/70 hover:text-navy"
                  : "text-cream/85 hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-gold !px-6 !py-3 whitespace-nowrap text-xs"
          >
            Solicitar asesoramiento
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 xl:hidden ${
            solid ? "text-ink" : "text-cream"
          }`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-cream xl:hidden"
          >
            <div className="container-px mx-auto flex flex-col gap-1 py-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-lg px-2 py-3.5 font-sans text-base font-medium text-ink/80 transition-colors hover:bg-ink/[0.03] hover:text-navy"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="btn-gold mt-3 w-full"
              >
                Solicitar asesoramiento
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
