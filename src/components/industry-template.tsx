import { Check, ArrowRight, ExternalLink, Lightbulb, Monitor, PenTool, Workflow, MessageSquare, BarChart3, MailPlus, Magnet } from "lucide-react";
import {
  SiteLayout,
  Section,
  SectionLabel,
  Accent,
  PrimaryButton,
  SecondaryButton,
  FinalCTA,
} from "@/components/site-layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/primitives";
import { DashboardMockup, type DashboardSpec } from "@/components/mockups";

export interface IndustryContent {
  label: string;
  title: React.ReactNode;
  intro: string;
  pains: string[];
  systems: { title: string; body: string }[];
  tools: string[];
  workflow: string[];
  caseStudy: { name: string; result: string };
}

export interface DemoInfo {
  brandName: string;
  stats: { value: string; label: string }[];
}

const CORE_SERVICES = [
  { slug: "ai-consulting", label: "AI Consulting", icon: Lightbulb, description: "AI opportunity mapping, tool recommendations, and a prioritized action plan for your business." },
  { slug: "websites", label: "Website Design", icon: Monitor, description: "Custom, mobile-first websites that capture leads, book appointments, and connect to your workflow." },
  { slug: "brand", label: "Brand & Logo Design", icon: PenTool, description: "Complete brand identity: logo, colors, typography, messaging, and all deliverable files." },
  { slug: "workflow", label: "Workflow Automation", icon: Workflow, description: "Automate follow-ups, reminders, invoices, and intake — saving 5–10 hours per week." },
  { slug: "chatbots", label: "AI Chatbots & Voice Agents", icon: MessageSquare, description: "24/7 AI agents on your site and phone line that qualify leads and book appointments." },
  { slug: "dashboards", label: "Business Dashboards", icon: BarChart3, description: "Custom dashboards connecting all your tools into one clean view of your entire business." },
  { slug: "email-automation", label: "Email Automation", icon: MailPlus, description: "Automated email sequences for lead nurturing, onboarding, re-engagement, and follow-up." },
  { slug: "lead-capture", label: "Lead Capture & Follow-Up", icon: Magnet, description: "Every lead from every source captured, assigned, and followed up automatically." },
];

