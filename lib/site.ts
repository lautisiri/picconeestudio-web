export const siteConfig = {
  name: "Piccone Estudio",
  legalName: "Piccone Estudio",
  domain: "picconeestudio.com.uy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://picconeestudio.com.uy",
  email: "estudio@piccone.com.uy",
  phoneDisplay: "092 723 916",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "59892723916",
  description:
    "Estudio profesional uruguayo con servicios notariales, jurídicos, contables, arquitectónicos y de gestión, con atención personalizada y una visión integral.",
} as const;

export const whatsappHref = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const mailtoHref = (subject?: string) => {
  const base = `mailto:${siteConfig.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "El Estudio", href: "#el-estudio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Consultoría Corporativa", href: "#consultoria-corporativa" },
  { label: "Contacto", href: "#contacto" },
];

export const inquiryAreas = [
  "Sector Notarial",
  "Sector Jurídico",
  "Sector Contable",
  "Sector Arquitectónico",
  "Servicios de Gestión",
  "Consultoría Notarial Corporativa",
  "Otro",
] as const;
