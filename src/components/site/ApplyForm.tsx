import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type Field = { name: string; label: string; type?: string; required?: boolean; rows?: number };

export function ApplyForm({
  programme,
  fields,
}: {
  programme: string;
  fields?: Field[];
}) {
  const [done, setDone] = useState(false);

  const all: Field[] = fields ?? [
    { name: "name", label: "Full Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone" },
    { name: "organization", label: "Organization / School" },
    { name: "city", label: "City" },
    { name: "message", label: "Tell us more", rows: 4 },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = { programme, submittedAt: new Date().toISOString() };
    fd.forEach((v, k) => (data[k] = String(v)));
    try {
      const key = "snhp_submissions";
      const existing = JSON.parse(localStorage.getItem(key) ?? "[]");
      existing.push(data);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch {}
    setDone(true);
  };

  if (done) {
    return (
      <div className="bg-coral/10 border border-coral/30 rounded-3xl p-10 text-center">
        <CheckCircle2 className="text-coral mx-auto" size={48} />
        <h3 className="font-display text-3xl uppercase mt-4">Thank you!</h3>
        <p className="mt-3 text-muted-foreground">We've received your interest in <strong>{programme}</strong>. Our team will reach out shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8">
      {all.map((f) => (
        <div key={f.name} className={f.rows ? "sm:col-span-2" : ""}>
          <label className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}{f.required && " *"}</label>
          {f.rows ? (
            <textarea
              name={f.name}
              required={f.required}
              rows={f.rows}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-coral outline-none"
            />
          ) : (
            <input
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-coral outline-none"
            />
          )}
        </div>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" className="w-full sm:w-auto bg-coral text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition">
          Submit Application
        </button>
      </div>
    </form>
  );
}
