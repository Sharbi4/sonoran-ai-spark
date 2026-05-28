import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scale, Utensils, HardHat, TrendingUp, Clock, Users, DollarSign,
  ArrowRight, CheckCircle2, BarChart3, Mail, Bot, Workflow,
  Star, Quote, ChevronDown, ChevronUp, Monitor, Inbox, FileText,
} from "lucide-react";
import { SiteLayout, Section, FinalCTA, Accent, PrimaryButton, SecondaryButton } from "@/components/site-layout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "AI Case Studies | Arizona Business Results — Sonoran Systems & AI | Tucson AZ" },
      {
        name: "description",
        content:
          "Real AI consulting results from Arizona businesses. See how Tucson, Phoenix & Flagstaff companies use AI automation, dashboards & process optimization to grow.",
      },
      { property: "og:title", content: "AI Case Studies — Sonoran Systems & AI | Tucson AZ" },
      { property: "og:description", content: "Real results from Arizona businesses using AI automation, dashboards & process excellence." },
      { property: "og:url", content: "https://sonoransystemsai.com/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://sonoransystemsai.com/case-studies" }],
  }),
  component: CaseStudies,
});

type CaseStudy = {
  id: string;
  industry: string;
  icon: typeof Scale;
  company: string;
  location: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string[];
  results: { label: string; before: string; after: string; icon: typeof TrendingUp }[];
  stats: { value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string };
  tools: string[];
  timeline: string;
  services: string[];
  mockDashboard: DashboardWidget[];
};

