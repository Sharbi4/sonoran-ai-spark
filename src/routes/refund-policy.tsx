import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "How refunds work for Strategy Calls, the Website AI Readiness Review, the AI Business Systems Audit, and custom engagements with Sonoran Systems & AI.",
      },
      { property: "og:title", content: "Refund Policy — Sonoran Systems & AI" },
      {
        property: "og:description",
        content: "Clear refund terms for our paid services.",
      },
      { property: "og:url", content: "https://www.sonoransystemsai.com/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "https://www.sonoransystemsai.com/refund-policy" }],
  }),
  component: RefundPage,
});

const POLICIES = [
  {
    title: "Strategy Call ($250 · 2 hr)",
    body:
      "Full refund if cancelled at least 24 hours before the scheduled start time. Inside the 24-hour window, the session is non-refundable but can be rescheduled once at no charge.",
  },
  {
    title: "Website AI Readiness Review ($197)",
    body:
      "Refundable within 7 days of purchase, provided we have not yet started the review. Once the written review is delivered, the purchase is non-refundable.",
  },
  {
    title: "AI Business Systems Audit ($497)",
    body:
      "Refundable within 7 days of purchase if we have not yet started the intake. After the kickoff call or once the written action plan is delivered, the audit is non-refundable.",
  },
  {
    title: "Custom projects",
    body:
      "Deposits secure your project slot and cover discovery work. Deposits are non-refundable once work has begun. Milestone payments are non-refundable for delivered work but unused milestones can be cancelled in writing.",
  },
  {
    title: "How to request a refund",
    body:
      "Email hello@sonoransystemsai.com from the address on the receipt with your order ID. We process eligible refunds within 5 business days to the original payment method via Stripe.",
  },
  {
    title: "Chargebacks",
    body:
      "Please reach out before opening a dispute — we will always work to make it right. Unjustified chargebacks may be contested with delivery records.",
  },
];

function RefundPage() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Legal</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            <Accent>Refund</Accent> Policy
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We want you confident every time you buy from us. Here is exactly how refunds work, by service.
          </p>
          <div className="mt-12 space-y-10">
            {POLICIES.map((p) => (
              <section key={p.title}>
                <h2 className="font-serif text-2xl text-foreground">{p.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}