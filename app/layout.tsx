import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Piccone Estudio | Servicios Notariales, Jurídicos y Contables en Uruguay",
    template: "%s | Piccone Estudio",
  },
  description:
    "Piccone Estudio brinda asesoramiento integral en Uruguay: servicios notariales, jurídicos, contables, arquitectónicos y de gestión, con atención personalizada y una visión coordinada de cada caso.",
  keywords: [
    "escribania Uruguay",
    "estudio notarial Montevideo",
    "servicios notariales Uruguay",
    "asesoramiento jurídico Uruguay",
    "asesoramiento contable Uruguay",
    "consultoría notarial corporativa",
    "Piccone Estudio",
  ],
  authors: [{ name: "Piccone Estudio" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: siteConfig.url,
    siteName: "Piccone Estudio",
    title: "Piccone Estudio | Servicios Notariales, Jurídicos y Contables en Uruguay",
    description:
      "Asesoramiento integral para personas y empresas: servicios notariales, jurídicos, contables, arquitectónicos y de gestión, con atención personalizada.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piccone Estudio | Servicios Notariales, Jurídicos y Contables en Uruguay",
    description:
      "Asesoramiento integral para personas y empresas en Uruguay, con atención personalizada y una visión integral.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1c3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Piccone Estudio",
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: "+598 92 723 916",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UY",
    },
    areaServed: "UY",
    knowsAbout: [
      "Servicios notariales",
      "Servicios jurídicos",
      "Servicios contables",
      "Asesoramiento arquitectónico",
      "Gestión ante organismos públicos",
    ],
  };

  return (
    <html lang="es-UY" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body>
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-cream"
        >
          Saltar al contenido principal
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