type DashboardWidget = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "desert-ridge-law",
    industry: "Legal",
    icon: Scale,
    company: "Desert Ridge Legal Group",
    location: "Phoenix, AZ",
    headline: "How a Phoenix law firm cut intake time by 74% with AI email triage",
    summary: "Desert Ridge Legal Group was drowning in unorganized email — missing potential clients and wasting paralegal hours on manual sorting. We built an AI-powered intake system that triages every inquiry, auto-responds to prospects, and routes qualified leads directly to attorneys.",
    challenge: "The firm received 200+ emails daily across three practice areas. Paralegals spent 3+ hours each morning sorting inquiries, and 40% of new client emails weren't responded to within 24 hours. They were losing an estimated $15,000/month in missed consultations.",
    solution: [
      "Deployed AI email classification trained on 18 months of firm correspondence",
      "Built automated intake forms with conditional logic for each practice area",
      "Created instant AI-drafted responses personalized to inquiry type",
      "Set up escalation workflows — urgent matters flagged to attorneys in real-time",
      "Integrated with Clio for automatic contact creation and matter opening",
      "Built a real-time intake dashboard showing pipeline health and response metrics",
    ],
    results: [
      { label: "Intake Processing Time", before: "3.2 hrs/day", after: "48 min/day", icon: Clock },
      { label: "Lead Response Time", before: "18 hours avg", after: "4 minutes avg", icon: Mail },
      { label: "Missed Leads", before: "40%", after: "2%", icon: Users },
      { label: "Monthly Revenue Impact", before: "Baseline", after: "+$22,000/mo", icon: DollarSign },
    ],
    stats: [
      { value: "74%", label: "Faster Intake" },
      { value: "4 min", label: "Avg Response" },
      { value: "$22K", label: "Revenue Gain/Mo" },
      { value: "98%", label: "Lead Capture Rate" },
    ],
    testimonial: {
      quote: "We went from losing clients in our inbox to having a system that responds faster than our competitors. The dashboard alone changed how we run the firm — we can see exactly where every lead is in the pipeline.",
      name: "Michael R.",
      role: "Managing Partner, Desert Ridge Legal Group",
    },
    tools: ["Gmail", "Clio", "Zapier", "Supabase", "OpenAI"],
    timeline: "4 weeks",
    services: ["AI Email Triage", "Workflow Automation", "Business Dashboard", "Lead Capture"],
    mockDashboard: [
      { label: "New Leads Today", value: "12", change: "+33%", positive: true },
      { label: "Avg Response Time", value: "4 min", change: "-96%", positive: true },
      { label: "Consultations Booked", value: "8", change: "+62%", positive: true },
      { label: "Revenue Pipeline", value: "$147K", change: "+28%", positive: true },
    ],
  },
  {
    id: "copper-canyon-grill",
    industry: "Restaurant",
    icon: Utensils,
    company: "Copper Canyon Grill & Cantina",
    location: "Tucson, AZ",
    headline: "A Tucson restaurant went from scattered data to a single AI dashboard — and grew revenue 31%",
    summary: "Copper Canyon was running on gut feel — no visibility into daily performance, inconsistent staff scheduling, and zero follow-up with catering leads. We connected their POS, built a real-time dashboard, and automated their entire catering pipeline.",
    challenge: "The owner was logging into Toast, 7shifts, Yelp, Google Business, and QuickBooks every morning just to understand yesterday's numbers. Catering inquiries came in via email, DMs, and phone — with no tracking. They estimated losing $8K/month in forgotten catering leads alone.",
    solution: [
      "Connected Toast POS, 7shifts, QuickBooks, and Google Business into a unified dashboard",
      "Built daily P&L view with AI-generated insights (e.g., 'Tuesday lunch dipped 18% — consider a promo')",
      "Created automated catering inquiry pipeline with instant confirmation and follow-up sequences",
      "Set up review monitoring with AI-drafted response suggestions for Google and Yelp",
      "Automated weekly staff performance reports with labor cost analysis",
      "Built a mobile-friendly owner dashboard accessible from anywhere",
    ],
    results: [
      { label: "Daily Reporting Time", before: "45 min/day", after: "0 min (auto)", icon: Clock },
      { label: "Catering Revenue", before: "$6,200/mo", after: "$14,800/mo", icon: DollarSign },
      { label: "Review Response Rate", before: "15%", after: "95%", icon: Star },
      { label: "Monthly Revenue", before: "$82K/mo", after: "$107K/mo", icon: TrendingUp },
    ],
    stats: [
      { value: "31%", label: "Revenue Growth" },
      { value: "139%", label: "Catering Revenue Up" },
      { value: "0 min", label: "Manual Reporting" },
      { value: "95%", label: "Reviews Answered" },
    ],
    testimonial: {
      quote: "I used to spend my first hour every morning just trying to figure out how yesterday went. Now I open one screen and I know everything — sales, labor, reviews, catering pipeline. It completely changed how I run this place.",
      name: "Maria L.",
      role: "Owner, Copper Canyon Grill & Cantina",
    },
    tools: ["Toast POS", "7shifts", "QuickBooks", "Google Business", "Yelp", "Supabase"],
    timeline: "5 weeks",
    services: ["Business Dashboard", "Workflow Automation", "AI Chatbot", "Email Automation"],
    mockDashboard: [
      { label: "Yesterday's Revenue", value: "$4,280", change: "+12%", positive: true },
      { label: "Labor Cost Ratio", value: "28.4%", change: "-3.1%", positive: true },
      { label: "Catering Pipeline", value: "$9,200", change: "+47%", positive: true },
      { label: "Google Rating", value: "4.8", change: "+0.3", positive: true },
    ],
  },
  {
    id: "summit-builders",
    industry: "Contracting",
    icon: HardHat,
    company: "Summit Builders AZ",
    location: "Flagstaff, AZ",
    headline: "A Flagstaff contractor automated quote follow-up and booked 43% more jobs",
    summary: "Summit Builders was great at the work but terrible at the follow-up. Quotes went out and disappeared into the void — no tracking, no reminders, no system. We built an end-to-end pipeline that tracks every quote and follows up automatically until the job is won or lost.",
    challenge: "The owner sent 30–40 quotes per month but had no idea which ones were pending, which needed follow-up, or which had gone cold. He estimated that 60% of quotes never got a single follow-up. His close rate was 22% — well below the 35% industry average.",
    solution: [
      "Built a centralized quote pipeline synced with Jobber and QuickBooks",
      "Created automated follow-up sequences — Day 1, Day 3, Day 7, Day 14 with personalized AI-written emails",
      "Set up a real-time job board dashboard showing every quote's status and probability to close",
      "Added AI lead scoring based on project size, response speed, and engagement",
      "Built automated invoice generation and payment reminders post-job completion",
      "Created a weekly pipeline report auto-sent every Monday morning",
    ],
    results: [
      { label: "Quote Follow-Up Rate", before: "40%", after: "100%", icon: Mail },
      { label: "Close Rate", before: "22%", after: "38%", icon: TrendingUp },
      { label: "Jobs Booked/Month", before: "7", after: "14", icon: FileText },
      { label: "Monthly Revenue", before: "$45K/mo", after: "$78K/mo", icon: DollarSign },
    ],
    stats: [
      { value: "43%", label: "More Jobs Booked" },
      { value: "100%", label: "Follow-Up Rate" },
      { value: "73%", label: "Revenue Growth" },
      { value: "38%", label: "Close Rate" },
    ],
    testimonial: {
      quote: "I knew I was leaving money on the table but I didn't have time to chase every quote. Now the system does it for me. I went from 7 jobs a month to 14 without hiring anyone. The Monday pipeline report alone is worth the investment.",
      name: "Jake T.",
      role: "Owner, Summit Builders AZ",
    },
    tools: ["Jobber", "QuickBooks", "Gmail", "Zapier", "Supabase"],
    timeline: "3 weeks",
    services: ["Workflow Automation", "Email Automation", "Business Dashboard", "Lead Capture"],
    mockDashboard: [
      { label: "Active Quotes", value: "18", change: "+6", positive: true },
      { label: "Close Rate", value: "38%", change: "+16%", positive: true },
      { label: "Pipeline Value", value: "$142K", change: "+58%", positive: true },
      { label: "Avg Days to Close", value: "5.2", change: "-4.8", positive: true },
    ],
  },
];

