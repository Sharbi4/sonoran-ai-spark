import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import {
  Monitor,
  Workflow,
  Bot,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Inbox,
  ListChecks,
  Repeat,
  Eye,
  Scale,
  HardHat,
  Utensils,
  Flower2,
  Building2,
  Briefcase,
  MapPin,
} from "lucide-react";
import {
  SiteLayout,
  Section,
  SectionLabel,
  PrimaryButton,
  SecondaryButton,
  Accent,
  FinalCTA,
} from "@/components/site-layout";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  ParallaxLayer,
  HoverLift,
} from "@/components/motion/primitives";
import { useState, useEffect } from "react";
import { StartHereCards } from "@/components/start-here-cards";
import { IntegrationsMarquee } from "@/components/integrations-marquee";
import { WhoThisIsFor } from "@/components/who-this-is-for";
import { FAQ } from "@/components/faq";

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

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <StartHereCards />
      <ServicesPreview />
      <WorkingSystem />
      <DashboardPreview />
      <IntegrationsMarquee />
      <PackagesPreview />
      <Industries />
      <WhoThisIsFor />
      <FounderLocal />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bandsY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120]);
  const cardsY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);

  return (
    <section ref={ref} className="pt-10 sm:pt-14 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-cream border border-sand/70 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_30px_80px_-50px_rgba(31,31,31,0.25)]">
          <div aria-hidden className="absolute inset-0 satin-bands opacity-50 pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-6 p-8 sm:p-12 lg:p-16">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <Reveal>
                <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-copper">
                  Sonoran Systems &amp; AI · Tucson, Arizona
                </p>
              </Reveal>
              <h1 className="mt-6 font-serif text-[clamp(2.6rem,6.2vw,5.2rem)] leading-[1.02] tracking-[-0.03em] text-foreground text-balance">
                <HeroLine delay={0.1}>AI <Accent>systems</Accent> for</HeroLine>
                <HeroLine delay={0.25}><Accent color="sage">businesses</Accent> that are</HeroLine>
                <HeroLine delay={0.4}>ready to move <Accent>smarter</Accent>.</HeroLine>
              </h1>
              <Reveal delay={0.55}>
                <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Websites, automation, dashboards, and AI tools designed for Arizona
                  businesses. Modern solutions that save time, capture leads, and help
                  you grow with confidence.
                </p>
              </Reveal>
              <Reveal delay={0.7}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
                  <SecondaryButton to="/services">View Services</SecondaryButton>
                </div>
              </Reveal>
              <Reveal delay={0.85}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Built for Arizona businesses
                  </span>
                  <span className="inline-flex items-center gap-2 text-foreground/70">
                    <MapPin className="h-3.5 w-3.5 text-copper" />
                    Tucson · Phoenix · Scottsdale · Flagstaff
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 relative min-h-[460px] sm:min-h-[560px]">
              <motion.div style={{ y: bandsY }} className="absolute inset-0">
                <DiagonalBandsArt />
              </motion.div>
              <motion.div style={{ y: cardsY }} className="relative h-full">
                <FloatingCards />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="block overflow-hidden"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 18, delay }}
    >
      {children}
    </motion.span>
  );
}

function DiagonalBandsArt() {
  const bands = [
    { c: "#C24F34", top: "6%", op: 0.95 },
    { c: "#E07A6B", top: "22%", op: 0.9 },
    { c: "#E9DFCF", top: "40%", op: 1 },
    { c: "#8BA395", top: "58%", op: 0.9 },
    { c: "#1F1F1F", top: "76%", op: 0.92 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {bands.map((b, i) => (
        <motion.div
          key={i}
          className="absolute -left-16 -right-16 h-14 rounded-full"
          style={{ backgroundColor: b.c, top: b.top, opacity: b.op, rotate: "-14deg" }}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: b.op }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 + i * 0.08 }}
        />
      ))}
      {/* connecting nodes */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full text-foreground/30"
        viewBox="0 0 400 600"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M60 90 C 140 180, 220 260, 310 340 S 370 500, 320 560"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="2 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.2, delay: 0.6 }}
        />
      </svg>
    </div>
  );
}

