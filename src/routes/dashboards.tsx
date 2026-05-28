import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, AlertCircle, BarChart3, Bell, Brain, Briefcase, Building2,
  Calendar, Check, ClipboardList, Clock, DollarSign, FileText, Hammer,
  Inbox, LayoutDashboard, MessagesSquare, Scale, Shield, ShoppingBag,
  Sparkles, Store, TrendingUp, Users, Utensils, Wrench, Home as HomeIcon,
} from "lucide-react";
import { useState } from "react";
import {
  SiteLayout, Section, CopperButton, PrimaryButton, SecondaryButton, Accent, FinalCTA,
} from "@/components/site-layout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboards")({
  head: () => ({
    meta: [
      { title: "Business Intelligence Dashboards — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Custom AI-powered dashboards that connect QuickBooks, Toast, Clio, Jobber, Mindbody and 50+ tools into one clean view of your entire Arizona business.",
      },
      { property: "og:title", content: "Business Intelligence Dashboards — Sonoran Systems & AI" },
      {
        property: "og:description",
        content:
          "Stop logging into five apps every morning. One custom dashboard. Every number that matters. AI insights in plain English.",
      },
    ],
    links: [{ rel: "canonical", href: "/dashboards" }],
  }),
  component: DashboardsPage,
});

const WIDGETS = [
  { icon: DollarSign, label: "Revenue today, this week, this month" },
  { icon: FileText, label: "Open invoices & outstanding payments" },
  { icon: Users, label: "Incoming leads and their status" },
  { icon: Wrench, label: "Jobs scheduled and in progress" },
  { icon: ClipboardList, label: "Team task & workload overview" },
  { icon: Calendar, label: "Appointments booked vs. available" },
  { icon: TrendingUp, label: "Top performing products or services" },
  { icon: MessagesSquare, label: "Customer follow-ups due today" },
  { icon: Brain, label: "AI insight summary in plain English" },
  { icon: Clock, label: "Busiest hours and days of the week" },
  { icon: BarChart3, label: "Revenue trends and comparisons" },
  { icon: Bell, label: "Automated alerts for anything urgent" },
];

const DATA_CATEGORIES: { title: string; icon: React.ComponentType<{ className?: string }>; items: { name: string; note: string }[] }[] = [
  {
    title: "Accounting & Payments",
    icon: DollarSign,
    items: [
      { name: "QuickBooks", note: "Revenue, invoices, expenses, P&L" },
      { name: "Stripe", note: "Payments, subscriptions, revenue" },
      { name: "Square", note: "Sales, inventory, payments" },
    ],
  },
  {
    title: "Restaurants & Food Service",
    icon: Utensils,
    items: [
      { name: "Toast POS", note: "Orders, menu performance, staff" },
      { name: "Square for Restaurants", note: "Sales and menu data" },
      { name: "Clover", note: "Transactions and reporting" },
    ],
  },
  {
    title: "Legal Case Management",
    icon: Scale,
    items: [
      { name: "Clio", note: "Matters, billing, deadlines, pipeline" },
      { name: "MyCase", note: "Case status, time, invoicing" },
      { name: "PracticePanther", note: "Communications, billing" },
      { name: "Filevine", note: "Workflows, documents, tasks" },
      { name: "CosmoLex", note: "Legal accounting, trust accounts" },
    ],
  },
  {
    title: "Contractors & Field Service",
    icon: Hammer,
    items: [
      { name: "Jobber", note: "Jobs, quotes, scheduling" },
      { name: "ServiceTitan", note: "Dispatch, invoicing, techs" },
      { name: "Housecall Pro", note: "Bookings, jobs, follow-ups" },
      { name: "BuilderTrend", note: "Timelines, budgets, schedules" },
    ],
  },
  {
    title: "Salons & Wellness",
    icon: Sparkles,
    items: [
      { name: "Vagaro", note: "Appointments, staff, retention" },
      { name: "Mindbody", note: "Classes, memberships, revenue" },
      { name: "Boulevard", note: "Appointments, staff performance" },
      { name: "Fresha", note: "Bookings and sales data" },
      { name: "Jane App", note: "Appointments, billing, schedules" },
    ],
  },
  {
    title: "Real Estate",
    icon: HomeIcon,
    items: [
      { name: "Follow Up Boss", note: "Leads, pipeline, activity" },
      { name: "kvCORE", note: "Lead tracking, communications" },
      { name: "Dotloop", note: "Transactions, closing pipeline" },
    ],
  },
  {
    title: "Scheduling & Booking",
    icon: Calendar,
    items: [
      { name: "Calendly", note: "Bookings, meeting volume" },
      { name: "Acuity Scheduling", note: "Appointments, cancellations" },
      { name: "Google Calendar", note: "Schedule overview, availability" },
    ],
  },
  {
    title: "Communication & CRM",
    icon: Inbox,
    items: [
      { name: "GoHighLevel", note: "Leads, pipeline, email & SMS" },
      { name: "HubSpot", note: "Contacts, deals, campaigns" },
      { name: "Gmail / Outlook", note: "Inbox volume, responses" },
    ],
  },
  {
    title: "Ecommerce & Retail",
    icon: ShoppingBag,
    items: [
      { name: "Shopify", note: "Orders, top products, inventory" },
      { name: "WooCommerce", note: "Sales, customers, products" },
      { name: "Lightspeed", note: "Retail sales and inventory" },
    ],
  },
];

