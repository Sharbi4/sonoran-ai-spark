import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Lightbulb,
  Monitor,
  PenTool,
  Workflow,
  MessageSquare,
  BarChart3,
  MailPlus,
  Magnet,
  Check,
  ArrowRight,
  Scale,
  Utensils,
  Hammer,
  Leaf,
  Home as HomeIcon,
  type LucideIcon,
} from "lucide-react";
import {
  SiteLayout,
  Section,
  PrimaryButton,
  SecondaryButton,
  Accent,
  DiagonalBands,
} from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI & Automation Services Tucson AZ | Sonoran Systems & AI — Phoenix, Flagstaff" },
      {
        name: "description",
        content:
          "AI consulting, workflow automation, AI chatbots, website design, dashboards, email automation & lead capture for Tucson, Phoenix, Flagstaff & Arizona businesses. Process excellence meets cutting-edge AI.",
      },
      { property: "og:title", content: "AI & Automation Services — Sonoran Systems & AI | Tucson AZ" },
      {
        property: "og:description",
        content:
          "Full-service AI consulting for Arizona businesses — automation, chatbots, dashboards, websites & more. Based in Tucson, serving Phoenix, Flagstaff & beyond.",
      },
      { property: "og:url", content: "https://sonoransystemsai.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://sonoransystemsai.com/services" }],
  }),
  component: ServicesPage,
});

type AccentColor = "terracotta" | "sage";

type ServiceDetail = {
  slug: string;
  label: string;
  name: string;
  accent: string;
  accentColor: AccentColor;
  icon: LucideIcon;
  paragraphs: string[];
  includes: string[];
  whoFor: string;
  cta: string;
};

