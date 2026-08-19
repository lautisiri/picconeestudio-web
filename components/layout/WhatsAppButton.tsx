"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(
        "Hola Piccone Estudio, quisiera solicitar asesoramiento."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition-all duration-300 ease-premium hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream opacity-0 shadow-soft transition-opacity duration-300 ease-premium group-hover:opacity-100 sm:block">
        Escribinos por WhatsApp
      </span>
    </a>
  );
}
