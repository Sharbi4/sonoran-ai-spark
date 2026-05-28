import { Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  SiteLayout,
  Section,
  SectionLabel,
  Accent,
  PrimaryButton,
  SecondaryButton,
  FinalCTA,
} from "@/components/site-layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/primitives";

export interface IndustryContent {
  label: string;
  title: React.ReactNode;
  intro: string;
  pains: string[];
  systems: { title: string; body: string }[];
  tools: string[];
  workflow: string[];
  caseStudy: { name: string; result: string };
}

export function IndustryTemplate({ content }: { content: IndustryContent }) {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24 pb-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Industry · {content.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl sm:text-6xl leading-[1.05] text-foreground text-balance">
              {content.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {content.intro}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Talk About Your Business</PrimaryButton>
              <SecondaryButton to="/packages">View Packages</SecondaryButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10 border-l-[6px] border-l-terracotta">
            <SectionLabel>What's slowing you down</SectionLabel>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-foreground">
              Pain points we hear most.
            </h2>
            <ul className="mt-6 space-y-3">
              {content.pains.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10 border-l-[6px] border-l-sage">
            <SectionLabel color="sage">Recommended systems</SectionLabel>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-foreground">
              What we typically build.
            </h2>
            <ul className="mt-6 space-y-4">
              {content.systems.map((s) => (
                <li key={s.title}>
                  <div className="flex gap-3 text-foreground">
                    <Check className="h-5 w-5 mt-0.5 text-sage shrink-0" strokeWidth={2.5} />
                    <div>
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-cream/60 border-y border-sand">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>Tools we connect</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
              Already using these? <Accent color="sage">Good.</Accent>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              We integrate with the platforms your industry runs on so nothing has
              to be replaced.
            </p>
            <StaggerGroup className="mt-7 flex flex-wrap gap-2">
              {content.tools.map((t) => (
                <StaggerItem key={t}>
                  <span className="inline-flex items-center rounded-full border border-sand bg-card px-4 py-2 text-sm font-medium text-foreground/80">
                    {t}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <div>
            <SectionLabel>Sample workflow</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground text-balance">
              From inquiry to follow-up.
            </h2>
            <ol className="mt-7 space-y-4">
              {content.workflow.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="shrink-0 h-8 w-8 rounded-full bg-copper text-copper-foreground inline-flex items-center justify-center text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-foreground/85">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-charcoal text-cream p-10 sm:p-14 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 satin-bands opacity-25 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel color="cream">Case study placeholder</SectionLabel>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-cream text-balance">
                {content.caseStudy.name}
              </h3>
              <p className="mt-5 text-cream/80 leading-relaxed max-w-md">
                {content.caseStudy.result}
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-3 text-sm font-medium text-cream hover:bg-cream hover:text-charcoal transition-colors"
              >
                Read Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA
        headline={`Ready to bring this to your ${content.label.toLowerCase()} business?`}
        sub="Submit a free inquiry or book a strategy call. We'll help you decide what to build first."
      />
    </SiteLayout>
  );
}