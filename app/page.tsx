import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { ElEstudio } from "@/components/sections/ElEstudio";
import { Servicios } from "@/components/sections/Servicios";
import { ConsultoriaCorporativa } from "@/components/sections/ConsultoriaCorporativa";
import { PorQue } from "@/components/sections/PorQue";
import { Proceso } from "@/components/sections/Proceso";
import { CTA } from "@/components/sections/CTA";
import { Contacto } from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido-principal">
        <Hero />
        <ElEstudio />
        <Servicios />
        <ConsultoriaCorporativa />
        <PorQue />
        <Proceso />
        <CTA />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