const AGGREGATE_STATS = [
  { value: "49%", label: "Avg Revenue Increase" },
  { value: "74%", label: "Avg Time Saved" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "4 wks", label: "Avg Time to Launch" },
];

function CaseStudies() {
  return (
    <SiteLayout>
      {/* Hero */}
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Case Studies</p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            Real <Accent>results</Accent> from real Arizona <Accent color="sage">businesses</Accent>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            See how businesses in Tucson, Phoenix, and Flagstaff are using AI automation,
            intelligent dashboards, and process optimization to grow revenue, save time,
            and operate with confidence.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {AGGREGATE_STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-card border border-sand p-5 text-center">
              <p className="font-serif text-3xl font-bold text-copper">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      {CASE_STUDIES.map((cs, idx) => (
        <CaseStudySection key={cs.id} study={cs} index={idx} />
      ))}

      {/* Industries We Serve */}
      <Section className="bg-card/50 border-y border-sand">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Industries</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">We build systems for businesses like yours</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Law Firms", "Restaurants & Hospitality", "General Contractors",
            "Real Estate Agencies", "Salons & Wellness", "Consultants & Coaches",
          ].map((ind) => (
            <div key={ind} className="flex items-center gap-3 rounded-xl bg-card border border-sand px-5 py-4">
              <CheckCircle2 className="h-4 w-4 text-copper flex-shrink-0" />
              <span className="text-sm font-medium">{ind}</span>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA
        headline="Ready to become our next success story?"
        sub="Book a $250 Strategy Call and we'll map out exactly how AI can transform your business."
      />
    </SiteLayout>
  );
}

/* ────────────────── Individual Case Study Section ────────────────── */

function CaseStudySection({ study: cs, index }: { study: CaseStudy; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const even = index % 2 === 0;

  return (
    <Section className={cn(even ? "" : "bg-card/30")}>
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-copper uppercase tracking-wider bg-copper/10 px-3 py-1 rounded-full">
          <cs.icon className="h-3.5 w-3.5" /> {cs.industry}
        </span>
        <span className="text-xs text-muted-foreground">{cs.location}</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-4xl">
        {cs.headline}
      </h2>

      <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
        {cs.summary}
      </p>

      {/* Key Stats Banner */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {cs.stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-card border border-sand p-4 text-center">
            <p className="font-serif text-2xl font-bold text-copper">{s.value}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Mock Dashboard */}
      <div className="mt-8 rounded-2xl bg-card border border-sand overflow-hidden shadow-[0_4px_8px_rgba(28,28,30,0.04),0_22px_60px_-24px_rgba(28,28,30,0.18)]">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-sand bg-sand/30">
          <BarChart3 className="h-4 w-4 text-copper" />
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
            {cs.company} — Live Dashboard
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-sage animate-pulse" />
            <span className="text-[10px] text-muted-foreground">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand">
          {cs.mockDashboard.map((w) => (
            <div key={w.label} className="p-5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{w.label}</p>
              <p className="mt-1 font-serif text-2xl font-bold text-foreground">{w.value}</p>
              <p className={cn("mt-1 text-xs font-medium", w.positive ? "text-sage" : "text-rose")}>
                {w.change} vs last period
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Details */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-copper/80 transition-colors"
      >
        {expanded ? "Hide details" : "View full case study"}
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {expanded && (
        <div className="mt-6 space-y-10 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-card border border-sand p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose mb-3">The Challenge</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
            </div>
            <div className="rounded-2xl bg-card border border-sand p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-sage mb-3">Our Solution</p>
              <ul className="space-y-2.5">
                {cs.solution.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-sage flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Before → After Results */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-copper mb-4">Before vs. After</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-xl bg-card border border-sand p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <r.icon className="h-4 w-4 text-copper" />
                    <span className="text-sm font-medium">{r.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Before</p>
                      <p className="mt-0.5 text-lg font-serif text-foreground/60 line-through decoration-rose/40">{r.before}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-copper flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">After</p>
                      <p className="mt-0.5 text-lg font-serif font-bold text-sage">{r.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="rounded-2xl bg-gradient-to-br from-copper/5 via-cream to-sage/5 border border-sand p-8 sm:p-10">
            <Quote className="h-8 w-8 text-copper/30 mb-4" />
            <blockquote className="font-serif text-lg sm:text-xl leading-relaxed text-foreground italic">
              "{cs.testimonial.quote}"
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-copper/15 flex items-center justify-center">
                <span className="text-sm font-bold text-copper">{cs.testimonial.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{cs.testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{cs.testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-card border border-sand p-5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
              <p className="text-sm font-medium">{cs.timeline}</p>
            </div>
            <div className="rounded-xl bg-card border border-sand p-5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Tools Integrated</p>
              <p className="text-sm font-medium">{cs.tools.join(", ")}</p>
            </div>
            <div className="rounded-xl bg-card border border-sand p-5">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Services Delivered</p>
              <p className="text-sm font-medium">{cs.services.join(", ")}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}