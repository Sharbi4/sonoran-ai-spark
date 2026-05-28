import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Fine Print — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Payment terms, revisions policy, third-party fees, AI disclaimers, and scope-of-work language for projects with Sonoran Systems & AI.",
      },
    ],
  }),
  component: TermsPage,
});

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "Pricing",
    body:
      "All project pricing shown is starting pricing. Final pricing depends on scope, number of pages, integrations, data sources, automation complexity, timeline, and third-party tools required.",
  },
  {
    title: "Paid advisory services",
    body:
      "Strategy calls, audits, reviews, and opportunity maps are paid advisory services. They do not include implementation, technical setup, design work, automation builds, dashboard builds, or ongoing support unless specifically stated.",
  },
  {
    title: "Custom projects & deposits",
    body:
      "Custom projects require a proposal and deposit before work begins. Projects under $2,500 may require full payment upfront. Projects $2,500–$5,000 typically require a 50% deposit with the balance due before launch or handoff. Projects over $5,000 typically run on 40% deposit / 30% midpoint / 30% before launch.",
  },
  {
    title: "Revisions",
    body:
      "Project packages include 2 rounds of revisions unless otherwise stated. A revision means a reasonable adjustment to the agreed direction or deliverable. A revision does not include a new concept, new page, new workflow, new integration, or change in project scope. Additional revision rounds are billed at $75–$150 per round depending on the project type.",
  },
  {
    title: "Third-party fees",
    body:
      "Third-party software subscriptions, hosting, domains, SMS fees, email sending fees, API usage fees, paid plugins, stock assets, and platform fees are not included unless specifically stated in the proposal.",
  },
  {
    title: "AI & automation disclaimers",
    body:
      "AI, automation, chatbot, email, and dashboard systems depend on client-provided information, approved workflows, available integrations, and third-party platform reliability. Sonoran Systems & AI does not guarantee specific revenue, lead volume, rankings, conversion rates, cost savings, or business outcomes. AI-generated content, replies, summaries, and recommendations should be reviewed by the client before use in legal, medical, financial, regulated, or high-risk contexts.",
  },
  {
    title: "Timelines",
    body:
      "Timelines depend on client responsiveness, timely access to required accounts, and scope complexity. Delayed feedback, missing content, or unavailable platform access may delay delivery.",
  },
  {
    title: "Refunds & rescheduling",
    body:
      "Fixed-price reviews and audits are paid 100% upfront and are non-refundable once work begins. Strategy calls may be rescheduled with at least 24 hours notice.",
  },
  {
    title: "Monthly retainers",
    body:
      "Retainers are billed monthly in advance. Unused hours or requests do not roll over unless explicitly stated. Cancellation requires 30 days written notice.",
  },
  {
    title: "Scope of practice",
    body:
      "Sonoran Systems & AI provides business systems consulting, website design, automation setup, and AI implementation support. We do not provide legal, financial, medical, tax, accounting, or compliance advice.",
  },
];

function TermsPage() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24 pb-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">
            Terms &amp; Fine Print
          </p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            The <Accent>fine print</Accent>, in plain English.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Payment terms, revisions, third-party fees, and AI disclaimers — the
            full version of what goes into every proposal and statement of work.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="border-l-2 border-sand pl-6">
              <h2 className="font-serif text-2xl">{s.title}</h2>
              <p className="mt-3 text-foreground/80 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-xs text-muted-foreground italic">
          Last updated May 2026. These terms supplement any individual proposal
          or statement of work. In the event of a conflict, the signed
          proposal/SOW controls.
        </p>
      </Section>
    </SiteLayout>
  );
}