export function IndustryTemplate({
  content,
  mockup,
  slug,
  demoInfo,
}: {
  content: IndustryContent;
  mockup?: DashboardSpec;
  slug?: string;
  demoInfo?: DemoInfo;
}) {

  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24 pb-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Industry · {content.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.05] text-foreground text-balance">
              {content.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {content.intro}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Talk About Your Business</PrimaryButton>
              <SecondaryButton to="/packages">View Packages</SecondaryButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Demo Website Preview */}
      {demoInfo && slug && (
        <Section className="pt-0">
          <Reveal>
            <div className="rounded-3xl bg-[#1F1F1F] border border-white/10 overflow-hidden">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-copper/20 flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-copper" />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/70">Demo Website</p>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-white text-balance">
                  See what a premium {content.label.toLowerCase()} website looks like.
                </h2>
                <p className="mt-3 text-white/75 leading-relaxed max-w-2xl">
                  We built a full demo site — <span className="text-copper font-medium">{demoInfo.brandName}</span> — to show exactly what a custom website, dashboard, and automation system looks like for {content.label.toLowerCase()}. Explore the features, dashboard, and workflows.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`/demo/${slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors"
                  >
                    Explore {demoInfo.brandName} Demo <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#1F1F1F] transition-colors"
                  >
                    Build This For Me
                  </a>
                </div>
              </div>
              {/* Mini preview of demo features */}
              <div className="border-t border-white/10 bg-white/5 px-8 sm:px-12 py-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {demoInfo.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-serif text-xl font-bold text-copper">{s.value}</p>
                      <p className="mt-0.5 text-xs text-white/70 uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {mockup && (
        <Section className="pt-0">
          <div className="mb-7 max-w-2xl">
            <SectionLabel>What you'd see</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
              A live dashboard built for <Accent>your {content.label.toLowerCase()}</Accent>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Illustrative example. Real builds are tailored to your data sources and KPIs.
            </p>
          </div>
          <Reveal>
            <DashboardMockup spec={mockup} />
          </Reveal>
        </Section>
      )}

      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10 border-l-[6px] border-l-terracotta">
            <SectionLabel>What's slowing you down</SectionLabel>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-foreground">
              Pain points we hear most.
            </h2>
            <ul className="mt-6 space-y-3">
              {content.pains.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10 border-l-[6px] border-l-sage">
            <SectionLabel color="sage">Recommended systems</SectionLabel>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-foreground">
              What we typically build.
            </h2>
            <ul className="mt-6 space-y-4">
              {content.systems.map((s) => (
                <li key={s.title}>
                  <div className="flex gap-3 text-foreground">
                    <Check className="h-5 w-5 mt-0.5 text-sage shrink-0" strokeWidth={2.5} />
                    <div>
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Core Services for this Industry */}
      <Section className="bg-gradient-to-b from-cream/40 to-transparent border-t border-sand">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
            Core services we deliver for <Accent>{content.label.toLowerCase()}</Accent>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            Every engagement is tailored — but these are the building blocks we use to create your system. Mix and match based on what your business needs most.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_SERVICES.map((service) => (
            <StaggerItem key={service.slug}>
              <a
                href={`/services#${service.slug}`}
                className="group block h-full rounded-2xl bg-card border border-sand p-6 hover:-translate-y-1 hover:shadow-lg hover:border-copper/30 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-sand/70 flex items-center justify-center group-hover:bg-copper/15 transition-colors">
                  <service.icon className="h-5 w-5 text-foreground/70 group-hover:text-copper transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-medium text-sm text-foreground">{service.label}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-copper opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section className="bg-cream/60 border-y border-sand">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>Tools we connect</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
              Already using these? <Accent color="sage">Good.</Accent>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              We integrate with the platforms your industry runs on so nothing has
              to be replaced.
            </p>
            <StaggerGroup className="mt-7 flex flex-wrap gap-2">
              {content.tools.map((t) => (
                <StaggerItem key={t}>
                  <span className="inline-flex items-center rounded-full border border-sand bg-card px-4 py-2 text-sm font-medium text-foreground/80">
                    {t}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <div>
            <SectionLabel>Sample workflow</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
              From inquiry to follow-up.
            </h2>
            <ol className="mt-7 space-y-4">
              {content.workflow.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="shrink-0 h-8 w-8 rounded-full bg-copper text-copper-foreground inline-flex items-center justify-center text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-foreground/85">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-[#1F1F1F] text-white p-10 sm:p-14 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 satin-bands opacity-25 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/70">Case study placeholder</p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-white text-balance">
                {content.caseStudy.name}
              </h3>
              <p className="mt-5 text-white/75 leading-relaxed max-w-md">
                {content.caseStudy.result}
              </p>
            </div>
            <div className="lg:justify-self-end">
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#1F1F1F] transition-colors"
              >
                Read Case Studies <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Sonoran for this Industry */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Reveal>
              <SectionLabel>Why us</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
                Why Sonoran for <Accent>{content.label.toLowerCase()}</Accent>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-2">
            <StaggerGroup className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Industry-specific builds", body: `We don't use generic templates. Every system is built for how ${content.label.toLowerCase()} businesses actually operate day-to-day.` },
                { title: "Your tools, connected", body: "We integrate with your existing software stack — no rip and replace. Everything talks to everything." },
                { title: "Arizona-based, hands-on", body: "Tucson-based team, available by phone. We meet you where you are and speak plain English." },
                { title: "Own everything we build", body: "No vendor lock-in. You own your website, data, automations, and dashboard. Walk away anytime." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="rounded-2xl bg-card border border-sand p-6">
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Section>

      {/* Quick FAQ */}
      <Section className="border-t border-sand">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
            Common questions from {content.label.toLowerCase()} owners.
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl space-y-6">
          {[
            { q: "How long does a typical build take?", a: "Most projects launch in 3–5 weeks. Complex dashboard + automation builds may take 6–8 weeks. We'll give you a clear timeline during intake." },
            { q: "Do I need to switch my existing tools?", a: "No. We integrate with the tools you already use. The goal is to connect everything, not replace it." },
            { q: "What does it cost?", a: "Websites start at $1,750. Dashboards start at $2,500. Automations start at $1,500. We scope every project individually — no surprise fees." },
            { q: "Can I see a demo before committing?", a: demoInfo ? `Yes — explore our ${demoInfo.brandName} demo to see exactly what we'd build for your business.` : "Yes — we'll walk you through examples during your strategy call." },
            { q: "What happens after launch?", a: "Website builds include 3 months of care. For ongoing support, we offer monthly retainer packages starting at $500/mo." },
          ].map((faq) => (
            <Reveal key={faq.q}>
              <div className="rounded-2xl bg-card border border-sand p-6">
                <h3 className="font-medium text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA
        headline={`Ready to bring this to your ${content.label.toLowerCase()} business?`}
        sub="Submit a free inquiry or book a strategy call. We'll help you decide what to build first."
      />
    </SiteLayout>
  );
}