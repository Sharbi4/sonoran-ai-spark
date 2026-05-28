import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel, Accent } from "@/components/site-layout";
import { Reveal } from "@/components/motion/primitives";

const FAQS = [
  {
    q: "Is the strategy call free?",
    a: "No. Strategy calls are paid advisory sessions at $250/hour. If you're not ready to book paid consulting time, submit a free project inquiry instead.",
  },
  {
    q: "What happens after I pay for a strategy call?",
    a: "You'll be redirected immediately to schedule your call and complete a short intake form so we can prepare before the call.",
  },
  {
    q: "Can the strategy call fee be applied toward a project?",
    a: "Yes. Strategy call fees may be credited toward projects of $2,500 or more if the project is booked within 7 days of the call.",
  },
  {
    q: "What's the difference between a strategy call and the AI Audit?",
    a: "A strategy call is live advisory guidance. The AI Business Systems Audit includes a deeper review of your entire business, tools, and workflow plus a written action plan delivered within 3 business days.",
  },
  {
    q: "Do you build everything yourself?",
    a: "Yes. Sonoran Systems & AI builds websites, automations, dashboards, and AI workflows using Lovable, Supabase, n8n, Make.com, GoHighLevel, Vapi, and AI APIs.",
  },
  {
    q: "Do you guarantee more leads or revenue?",
    a: "No. We build systems designed to improve clarity, follow-up, and operations. Results depend on traffic, offer quality, market demand, and your execution.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Tucson and serve businesses across Tucson, Phoenix, Scottsdale, Flagstaff, and anywhere in Arizona. We can work remotely with businesses anywhere in the US.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <SectionLabel>Common questions</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
              Good questions. <Accent>Honest</Accent> answers.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl bg-card border border-sand px-6 data-[state=open]:border-copper/40 data-[state=open]:shadow-[0_10px_30px_-20px_rgba(194,79,52,0.35)]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}