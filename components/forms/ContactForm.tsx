"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { inquiryAreas } from "@/lib/site";
import {
  contactFormSchema,
  type ContactFormFieldErrors,
} from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  area: "" as (typeof inquiryAreas)[number] | "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    field: keyof typeof initialValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ContactFormFieldErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: ContactFormFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key as keyof ContactFormFieldErrors]) {
          fieldErrors[key as keyof ContactFormFieldErrors] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setServerError(
          data.message ?? "No pudimos enviar tu consulta. Intentá nuevamente."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setServerError(
        "No pudimos enviar tu consulta. Verificá tu conexión e intentá nuevamente."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-navy/[0.03] px-8 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl font-medium text-ink">
          Consulta enviada
        </h3>
        <p className="mt-2.5 max-w-sm font-sans text-sm leading-relaxed text-ink/60">
          Gracias por escribirnos. Nos pondremos en contacto a la brevedad.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-8"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot anti-spam: oculto para personas, visible para bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">No completar este campo</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nombre"
          htmlFor="name"
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputClass(!!errors.name)}
            placeholder="Tu nombre completo"
          />
        </Field>

        <Field label="Teléfono" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={inputClass(!!errors.phone)}
            placeholder="09X XXX XXX"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClass(!!errors.email)}
          placeholder="tu@email.com"
        />
      </Field>

      <Field label="Área de consulta" htmlFor="area" error={errors.area}>
        <select
          id="area"
          name="area"
          value={values.area}
          onChange={(e) => handleChange("area", e.target.value)}
          className={inputClass(!!errors.area)}
        >
          <option value="" disabled>
            Seleccioná un área
          </option>
          {inquiryAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensaje" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={inputClass(!!errors.message) + " resize-none"}
          placeholder="Contanos brevemente tu consulta"
        />
      </Field>

      {serverError && (
        <div className="flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar consulta"
        )}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-3.5 font-sans text-sm text-ink placeholder:text-ink/35 transition-colors duration-300 ease-premium focus:outline-none focus:ring-2 focus:ring-gold/50 ${
    hasError ? "border-red-300" : "border-ink/15 focus:border-navy/30"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-sans text-xs font-medium uppercase tracking-wider text-ink/50"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 font-sans text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
