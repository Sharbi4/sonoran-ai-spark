import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { SiteLayout, Section, FinalCTA } from "@/components/site-layout";

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
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-[1.05]">
            Real results from real Arizona businesses.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Case studies coming soon — we're currently working with our first clients to build
            measurable, repeatable systems. Check back shortly to see the work in detail.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "Law Firm",
              title: "Intake & follow-up automation",
              body: "Replacing manual email triage with an AI-assisted client intake pipeline.",
            },
            {
              tag: "Restaurant",
              title: "Daily performance dashboard",
              body: "Toast data, staff performance, and AI insights in one beautiful view.",
            },
            {
              tag: "Contractor",
              title: "Quotes, jobs, invoices — unified",
              body: "A single command center built from Jobber and QuickBooks data.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl bg-card border border-sand p-7 relative overflow-hidden"
            >
              <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 text-xs font-medium text-sage">
                <Sparkles className="h-3.5 w-3.5" /> In progress
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-copper">{c.tag}</p>
              <h3 className="mt-3 font-serif text-xl">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA
        headline="Want to be one of our first case studies?"
        sub="Early clients get hands-on attention and preferred pricing."
      />
    </SiteLayout>
  );
}