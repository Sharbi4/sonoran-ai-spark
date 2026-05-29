import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "How Sonoran Systems & AI collects, uses, and protects your information when you visit our site, contact us, or purchase services.",
      },
      { property: "og:title", content: "Privacy Policy — Sonoran Systems & AI" },
      {
        property: "og:description",
        content: "How we collect, use, and protect your information.",
      },
      { property: "og:url", content: "https://www.sonoransystemsai.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://www.sonoransystemsai.com/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "Who we are",
    body:
      "Sonoran Systems & AI is a Tucson, Arizona-based consultancy providing websites, automation, dashboards, and AI implementation services. References to 'we', 'us', or 'our' refer to Sonoran Systems & AI.",
  },
  {
    title: "What we collect",
    body:
      "When you submit a contact form, book a call, purchase a service, or use our AI tools (such as the site preview tool), we collect the information you provide: name, email, phone, business details, website URL, and the contents of your message. We also collect basic technical information (IP address, browser, pages visited) through standard analytics.",
  },
  {
    title: "How we use it",
    body:
      "We use your information to respond to inquiries, deliver paid services, send transactional emails (receipts, scheduling, deliverables), improve our site, and — if you opt in — send occasional educational emails. We do not sell your information.",
  },
  {
    title: "Third parties we use",
    body:
      "We rely on a small set of vetted vendors to operate: Stripe (payments), Supabase (database and storage), Resend (email), Google Analytics (anonymized usage), and Lovable AI (model gateway for AI features). Each handles your data under its own privacy policy and security commitments.",
  },
  {
    title: "Cookies",
    body:
      "We use essential cookies for site functionality and a single analytics cookie to count visits. We do not use advertising or cross-site tracking cookies.",
  },
  {
    title: "Your rights",
    body:
      "You can request a copy of your data, ask us to correct it, or ask us to delete it at any time by emailing hello@sonoransystemsai.com. We will respond within 30 days.",
  },
  {
    title: "Data retention",
    body:
      "We keep contact and project records for as long as needed to deliver services and meet legal and accounting requirements (typically up to 7 years for paid engagements). Marketing emails respect unsubscribe requests immediately.",
  },
  {
    title: "Security",
    body:
      "We store data with reputable cloud providers using encryption in transit and at rest. No system is perfectly secure; if a breach affects you, we will notify you promptly.",
  },
  {
    title: "Children",
    body: "Our services are for businesses. We do not knowingly collect information from anyone under 16.",
  },
  {
    title: "Changes",
    body:
      "We may update this policy. Material changes will be announced on this page with an updated effective date.",
  },
  {
    title: "Governing law",
    body: "This policy is governed by the laws of the State of Arizona, USA.",
  },
  {
    title: "Contact",
    body:
      "Questions about this policy or your data: hello@sonoransystemsai.com — Sonoran Systems & AI, Tucson, Arizona.",
  },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Legal</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            <Accent>Privacy</Accent> Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Effective: May 2026</p>
          <div className="mt-12 space-y-10">
            {SECTIONS.map((s) => (
              <section key={s.title}>
                <h2 className="font-serif text-2xl text-foreground">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}