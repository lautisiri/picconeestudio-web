import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { contactFormSchema } from "@/lib/validation";
import { saveContactSubmission } from "@/lib/blobs";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return NextResponse.json(
      { ok: false, message: "Revisá los datos ingresados.", fieldErrors },
      { status: 400 }
    );
  }

  // Honeypot: si viene completo, respondemos éxito sin persistir (no delatamos al bot).
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { company: _company, ...submission } = parsed.data;

  await saveContactSubmission({
    ...submission,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? undefined,
  });

  return NextResponse.json({ ok: true });
}