const SERVICES: ServiceDetail[] = [
  {
    slug: "ai-consulting",
    label: "Start Here",
    name: "AI Consulting",
    accent: "AI",
    accentColor: "terracotta",
    icon: Lightbulb,
    paragraphs: [
      "Most small business owners know they should be using AI — but don't know where to start, what's actually useful, or what's just hype. That's exactly what we help with.",
      "We sit down with you, learn how your business works, and identify the specific places where AI tools can save time, reduce manual work, improve customer communication, and help you grow.",
      "Every recommendation we make is practical, clearly explained, and built to actually work for your business — not just look impressive in a proposal.",
    ],
    includes: [
      "Business and workflow review",
      "AI opportunity mapping",
      "Tool recommendations specific to your industry",
      "Prioritized action plan",
      "Plain-English explanations — no jargon",
      "Follow-up support after the session",
    ],
    whoFor: "Business owners who want to use AI but aren't sure where to begin.",
    cta: "Book an AI Audit",
  },
  {
    slug: "websites",
    label: "Online Presence",
    name: "Website Design",
    accent: "Website",
    accentColor: "sage",
    icon: Monitor,
    paragraphs: [
      "Your website should work as hard as you do. Most small business websites are either outdated, hard to find, or don't convert visitors into customers because they're not connected to anything — no lead form, no booking system, no follow-up.",
      "We build clean, modern, mobile-friendly websites that are designed from the ground up to capture leads, book appointments, and communicate your value clearly — then we connect them to your business workflow so every visitor becomes an opportunity.",
      "No templates. No page builders. Built to look like your brand and work like a system.",
    ],
    includes: [
      "1–5 page custom website",
      "Mobile-first responsive design",
      "Lead capture form",
      "Booking system integration",
      "AI-assisted copywriting",
      "Basic local SEO setup",
      "2 rounds of revisions included",
    ],
    whoFor:
      "Businesses with an outdated website or no website at all who are ready for a professional online presence.",
    cta: "Request Website Package",
  },
  {
    slug: "brand",
    label: "Brand Identity",
    name: "Logo & Brand Systems",
    accent: "Brand",
    accentColor: "terracotta",
    icon: PenTool,
    paragraphs: [
      "Your brand is the first impression before anyone reads a single word. A weak logo and inconsistent visuals signal that a business isn't established — even if the work is excellent.",
      "We build complete brand identity systems that give your business a professional, cohesive look across every touchpoint — your website, social profiles, business cards, and client communications.",
      "Everything we design is practical and deliverable — not a mood board you can't use.",
    ],
    includes: [
      "Logo design — 2 concepts, 1 direction refined",
      "Brand color system with hex codes",
      "Font pairing and type hierarchy",
      "Messaging guide and tagline",
      "Social profile graphics",
      "Final files in all formats — SVG, PNG, PDF",
    ],
    whoFor:
      "New businesses launching or existing businesses that have outgrown their current brand.",
    cta: "Request Brand Package",
  },
  {
    slug: "workflow",
    label: "Work Smarter",
    name: "Workflow Automation",
    accent: "Automation",
    accentColor: "sage",
    icon: Workflow,
    paragraphs: [
      "If you're doing the same tasks manually every week — sending follow-up emails, copying information between apps, sending appointment reminders, chasing unpaid invoices — those tasks can be automated.",
      "We map your current workflow, identify every manual step that can be replaced by a system, and build automations that run in the background while you focus on the work that actually requires you.",
      "Most clients save 5–10 hours per week within the first month.",
    ],
    includes: [
      "Full workflow audit and mapping",
      "Client intake form build",
      "Email follow-up automation",
      "Appointment reminder sequences",
      "AI chatbot or assistant setup",
      "Internal tracker or dashboard",
      "Owner and team training walkthrough",
    ],
    whoFor:
      "Business owners drowning in repetitive admin work who know there has to be a better way.",
    cta: "Book Workflow Consultation",
  },
  {
    slug: "chatbots",
    label: "24/7 Customer Engagement",
    name: "AI Chatbots & Voice Agents",
    accent: "AI",
    accentColor: "terracotta",
    icon: MessageSquare,
    paragraphs: [
      "What happens when a potential customer visits your website at 10pm on a Sunday and has a question? Or calls your business number during a job?",
      "If the answer is nothing — you're losing leads you don't even know about.",
      "We build and deploy AI chat agents for your website and AI voice agents for your phone line that answer questions, qualify leads, book appointments, and collect information — 24 hours a day, 7 days a week, without you lifting a finger.",
    ],
    includes: [
      "AI chat agent for your website",
      "AI voice agent for your phone line",
      "Custom knowledge base — trained on your business",
      "Lead capture and qualification flow",
      "Appointment booking integration",
      "Handoff protocol for complex inquiries",
      "Monthly performance review",
    ],
    whoFor:
      "Businesses that get inquiries outside business hours or want to qualify leads automatically.",
    cta: "Ask About AI Chatbots",
  },
  {
    slug: "dashboards",
    label: "Real Data. Real Time.",
    name: "Business Intelligence Dashboards",
    accent: "Intelligence",
    accentColor: "sage",
    icon: BarChart3,
    paragraphs: [
      "Most small business owners are running their business blind. Their revenue is in QuickBooks. Their jobs are in Jobber. Their appointments are in their booking app. None of it talks to each other.",
      "We connect all of it into one custom AI-powered dashboard — built specifically for how your business works. You log in once and see everything: revenue, leads, jobs, appointments, follow-ups, and AI-generated insights that tell you what to pay attention to right now.",
      "We connect QuickBooks, Toast, Clio, Jobber, Mindbody, ServiceTitan, and 50+ other platforms.",
    ],
    includes: [
      "Custom dashboard built for your business",
      "Connect up to 6 data sources",
      "Role-based employee login access",
      "AI daily business brief",
      "Automated alerts via SMS or email",
      "Mobile-friendly design",
      "Monthly strategy review call",
    ],
    whoFor:
      "Business owners who want to stop piecing together reports from five different apps every morning.",
    cta: "Request Dashboard Build",
  },
  {
    slug: "email",
    label: "Never Miss a Lead",
    name: "Email Automation",
    accent: "Email",
    accentColor: "terracotta",
    icon: MailPlus,
    paragraphs: [
      "A potential client emails Friday afternoon. You don't see it until Monday. By then they've called someone else.",
      "Or you get a lead, mean to follow up, and it gets buried under 40 other emails. Three weeks later you remember. Too late.",
      "We build AI-powered email systems that read incoming messages, classify them by urgency and type, draft replies in your voice, and follow up automatically on every lead — so nothing ever falls through the cracks again.",
    ],
    includes: [
      "Connect Gmail or Outlook",
      "AI email classification and triage",
      "AI draft replies in your voice and tone",
      "3-step automated follow-up sequence for new leads",
      "CRM integration for lead context",
      "SMS or Slack alerts for urgent incoming emails",
      "Owner training and walkthrough",
    ],
    whoFor:
      "Busy business owners who know they're losing leads to an unorganized inbox.",
    cta: "Request Email Setup",
  },
  {
    slug: "lead-capture",
    label: "Grow Your Pipeline",
    name: "Lead Capture & Follow-Up",
    accent: "Lead",
    accentColor: "sage",
    icon: Magnet,
    paragraphs: [
      "Most businesses lose leads they never even knew they had — because there's no system to capture them, no automatic acknowledgment, and no follow-up unless the owner remembers.",
      "We build complete lead systems — from the form on your website to the automated follow-up sequence that runs until the lead converts or opts out — so every inquiry gets a professional, timely response.",
    ],
    includes: [
      "Lead capture form design and build",
      "Immediate auto-response setup",
      "5-step email follow-up sequence",
      "SMS follow-up option",
      "Lead routing to CRM",
      "Pipeline tracking dashboard",
      "Monthly sequence performance review",
    ],
    whoFor:
      "Businesses that get inquiries but don't have a reliable system for following up consistently.",
    cta: "Request Lead System Build",
  },
];

