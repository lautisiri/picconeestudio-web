"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep"
    >
      {/* Fondo: fotografía institucional con superposición navy para legibilidad */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
        <div
          className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(184,150,79,0.5), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] h-[460px] w-[460px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(107,91,149,0.45), transparent 70%)",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="container-px relative z-10 mx-auto w-full max-w-content pt-28 pb-20 lg:pt-32"
      >
        <div className="max-w-2xl">
          <motion.span variants={item} className="section-label !text-gold-light">
            Estudio Profesional
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight text-cream sm:text-6xl lg:text-[4.2rem]"
          >
            Asesoramiento integral para personas y empresas
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl font-sans text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            Servicios notariales, jurídicos, contables, arquitectónicos y de
            gestión, con atención personalizada y una visión integral.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="#contacto" className="btn-gold group">
              Solicitar asesoramiento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </a>
            <a href="#servicios" className="btn-ghost-light">
              Conocer nuestros servicios
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#el-estudio"
        aria-label="Desplazarse a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition-colors hover:text-cream/80 sm:flex"
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-widest2">
          Descubrir
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
