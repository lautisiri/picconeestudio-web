import Image from "next/image";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Marca de Piccone Estudio: el sello monograma (VPA) del estudio dentro de
 * una insignia navy —siempre legible— junto al nombre comercial "Piccone
 * Estudio" en tipografía propia del sitio.
 */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const textColor = tone === "light" ? "text-cream" : "text-ink";
  const subColor = tone === "light" ? "text-cream/60" : "text-ink/50";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-navy shadow-soft ring-1 ring-gold/30 sm:h-16 sm:w-16">
        <Image
          src="/logo-nuevo.jpg"
          alt=""
          fill
          sizes="64px"
          className="scale-[1.3] object-cover object-center"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.3rem] font-semibold tracking-[0.08em] ${textColor}`}
        >
          PICCONE ESTUDIO
        </span>
        <span
          className={`mt-1 font-sans text-[0.65rem] font-medium uppercase tracking-widest2 ${subColor}`}
        >
          Estudio Profesional
        </span>
      </span>
    </span>
  );
}
