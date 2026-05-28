import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles, Scale, Utensils, Hammer, Mail } from "lucide-react";
import { SiteLayout, Section, CopperButton, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Simple, honest pricing. AI Business Audit ($297), website and brand launches starting at $1,500, and a monthly AI Support Partner from $500/month.",
      },
    ],
  }),
  component: Packages,
});

const AUDIT_INCLUDES = [
  "60-minute phone consultation",
  "Website review",
  "Customer journey review",
  "Workflow and tools review",
  "AI opportunity map",
  "Written action plan (delivered in 3 business days)",
];

const PROJECTS = [
  {
    name: "Website System Launch",
    price: "Starting at $1,500",
    tagline: "A professional website built to capture leads.",
    includes: [
      "1–5 page website",
      "Mobile-friendly design",
      "Lead capture form",
      "Booking system integration",
      "AI-assisted copywriting",
      "Basic local SEO",
      "2 rounds of revisions included",
    ],
    filled: false,
    badge: null,
  },
  {
    name: "Brand + Web Launch",
    price: "Starting at $2,500",
    tagline: "A stronger identity and a website to match.",
    includes: [
      "Logo design (2 concepts)",
      "Brand colors and font system",
      "Messaging guide",
      "1–5 page website",
      "Social profile graphics",
      "Lead capture form",
      "Basic SEO setup",
      "2 rounds of revisions included",
    ],
    filled: true,
    badge: "Most Complete",
  },
  {
    name: "Workflow Automation Setup",
    price: "Starting at $1,500",
    tagline: "Stop doing the same manual tasks every week.",
    includes: [
      "Workflow audit and mapping",
      "Intake form build",
      "Email follow-up automation",
      "Appointment reminder setup",
      "AI chatbot or assistant setup",
      "Internal tracker or dashboard",
      "Owner walkthrough and training",
      "2 rounds of revisions included",
    ],
    filled: false,
    badge: null,
  },
];

const RETAINER_INCLUDES = [
  "Up to 5 hours of active work per month",
  "Website updates and improvements",
  "Automation tweaks and new workflows",
  "Monthly 30-minute strategy phone call",
  "AI prompt and tool refinement",
  "Priority response time",
];