const AI_FEATURES = [
  {
    icon: Sparkles,
    title: "Daily Business Brief",
    body:
      "Every morning your dashboard generates a plain-English summary of what happened yesterday, what's happening today, and what needs your attention right now. No spreadsheets. No guessing.",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    body:
      "Get notified by SMS or email when something important happens — an overdue invoice, a lead that hasn't been followed up, a job behind schedule, or revenue that drops below your target.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    body:
      "Your dashboard spots patterns you'd never catch manually. Slowest day of the week. Most profitable service. Clients overdue for follow-up. Delivered in plain English, not charts you have to decode.",
  },
];

type IndustryTab = {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  connected: string;
  shows: string[];
  quote: string;
};

const INDUSTRY_TABS: IndustryTab[] = [
  {
    key: "law",
    label: "Law Firms",
    icon: Scale,
    headline: "Law Firm Intelligence Dashboard",
    connected: "Clio or MyCase",
    shows: [
      "Open matters and case status at a glance",
      "Billable hours this week vs. monthly target",
      "Outstanding invoices and trust account balances",
      "Upcoming deadlines flagged in red",
      "Client intake pipeline",
      "Revenue by practice area",
      "AI summary: which matters need attention today",
    ],
    quote: "Stop digging through Clio to find out where things stand. See everything in one view.",
  },
  {
    key: "restaurants",
    label: "Restaurants",
    icon: Utensils,
    headline: "Restaurant Performance Dashboard",
    connected: "Toast or Square",
    shows: [
      "Sales today vs. same day last week",
      "Top selling menu items this week",
      "Busiest hours and slowest hours",
      "Revenue by server or station",
      "Average check size trends",
      "Inventory alerts",
      "AI: 'Your Thursday lunch is consistently slow — consider a promotion'",
    ],
    quote:
      "Know exactly how your restaurant is performing without waiting for end-of-week reports.",
  },
  {
    key: "contractors",
    label: "Contractors",
    icon: Hammer,
    headline: "Contractor Operations Dashboard",
    connected: "Jobber or ServiceTitan + QuickBooks",
    shows: [
      "Jobs scheduled today and this week",
      "Open quotes waiting for approval",
      "Outstanding invoices and total receivables",
      "Revenue this month vs. last month",
      "Team workload and availability",
      "Jobs overdue or at risk",
      "AI: 'You have 4 open quotes totaling $18,000 with no follow-up in 7 days'",
    ],
    quote:
      "Never let a quote go cold or an invoice go unpaid because it fell off your radar.",
  },
  {
    key: "salons",
    label: "Salons & Wellness",
    icon: Sparkles,
    headline: "Salon & Wellness Dashboard",
    connected: "Vagaro, Boulevard, or Mindbody",
    shows: [
      "Appointments today and this week",
      "Revenue vs. last month",
      "Top services by revenue",
      "Staff performance and utilization",
      "Client retention rate",
      "No-show and cancellation trends",
      "AI: 'Tuesday 2–4pm is consistently slow — your slowest block all week'",
    ],
    quote:
      "See your entire schedule, staff, and revenue in one place instead of piecing it together from reports.",
  },
  {
    key: "real-estate",
    label: "Real Estate",
    icon: HomeIcon,
    headline: "Real Estate Pipeline Dashboard",
    connected: "Follow Up Boss + QuickBooks",
    shows: [
      "Active leads by stage",
      "Commission pipeline total",
      "Upcoming appointments",
      "Follow-ups due today",
      "Closed deals this month",
      "Revenue vs. monthly goal",
      "AI: 'You have 6 leads with no contact in over 14 days'",
    ],
    quote:
      "Know exactly where every deal stands and which leads need attention today.",
  },
];

