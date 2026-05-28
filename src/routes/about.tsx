import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { SiteLayout, Section, FinalCTA, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Meet Shawna, a Tucson-based AI consultant helping Arizona small businesses build websites, automations, and practical AI-powered tools.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  { n: "01", t: "Practical over flashy", d: "We pick tools that solve the real problem, not whatever's trending this month." },
  { n: "02", t: "Local and personal", d: "Tucson-based, working hand-in-hand with Arizona owners who know their customers by name." },
  { n: "03", t: "Built to actually work", d: "Systems you can run yourself — clear, documented, and trained on your team." },
];

function About() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <p className="text-sm font-medium text-copper uppercase tracking-wider">About</p>
            <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
              Built in <Accent>Tucson</Accent>. For <Accent color="sage">Arizona</Accent> businesses.
            </h1>
            <div className="mt-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Shawna, the founder of Sonoran Systems &amp; AI. I'm based in Tucson and I work
                with local businesses across Arizona to build websites, automations, and AI-powered
                tools that fit the way they actually run.
              </p>
              <p>
                My approach is simple: no jargon, no overbuilt tech stacks, and no fluff. Just
                practical systems that capture more leads, free up your week, and make your business
                feel as professional online as it is in person.
              </p>
              <p>
                If you're a Tucson, Phoenix, or Arizona business owner ready to modernize without
                the confusion, I'd love to talk.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sand via-cream to-copper/20 border border-sand flex items-center justify-center overflow-hidden">
              <div className="text-center text-muted-foreground p-8">
                <div className="h-20 w-20 mx-auto rounded-full bg-card flex items-center justify-center border border-sand">
                  <User className="h-10 w-10 text-copper" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">Shawna</p>
                <p className="text-xs">Founder · Tucson, AZ</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card/50 border-y border-sand">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Our approach</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Three things we believe</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div key={v.n} className="rounded-2xl bg-card border border-sand p-8">
              <div className="font-serif text-2xl text-copper">{v.n}</div>
              <h3 className="mt-3 font-serif text-xl">{v.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA headline="Let's build something that actually works." sub="Submit a free inquiry to get started." />
    </SiteLayout>
  );
}