import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Monitor,
  Workflow,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Bot,
  CheckCircle2,
  TrendingUp,
  PenTool,
  MailPlus,
  Magnet,
  Lightbulb,
} from "lucide-react";
import {
  SiteLayout,
  Section,
  PrimaryButton,
  SecondaryButton,
  Accent,
  DiagonalBands,
  FinalCTA,
} from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonoran Systems & AI — AI systems for Arizona businesses" },
      {
        name: "description",
        content:
          "Websites, automation, dashboards, and AI tools designed for Arizona businesses. Modern systems that save time and help you grow with confidence.",
      },
    ],
  }),
  component: Home,
});

const CITIES = ["Tucson", "Phoenix", "Scottsdale", "Flagstaff"];

const BUILDS = [
  {
    icon: Monitor,
    name: "Websites",
    slug: "websites",
    desc: "Modern, fast, and built to convert. Professional websites that capture leads, book appointments, and reflect your brand — connected from day one.",
  },
  {
    icon: Workflow,
    name: "Workflow Automation",
    slug: "workflow",
    desc: "Stop doing the same manual tasks every week. We map your workflow and build automations for intake, follow-up, and reminders.",
  },
  {
    icon: MessageSquare,
    name: "AI Chatbots",
    slug: "chatbots",
    desc: "Answer questions, capture leads, and book appointments 24/7 with AI chat and voice agents on your website and phone line.",
  },
  {
    icon: BarChart3,
    name: "Dashboards",
    slug: "dashboards",
    desc: "Connect QuickBooks, Toast, Clio, Jobber, and 50+ tools into one AI-powered dashboard. See your whole business at a glance.",
  },
  {
    icon: PenTool,
    name: "Brand & Logo Design",
    slug: "brand",
    desc: "Logos, color systems, font pairings, and messaging guides that make your business look established and ready to grow.",
  },
  {
    icon: MailPlus,
    name: "Email Automation",
    slug: "email",
    desc: "AI systems that read incoming email, draft smart replies in your voice, and follow up automatically on every inquiry.",
  },
  {
    icon: Magnet,
    name: "Lead Capture & Follow-Up",
    slug: "lead-capture",
    desc: "Intake forms, lead funnels, and automated follow-up sequences that make sure every inquiry gets a fast, professional response.",
  },
  {
    icon: Lightbulb,
    name: "AI Consulting",
    slug: "ai-consulting",
    desc: "Cut through the noise. We identify the highest-value AI opportunities for your business and build a practical roadmap.",
  },
];

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <WhatWeBuild />
      <DashboardPreview />
      <PopularPackage />
      <FinalCTA
        headline="Ready to move smarter?"
        sub="A quick phone call is the fastest way to start."
      />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              AI <Accent>systems</Accent> for <br className="hidden sm:block" />
              <Accent color="sage">businesses</Accent> that are ready to move{" "}
              <Accent>smarter</Accent>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Websites, automation, dashboards, and AI tools designed for Arizona businesses.
              Modern solutions that save time and help you grow with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
              <SecondaryButton to="/services">View Services</SecondaryButton>
            </div>

            <div className="mt-12">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Built for Arizona businesses
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {CITIES.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                    {c.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — diagonal bands + floating cards */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] sm:aspect-[5/6]">
              <DiagonalBands />
              <FloatingCard
                className="absolute top-4 right-2 sm:right-6 w-[80%]"
                icon={<Bot className="h-4 w-4 text-copper" />}
                title="AI Assistant"
                status="Online"
              >
                <p className="text-xs text-muted-foreground">
                  Here's your lead summary and next steps.
                </p>
                <button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full border border-copper text-copper text-xs font-medium px-3 py-2">
                  View Leads <ArrowRight className="h-3 w-3" />
                </button>
              </FloatingCard>

              <FloatingCard
                className="absolute left-0 sm:-left-4 top-[42%] w-[70%]"
                icon={<Workflow className="h-4 w-4 text-foreground" />}
                title="Workflow"
              >
                <p className="text-xs text-muted-foreground">Client Follow-Up</p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-foreground/70">Automation Active</span>
                  <span className="relative inline-block h-4 w-7 rounded-full bg-copper">
                    <span className="absolute top-0.5 right-0.5 h-3 w-3 rounded-full bg-white" />
                  </span>
                </div>
              </FloatingCard>

              <FloatingCard
                className="absolute right-0 bottom-2 w-[78%]"
                icon={<TrendingUp className="h-4 w-4 text-sage" />}
                title="Daily Summary"
              >
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  {[
                    { v: "23", l: "New Leads" },
                    { v: "7", l: "Booked" },
                    { v: "12", l: "Follow Ups" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-md bg-cream px-1.5 py-2">
                      <div className="font-serif font-bold text-foreground text-base leading-none">
                        {s.v}
                      </div>
                      <div className="text-[9px] text-muted-foreground mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  status,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  status?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "rounded-2xl bg-card border border-sand p-4 shadow-[0_10px_28px_-12px_rgba(31,31,31,0.25)] " +
        (className ?? "")
      }
    >
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-md bg-cream flex items-center justify-center">
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground leading-tight">{title}</p>
          {status && (
            <p className="text-[10px] text-sage flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" /> {status}
            </p>
          )}
        </div>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function WhatWeBuild() {
  return (
    <Section>
      <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        What we build
      </p>
      <h2 className="mt-2 font-serif font-bold text-3xl sm:text-4xl max-w-2xl">
        Systems that work <Accent>together</Accent>.
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        We don't build websites or set up automations in isolation. We look at your entire
        business and build connected systems that work together — so every part of your operation
        runs cleaner and smarter.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BUILDS.map((b) => (
          <div
            key={b.name}
            className="rounded-2xl bg-card border border-sand p-6 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-22px_rgba(194,79,52,0.35)] transition-all"
          >
            <div className="h-10 w-10 rounded-lg border border-sand bg-cream flex items-center justify-center">
              <b.icon className="h-5 w-5 text-sage" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 font-serif font-bold text-lg">{b.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            <a
              href={`/services#${b.slug}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline"
            >
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <p className="text-base text-foreground/80">
          Not sure which service fits your business?
        </p>
        <div className="mt-5 inline-flex">
          <PrimaryButton to="/contact">Book a Free Call</PrimaryButton>
        </div>
      </div>
    </Section>
  );
}

function DashboardPreview() {
  return (
    <section className="py-20 sm:py-24" style={{ backgroundColor: "#F1E8DA" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Real data. Real time.
          </p>
          <h2 className="mt-3 font-serif font-bold text-3xl sm:text-4xl leading-tight">
            See your business <br /> at <Accent>a glance</Accent>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Custom dashboards bring your leads, follow-ups, and revenue into one beautiful,
            easy-to-read view.
          </p>
          <div className="mt-7">
            <PrimaryButton to="/services">View Dashboard</PrimaryButton>
          </div>
        </div>
        <div className="lg:col-span-8">
          <MockDashboard />
        </div>
      </div>
    </section>
  );
}

function MockDashboard() {
  const stats = [
    { l: "New Leads", v: "128", d: "+18%" },
    { l: "Follow Ups", v: "43", d: "+12%" },
    { l: "Bookings", v: "27", d: "+8%" },
    { l: "Revenue", v: "$24.6k", d: "+15%" },
  ];
  return (
    <div className="rounded-2xl bg-card border border-sand p-5 sm:p-7 shadow-[0_20px_50px_-26px_rgba(31,31,31,0.25)]">
      <div className="flex items-center justify-between">
        <p className="font-serif font-bold text-foreground">Overview</p>
        <span className="text-xs text-muted-foreground">This Week</span>
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="rounded-xl bg-cream border border-sand p-3">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
            <p className="mt-1 font-serif font-bold text-xl text-foreground">{s.v}</p>
            <p className="text-[10px] text-sage">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-xs font-semibold text-foreground">Lead Activity</p>
        <svg viewBox="0 0 400 110" className="mt-2 w-full h-24">
          <defs>
            <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#C24F34" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#C24F34" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 L40,70 L80,75 L120,55 L160,60 L200,40 L240,50 L280,30 L320,42 L360,22 L400,30 L400,110 L0,110 Z"
            fill="url(#lg)"
          />
          <path
            d="M0,80 L40,70 L80,75 L120,55 L160,60 L200,40 L240,50 L280,30 L320,42 L360,22 L400,30"
            fill="none"
            stroke="#C24F34"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

const GROWTH_INCLUDES = [
  "Custom Website",
  "Workflow Automation",
  "AI Chatbot",
  "Lead Dashboard",
  "Email & SMS Flows",
  "Ongoing Support",
];

function PopularPackage() {
  return (
    <section className="py-20 sm:py-24 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 text-white">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-copper">
            Popular package
          </p>
          <h2 className="mt-3 font-serif font-bold text-3xl sm:text-4xl leading-tight">
            Growth <Accent>Systems</Accent> <br />
            Package
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-md">
            Everything you need to attract, convert, and manage more customers — on autopilot.
          </p>
          <Link
            to="/packages"
            className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline"
          >
            See Package Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-4 text-white">
          <ul className="space-y-3">
            {GROWTH_INCLUDES.map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-sage" strokeWidth={2} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-foreground/40 border border-white/10 p-6 text-white">
            <p className="text-xs text-white/60">Starting at</p>
            <p className="font-serif font-bold text-4xl text-copper mt-1">$2,950</p>
            <p className="text-xs text-white/60">/mo</p>
            <p className="mt-3 text-xs text-white/70 leading-relaxed">
              Custom pricing for your business needs.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-full bg-copper text-copper-foreground text-sm font-medium px-4 py-2.5 hover:bg-copper/90"
            >
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}