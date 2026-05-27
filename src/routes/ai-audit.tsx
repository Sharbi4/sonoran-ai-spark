import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Wrench, ListChecks, MessageCircle } from "lucide-react";
import { SiteLayout, Section, CopperButton } from "@/components/site-layout";

export const Route = createFileRoute("/ai-audit")({
  head: () => ({
    meta: [
      { title: "AI Business Audit — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "A $297 AI Business Audit for Arizona small businesses. 60-minute call, full review of your website, journey, and workflows, plus a written action plan in 3 business days.",
      },
    ],
  }),
  component: AIAudit,
});

const INCLUDES = [
  "60-minute phone consultation",
  "Website review",
  "Customer journey review",
  "Workflow and tools review",
  "AI opportunity mapping",
  "Written action plan delivered within 3 business days",
];

const OUTCOMES = [
  {
    icon: Compass,
    title: "Clarity on where you're losing time or leads",
    desc: "We pinpoint the friction points draining your week.",
  },
  {
    icon: Wrench,
    title: "Specific AI tool recommendations",
    desc: "Real tools matched to your business, not a generic list.",
  },
  {
    icon: ListChecks,
    title: "A prioritized action plan",
    desc: "Know exactly what to do first, second, and third.",
  },
  {
    icon: MessageCircle,
    title: "No jargon, no fluff",
    desc: "Plain-language guidance you can actually act on.",
  },
];

function AIAudit() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-copper/10 px-3 py-1 text-xs font-semibold text-copper uppercase tracking-wider">
            Start Here
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05]">
            Not sure where AI fits into your business? Start here.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            The AI Business Audit gives you clarity — not a sales pitch.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 rounded-3xl bg-card border border-sand p-8 sm:p-10">
            <h2 className="font-serif text-2xl">What the audit includes</h2>
            <ul className="mt-6 space-y-3">
              {INCLUDES.map((t) => (
                <li key={t} className="flex gap-3 text-foreground/85">
                  <Check className="h-5 w-5 mt-0.5 text-copper shrink-0" strokeWidth={2.5} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-cream to-sand/60 border-2 border-copper/40 p-8 sm:p-10 flex flex-col items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-copper uppercase tracking-wider">Flat price</p>
              <div className="mt-3 font-serif text-6xl sm:text-7xl text-copper font-semibold">
                $297
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                One-time. Delivered in 3 business days.
              </p>
            </div>
            <div className="mt-8 w-full">
              <CopperButton to="/contact" className="w-full">
                Book Your AI Audit
              </CopperButton>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card/50 border-y border-sand">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Outcomes</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">What you walk away with</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTCOMES.map((o) => (
            <div key={o.title} className="rounded-2xl bg-card border border-sand p-6">
              <div className="h-11 w-11 rounded-xl bg-copper/10 text-copper flex items-center justify-center">
                <o.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-serif text-lg">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center pb-24">
        <h2 className="font-serif text-3xl sm:text-4xl">Ready in 3 business days.</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Book your audit and we'll set up your consultation call right away.
        </p>
        <div className="mt-8">
          <CopperButton to="/contact">Book Your AI Audit — $297</CopperButton>
        </div>
      </Section>
    </SiteLayout>
  );
}