function FloatingCards() {
  return (
    <div className="relative h-full">
      <FloatCard
        className="left-[6%] top-[8%] w-[78%] sm:w-[68%]"
        delay={0.4}
        float={4}
      >
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-xl bg-copper/10 flex items-center justify-center text-copper">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">AI Assistant</p>
            <p className="mt-1 text-sm text-foreground/85 leading-snug">
              Here's your lead summary and next steps.
            </p>
            <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-copper">
              View Leads <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        className="left-[2%] top-[44%] w-[64%]"
        delay={0.6}
        float={-3}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Workflow</p>
            <p className="mt-1 text-sm font-medium text-foreground">Client Follow-Up</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium text-sage">Active</span>
            <span className="relative inline-block h-5 w-9 rounded-full bg-sage/30">
              <span className="absolute top-0.5 right-0.5 h-4 w-4 rounded-full bg-sage" />
            </span>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        className="right-[2%] top-[60%] w-[70%]"
        delay={0.8}
        float={5}
      >
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Daily Summary</p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <Metric label="New Leads" value="23" />
          <Metric label="Booked" value="7" color="sage" />
          <Metric label="Follow Ups" value="12" color="rose" />
        </div>
      </FloatCard>
    </div>
  );
}

function Metric({ label, value, color = "copper" }: { label: string; value: string; color?: "copper" | "sage" | "rose" }) {
  const c = color === "sage" ? "text-sage" : color === "rose" ? "text-rose" : "text-copper";
  return (
    <div>
      <p className={`font-serif text-xl ${c}`}>{value}</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
    </div>
  );
}

