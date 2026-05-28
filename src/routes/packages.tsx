import { createFileRoute } from "@tanstack/react-router";
import {
  Check, Sparkles, Compass, FileSearch, Workflow, ClipboardCheck,
  Monitor, PenTool, Magnet, Mail, MessageSquare, BarChart3, Database,
  LifeBuoy, Repeat, Rocket, Crown,
} from "lucide-react";
import { SiteLayout, Section, CopperButton, Accent } from "@/components/site-layout";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Project inquiry is free. Strategy is paid. Implementation is scoped. Support is monthly. Start with a $250 Strategy Call, a $197 Readiness Review, a $297 Automation Map, or the $497 AI Business Systems Audit.",
      },
    ],
  }),
  component: Packages,
});

/* ---------- Start Here (direct purchase) ---------- */
const START_HERE = [
  {
    icon: Compass,
    name: "Business Systems Strategy Call",
    price: "$250",
    priceId: "strategy_call_60min",
    unit: "per 2-hour session",
    tagline: "Live advisory. No deliverable — just clear answers.",
    includes: [
      "2 hours by phone or video",
      "Bring any business systems question",
      "Tool & workflow recommendations",
      "Recording + 1-paragraph recap",
    ],
    cta: "Pay & Book — $250",
    featured: false,
  },
  {
    icon: FileSearch,
    name: "Website + AI Readiness Review",
    price: "$197",
    priceId: "website_ai_readiness_197",
    unit: "one-time",
    tagline: "A written diagnostic of your website and AI fit.",
    includes: [
      "Full website review (UX, conversion, SEO basics)",
      "AI readiness assessment",
      "Top 5 fix-it priorities",
      "Written summary, no call required",
    ],
    cta: "Buy Review — $197",
    featured: false,
  },
  {
    icon: Workflow,
    name: "Automation Opportunity Map",
    price: "$297",
    priceId: "automation_opportunity_297",
    unit: "one-time",
    tagline: "A written map of every workflow we'd automate.",
    includes: [
      "Intake-based — no live call required",
      "Workflow diagram (mapped, not built)",
      "Tool stack recommendations",
      "Effort vs. impact ranking",
    ],
    cta: "Buy Map — $297",
    featured: false,
  },
  {
    icon: ClipboardCheck,
    name: "AI Business Systems Audit",
    price: "$497",
    priceId: "ai_audit_497",
    unit: "one-time · 3 business days",
    tagline: "Our flagship paid diagnostic — the full picture.",
    includes: [
      "2-hour strategy call",
      "Website + customer journey review",
      "Workflow and tools review",
      "AI opportunity map",
      "Prioritized written action plan",
      "Recommended project roadmap",
    ],
    cta: "Buy Audit — $497",
    featured: true,
  },
] as const;

/* ---------- Build the System (scoped, intake) ---------- */
const BUILD_GROUPS: {
  category: string;
  accent: "copper" | "sage";
  items: { icon: typeof Monitor; name: string; price: string; tagline: string; care?: boolean }[];
}[] = [
  {
    category: "Web & Brand",
    accent: "copper",
    items: [
      {
        icon: Monitor,
        name: "Starter Website",
        price: "Starting at $1,750",
        tagline: "1–3 pages, contact form, mobile design.",
        care: true,
      },
      {
        icon: Monitor,
        name: "Website System Launch",
        price: "Starting at $2,500",
        tagline: "4–6 pages, lead capture, booking, copy, basic SEO.",
        care: true,
      },
      {
        icon: PenTool,
        name: "Brand Starter Kit",
        price: "Starting at $1,000",
        tagline: "Logo direction, colors, fonts, simple guide.",
      },
      {
        icon: PenTool,
        name: "Brand + Web Launch",
        price: "Starting at $3,000",
        tagline: "Brand identity + 4–6 page website.",
        care: true,
      },
    ],
  },
  {
    category: "Automation & AI",
    accent: "sage",
    items: [
      {
        icon: Magnet,
        name: "Lead Capture + Follow-Up System",
        price: "Starting at $1,500",
        tagline: "Forms, CRM routing, email/SMS follow-up sequence.",
      },
      {
        icon: Workflow,
        name: "Workflow Automation Setup",
        price: "Starting at $1,750",
        tagline: "Map, build, and test the work you do every week.",
      },
      {
        icon: Mail,
        name: "Email Automation System",
        price: "Starting at $1,500",
        tagline: "AI triage, draft replies, automated follow-up.",
      },
      {
        icon: MessageSquare,
        name: "AI Customer Response System",
        price: "Starting at $2,000",
        tagline: "Chat or voice agents with guardrails and handoff.",
      },
    ],
  },
  {
    category: "Dashboards",
    accent: "copper",
    items: [
      {
        icon: BarChart3,
        name: "Connected Business Dashboard",
        price: "Starting at $2,500",
        tagline: "1–3 live data sources, logins, live metrics.",
      },
      {
        icon: Database,
        name: "Full Intelligence Dashboard",
        price: "Starting at $4,500",
        tagline: "3–6 sources, role-based access, alerts, AI summaries.",
      },
    ],
  },
];

