import { createFileRoute } from "@tanstack/react-router";
import {
  Bell, Check, FileText, Inbox, Mail, MessageSquare, PenLine, Send,
  Slack, Sparkles, Timer, Workflow, Zap,
} from "lucide-react";
import {
  SiteLayout, Section, CopperButton, PrimaryButton, SecondaryButton, Accent, FinalCTA,
} from "@/components/site-layout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/email-automation")({
  head: () => ({
    meta: [
      { title: "Email Automation — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "AI-powered email systems that read incoming messages, draft replies in your voice, and follow up automatically — so no lead falls through the cracks.",
      },
      { property: "og:title", content: "Email Automation — Sonoran Systems & AI" },
      {
        property: "og:description",
        content:
          "Never miss a lead or forget a follow-up again. AI triage, draft replies, and automated sequences for Gmail and Outlook.",
      },
    ],
    links: [{ rel: "canonical", href: "/email-automation" }],
  }),
  component: EmailAutomationPage,
});

const FEATURE_CARDS = [
  {
    icon: Inbox,
    title: "Email Triage & Classification",
    body:
      "Every incoming email is automatically read, classified, and sorted before you open it. New leads get flagged immediately. Urgent messages surface to the top. Vendor emails go to their folder. Spam gets filtered out. You open your inbox and know exactly what needs attention — without reading every message.",
  },
  {
    icon: PenLine,
    title: "AI Draft Replies",
    body:
      "For every important email, AI drafts a reply in your voice before you even open the message. The draft pulls context from your CRM — who this person is, what they've asked before, where they are in your pipeline. Review the draft, make any edits, and hit send. What used to take 10 minutes takes 30 seconds.",
  },
  {
    icon: Workflow,
    title: "Automated Follow-Up Sequences",
    body:
      "New lead comes in. AI sends an immediate acknowledgment. Follow-up goes out on Day 3 if no reply. Another on Day 7. Lead gets flagged for personal outreach on Day 10. The whole sequence runs automatically. If they reply at any point, the sequence pauses and you're notified instantly.",
  },
];

const HOW_STEPS = [
  { n: "01", title: "Email Arrives", body: "New email hits your Gmail or Outlook inbox.", icon: Inbox },
  { n: "02", title: "AI Reads & Classifies", body: "The system identifies the sender type, urgency level, and required action.", icon: Sparkles },
  { n: "03", title: "Draft or Route", body: "AI drafts a reply in your voice, files the email, and alerts you if it's urgent.", icon: PenLine },
  { n: "04", title: "You Review & Send", body: "A clean inbox with drafts ready to approve. One click to send. Nothing gets missed.", icon: Send },
];

type Tool = { name: string; icon: React.ComponentType<{ className?: string }> };
const CONNECTIONS: { title: string; items: Tool[] }[] = [
  {
    title: "Email Platforms",
    items: [
      { name: "Gmail", icon: Mail },
      { name: "Outlook / Microsoft 365", icon: Mail },
      { name: "Apple Mail", icon: Mail },
    ],
  },
  {
    title: "CRM & Follow-Up",
    items: [
      { name: "GoHighLevel", icon: Workflow },
      { name: "HubSpot", icon: Workflow },
      { name: "Follow Up Boss", icon: Workflow },
    ],
  },
  {
    title: "Notifications",
    items: [
      { name: "Twilio SMS", icon: MessageSquare },
      { name: "Slack", icon: Slack },
      { name: "Email alerts", icon: Bell },
    ],
  },
  {
    title: "Automation Backbone",
    items: [
      { name: "n8n", icon: Zap },
      { name: "Make.com", icon: Zap },
    ],
  },
];

