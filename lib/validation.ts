import { z } from "zod";
import { inquiryAreas } from "@/lib/site";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre completo.")
    .max(120, "El nombre es demasiado extenso."),
  email: z
    .string()
    .trim()
    .min(1, "Ingresá tu email.")
    .email("Ingresá un email válido."),
  phone: z
    .string()
    .trim()
    .min(6, "Ingresá un teléfono válido.")
    .max(30, "El teléfono es demasiado extenso."),
  area: z.enum(inquiryAreas, {
    errorMap: () => ({ message: "Seleccioná un área de consulta." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Contanos brevemente tu consulta (mínimo 10 caracteres).")
    .max(2000, "El mensaje es demasiado extenso."),
  // Honeypot: debe llegar vacío. Los bots suelen completar todos los campos.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormFieldErrors = Partial<
  Record<keyof Omit<ContactFormValues, "company">, string>
>;
