import { createFileRoute } from "@tanstack/react-router";
import { Users, Cpu, Palette, Settings2 } from "lucide-react";
import { SiteLayout, Section, FinalCTA, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "A Tucson-based team of designers, AI engineers, graphic artists, and operations experts building websites, automations, and AI-powered tools for Arizona businesses.",
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

const TEAM_DISCIPLINES = [
  { icon: Palette, label: "Designers" },
  { icon: Cpu, label: "AI Engineers" },
  { icon: Users, label: "Graphic Artists" },
  { icon: Settings2, label: "Operations Experts" },
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
                Sonoran Systems &amp; AI is a Tucson-based team of designers, AI engineers,
                graphic artists, and operations experts. We work with local businesses across
                Arizona to build websites, automations, and AI-powered tools that fit the way
                they actually run.
              </p>
              <p>
                Our approach is simple: no jargon, no overbuilt tech stacks, and no fluff. Just
                practical systems that capture more leads, free up your week, and make your
                business feel as professional online as it is in person.
              </p>
              <p>
                We're based in Tucson and serve owners across Tucson, Phoenix, Scottsdale,
                Flagstaff, and the rest of Arizona. If you're ready to modernize without the
                confusion, we'd love to talk.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sand via-cream to-copper/20 border border-sand p-8 flex flex-col justify-between overflow-hidden">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-copper">
                  The team
                </p>
                <p className="mt-2 font-serif text-2xl leading-snug text-foreground">
                  Designers, engineers, artists &amp; operators — one connected studio.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {TEAM_DISCIPLINES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-card/80 border border-sand px-3 py-3 flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4 text-sage" strokeWidth={1.75} />
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground tracking-wide">
                Based in Tucson, AZ · Serving all of Arizona
              </p>
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