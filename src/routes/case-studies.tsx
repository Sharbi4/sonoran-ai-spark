import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, FinalCTA, Accent } from "@/components/site-layout";
import { DashboardMockup, AIChatMockup, PipelineMockup } from "@/components/mockups";
import { INDUSTRY_MOCKUPS } from "@/lib/industries-content";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Real results from Arizona small businesses. Case studies coming soon — we're currently working with our first clients.",
      },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Case Studies</p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            Real <Accent>results</Accent> from real Arizona <Accent color="sage">businesses</Accent>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Full case studies are coming soon — we're currently working with our first clients. In
            the meantime, here are live, in-browser demos of the kinds of systems we build:
            dashboards, AI assistants, and automated pipelines.
          </p>
        </div>
      </Section>

      {/* Demo 1 — restaurant dashboard */}
      <Section className="pt-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-wider text-copper">
              Demo · Restaurant
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-balance">
              Daily performance dashboard.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Toast or Square data, labor cost, reservations, and review activity in one
              mobile-friendly view. Owners stop opening five apps each morning.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <li>· Net sales, covers, avg ticket, labor %</li>
              <li>· Top & underperforming menu items</li>
              <li>· Drafted replies for new reviews</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <DashboardMockup spec={INDUSTRY_MOCKUPS.restaurants} />
          </div>
        </div>
      </Section>

      {/* Demo 2 — AI chat */}
      <Section className="pt-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <AIChatMockup
              spec={{
                appName: "Sonoran · Front Desk AI",
                view: "Salon · live conversation",
                messages: [
                  { from: "user", text: "Hi! Can I get a balayage with Maya next Tuesday after 4?" },
                  {
                    from: "ai",
                    text: "Hi Jess! Maya has 4:15p and 5:45p open Tuesday for a balayage (~2.5h). Want me to hold one?",
                  },
                  { from: "user", text: "5:45 please. Same card on file." },
                  {
                    from: "ai",
                    text: "Booked Tue 5:45p with Maya · $245 hold. Confirmation text sent. I'll remind you 24h before, and add a color-refresh reminder for ~6 weeks out.",
                  },
                  { from: "user", text: "Perfect, thanks!" },
                  {
                    from: "ai",
                    text: "Anytime. Posting a quick note to Maya so she has your last formula ready.",
                  },
                ],
              }}
            />
          </div>
          <div className="lg:col-span-4 order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-wider text-copper">
              Demo · Salons & Wellness
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-balance">
              AI front desk that books, not just chats.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Trained on your services, providers, and availability. Books in your booking
              platform, takes deposits, and triggers the right follow-up sequence — all in your
              brand voice.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <li>· Real-time availability lookups</li>
              <li>· Deposits via Stripe</li>
              <li>· Hands off to a human anytime</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Demo 3 — pipeline */}
      <Section className="pt-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-wider text-copper">
              Demo · Contractor
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-balance">
              Lead-to-quote automation pipeline.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every lead — website, Google, missed call — runs through the same pipeline.
              Acknowledged in under a minute, qualified, and on a tech's calendar without a single
              copy-paste.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <li>· Twilio + CRM + scheduling integrated</li>
              <li>· AI qualifies job type & urgency</li>
              <li>· Follow-up sequences until a decision</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <PipelineMockup
              spec={{
                appName: "Sonoran · Lead Pipeline",
                view: "Job intake · automated",
                steps: [
                  {
                    title: "Lead lands",
                    detail: "Website form, Google Local Services, or missed call → unified inbox.",
                    tag: "0s",
                  },
                  {
                    title: "Auto-text in 60 seconds",
                    detail: "\"Got your AC request — Jonas will text shortly with a window for tomorrow.\"",
                    tag: "60s",
                  },
                  {
                    title: "AI qualifies + tags",
                    detail: "Job type, urgency, address, and matching tech routed in Jobber.",
                    tag: "AI",
                  },
                  {
                    title: "Quote drafted",
                    detail: "Tech reviews the AI-drafted quote on mobile, taps Send.",
                    tag: "Draft",
                  },
                  {
                    title: "Follow-up sequence",
                    detail: "Day 2 · 7 · 14 reminders until accepted or declined.",
                    tag: "Live",
                  },
                ],
              }}
            />
          </div>
        </div>
      </Section>

      {/* Other industries */}
      <Section className="pt-4">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-copper">More demos</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-balance">
            Same engine, <Accent color="sage">different industry.</Accent>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Each industry page has its own dashboard mockup with the metrics, lists, and
            integrations that actually matter for that business.
          </p>
        </div>
        <div className="grid gap-8">
          <DashboardMockup spec={INDUSTRY_MOCKUPS["law-firms"]} />
          <DashboardMockup spec={INDUSTRY_MOCKUPS["real-estate"]} />
        </div>
      </Section>

      <FinalCTA
        headline="Want to be one of our first case studies?"
        sub="Early clients get hands-on attention and preferred pricing."
      />
    </SiteLayout>
  );
}