const INDUSTRIES = [
  {
    icon: Scale,
    name: "Law Firms",
    tools: "Clio · MyCase · PracticePanther · Filevine · CosmoLex",
    line: "Case dashboards, billing tracking, deadline alerts, and client pipeline visibility.",
  },
  {
    icon: Utensils,
    name: "Restaurants & Food",
    tools: "Toast · Square · Clover",
    line: "Daily sales, menu performance, staff reports, and AI-powered shift insights.",
  },
  {
    icon: Hammer,
    name: "Contractors",
    tools: "Jobber · ServiceTitan · Housecall Pro · QuickBooks",
    line: "Jobs, quotes, invoices, and revenue — all in one view with automated follow-up.",
  },
  {
    icon: Leaf,
    name: "Salons & Wellness",
    tools: "Vagaro · Mindbody · Boulevard · Jane App · Fresha",
    line: "Appointments, staff performance, client retention, and revenue trends.",
  },
  {
    icon: HomeIcon,
    name: "Real Estate",
    tools: "Follow Up Boss · kvCORE · Dotloop · QuickBooks",
    line: "Lead pipeline, commission tracking, follow-up automation, and closing dashboard.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <ServicesHero />
      <div className="space-y-2">
        {SERVICES.map((s, i) => (
          <ServiceDetailSection key={s.slug} service={s} flip={i % 2 === 1} />
        ))}
      </div>
      <IndustrySpotlight />
      <DarkFinalCTA />
    </SiteLayout>
  );
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            What we do
          </p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight">
            AI systems, websites, and automation for businesses ready to{" "}
            <Accent>grow.</Accent>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Sonoran Systems &amp; AI is a business systems partner — not just a web design shop.
            We look at your entire operation and help you build the connected tools, automations,
            and AI systems that save time, capture more leads, and create a better customer
            experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton to="/contact">Book a Strategy Call</PrimaryButton>
            <SecondaryButton to="/packages">View Packages</SecondaryButton>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Serving Tucson, Phoenix, Scottsdale, and businesses across Arizona.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] sm:aspect-square">
            <DiagonalBands />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDetailSection({
  service,
  flip,
}: {
  service: ServiceDetail;
  flip: boolean;
}) {
  const Icon = service.icon;
  const parts = service.name.split(service.accent);
  return (
    <section id={service.slug} className="py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={
            "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center " +
            (flip ? "lg:[&>*:first-child]:order-2" : "")
          }
        >
          <div className="lg:col-span-5">
            <div className="aspect-square rounded-3xl bg-card border border-sand flex items-center justify-center shadow-[0_20px_50px_-30px_rgba(31,31,31,0.25)]">
              <Icon
                className="h-32 w-32 sm:h-40 sm:w-40 text-sage"
                strokeWidth={1.25}
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-copper">
              {service.label}
            </p>
            <h2 className="mt-3 font-serif font-bold text-3xl sm:text-4xl leading-tight">
              {parts[0]}
              <Accent color={service.accentColor}>{service.accent}</Accent>
              {parts[1]}
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              {service.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <Check
                    className="h-4 w-4 text-copper mt-0.5 shrink-0"
                    strokeWidth={2.25}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 italic text-sm text-muted-foreground">
              Who it's for: {service.whoFor}
            </p>
            <div className="mt-7">
              <PrimaryButton to="/contact">{service.cta}</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustrySpotlight() {
  return (
    <Section className="bg-cream/0">
      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
        Built for your industry
      </p>
      <h2 className="mt-3 font-serif font-bold text-3xl sm:text-4xl max-w-3xl">
        We speak your <Accent>industry's</Accent> language.
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        Every industry runs on different tools. We know them — and we connect them.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {INDUSTRIES.map((i) => (
          <div
            key={i.name}
            className="rounded-2xl bg-card border border-sand p-6 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg border border-sand bg-cream flex items-center justify-center">
                <i.icon className="h-5 w-5 text-sage" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-bold text-lg">{i.name}</h3>
            </div>
            <p className="mt-4 text-xs text-muted-foreground tracking-wide">{i.tools}</p>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{i.line}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DarkFinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-charcoal">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight">
          Not sure which service is right for your business?
        </h2>
        <p className="mt-4 font-serif text-xl sm:text-2xl text-copper">
          That's exactly what the $250 Strategy Call is for.
        </p>
        <p className="mt-6 text-white/70 leading-relaxed max-w-2xl mx-auto">
          Book a 60-minute strategy call and we'll figure it out together. No pressure. No
          obligation. Just a straightforward conversation about your business and where we
          can help.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-copper text-copper-foreground px-6 py-3 text-sm font-medium hover:bg-copper/90 transition-colors"
          >
            Book a Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-foreground transition-colors"
          >
            View Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-8 text-xs text-sand tracking-wide">
          Serving Tucson, Phoenix, Scottsdale, Flagstaff, and businesses across Arizona.
        </p>
      </div>
    </section>
  );
}