const PACKAGES = [
  {
    name: "Email Automation Setup",
    price: "Starting at $1,500",
    sub: "One-time setup",
    includes: [
      "Connect Gmail or Outlook",
      "Build email classification rules",
      "Set up AI draft replies in your tone",
      "Build 3-email follow-up sequence for new leads",
      "CRM connection for lead context",
      "SMS or Slack alerts for urgent emails",
      "Owner training and walkthrough",
    ],
    cta: "Request Project Quote",
    featured: false,
    badge: null,
  },
  {
    name: "Email Automation + Dashboard Bundle",
    price: "Starting at $3,500",
    sub: "Best value — setup + visibility",
    includes: [
      "Everything in Email Automation Setup",
      "Email performance widget on your dashboard",
      "Lead tracking from email to close",
      "Response rate and follow-up metrics",
      "Monthly refinement of rules and sequences",
    ],
    cta: "Request Bundle Quote",
    featured: true,
    badge: "Best Value",
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

function EmailAutomationPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section className="pt-16 sm:pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-sm font-medium text-copper uppercase tracking-wider">
              Email Automation
            </p>
            <h1 className="mt-4 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.03]">
              Never miss a lead or forget a <Accent>follow-up</Accent> again.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We build AI-powered email systems that read incoming messages, draft smart replies,
              and follow up automatically — so nothing falls through the cracks.
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
                  <Inbox className="h-4 w-4 text-copper" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                    Inbox
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  AI sorted
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  { tag: "NEW LEAD", color: "bg-copper text-copper-foreground", subject: "Jordan — kitchen remodel quote", body: "AI draft ready: 'Hi Jordan, thanks for reaching out…'" },
                  { tag: "URGENT", color: "bg-foreground text-background", subject: "Invoice #1042 overdue 14 days", body: "SMS alert sent to Shawna · auto-followed up" },
                  { tag: "FOLLOW-UP", color: "bg-secondary text-foreground", subject: "Maria — booking inquiry (Day 3)", body: "Sequence step 2 sending in 2 hours" },
                ].map((row) => (
                  <li key={row.subject} className="rounded-xl bg-cream/70 border border-sand/80 p-3.5">
                    <span className={cn("inline-block text-[10px] font-semibold tracking-wider rounded-full px-2 py-0.5 mb-1.5", row.color)}>
                      {row.tag}
                    </span>
                    <p className="text-sm font-medium text-foreground">{row.subject}</p>
                    <p className="text-xs text-muted-foreground mt-1">{row.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 1 — Problem */}
      <Section className="pt-4">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
              Your inbox is <Accent color="rose">costing you business.</Accent>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Most small business owners are losing leads they don't even know about. A potential
              client emails on a Friday afternoon. You don't see it until Monday. By then they've
              called someone else.
            </p>
            <p>
              Or you get a lead, mean to follow up, and it gets buried under 40 other emails. Three
              weeks later you remember. Too late.
            </p>
            <p className="text-foreground font-medium">
              We fix this with AI-powered email automation that works even when you're not at your
              desk.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — Three layers */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">What we build</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Three layers of <Accent>email intelligence.</Accent>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURE_CARDS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-sand p-7 flex flex-col shadow-[0_1px_2px_rgba(28,28,30,0.03),0_18px_40px_-22px_rgba(28,28,30,0.18)]"
            >
              <div className="h-12 w-12 rounded-full bg-copper/12 inline-flex items-center justify-center">
                <Icon className="h-5 w-5 text-copper" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{title}</h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 3 — How it works */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">How it works</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">A simple, supervised flow.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_STEPS.map(({ n, title, body, icon: Icon }) => (
            <div
              key={n}
              className="rounded-2xl bg-card border border-sand p-6 shadow-[0_1px_2px_rgba(28,28,30,0.03)]"
            >
              <div className="flex items-center justify-between">
                <p className="font-serif text-3xl text-copper">{n}</p>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-3 font-serif text-lg">{title}</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground italic text-center max-w-2xl mx-auto">
          We always keep a human in the loop. AI drafts — you approve. This protects your
          relationships and your reputation.
        </p>
      </Section>

      {/* SECTION 4 — Connections */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Connects with</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Works with the tools <Accent color="sage">you already use.</Accent>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONNECTIONS.map((c) => (
            <div key={c.title} className="rounded-2xl bg-card border border-sand p-6">
              <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/80 mb-4">
                {c.title}
              </h3>
              <ul className="space-y-2.5">
                {c.items.map((it) => {
                  const Icon = it.icon;
                  return (
                    <li key={it.name} className="flex items-center gap-2.5 text-sm text-foreground/85">
                      <Icon className="h-4 w-4 text-copper" />
                      {it.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5 — Pricing */}
      <Section className="pt-10">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Email Automation packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative rounded-2xl bg-card p-7 flex flex-col",
                p.featured
                  ? "border-2 border-copper shadow-[0_4px_8px_rgba(28,28,30,0.04),0_22px_50px_-22px_rgba(181,101,29,0.4)]"
                  : "border border-sand shadow-[0_1px_2px_rgba(28,28,30,0.03),0_10px_30px_-18px_rgba(28,28,30,0.12)]"
              )}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-xs font-semibold text-copper-foreground uppercase tracking-wider whitespace-nowrap">
                  {p.badge}
                </span>
              )}
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <div className="mt-4 font-serif text-3xl text-copper font-semibold">{p.price}</div>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{p.sub}</p>
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
        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          Ongoing refinement and maintenance available as part of the AI Support Partner monthly
          retainer.
        </p>
      </Section>

      <FinalCTA
        headline="Stop losing leads to an unorganized inbox."
        sub="Book a free consultation and we'll show you what an automated email system looks like for your business."
      />
    </SiteLayout>
  );
}