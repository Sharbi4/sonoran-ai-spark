import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  SiteLayout,
  Section,
  SectionLabel,
  Accent,
  FinalCTA,
} from "@/components/site-layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/primitives";
import { INDUSTRY_NAV, INDUSTRIES } from "@/lib/industries-content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "AI systems, dashboards, and automation tailored for law firms, restaurants, contractors, salons & wellness, real estate, and consultants across Arizona.",
      },
      { property: "og:title", content: "Industries We Serve — Sonoran Systems & AI" },
      {
        property: "og:description",
        content:
          "Built for the tools your industry already runs on — Clio, Toast, Jobber, Vagaro, Follow Up Boss, and more.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24 pb-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Industries</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.05] text-foreground text-balance">
              Built for the way <Accent>your industry</Accent> actually works.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every industry runs on a different stack. We know those tools and we connect
              them — so you get one calm system instead of five open tabs.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_NAV.map(({ slug, label }) => {
            const ind = INDUSTRIES[slug];
            return (
              <StaggerItem key={slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug }}
                  className="group block h-full rounded-3xl bg-card border border-sand p-7 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(31,31,31,0.25)] transition-all"
                >
                  <SectionLabel>{label}</SectionLabel>
                  <h2 className="mt-3 font-serif text-2xl text-foreground">
                    {label}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {ind.intro}
                  </p>
                  <p className="mt-5 text-xs text-muted-foreground tracking-wide">
                    {ind.tools.slice(0, 5).join(" · ")}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-copper">
                    See the build
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      <FinalCTA
        headline="Don't see your industry?"
        sub="We work with any business that runs on websites, inboxes, calendars, and spreadsheets. Tell us what you do — we'll tell you what we'd build."
      />
    </SiteLayout>
  );
}