import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Scale, HardHat, Utensils, Flower2, Building2, Briefcase,
  Stethoscope, TrendingUp, Landmark, Users,
} from "lucide-react";
import {
  SiteLayout,
  Section,
  SectionLabel,
  Accent,
  FinalCTA,
} from "@/components/site-layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/primitives";
import { INDUSTRY_NAV, INDUSTRIES, type IndustrySlug } from "@/lib/industries-content";

const ICONS: Record<IndustrySlug, typeof Scale> = {
  "law-firms": Scale,
  contractors: HardHat,
  restaurants: Utensils,
  "salons-wellness": Flower2,
  "real-estate": Building2,
  "consultants-coaches": Briefcase,
  "doctors-medical": Stethoscope,
  "financial-advisors": TrendingUp,
  "political-campaigns": Landmark,
  "small-business-teams": Users,
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Sonoran Systems & AI | Tucson AZ" },
      {
        name: "description",
        content:
          "AI systems, dashboards, and automation tailored for law firms, restaurants, contractors, salons, real estate, medical practices, financial advisors, political campaigns & more across Arizona.",
      },
      { property: "og:title", content: "Industries We Serve — Sonoran Systems & AI" },
      {
        property: "og:description",
        content:
          "Built for the tools your industry already runs on — Clio, Toast, Jobber, Vagaro, Follow Up Boss, and more.",
      },
      { property: "og:url", content: "https://sonoransystemsai.com/industries" },
    ],
    links: [{ rel: "canonical", href: "https://sonoransystemsai.com/industries" }],
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

        <Reveal delay={0.3}>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { val: "10", label: "Industries served" },
              { val: "50+", label: "Tool integrations" },
              { val: "4 wk", label: "Avg build time" },
              { val: "100%", label: "Arizona-based" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-card border border-sand p-4 text-center">
                <p className="font-serif text-2xl font-bold text-copper">{s.val}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_NAV.map(({ slug, label }) => {
            const ind = INDUSTRIES[slug];
            const Icon = ICONS[slug];
            return (
              <StaggerItem key={slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug }}
                  className="group relative block h-full rounded-3xl bg-card border border-sand p-7 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(194,79,52,0.25)] hover:border-copper/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-xl bg-sand/70 text-foreground flex items-center justify-center group-hover:bg-copper/15 group-hover:text-copper transition-colors duration-300">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  <h2 className="mt-5 font-serif text-xl text-foreground">
                    {label}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {ind.intro}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {ind.tools.slice(0, 4).map((t) => (
                      <span key={t} className="inline-flex rounded-full bg-sand/60 px-2.5 py-0.5 text-[10px] font-medium text-foreground/70">
                        {t}
                      </span>
                    ))}
                    {ind.tools.length > 4 && (
                      <span className="inline-flex rounded-full bg-sand/60 px-2.5 py-0.5 text-[10px] font-medium text-foreground/50">
                        +{ind.tools.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-sand/60">
                    <p className="text-[11px] text-muted-foreground line-clamp-1">
                      <span className="text-copper font-medium">Pain point:</span>{" "}
                      {ind.pains[0]}
                    </p>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-copper">
                    Explore {label.toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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