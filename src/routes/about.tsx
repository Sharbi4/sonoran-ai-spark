import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Cog, Brain, Rocket, Target, Shield } from "lucide-react";
import { SiteLayout, Section, FinalCTA, Accent } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | AI Consulting Team Tucson AZ — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Meet the Sonoran Systems & AI team — over 50 years of combined experience in process excellence, systems design & cutting-edge AI innovation. Based in Tucson, serving Phoenix, Flagstaff & Arizona.",
      },
      { property: "og:title", content: "About Sonoran Systems & AI | Tucson AI Consulting Team" },
      {
        property: "og:description",
        content:
          "50+ years of process excellence & AI innovation. Based in Tucson, serving Phoenix, Flagstaff & businesses across Arizona.",
      },
      { property: "og:url", content: "https://sonoransystemsai.com/about" },
    ],
  }),
  component: About,
});

const PILLARS = [
  {
    title: "AI Strategy & Research",
    desc: "Our AI division stays at the frontier — evaluating emerging models, testing new capabilities, and turning breakthroughs into business-ready tools.",
    icon: Brain,
  },
  {
    title: "Process Engineering",
    desc: "Decades of Six Sigma, Lean, and systems design experience — applied to every workflow, automation, and integration we build.",
    icon: Cog,
  },
  {
    title: "Product & Innovation",
    desc: "We design and ship intelligent systems — from AI chatbots and dashboards to end-to-end automation platforms — built to scale.",
    icon: Rocket,
  },
  {
    title: "Client Success",
    desc: "Every engagement is backed by hands-on training, documentation, and ongoing support so your team runs with confidence.",
    icon: Target,
  },
];

const VALUES = [
  { n: "01", t: "Innovate relentlessly", d: "We invest in continuous R&D — adopting and stress-testing new AI capabilities so our clients always operate with a competitive edge." },
  { n: "02", t: "Engineer with discipline", d: "50+ years of process excellence means every system is designed for reliability, scalability, and measurable ROI from day one." },
  { n: "03", t: "Deliver measurable impact", d: "We don't build for the sake of building. Every project is tied to outcomes — more revenue, less overhead, faster growth." },
  { n: "04", t: "Empower our clients", d: "We transfer knowledge, not just deliverables. Your team walks away trained, confident, and in full control of the systems we build." },
];

const STATS = [
  { value: "50+", label: "Years Combined Experience" },
  { value: "200+", label: "Systems Deployed" },
  { value: "98%", label: "Client Retention" },
  { value: "3x", label: "Avg. Efficiency Gain" },
];

function About() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <p className="text-sm font-medium text-copper uppercase tracking-wider">About Us</p>
            <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
              <Accent>Cutting-edge</Accent> ideas. <Accent color="sage">50+ years</Accent> of process excellence.
            </h1>
            <div className="mt-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sonoran Systems &amp; AI is more than a consultancy — we're a team of seasoned
                systems architects, process engineers, and AI innovators with over 50 years of
                combined experience in design, systems thinking, and operational excellence.
              </p>
              <p>
                We've spent decades perfecting how businesses run — from Fortune 500 process
                optimization to lean startup automation. Now we bring that same rigor to Arizona's
                small and mid-size businesses, pairing battle-tested methodologies with the
                latest advances in artificial intelligence.
              </p>
              <p>
                Our mission is simple: give every Arizona business access to the kind of intelligent
                systems and strategic thinking that used to be reserved for enterprise. No fluff,
                no buzzwords — just measurable results.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sand via-cream to-copper/20 border border-sand flex flex-col items-center justify-center overflow-hidden p-8">
              <div className="h-20 w-20 mx-auto rounded-full bg-card flex items-center justify-center border border-sand">
                <Lightbulb className="h-10 w-10 text-copper" strokeWidth={1.5} />
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">Sonoran Systems & AI</p>
              <p className="text-xs text-muted-foreground text-center mt-1">Process Excellence · AI Innovation · Tucson, AZ</p>
              <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center rounded-xl bg-card/80 border border-sand p-3">
                    <p className="font-serif text-xl font-bold text-copper">{s.value}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card/50 border-y border-sand">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">What We Do</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Four pillars of our practice</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We operate at the intersection of proven process methodology and frontier AI — organized around the disciplines that drive real business transformation.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl bg-card border border-sand p-8 text-center">
              <div className="h-14 w-14 mx-auto rounded-full bg-gradient-to-br from-copper/20 to-sage/20 flex items-center justify-center border border-sand">
                <p.icon className="h-7 w-7 text-copper" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-serif text-lg">{p.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Our Philosophy</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">What drives us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div key={v.n} className="rounded-2xl bg-card border border-sand p-8">
              <div className="font-serif text-2xl text-copper">{v.n}</div>
              <h3 className="mt-3 font-serif text-xl">{v.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA headline="Ready to work with a team that delivers?" sub="Book a $250 Strategy Call — paid before booking." />
    </SiteLayout>
  );
}