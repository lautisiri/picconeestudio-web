import { Mail } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, mailtoHref, whatsappHref } from "@/lib/site";

export function Contacto() {
  return (
    <section id="contacto" className="bg-cream py-24 lg:py-32">
      <div className="container-px mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="section-label">Contacto</span>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                PICCONE ESTUDIO
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-ink/60">
                Escribinos y coordinamos una consulta a la brevedad.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className="mt-10 space-y-5">
                <li>
                  <a
                    href={mailtoHref()}
                    className="group flex items-center gap-3.5 font-sans text-sm text-ink/75 transition-colors hover:text-navy"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-gold-light">
                      <Mail className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref(
                      "Hola Piccone Estudio, quisiera solicitar asesoramiento."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 font-sans text-sm text-ink/75 transition-colors hover:text-navy"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-gold-light">
                      <WhatsAppIcon className="h-4 w-4" />
                    </span>
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              </ul>

              <a
                href={whatsappHref(
                  "Hola Piccone Estudio, quisiera solicitar asesoramiento."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-ink/10 bg-white p-7 shadow-soft sm:p-10">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
