import { FadeIn } from "@/components/animation/FadeIn";

const steps = [
  {
    number: "01",
    title: "Consulta",
    text: "El cliente plantea su necesidad.",
  },
  {
    number: "02",
    title: "Análisis",
    text: "Se estudia el caso y la documentación necesaria.",
  },
  {
    number: "03",
    title: "Asesoramiento",
    text: "Se define el camino más adecuado.",
  },
  {
    number: "04",
    title: "Gestión",
    text: "El estudio acompaña y realiza las actuaciones correspondientes.",
  },
];

export function Proceso() {
  return (
    <section className="bg-cream-soft py-24 lg:py-32">
      <div className="container-px mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="section-label">Cómo trabajamos</span>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Un proceso claro, de principio a fin
          </h2>
        </FadeIn>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-cream-soft font-display text-lg font-medium text-navy lg:bg-cream-soft">
                    {step.number}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink/60">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
