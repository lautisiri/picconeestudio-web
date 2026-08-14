import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { siteConfig, navItems, mailtoHref, whatsappHref } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/70">
      <div className="container-px mx-auto max-w-content py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/30">
                <Image
                  src="/logo-morado.jpg"
                  alt="Piccone Estudio"
                  fill
                  sizes="44px"
                  className="scale-[1.7] object-cover object-center"
                />
              </span>
              <span className="font-display text-xl font-semibold tracking-wide text-cream">
                PICCONE ESTUDIO
              </span>
            </div>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-cream/55">
              Servicios profesionales y asesoramiento integral.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest2 text-gold-light">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest2 text-gold-light">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 font-sans text-sm text-cream/60">
              <li>
                <a
                  href={mailtoHref()}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Globe className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                {siteConfig.domain}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 font-sans text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Piccone Estudio. Todos los derechos reservados.</p>
          <p className="tracking-wide">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
