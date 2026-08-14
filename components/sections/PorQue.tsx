import { HeartHandshake, LayoutGrid, Users, Workflow } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    text: "Seguimiento cercano de cada asunto.",
  },
  {
    icon: LayoutGrid,
    title: "Visión integral",
    text: "Diferentes áreas profesionales coordinadas.",
  },
  {
    icon: Users,
    title: "Red de especialistas",
    text: "Trabajo conjunto con abogados, contadores y arquitectos colaboradores.",
  },
  {
    icon: Workflow,
    title: "Gestión eficiente",
    text: "Acompañamiento y gestión ante organismos públicos y privados.",
  },
];

export function PorQue() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-px mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="section-label">Por qué Piccone Estudio</span>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Cuatro pilares que guían nuestro trabajo
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.08} className="bg-cream">
              <div className="group flex h-full flex-col gap-5 bg-cream p-8 transition-colors duration-500 ease-premium hover:bg-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-500 ease-premium group-hover:bg-navy group-hover:text-gold-light">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink/60">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