/* ---------- Keep It Running (retainers) ---------- */
const RETAINERS = [
  {
    icon: LifeBuoy,
    name: "AI Support Partner Lite",
    price: "$500",
    unit: "per month",
    tagline: "For owners who need a steady hand, not a full team.",
    includes: [
      "Up to 3 small requests / month",
      "One 30-minute monthly strategy call",
      "Light website edits",
      "Light automation adjustments",
      "Does not include new builds",
    ],
    overage: null,
  },
  {
    icon: Repeat,
    name: "AI Support Partner",
    price: "$750",
    unit: "per month · up to 5 hrs",
    tagline: "Active monthly partnership for evolving systems.",
    includes: [
      "Up to 5 hours of active work / month",
      "Website + automation updates",
      "Prompt and tool refinement",
      "Monthly 30-min strategy call",
      "Priority response time",
    ],
    overage: "Additional hours at $150/hr",
  },
  {
    icon: Rocket,
    name: "Growth Systems Partner",
    price: "$1,500",
    unit: "per month · up to 10 hrs",
    tagline: "For businesses building real operational leverage.",
    includes: [
      "Up to 10 hours of active work / month",
      "New automations + workflow expansion",
      "Dashboard refinement",
      "Monthly strategy + roadmap call",
      "Priority response time",
    ],
    overage: "Additional hours at $150/hr",
    featured: true,
  },
  {
    icon: Crown,
    name: "Custom Systems Partner",
    price: "$2,500+",
    unit: "per month · custom",
    tagline: "For multi-system operations with ongoing needs.",
    includes: [
      "Custom monthly scope",
      "Dedicated systems oversight",
      "Multi-team coordination",
      "Quarterly business review",
      "Custom SLAs",
    ],
    overage: "Custom",
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
  const { openCheckout, checkoutElement } = useStripeCheckout();
  return (
    <SiteLayout>
      {checkoutElement}
      {/* Header */}
      <Section className="pt-16 sm:pt-24 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Pricing</p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            Project inquiry is <Accent>free</Accent>. Strategy is paid. Implementation is <Accent color="sage">scoped</Accent>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A consulting-firm model, in plain English. Start with a paid diagnostic. Move into a scoped build. Keep it running with a monthly partner.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <a href="#start-here" className="rounded-full border border-sand bg-card px-4 py-2 hover:border-copper hover:text-copper transition">
              01 · Start Here
            </a>
            <a href="#build" className="rounded-full border border-sand bg-card px-4 py-2 hover:border-copper hover:text-copper transition">
              02 · Build the System
            </a>
            <a href="#keep-running" className="rounded-full border border-sand bg-card px-4 py-2 hover:border-copper hover:text-copper transition">
              03 · Keep It Running
            </a>
          </div>
        </div>
      </Section>

      {/* START HERE — direct purchase */}
      <Section id="start-here" className="pt-4">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">
            01 · Start Here
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
            Paid diagnostics you can <Accent>buy upfront.</Accent>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Strategy time is paid time. Each of these is a fixed deliverable —
            no proposal, no scoping call, just a clear outcome.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {START_HERE.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className={
                  "relative rounded-2xl bg-card p-7 flex flex-col " +
                  (p.featured
                    ? "border-2 border-copper shadow-[0_4px_8px_rgba(28,28,30,0.04),0_22px_50px_-22px_rgba(181,101,29,0.4)]"
                    : "border border-sand shadow-[0_1px_2px_rgba(28,28,30,0.03),0_10px_30px_-18px_rgba(28,28,30,0.12)]")
                }
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-xs font-semibold text-copper-foreground uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    Flagship
                  </span>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div className="h-11 w-11 rounded-full bg-copper/12 inline-flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-copper" />
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-3xl text-copper font-semibold leading-none">
                      {p.price}
                    </div>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {p.unit}
                    </p>
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-5 flex-1">
                  <CheckList items={[...p.includes]} />
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => openCheckout({ priceId: p.priceId })}
                    className={
                      "w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors " +
                      (p.featured
                        ? "bg-copper text-copper-foreground hover:bg-copper/90 shadow-[0_10px_30px_-12px_rgba(194,79,52,0.5)]"
                        : "border border-copper text-copper hover:bg-copper hover:text-copper-foreground")
                    }
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-muted-foreground italic max-w-2xl">
          Paid advisory services do not include implementation, design, build,
          or ongoing support unless specifically stated.
        </p>
      </Section>

      {/* BUILD THE SYSTEM — scoped */}
      <Section id="build" className="pt-4">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">
            02 · Build the System
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
            Custom implementations, <Accent color="sage">scoped properly.</Accent>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real builds. Real integrations. Real timelines. Every project starts
            with intake — no Buy Now buttons, no template scope.
          </p>
        </div>
        <div className="space-y-12">
          {BUILD_GROUPS.map((group) => (
            <div key={group.category}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/60 mb-5">
                {group.category}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="rounded-2xl bg-card border border-sand p-6 flex flex-col shadow-[0_1px_2px_rgba(28,28,30,0.03),0_14px_36px_-22px_rgba(28,28,30,0.18)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-copper/12 inline-flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-copper" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl">{item.name}</h3>
                          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                            {item.tagline}
                          </p>
                          {item.care && (
                            <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-sage">
                              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                              Includes 3-Month Website Care
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-5 pt-5 border-t border-sand flex items-center justify-between gap-3">
                        <span className="font-serif text-lg text-copper font-semibold">
                          {item.price}
                        </span>
                        <CopperButton
                          to="/contact"
                          variant="outlined"
                          className="!py-2 !px-4 !text-xs"
                        >
                          Request Project Quote
                        </CopperButton>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground italic max-w-2xl">
          All build prices shown are starting prices. Final pricing depends on
          scope, number of pages, integrations, data sources, automation
          complexity, timeline, and third-party tools required.
        </p>
      </Section>

      {/* 3-MONTH WEBSITE CARE */}
      <Section id="website-care" className="pt-4">
        <div className="rounded-3xl border border-sand bg-card p-8 sm:p-12 shadow-[0_1px_2px_rgba(28,28,30,0.03),0_14px_36px_-22px_rgba(28,28,30,0.18)]">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-sage uppercase tracking-wider">
              Included with every website package
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              3-Month <Accent color="sage">Website Care</Accent>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For the first 3 months after your site goes live, we handle small
              website updates and launch fixes so your site stays clean and
              working properly — at no extra cost.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-sage/30 bg-sage/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                Included
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Up to 5 small edits per month
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {[
                  "Text updates and typo fixes",
                  "Image swaps",
                  "Button & link updates",
                  "Contact info, hours, testimonials",
                  "Form routing corrections",
                  "Broken link fixes",
                  "Basic launch bug fixes",
                  "Minor spacing & mobile fixes",
                  "Small SEO title/meta updates",
                  "Updating one existing section with provided content",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Check className="h-4 w-4 mt-0.5 text-sage shrink-0" strokeWidth={2.5} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-sand bg-cream/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Not included — quoted separately
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Larger work or ongoing scope
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                {[
                  "New pages or full redesigns",
                  "New brand direction or logo concepts",
                  "New integrations or automations",
                  "Dashboards or client portals",
                  "Blog writing or major copy rewrites",
                  "Ongoing SEO campaigns or paid ads",
                  "Major layout changes",
                  "Ecommerce setup",
                  "Custom code features",
                  "Platform migration",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-foreground/70">
                    <span className="mt-0.5 inline-block h-4 w-4 shrink-0 text-center leading-4">–</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-sand">
            <table className="w-full text-sm">
              <thead className="bg-cream/60 text-left text-xs uppercase tracking-wider text-foreground/60">
                <tr>
                  <th className="px-4 py-3 font-semibold">Edit type</th>
                  <th className="px-4 py-3 font-semibold">Examples</th>
                  <th className="px-4 py-3 font-semibold">Included?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand">
                <tr>
                  <td className="px-4 py-3 font-medium">Small</td>
                  <td className="px-4 py-3 text-foreground/80">Text, image swap, typo, link, button</td>
                  <td className="px-4 py-3 text-sage font-medium">Yes, during care</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Medium</td>
                  <td className="px-4 py-3 text-foreground/80">Rework existing section, new form field, single-section layout change</td>
                  <td className="px-4 py-3 text-foreground/70">Limited / may be quoted</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Large</td>
                  <td className="px-4 py-3 text-foreground/80">New page, redesign, new feature, integration, or automation</td>
                  <td className="px-4 py-3 text-copper font-medium">Quoted separately</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-muted-foreground italic">
            Automation packages: website care covers website edits only.
            Automation, workflow, chatbot, and email-sequence changes are scoped
            separately or handled through a monthly support plan.
          </p>
        </div>
      </Section>

      {/* KEEP IT RUNNING — retainers */}
      <Section id="keep-running" className="pt-4">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">
            03 · Keep It Running
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
            Ongoing partnership, <Accent>application first.</Accent>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Monthly retainers for businesses that want a steady hand on their
            systems. Apply first — we keep our roster small on purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {RETAINERS.map((r) => {
            const Icon = r.icon;
            const featured = "featured" in r && r.featured;
            return (
              <div
                key={r.name}
                className={
                  "relative rounded-2xl bg-card p-6 flex flex-col " +
                  (featured
                    ? "border-2 border-copper shadow-[0_4px_8px_rgba(28,28,30,0.04),0_22px_50px_-22px_rgba(181,101,29,0.4)]"
                    : "border border-sand shadow-[0_1px_2px_rgba(28,28,30,0.03),0_10px_30px_-18px_rgba(28,28,30,0.12)]")
                }
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-xs font-semibold text-copper-foreground uppercase tracking-wider whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="h-10 w-10 rounded-full bg-copper/12 inline-flex items-center justify-center">
                  <Icon className="h-5 w-5 text-copper" />
                </div>
                <h3 className="mt-4 font-serif text-xl">{r.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {r.tagline}
                </p>
                <div className="mt-4">
                  <div className="font-serif text-3xl text-copper font-semibold">
                    {r.price}
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {r.unit}
                  </p>
                </div>
                <div className="mt-5 flex-1">
                  <CheckList items={r.includes} />
                </div>
                {r.overage && (
                  <p className="mt-4 text-[11px] text-muted-foreground italic">
                    {r.overage}
                  </p>
                )}
                <div className="mt-5">
                  <CopperButton
                    to="/contact"
                    variant={featured ? "filled" : "outlined"}
                    className="w-full !text-xs"
                  >
                    Apply
                  </CopperButton>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-muted-foreground italic max-w-2xl">
          Retainers billed monthly in advance. Unused hours/requests do not roll
          over. 30-day cancellation notice.
        </p>
      </Section>

      {/* NOT SURE */}
      <Section className="pt-4">
        <div className="rounded-3xl bg-gradient-to-br from-cream via-card to-sand/60 border border-sand p-10 sm:p-16 text-center shadow-sm max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Not sure where you fit?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Submit a free project inquiry. If we're a fit, we'll point you to the
            right starting offer — or book a paid Strategy Call if you want
            answers right away.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <CopperButton to="/contact">Submit a Free Inquiry</CopperButton>
            <CopperButton to="/contact" variant="outlined">
              Book a $250 Strategy Call
            </CopperButton>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Project inquiry is free. Strategy is paid. Implementation is scoped.
          </p>
        </div>
      </Section>

      {/* Fine print teaser */}
      <Section className="py-10">
        <div className="max-w-3xl mx-auto text-center border-t border-sand pt-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Website packages include 3 months of post-launch website care
            covering up to 5 small edits per month (text changes, image swaps,
            typo/link fixes, form routing corrections, minor layout
            adjustments). New pages, redesigns, new sections, integrations,
            automation/dashboard work, ecommerce, and major copy rewrites are
            quoted separately.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Payment terms, revisions, third-party fees, and AI disclaimers are
            detailed in our{" "}
            <a href="/terms" className="text-copper hover:underline">
              Terms &amp; Fine Print
            </a>
            .
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}