function FloatCard({
  children,
  className,
  delay = 0,
  float = 4,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  float?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute ${className} rounded-2xl glass-card p-4 sm:p-5`}
      initial={{ opacity: 0, y: 20 }}
      animate={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, y: [0, float, 0] }
      }
      transition={
        reduce
          ? { duration: 0.4, delay }
          : {
              opacity: { duration: 0.6, delay },
              y: { duration: 6 + Math.abs(float), repeat: Infinity, ease: "easeInOut", delay },
            }
      }
    >
      {children}
    </motion.div>
  );
}

/* ---------------- SERVICES PREVIEW ---------------- */

const SERVICES = [
  { icon: Monitor, title: "Websites", body: "Modern, fast, and built to convert. Professional websites designed to capture leads, book appointments, and reflect your brand." },
  { icon: Workflow, title: "Workflow Automation", body: "Save time with smart automations that handle intake, follow-up, reminders, and repetitive tasks." },
  { icon: Bot, title: "AI Chatbots", body: "24/7 AI assistants that answer questions, qualify leads, and book more appointments." },
  { icon: BarChart3, title: "Dashboards", body: "See what matters in real time with custom dashboards that help you make smarter calls." },
];

function ServicesPreview() {
  return (
    <Section>
      <Reveal><SectionLabel>What we build</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground max-w-2xl text-balance">
          Systems that work <Accent>together</Accent>.
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          We combine websites, automation, AI tools, and connected dashboards into one
          complete system for your business.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s) => (
          <StaggerItem key={s.title}>
            <HoverLift>
              <div className="group relative h-full rounded-2xl glass-card p-7 transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(194,79,52,0.35)]">
                <div className="h-11 w-11 rounded-xl bg-sage/15 text-sage flex items-center justify-center">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-copper"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

/* ---------------- WORKING SYSTEM (STICKY) ---------------- */

const STEPS = [
  { n: "01", icon: Inbox, title: "Capture the lead", body: "Forms, landing pages, and chat tools collect the right information." },
  { n: "02", icon: Repeat, title: "Route the request", body: "Leads are sent to your CRM, inbox, calendar, or dashboard automatically." },
  { n: "03", icon: ListChecks, title: "Follow up fast", body: "Automated email and SMS flows help every inquiry get a response." },
  { n: "04", icon: Sparkles, title: "Summarize the work", body: "AI summaries show what needs attention without digging through apps." },
  { n: "05", icon: Eye, title: "See the business clearly", body: "Dashboards bring leads, revenue, jobs, and follow-ups into one view." },
];

function WorkingSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const tint = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FBF7F2", "#F4ECDC", "#EBE9E0"],
  );

  return (
    <motion.section ref={ref} style={{ backgroundColor: tint }} className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal><SectionLabel>How it works</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
                Not just a website. A working <Accent>system</Accent>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-muted-foreground max-w-md">
                Most websites just sit there. We build websites connected to forms,
                follow-up, calendars, dashboards, and AI assistants — so your business
                keeps moving.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 hidden lg:block"><PrimaryButton to="/services">See How It Connects</PrimaryButton></div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-copper/40 via-sage/30 to-transparent hidden sm:block" />
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <StepCard key={s.n} step={s} index={i} />
            ))}
          </div>
          <div className="mt-8 lg:hidden"><PrimaryButton to="/services">See How It Connects</PrimaryButton></div>
        </div>
      </div>
    </motion.section>
  );
}

function StepCard({ step, index }: { step: typeof STEPS[number]; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ type: "spring", stiffness: 110, damping: 22, delay: index * 0.04 }}
      className="relative pl-0 sm:pl-20"
    >
      <div className="hidden sm:flex absolute left-0 top-6 h-14 w-14 rounded-2xl glass-card items-center justify-center text-copper">
        <step.icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div className="rounded-2xl glass-card p-7">
        <div className="flex items-start gap-4">
          <div className="sm:hidden h-11 w-11 rounded-xl bg-sage/15 text-sage flex items-center justify-center shrink-0">
            <step.icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.22em] text-copper">{step.n}</span>
              <span className="h-px flex-1 bg-sand/80" />
            </div>
            <h3 className="mt-3 font-serif text-2xl text-foreground">{step.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{step.body}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- DASHBOARD PREVIEW ---------------- */

function DashboardPreview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal><SectionLabel>Real data. Real time.</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
              See your business at a <Accent color="sage">glance</Accent>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Custom dashboards bring your leads, follow-ups, bookings, revenue, and
              customer activity into one beautiful, easy-to-read view.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8"><PrimaryButton to="/dashboards">View Dashboard Options</PrimaryButton></div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <DashboardMock />
        </div>
      </div>
    </Section>
  );
}

function DashboardMock() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ type: "spring", stiffness: 80, damping: 22 }}
      className="relative"
    >
      <div className="rounded-3xl glass-card overflow-hidden shadow-[0_40px_120px_-40px_rgba(31,31,31,0.3)]">
        <div className="flex">
          <div className="hidden sm:flex flex-col gap-1 w-44 p-5 border-r border-sand/60 bg-cream/40">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3">Workspace</p>
            {["Overview", "Leads", "Bookings", "Revenue", "AI Insights", "Team"].map((l, i) => (
              <div
                key={l}
                className={`text-sm px-3 py-2 rounded-lg ${i === 0 ? "bg-copper/10 text-copper font-medium" : "text-foreground/70"}`}
              >
                {l}
              </div>
            ))}
          </div>
          <div className="flex-1 p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">Overview</p>
              <span className="text-[10px] text-sage inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" /> Live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <DashMetric label="New Leads" target={128} active={inView} />
              <DashMetric label="Follow Ups" target={43} active={inView} color="sage" />
              <DashMetric label="Bookings" target={27} active={inView} color="rose" />
              <DashMetric label="Revenue" target={24.6} active={inView} suffix="k" prefix="$" />
            </div>
            <div className="mt-6 rounded-2xl bg-cream/60 border border-sand/60 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-foreground/80">Leads · 30 days</p>
                <p className="text-[10px] text-muted-foreground">Auto-updated</p>
              </div>
              <svg viewBox="0 0 400 120" className="mt-3 w-full h-28">
                <defs>
                  <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C24F34" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C24F34" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 90 L40 78 L80 84 L120 60 L160 64 L200 42 L240 50 L280 30 L320 38 L360 20 L400 26 L400 120 L0 120 Z"
                  fill="url(#lg)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.4 }}
                />
                <motion.path
                  d="M0 90 L40 78 L80 84 L120 60 L160 64 L200 42 L240 50 L280 30 L320 38 L360 20 L400 26"
                  stroke="#C24F34"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-cream/60 border border-sand/60 p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Top Sources</p>
                <ul className="mt-2.5 space-y-1.5 text-xs text-foreground/80">
                  <li className="flex justify-between"><span>Google Search</span><span className="text-copper">52%</span></li>
                  <li className="flex justify-between"><span>Referral</span><span className="text-sage">23%</span></li>
                  <li className="flex justify-between"><span>Direct</span><span className="text-rose">14%</span></li>
                </ul>
              </div>
              <div className="rounded-xl bg-cream/60 border border-sand/60 p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Recent Activity</p>
                <ul className="mt-2.5 space-y-1.5 text-xs text-foreground/80">
                  <li className="flex justify-between"><span>New lead · Riley K.</span><span className="text-muted-foreground">2m</span></li>
                  <li className="flex justify-between"><span>Booking · Mesa Law</span><span className="text-muted-foreground">14m</span></li>
                  <li className="flex justify-between"><span>AI summary ready</span><span className="text-muted-foreground">1h</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParallaxLayer className="absolute -right-4 -top-6 hidden md:block" speed={0.4}>
        <div className="rounded-2xl glass-card p-4 w-52">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">AI Summary</p>
          <p className="mt-2 text-sm text-foreground/85">3 leads need a reply today.</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="absolute -left-6 -bottom-8 hidden md:block" speed={0.6}>
        <div className="rounded-2xl glass-card p-4 w-48">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Booking</p>
          <p className="mt-1.5 text-sm font-medium text-foreground">Thu · 2:30pm</p>
          <p className="text-xs text-muted-foreground">Mesa Law Group</p>
        </div>
      </ParallaxLayer>
    </motion.div>
  );
}

function DashMetric({
  label,
  target,
  active,
  color = "copper",
  prefix = "",
  suffix = "",
}: {
  label: string;
  target: number;
  active: boolean;
  color?: "copper" | "sage" | "rose";
  prefix?: string;
  suffix?: string;
}) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  const c = color === "sage" ? "text-sage" : color === "rose" ? "text-rose" : "text-copper";
  const isFloat = !Number.isInteger(target);
  return (
    <div className="rounded-xl bg-cream/60 border border-sand/60 p-3.5">
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className={`mt-1.5 font-serif text-2xl ${c}`}>{prefix}{isFloat ? v.toFixed(1) : Math.round(v)}{suffix}</p>
    </div>
  );
}

/* ---------------- PACKAGES PREVIEW (DARK) ---------------- */

const GROWTH_ITEMS = [
  "Custom Website",
  "Workflow Automation",
  "AI Chatbot",
  "Lead Dashboard",
  "Email & SMS Flows",
  "Ongoing Support",
];

function PackagesPreview() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      <div aria-hidden className="absolute inset-0 opacity-30 satin-bands pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <Reveal><SectionLabel color="cream">Popular Package</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-cream text-balance">
              Growth <span className="text-copper">Systems</span> Package
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-cream/75 max-w-lg">
              Everything you need to attract, convert, and manage more customers — on
              autopilot.
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid sm:grid-cols-2 gap-3">
            {GROWTH_ITEMS.map((i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 text-cream/90">
                  <CheckCircle2 className="h-5 w-5 text-sage shrink-0" />
                  <span className="text-sm">{i}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <div className="rounded-3xl glass-dark p-8 sm:p-10">
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-cream/60">
                Starting at
              </p>
              <p className="mt-3 font-serif text-6xl text-cream">
                $2,950
              </p>
              <p className="mt-3 text-sm text-cream/65 max-w-sm">
                Custom pricing for your business needs. We tailor the system to your
                team, tools, and goals.
              </p>
              <div className="mt-8 h-px bg-cream/10" />
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors"
                >
                  Let's Talk <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
                >
                  All Packages <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */

const INDUSTRIES = [
  { icon: Scale, title: "Law Firms", body: "Case dashboards, deadline alerts, client intake, and email triage." },
  { icon: HardHat, title: "Contractors", body: "Quote follow-up, job tracking, invoice alerts, and customer communication." },
  { icon: Utensils, title: "Restaurants & Food", body: "Sales dashboards, booking flows, customer follow-up, and team visibility." },
  { icon: Flower2, title: "Salons & Wellness", body: "Booking, reminders, client retention, and automated follow-up." },
  { icon: Building2, title: "Real Estate", body: "Lead routing, follow-up sequences, pipeline dashboards, and closing visibility." },
  { icon: Briefcase, title: "Consultants & Coaches", body: "Booking, intake, email automation, lead nurture, and client portals." },
];

function Industries() {
  return (
    <Section>
      <Reveal><SectionLabel>Built for Arizona businesses</SectionLabel></Reveal>
      <div className="mt-4 grid lg:grid-cols-12 gap-8 items-end">
        <Reveal delay={0.1} as="div" className="lg:col-span-7">
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground text-balance">
            AI systems for the way your business <Accent>actually works</Accent>.
          </h2>
        </Reveal>
        <Reveal delay={0.2} as="div" className="lg:col-span-5">
          <p className="text-lg text-muted-foreground">
            Different businesses run on different tools. We build systems around the way
            your work already happens.
          </p>
        </Reveal>
      </div>

      <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {INDUSTRIES.map((s) => (
          <StaggerItem key={s.title}>
            <HoverLift>
              <div className="group h-full rounded-2xl bg-card border border-sand/70 p-7 transition-all hover:border-copper/40 hover:shadow-[0_30px_60px_-30px_rgba(194,79,52,0.3)]">
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-sand/70 text-foreground flex items-center justify-center group-hover:bg-copper/15 group-hover:text-copper transition-colors">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

/* ---------------- FOUNDER / LOCAL ---------------- */

function FounderLocal() {
  return (
    <Section className="!pt-0">
      <div className="relative overflow-hidden rounded-[2rem] bg-card border border-sand/70 p-10 sm:p-14 lg:p-20">
        <div aria-hidden className="absolute inset-0 satin-bands opacity-40 pointer-events-none" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal><SectionLabel>Local. Practical. Human.</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
                Built in <Accent>Tucson</Accent> for businesses ready to modernize.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
                Sonoran Systems &amp; AI helps local businesses use practical AI, clean
                design, and connected systems to work smarter. We focus on tools that
                actually make your business easier to run — not complicated tech for the
                sake of tech.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8"><PrimaryButton to="/about">Learn About Sonoran</PrimaryButton></div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-2xl glass-card p-7">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-copper" />
                  <p className="font-serif text-xl text-foreground">Tucson, Arizona</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Serving small businesses across Tucson, Phoenix, Scottsdale, Flagstaff,
                  and the rest of the state. Phone consultations, on-site visits in
                  Southern Arizona, and remote setup statewide.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-sand/50 px-3 py-2 text-foreground/80">Phone consults</div>
                  <div className="rounded-lg bg-sand/50 px-3 py-2 text-foreground/80">On-site (Tucson)</div>
                  <div className="rounded-lg bg-sand/50 px-3 py-2 text-foreground/80">Remote setup</div>
                  <div className="rounded-lg bg-sand/50 px-3 py-2 text-foreground/80">Monthly support</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}