import { Scale, Stamp, Calculator, Compass, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    index: "01",
    icon: Stamp,
    title: "Sector Notarial",
    description:
      "Ofrecemos servicios notariales para personas y empresas, con énfasis en operaciones comerciales y societarias, constitución de sociedades, inmuebles, automotores, contratos, arrendamientos, poderes, testamentos, certificaciones, actas y títulos, entre otras actuaciones notariales.",
    tags: [
      "Operaciones comerciales",
      "Sociedades",
      "Inmuebles",
      "Automotores",
      "Contratos",
      "Arrendamientos",
      "Poderes",
      "Testamentos",
      "Certificaciones",
      "Actas",
      "Títulos",
    ],
  },
  {
    index: "02",
    icon: Scale,
    title: "Sector Jurídico",
    description:
      "Asesoramiento y servicios jurídicos en distintas ramas del Derecho. Junto a abogados colaboradores especializados, ofrecemos asesoramiento integral y seguimiento personalizado en cada asunto.",
  },
  {
    index: "03",
    icon: Calculator,
    title: "Sector Contable",
    description:
      "Servicios y asesoramiento contable para personas y empresas. Trabajamos con contadores colaboradores en materia tributaria, contable, laboral, empresarial y auditoría.",
    tags: ["Tributario", "Contable", "Laboral", "Empresarial", "Auditoría"],
  },
  {
    index: "04",
    icon: Compass,
    title: "Sector Arquitectónico",
    description:
      "Asesoramiento técnico vinculado a inmuebles y regularización de obras, brindado por arquitectos colaboradores del estudio.",
  },
];

const gestionOrganismos = [
  "Ministerio de Relaciones Exteriores",
  "Corte Electoral",
  "Dirección Nacional de Migración",
  "Ministerio del Interior",
  "Registro Único de Proveedores del Estado",
  "Dirección General Impositiva",
  "Banco de Previsión Social",
  "Registros Públicos",
  "Apostillas",
  "Legalizaciones",
  "Otras gestiones",
];

export function Servicios() {
  return (
    <section id="servicios" className="bg-cream-soft py-24 lg:py-32">
      <div className="container-px mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="section-label">Servicios</span>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Áreas profesionales especializadas
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink/60">
            Cinco áreas de trabajo coordinadas entre sí, para acompañar cada
            asunto con la mirada profesional que requiere.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.index} delay={i * 0.08}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-ink/10 bg-white p-8 sm:p-9">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:max-w-md">
                <div className="flex items-center gap-4">
                  <span className="font-display text-lg font-medium text-ink/25">
                    05
                  </span>
                  <h3 className="font-display text-2xl font-medium text-ink">
                    Servicios de Gestión
                  </h3>
                </div>
                <p className="mt-3.5 font-sans text-sm leading-relaxed text-ink/60">
                  Gestiones ante organismos públicos y privados de Uruguay,
                  incluyendo trámites con destino al exterior.
                </p>
              </div>

              <details className="group w-full lg:max-w-xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-full border border-navy/15 bg-navy/[0.03] px-6 py-3.5 font-sans text-sm font-medium text-navy transition-colors duration-300 ease-premium hover:bg-navy/[0.06]">
                  Ver organismos y trámites
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 ease-premium group-open:rotate-180" />
                </summary>
                <div className="mt-5 flex flex-wrap gap-2">
                  {gestionOrganismos.map((org) => (
                    <span
                      key={org}
                      className="inline-flex items-center rounded-full border border-navy/15 bg-navy/[0.04] px-3.5 py-1.5 font-sans text-xs font-medium text-navy/80"
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
