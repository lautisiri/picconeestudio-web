import { ShieldCheck, FileSearch, CalendarClock, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Soporte permanente",
    text: "Consultas notariales de la empresa resueltas de forma continua.",
  },
  {
    icon: FileSearch,
    title: "Análisis previo",
    text: "Revisión de documentación y contratos antes de su firma.",
  },
  {
    icon: CalendarClock,
    title: "Acompañamiento mensual",
    text: "Asistencia notarial adaptada a las necesidades de la empresa.",
  },
];

export function ConsultoriaCorporativa() {
  return (
    <section
      id="consultoria-corporativa"
      className="relative overflow-hidden bg-navy-deep py-24 lg:py-32"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #081428 0%, #0b1c3a 55%, #081428 100%)",
          }}
        />
        <div
          className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(107,91,149,0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(184,150,79,0.35), transparent 70%)",
          }}
        />
      </div>

      <div className="container-px relative mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <FadeIn>
              <span className="section-label !text-gold-light">
                Servicio destacado
              </span>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
                Consultoría Notarial Corporativa
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 font-sans text-base leading-relaxed text-cream/65 lg:text-[1.05rem]">
                Representa un soporte notarial permanente que comprende
                consultas notariales de la empresa, análisis de
                documentación y contratos previo a su firma, y
                asesoramiento respecto de la documentación que deba
                certificarse, protocolizarse o instrumentarse, brindando un
                servicio de acompañamiento y asistencia notarial mensual,
                adaptado a las necesidades de la empresa.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <a
                href="#contacto"
                className="btn-gold group mt-9 inline-flex"
              >
                Consultar por este servicio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex flex-col gap-5">
              {pillars.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 transition-colors duration-500 ease-premium hover:border-gold/30 hover:bg-cream/[0.05]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-light">
                      <pillar.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-cream">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 font-sans text-sm leading-relaxed text-cream/55">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