const DASHBOARD_PACKAGES = [
  {
    name: "Starter Dashboard",
    price: "Starting at $1,500",
    tagline: "One data source, one clean view.",
    includes: [
      "Connect 1 data source (QuickBooks, Toast, Clio, Jobber, etc.)",
      "Custom dashboard built in Lovable",
      "Up to 8 data widgets",
      "Mobile-friendly design",
      "Employee login access",
      "AI daily summary",
      "Owner walkthrough and training",
    ],
    cta: "Request Starter Dashboard",
    featured: false,
    badge: null,
  },
  {
    name: "Business Intelligence Dashboard",
    price: "Starting at $2,500",
    tagline: "Multiple sources, complete picture.",
    includes: [
      "Connect up to 3 data sources",
      "Custom dashboard with up to 20 widgets",
      "Role-based employee logins",
      "AI insights and pattern detection",
      "Automated alerts via SMS or email",
      "Mobile-friendly design",
      "Monthly data review call",
      "Owner and staff training",
    ],
    cta: "Request Business Dashboard",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Full Intelligence Suite",
    price: "Starting at $4,500",
    tagline: "Everything connected, AI-powered.",
    includes: [
      "Connect up to 6 data sources",
      "Unlimited widgets and views",
      "Role-based logins for entire team",
      "AI daily business brief",
      "Automated alerts and notifications",
      "Email automation integration",
      "Lead and follow-up tracking",
      "Monthly strategy call",
      "Priority support",
    ],
    cta: "Request Full Suite",
    featured: false,
    badge: null,
  },
];

