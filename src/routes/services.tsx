import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Globe,
  Palette,
  Workflow,
  MessageSquare,
  MailCheck,
  CalendarCheck2,
  TrendingUp,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout, Section, FinalCTA, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "AI consulting, website design, branding, workflow automation, chatbots, and business systems for Arizona small businesses.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: Brain,
    name: "AI Consulting",
    desc: "We help you cut through the noise and figure out where AI actually fits in your business. No buzzwords — just specific tools and workflows mapped to the way you work today.",
  },
  {
    icon: Globe,
    name: "Website Design",
    desc: "Fast, modern websites built for one job: turn visitors into leads. Mobile-first, SEO-ready, and easy to update without a developer in the loop.",
  },
  {
    icon: Palette,
    name: "Logo & Brand Systems",
    desc: "A clear identity that signals trust before a single word is read. Logos, color systems, type, and messaging that work together across your website and beyond.",
  },
  {
    icon: Workflow,
    name: "Workflow Automation",
    desc: "We map the repetitive work eating your week, then build the automations that handle it. Less copy-paste, fewer dropped balls, and more time for the work only you can do.",
  },
  {
    icon: MessageSquare,
    name: "AI Chatbots",
    desc: "Smart assistants on your website and tools that answer common questions, qualify leads, and hand off only the conversations that need you.",
  },
  {
    icon: MailCheck,
    name: "Lead Capture & Follow-Up Systems",
    desc: "Capture every inquiry, then follow up automatically with the right message at the right time. The leads you already have, finally working for you.",
  },
  {
    icon: CalendarCheck2,
    name: "Booking & Intake Systems",
    desc: "Let clients book themselves on your terms, with intake forms that collect what you actually need. Fewer back-and-forth emails, faster onboarding.",
  },
  {
    icon: TrendingUp,
    name: "Business Process Improvement",
    desc: "A fresh look at how the work moves through your business, with practical changes to reduce friction, cut tool sprawl, and make every customer interaction smoother.",
  },
];

function Services() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Services</p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            Practical <Accent>systems</Accent> for the way you actually <Accent color="sage">work</Accent>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Sonoran Systems &amp; AI is a business systems partner — not just a web design shop. We
            look at your entire operation and build the tools and automations that help you capture
            more leads, reduce manual work, and create a better customer experience.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl bg-card border border-sand p-8 shadow-[0_1px_2px_rgba(31,31,31,0.03),0_10px_30px_-18px_rgba(31,31,31,0.10)] hover:-translate-y-0.5 transition-all"
            >
              <div className="h-12 w-12 rounded-xl border border-sand bg-cream flex items-center justify-center text-foreground">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h2 className="mt-5 font-serif font-bold text-2xl">{s.name}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-copper hover:underline"
              >
                Talk it through <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </SiteLayout>
  );
}