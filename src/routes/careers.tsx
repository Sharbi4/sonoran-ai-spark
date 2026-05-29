import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Accent } from "@/components/site-layout";
import { Sparkles, Compass, HandHeart } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Sonoran Systems & AI | Tucson AZ" },
      {
        name: "description",
        content:
          "Join Sonoran Systems & AI — a Tucson-based studio shipping AI, automation, and beautiful websites for Arizona businesses. Always meeting sharp operators, designers, and engineers.",
      },
      { property: "og:title", content: "Careers — Sonoran Systems & AI" },
      {
        property: "og:description",
        content: "Help us build the AI consulting studio Arizona deserves.",
      },
      { property: "og:url", content: "https://www.sonoransystemsai.com/careers" },
    ],
    links: [{ rel: "canonical", href: "https://www.sonoransystemsai.com/careers" }],
  }),
  component: CareersPage,
});

const VALUES = [
  {
    icon: Sparkles,
    title: "Craft over volume",
    body:
      "We'd rather ship five projects we're proud of than fifty we're not. Every deliverable goes out with our name on it.",
  },
  {
    icon: Compass,
    title: "Clarity over jargon",
    body:
      "Our clients are operators, not engineers. We translate complexity into plain English and concrete outcomes.",
  },
  {
    icon: HandHeart,
    title: "Locals first",
    body:
      "Tucson, Phoenix, Flagstaff — Arizona businesses are our people. We show up, we learn the territory, we tell the truth.",
  },
];

function CareersPage() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Careers</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-[1.05]">
            Build the <Accent>AI consulting studio</Accent> Arizona deserves.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We're a small Tucson studio shipping practical AI, automation, dashboards, and beautiful websites for
            small businesses across the Southwest. If that's interesting, talk to us.
          </p>
        </div>
      </Section>

      <Section className="bg-card/50 border-y border-sand">
        <p className="text-sm font-medium text-copper uppercase tracking-wider">How we work</p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Our values</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card border border-sand p-7">
              <div className="h-11 w-11 rounded-xl bg-sage/15 text-sage inline-flex items-center justify-center">
                <v.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Open roles</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">No open roles right now.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We hire when we meet someone we can't say no to. If that might be you — apply anyway. We keep
            applications on file and reach out as soon as a fit opens.
          </p>
        </div>
        <CareerForm />
      </Section>
    </SiteLayout>
  );
}

function CareerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/public/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          role: String(data.get("role") ?? ""),
          links: String(data.get("links") ?? ""),
          message: String(data.get("message") ?? ""),
        }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error ?? "Submission failed");
      }
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-10 max-w-2xl rounded-3xl border border-sand bg-card p-8">
        <h3 className="font-serif text-2xl">Got it — thank you.</h3>
        <p className="mt-3 text-muted-foreground">
          We read every application personally. If there's a fit, you'll hear from us within two weeks.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-2xl grid gap-4">
      <Field label="Your name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="What role / kind of work?" name="role" placeholder="Design, engineering, ops, AI, business dev…" required />
      <Field label="Portfolio / LinkedIn / GitHub links" name="links" />
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          What should we know about you?
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-sand bg-card text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-all"
        />
      </div>
      {error && <p className="text-sm text-rose">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start px-6 py-3 rounded-full bg-copper text-copper-foreground text-sm font-medium hover:bg-copper/90 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-sand bg-card text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-all"
      />
    </div>
  );
}