const HOW_STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    body:
      "We learn what tools you use, what data matters most to you, and what you wish you could see every day.",
  },
  {
    n: "02",
    title: "We Build the Connections",
    body:
      "We connect your existing tools using secure API connections. Your data stays yours — we just make it visible.",
  },
  {
    n: "03",
    title: "We Build Your Dashboard",
    body:
      "We design and build your custom dashboard in Lovable, connected to Supabase, with your branding and the exact views your business needs.",
  },
  {
    n: "04",
    title: "You Take the Wheel",
    body:
      "We walk you and your team through everything, set up your logins, and make sure you're comfortable before we hand it over.",
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

function DashboardsPage() {
  const [tab, setTab] = useState<string>(INDUSTRY_TABS[0].key);
  const active = INDUSTRY_TABS.find((t) => t.key === tab) ?? INDUSTRY_TABS[0];

  return (
    <SiteLayout>
      {/* HERO */}
      <Section className="pt-16 sm:pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-sm font-medium text-copper uppercase tracking-wider">
              Business Intelligence Dashboards
            </p>
            <h1 className="mt-4 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.03]">
              See your entire <Accent>business</Accent> in one place.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We connect your existing tools — QuickBooks, Toast, Clio, Jobber, Mindbody, and more —
              into a single AI-powered dashboard so you always know exactly what's happening in your
              business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Book a Free Consultation</PrimaryButton>
              <SecondaryButton to="/packages">View Packages</SecondaryButton>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl bg-card border border-sand p-6 shadow-[0_4px_8px_rgba(28,28,30,0.04),0_22px_60px_-24px_rgba(28,28,30,0.22)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4 text-copper" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                    Overview
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Today
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { l: "Revenue", v: "$24.6k", d: "+18%" },
                  { l: "New Leads", v: "128", d: "+12%" },
                  { l: "Bookings", v: "27", d: "+8%" },
                  { l: "Follow-Ups", v: "43", d: "+15%" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-cream/70 border border-sand/80 p-4">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </p>
                    <p className="mt-1 font-serif text-2xl text-foreground">{s.v}</p>
                    <p className="text-[11px] text-copper">{s.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-sand bg-cream/40 p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-copper" />
                  AI Daily Brief
                </div>
                <p className="mt-1.5 text-sm text-foreground/85">
                  3 invoices overdue · 6 leads need follow-up · Thursday lunch tracking slow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 1 */}
      <Section className="pt-4">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
              Stop logging into <Accent>five different apps</Accent> every morning.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Most small business owners are running their business blind. Revenue is in QuickBooks.
              Appointments are in their booking system. Leads are in their email. Jobs are in their
              field service app. None of it talks to each other.
            </p>
            <p>
              We connect all of it into one clean, custom dashboard — built specifically for how
              your business works. You log in once and see everything: revenue, leads, jobs,
              appointments, follow-ups, and AI-generated insights that tell you what to pay
              attention to today.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — Widgets grid */}
      <Section className="pt-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">What it shows</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Your whole business, <Accent color="sage">at a glance.</Accent>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WIDGETS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-2xl bg-card border border-sand p-5 shadow-[0_1px_2px_rgba(28,28,30,0.03)]"
            >
              <div className="h-9 w-9 rounded-full bg-copper/10 inline-flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-copper" />
              </div>
              <span className="text-sm text-foreground/85 leading-snug pt-1.5">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 3 — Data sources */}
      <Section className="pt-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">
            Data sources we connect
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            We connect the tools <Accent>you already use.</Accent>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            No need to switch software. We pull your data from wherever it already lives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-2xl bg-card border border-sand p-6 shadow-[0_1px_2px_rgba(28,28,30,0.03),0_10px_30px_-22px_rgba(28,28,30,0.18)]"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="h-8 w-8 rounded-full bg-copper/10 inline-flex items-center justify-center">
                    <Icon className="h-4 w-4 text-copper" />
                  </div>
                  <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/80">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it.name} className="text-sm">
                      <p className="font-medium text-foreground">{it.name}</p>
                      <p className="text-xs text-muted-foreground">{it.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center italic">
          Don't see your tool listed? Ask us. If it has an API, we can almost certainly connect it.
        </p>
      </Section>

      {/* SECTION 4 — AI layer */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">The AI layer</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Your dashboard doesn't just show data — it tells you <Accent>what it means.</Accent>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-sand p-7 shadow-[0_1px_2px_rgba(28,28,30,0.03),0_18px_40px_-22px_rgba(28,28,30,0.18)]"
            >
              <div className="h-11 w-11 rounded-full bg-copper/12 inline-flex items-center justify-center">
                <Icon className="h-5 w-5 text-copper" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{title}</h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5 — Industry tabs */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-8">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">By industry</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Built for <Accent color="sage">your type of business.</Accent>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {INDUSTRY_TABS.map((t) => {
            const Icon = t.icon;
            const isActive = t.key === tab;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors border",
                  isActive
                    ? "bg-copper text-copper-foreground border-copper"
                    : "bg-card text-foreground/75 border-sand hover:text-copper hover:border-copper"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>
        <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10 shadow-[0_1px_2px_rgba(28,28,30,0.03),0_22px_60px_-24px_rgba(28,28,30,0.2)]">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <h3 className="font-serif text-2xl sm:text-3xl">{active.headline}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground/85">Connected to:</span>{" "}
                {active.connected}
              </p>
              <blockquote className="mt-6 border-l-2 border-copper pl-4 italic text-foreground/80">
                "{active.quote}"
              </blockquote>
            </div>
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70 mb-4">
                What it shows
              </p>
              <CheckList items={active.shows} />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6 — Pricing */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Dashboard packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DASHBOARD_PACKAGES.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative rounded-2xl bg-card p-7 flex flex-col",
                p.featured
                  ? "border-2 border-copper shadow-[0_4px_8px_rgba(28,28,30,0.04),0_22px_50px_-22px_rgba(181,101,29,0.4)] md:-translate-y-2"
                  : "border border-sand shadow-[0_1px_2px_rgba(28,28,30,0.03),0_10px_30px_-18px_rgba(28,28,30,0.12)]"
              )}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-xs font-semibold text-copper-foreground uppercase tracking-wider whitespace-nowrap">
                  {p.badge}
                </span>
              )}
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-5 font-serif text-3xl text-copper font-semibold">{p.price}</div>
              <div className="mt-6 flex-1">
                <CheckList items={p.includes} />
              </div>
              <div className="mt-6">
                <CopperButton
                  to="/contact"
                  variant={p.featured ? "filled" : "outlined"}
                  className="w-full"
                >
                  {p.cta}
                </CopperButton>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          All dashboards include ongoing support as part of the AI Support Partner retainer. Ask
          about monthly maintenance pricing.
        </p>
      </Section>

      {/* SECTION 7 — How it works */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">How it works</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">How we build your dashboard</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-card border border-sand p-6 shadow-[0_1px_2px_rgba(28,28,30,0.03)]"
            >
              <p className="font-serif text-3xl text-copper">{s.n}</p>
              <h3 className="mt-3 font-serif text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 8 — Security */}
      <Section className="pt-10">
        <div className="rounded-3xl border border-sand bg-cream/60 p-8 sm:p-10 max-w-4xl mx-auto">
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-full bg-copper/12 inline-flex items-center justify-center shrink-0">
              <Shield className="h-5 w-5 text-copper" />
            </div>
            <div>
              <h3 className="font-serif text-2xl">Your data stays secure.</h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                All data connections use industry-standard OAuth 2.0 authentication — the same
                secure standard used by Google, QuickBooks, and major banks. You authorize the
                connection. We never see your passwords. Your data is stored securely in Supabase
                with row-level security and role-based access controls.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA
        headline="Ready to see your business in one place?"
        sub="Book a free consultation and we'll show you exactly what your dashboard could look like."
      />
    </SiteLayout>
  );
}