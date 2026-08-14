import { FadeIn } from "@/components/animation/FadeIn";

const highlights = [
  { value: "05", label: "Áreas profesionales coordinadas" },
  { value: "+1", label: "Red de colaboradores especializados" },
  { value: "1:1", label: "Seguimiento cercano de cada asunto" },
];

export function ElEstudio() {
  return (
    <section id="el-estudio" className="bg-cream py-24 lg:py-32">
      <div className="container-px mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="section-label">El Estudio</span>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                Una mirada integral para resolver cada necesidad.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-ink/65 lg:text-[1.05rem]">
                <p>
                  Piccone Estudio ofrece diferentes áreas profesionales
                  —notarial, jurídica, contable, arquitectónica y de
                  gestión— bajo una misma coordinación, para que cada
                  cliente cuente con una atención clara y continua a lo
                  largo de todo su proceso.
                </p>
                <p>
                  Trabajamos junto a colaboradores especializados en cada
                  disciplina, articulando una respuesta conjunta a asuntos
                  que muchas veces requieren más de una mirada profesional.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <FadeIn delay={0.15} className="h-full">
              <div className="flex h-full flex-col justify-center gap-8 border-l border-ink/10 pl-8">
                {highlights.map((h) => (
                  <div key={h.label}>
                    <span className="font-display text-4xl font-medium text-navy">
                      {h.value}
                    </span>
                    <p className="mt-1.5 font-sans text-sm leading-snug text-ink/55">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
