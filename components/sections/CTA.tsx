import { ArrowRight, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";
import { whatsappHref } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-28">
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, rgba(184,150,79,0.14), transparent 45%), radial-gradient(circle at 85% 70%, rgba(107,91,149,0.14), transparent 45%)",
        }}
      />
      <div className="container-px relative mx-auto max-w-content text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            ¿Necesitás asesoramiento profesional?
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-cream/60">
            Estamos para ayudarte a encontrar el camino adecuado para tu
            caso.
          </p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contacto" className="btn-gold group">
              Contactar al estudio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappHref(
                "Hola Piccone Estudio, quisiera solicitar asesoramiento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light group"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
              WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
