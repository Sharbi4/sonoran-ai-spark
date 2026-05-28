import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Wrench, ListChecks, MessageCircle, ArrowRight } from "lucide-react";
import { SiteLayout, Section, Accent } from "@/components/site-layout";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";

export const Route = createFileRoute("/ai-audit")({
  head: () => ({
    meta: [
      { title: "AI Business Systems Audit — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "A $497 AI Business Systems Audit for Arizona businesses. 2-hour strategy call, full review of your website, customer journey, and workflows, prioritized written action plan, and a recommended project roadmap.",
      },
    ],
  }),
  component: AIAudit,
});

const INCLUDES = [
  "2-hour strategy call",
  "Website + customer journey review",
  "Workflow and tools review",
  "AI opportunity mapping",
  "Prioritized written action plan",
  "Recommended project roadmap",
  "Delivered within 3 business days",
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
  const { openCheckout, checkoutElement } = useStripeCheckout();
  const buyAudit = () => openCheckout({ priceId: "ai_audit_497" });
  const bookCall = () => openCheckout({ priceId: "strategy_call_60min" });
  return (
    <SiteLayout>
      {checkoutElement}
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-copper/10 px-3 py-1 text-xs font-semibold text-copper uppercase tracking-wider">
            Flagship Diagnostic
          </span>
          <h1 className="mt-4 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            The <Accent>AI Business Systems</Accent> Audit — your business, mapped and <Accent color="sage">prioritized</Accent>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A deep paid diagnostic of your website, customer journey, workflows, and AI opportunities — delivered as a prioritized action plan and project roadmap.
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
                $497
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                One-time. Delivered in 3 business days.
              </p>
            </div>
            <div className="mt-8 w-full">
              <button
                type="button"
                onClick={buyAudit}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-copper text-copper-foreground px-6 py-3 text-sm font-medium hover:bg-copper/90 transition-colors shadow-[0_10px_30px_-12px_rgba(194,79,52,0.5)]"
              >
                Buy the Audit — $497 <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Prefer to talk first?{" "}
                <button type="button" onClick={bookCall} className="text-copper hover:underline">
                  Book a $250 Strategy Call
                </button>{" "}
                or{" "}
                <a href="/contact" className="hover:underline">
                  submit a free inquiry
                </a>
                .
              </p>
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
          Purchase the audit and we'll schedule your strategy call right away.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={buyAudit}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-copper text-copper-foreground px-6 py-3 text-sm font-medium hover:bg-copper/90 transition-colors shadow-[0_10px_30px_-12px_rgba(194,79,52,0.5)]"
          >
            Buy the Audit — $497 <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Section>
    </SiteLayout>
  );
}