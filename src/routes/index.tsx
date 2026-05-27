import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Globe,
  Palette,
  Workflow,
  MessageSquare,
  MailCheck,
  CalendarCheck2,
  TrendingUp,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { SiteLayout, Section, CopperButton, FinalCTA } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonoran Systems & AI — Modern AI for Arizona businesses" },
      {
        name: "description",
        content:
          "Tucson and Phoenix small businesses: build better websites, automate daily work, and use AI in practical ways. Book a free consultation.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Brain, name: "AI Consulting", desc: "Clear, practical guidance on where AI actually fits." },
  { icon: Globe, name: "Website Design", desc: "Fast, modern sites built to capture real leads." },
  { icon: Palette, name: "Logo & Brand Systems", desc: "A confident identity that builds trust on day one." },
  { icon: Workflow, name: "Workflow Automation", desc: "Stop doing the same manual tasks every week." },
  { icon: MessageSquare, name: "AI Chatbots", desc: "Assistants that answer questions and qualify leads." },
  { icon: MailCheck, name: "Lead Capture & Follow-Up", desc: "Never lose a lead to a missed reply again." },
  { icon: CalendarCheck2, name: "Booking & Intake Systems", desc: "Let clients book themselves, on your terms." },
  { icon: TrendingUp, name: "Business Process Improvement", desc: "Simpler operations, less software, more revenue." },
];

const STEPS = [
  { n: "01", t: "Tell us about your business", d: "Share where you are and what's getting in the way." },
  { n: "02", t: "Book a free phone consultation", d: "We talk through your goals, no sales pressure." },
  { n: "03", t: "Get a clear action plan", d: "A simple, prioritized plan you can act on." },
  { n: "04", t: "We build it together", d: "Hands-on partnership through launch and beyond." },
];

const TEASER_PACKAGES = [
  {
    name: "AI Business Audit",
    desc: "Get clarity on exactly where AI can help your business.",
    price: "$297 flat",
    cta: "Start the Audit",
    to: "/ai-audit",
    filled: true,
  },
  {
    name: "Website System Launch",
    desc: "A professional website built to capture leads.",
    price: "Starting at $1,500",
    cta: "Request a Quote",
    to: "/contact",
    filled: false,
  },
  {
    name: "Brand + Web Launch",
    desc: "A stronger identity and a website to match.",
    price: "Starting at $2,500",
    cta: "Request a Quote",
    to: "/contact",
    filled: false,
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 480px at 75% -10%, rgba(196,113,74,0.18), transparent 60%), radial-gradient(700px 420px at 10% 10%, rgba(181,101,29,0.10), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sand bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-copper" />
            Tucson · Phoenix · Arizona
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight text-foreground">
            Modern AI systems for local businesses ready to grow.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sonoran Systems &amp; AI helps Tucson and Phoenix businesses build better websites,
            automate daily work, and use AI in practical ways — without the confusion.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <CopperButton to="/contact">Book a Free Consultation</CopperButton>
            <CopperButton to="/packages" variant="outlined">
              View Packages
            </CopperButton>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Based in Tucson. Serving businesses across Arizona.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <Section className="pt-4 sm:pt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            Still running your business on scattered tools and missed follow-ups?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most small businesses are losing leads they never knew they had — because their website
            doesn't capture them, their follow-up isn't automated, and their brand doesn't build
            trust. You don't need more apps. You need a system.
          </p>
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-sm font-medium text-copper uppercase tracking-wider">What we do</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Eight ways we help you grow</h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-copper hover:underline inline-flex items-center gap-1">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl bg-card border border-sand/70 p-6 shadow-[0_1px_2px_rgba(28,28,30,0.03),0_8px_24px_-12px_rgba(28,28,30,0.08)] hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(28,28,30,0.04),0_14px_30px_-12px_rgba(181,101,29,0.18)] transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-copper/10 text-copper flex items-center justify-center">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-lg text-foreground">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="bg-card/50 border-y border-sand">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Our process</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">How it works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-copper font-serif text-2xl">{s.n}</div>
              <h3 className="mt-3 font-serif text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PACKAGE PREVIEW */}
      <Section>
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Packages</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Pick a starting point</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEASER_PACKAGES.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl bg-card border border-sand p-7 flex flex-col shadow-[0_1px_2px_rgba(28,28,30,0.03),0_10px_30px_-16px_rgba(28,28,30,0.12)]"
            >
              <h3 className="font-serif text-xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-5 text-copper font-serif text-2xl">{p.price}</p>
              <div className="mt-6">
                <CopperButton to={p.to} variant={p.filled ? "filled" : "outlined"}>
                  {p.cta}
                </CopperButton>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/packages" className="text-copper text-sm font-medium hover:underline inline-flex items-center gap-1">
            View all packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* LOCAL TRUST */}
      <Section className="py-16">
        <div className="text-center">
          <MapPin className="h-7 w-7 text-copper mx-auto" strokeWidth={1.5} />
          <p className="mt-4 font-serif text-2xl sm:text-3xl">
            Serving Tucson, Phoenix, and businesses across Arizona.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Local, personal, and on your time zone.</p>
        </div>
      </Section>

      <FinalCTA />
    </SiteLayout>
  );
}
