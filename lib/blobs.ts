import { getStore } from "@netlify/blobs";
import type { ContactFormValues } from "@/lib/validation";

export type ContactSubmission = Omit<ContactFormValues, "company"> & {
  id: string;
  createdAt: string;
  userAgent?: string;
};

const STORE_NAME = "consultas";

/**
 * Netlify inyecta el contexto de Blobs automáticamente en Netlify Functions
 * y en rutas de Next.js desplegadas vía @netlify/plugin-nextjs. Fuera de ese
 * entorno (p. ej. `next dev` local sin `netlify dev`) getStore lanza un
 * error, así que degradamos con gracia para no romper la demo local.
 */
export async function saveContactSubmission(
  submission: ContactSubmission
): Promise<{ persisted: boolean }> {
  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    await store.setJSON(submission.id, submission);
    return { persisted: true };
  } catch (error) {
    console.warn(
      "[contact] Netlify Blobs no disponible en este entorno; la consulta no se persistió.",
      "Esto es esperado al correr `npm run dev` fuera de Netlify. En producción (o con `netlify dev`) se guarda automáticamente.",
      error instanceof Error ? error.message : error
    );
    return { persisted: false };
  }
}

/**
 * Utilidad para un futuro panel administrativo: lista todas las consultas
 * guardadas en el store de Netlify Blobs, más recientes primero.
 */
export async function listContactSubmissions(): Promise<ContactSubmission[]> {
  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  const { blobs } = await store.list();
  const submissions = await Promise.all(
    blobs.map((blob) => store.get(blob.key, { type: "json" }) as Promise<ContactSubmission>)
  );
  return submissions
    .filter(Boolean)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
