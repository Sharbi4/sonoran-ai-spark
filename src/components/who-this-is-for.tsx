import { Check, X } from "lucide-react";
import { SectionLabel } from "@/components/site-layout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/primitives";

const FOR_LIST = [
  "Want a more professional online presence",
  "Are losing leads because follow-up is inconsistent",
  "Are tired of repetitive admin work done manually",
  "Need their tools connected and talking to each other",
  "Want dashboards instead of guessing",
  "Want practical AI, not hype",
];

const NOT_FOR_LIST = [
  "Want free consulting",
  "Want a cheap template website",
  "Are looking for guaranteed leads overnight",
  "Do not want to provide access, feedback, or business details",
  "Want AI to replace all human judgment",
];

export function WhoThisIsFor() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Who this is for</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
              An honest fit check.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10 border-l-[6px] border-l-sage">
              <h3 className="font-serif text-2xl text-foreground">
                This is for businesses that:
              </h3>
              <StaggerGroup className="mt-7 space-y-4">
                {FOR_LIST.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex gap-3 text-foreground/85">
                      <Check
                        className="h-5 w-5 mt-0.5 text-sage shrink-0"
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10 border-l-[6px] border-l-terracotta">
              <h3 className="font-serif text-2xl text-foreground">
                This is not for businesses that:
              </h3>
              <StaggerGroup className="mt-7 space-y-4">
                {NOT_FOR_LIST.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex gap-3 text-foreground/85">
                      <X
                        className="h-5 w-5 mt-0.5 text-terracotta shrink-0"
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}