const SPECIALIZED = [
  {
    icon: Scale,
    name: "Law Firm Intelligence",
    body:
      "Connect Clio, MyCase, or PracticePanther to a custom dashboard showing cases, billing, deadlines, and revenue — with AI summaries every morning.",
    price: "Starting at $2,500",
    to: "/dashboards",
  },
  {
    icon: Utensils,
    name: "Restaurant Analytics",
    body:
      "Connect Toast or Square to a dashboard showing daily sales, top menu items, busiest hours, staff performance, and AI-powered insights.",
    price: "Starting at $1,500",
    to: "/dashboards",
  },
  {
    icon: Hammer,
    name: "Contractor Command Center",
    body:
      "Connect Jobber or ServiceTitan with QuickBooks into one dashboard showing jobs, quotes, invoices, and revenue — with alerts when things need attention.",
    price: "Starting at $2,000",
    to: "/dashboards",
  },
  {
    icon: Mail,
    name: "Email Automation System",
    body:
      "Build an AI-powered email system that classifies incoming messages, drafts replies in your voice, and follows up automatically on every lead.",
    price: "Starting at $1,000",
    to: "/email-automation",
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-sm text-foreground/85">
          <Check className="h-4 w-4 mt-0.5 text-copper shrink-0" strokeWidth={2.5} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Packages() {
  return (
    <SiteLayout>
      {/* Header */}
      <Section className="pt-16 sm:pt-24 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Packages</p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            Honest <Accent>pricing</Accent> built around what your business actually <Accent color="sage">needs</Accent>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every project starts with a conversation. You'll never be locked into something that
            doesn't fit.
          </p>
        </div>
      </Section>

      {/* FEATURED AUDIT */}
      <Section className="pt-4">
        <div className="rounded-3xl bg-card border-2 border-copper/40 shadow-[0_4px_8px_rgba(28,28,30,0.04),0_24px_60px_-24px_rgba(181,101,29,0.35)] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-sand">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-copper px-3 py-1.5 text-xs font-semibold text-copper-foreground uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                Most Popular Starting Point
              </span>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl">AI Business Audit</h2>
              <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                Get clarity on exactly where AI can help your business.
              </p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-serif text-6xl sm:text-7xl text-copper font-semibold">
                  $297
                </span>
                <span className="text-muted-foreground">flat</span>
              </div>
              <div className="mt-8">
                <CopperButton to="/ai-audit">Book Your Audit — $297</CopperButton>
              </div>
              <p className="mt-5 text-xs text-muted-foreground italic max-w-sm">
                The only package available for direct purchase. All other projects are scoped on a
                call.
              </p>
            </div>
            <div className="p-8 sm:p-12 bg-cream/60">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
                What's included
              </p>
              <CheckList items={AUDIT_INCLUDES} />
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECT PACKAGES */}
      <Section className="pt-0">
        <div className="mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Project packages</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Built to ship</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={
                "relative rounded-2xl bg-card p-7 flex flex-col " +
                (p.filled
                  ? "border-2 border-copper shadow-[0_4px_8px_rgba(28,28,30,0.04),0_22px_50px_-22px_rgba(181,101,29,0.4)] md:-translate-y-2 md:scale-[1.02]"
                  : "border border-sand shadow-[0_1px_2px_rgba(28,28,30,0.03),0_10px_30px_-18px_rgba(28,28,30,0.12)]")
              }
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-xs font-semibold text-copper-foreground uppercase tracking-wider whitespace-nowrap">
                  {p.badge}
                </span>
              )}
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-5">
                <div className="font-serif text-3xl text-copper font-semibold">{p.price}</div>
              </div>
              <div className="mt-6 flex-1">
                <CheckList items={p.includes} />
              </div>
              <p className="mt-5 text-xs text-muted-foreground italic">
                Additional revision rounds available at $75 each.
              </p>
              <div className="mt-6">
                <CopperButton
                  to="/contact"
                  variant={p.filled ? "filled" : "outlined"}
                  className="w-full"
                >
                  Request a Quote
                </CopperButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* MONTHLY RETAINER */}
      <Section className="pt-0">
        <div className="mb-8">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Monthly retainer</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Ongoing support</h2>
        </div>
        <div
          className="rounded-3xl border border-sand p-8 sm:p-12 shadow-[0_1px_2px_rgba(28,28,30,0.03),0_18px_40px_-22px_rgba(28,28,30,0.18)]"
          style={{ backgroundColor: "#E8DFC8" }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl">AI Support Partner</h3>
              <p className="mt-3 text-foreground/75 text-lg leading-relaxed">
                Ongoing support without hiring someone.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-5xl sm:text-6xl text-copper font-semibold">
                  $500
                </span>
                <span className="text-foreground/70">/ month starting</span>
              </div>
              <p className="mt-5 text-sm text-foreground/70 leading-relaxed max-w-md">
                Need more? Additional hours at $95/hour. Up to 12-hour plan available at
                $1,000/month.
              </p>
              <div className="mt-7">
                <CopperButton to="/contact">Ask About Monthly Support</CopperButton>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                What's included
              </p>
              <CheckList items={RETAINER_INCLUDES} />
            </div>
          </div>
        </div>
      </Section>

      {/* REVISION POLICY */}
      <Section className="py-10">
        <div className="max-w-3xl mx-auto text-center border-t border-sand pt-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            All project packages include 2 rounds of revisions. Additional rounds are available at
            $75 per round. We work closely with you throughout every project so revisions beyond
            round 2 are rarely needed.
          </p>
        </div>
      </Section>

      {/* NOT SURE */}
      <Section className="pt-4">
        <div className="rounded-3xl bg-gradient-to-br from-cream via-card to-sand/60 border border-sand p-10 sm:p-16 text-center shadow-sm max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Not sure which package is right for you?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            That's exactly what the free consultation is for. We'll figure it out together on a
            quick phone call.
          </p>
          <div className="mt-8">
            <CopperButton to="/contact">Book a Free Call</CopperButton>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            No pressure. No obligation. Just a straightforward conversation about your business.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}