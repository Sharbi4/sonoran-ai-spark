import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, ChevronRight, BarChart3, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardMockup, type DashboardSpec } from "@/components/mockups";

export interface DemoConfig {
  slug: string;
  brandName: string;
  tagline: string;
  heroHeadline: React.ReactNode;
  heroSub: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  icon: LucideIcon;
  features: { icon: LucideIcon; title: string; description: string }[];
  painPoints: string[];
  workflow: { step: string; detail: string }[];
  dashboard: DashboardSpec;
  testimonial: { quote: string; name: string; role: string };
  stats: { value: string; label: string }[];
}

const spring = { type: "spring" as const, stiffness: 110, damping: 22 };

function Fade({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

export function DemoTemplate({ config }: { config: DemoConfig }) {
  const { accentColor, accentBg, accentText } = config;

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Demo Banner */}
      <div className="bg-charcoal text-cream text-center py-2.5 px-4">
        <p className="text-xs font-medium">
          This is a demo website by{" "}
          <Link to="/" className="text-copper underline underline-offset-2 hover:text-copper/80">
            Sonoran Systems & AI
          </Link>
          {" · "}
          <Link to="/industries/$slug" params={{ slug: config.slug }} className="text-copper underline underline-offset-2 hover:text-copper/80">
            See what we'd build for your {config.brandName.split(" ")[0].toLowerCase()}
          </Link>
        </p>
      </div>

      {/* Demo Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className={cn("h-9 w-9 rounded-lg flex items-center justify-center", accentBg)}>
              <config.icon className={cn("h-5 w-5", accentText)} strokeWidth={1.5} />
            </div>
            <span className="font-serif text-lg font-semibold text-gray-900">{config.brandName}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#dashboard" className="hover:text-gray-900 transition-colors">Dashboard</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
          </div>
          <Link
            to="/contact"
            className={cn("rounded-full px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90", accentColor)}
          >
            Book a Strategy Call
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-gradient-to-b from-white to-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className="max-w-3xl">
              <div className={cn("inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6", accentBg, accentText)}>
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Platform
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-gray-900">
                {config.heroHeadline}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
                {config.heroSub}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className={cn("inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90", accentColor)}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#dashboard"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-gray-700 border border-gray-200 hover:border-gray-300 transition-colors bg-white"
                >
                  See Dashboard Demo
                </a>
              </div>
            </div>
          </Fade>

          {/* Stats */}
          <Fade delay={0.15}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {config.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white border border-gray-100 p-5 text-center shadow-sm">
                  <p className={cn("font-serif text-3xl font-bold", accentText)}>{s.value}</p>
                  <p className="mt-1 text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <p className={cn("text-xs font-semibold uppercase tracking-[0.25em]", accentText)}>Sound familiar?</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white">
              These problems don't have to be your normal.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {config.painPoints.map((pain, i) => (
                <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                  <span className={cn("text-xs font-bold", accentText)}>0{i + 1}</span>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <p className={cn("text-xs font-semibold uppercase tracking-[0.25em]", accentText)}>Features</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-gray-900">
              Everything your business needs in one platform.
            </h2>
          </Fade>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.features.map((f, i) => (
              <Fade key={f.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={cn("h-11 w-11 rounded-xl flex items-center justify-center", accentBg)}>
                    <f.icon className={cn("h-5 w-5", accentText)} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif text-lg text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 sm:py-28 bg-gradient-to-b from-[#fafaf8] to-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className="text-center mb-12">
              <p className={cn("text-xs font-semibold uppercase tracking-[0.25em]", accentText)}>Live Dashboard Preview</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-gray-900">
                Every number that matters. One screen.
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                Illustrative example — real dashboards are built around your data sources, KPIs, and team roles.
              </p>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <DashboardMockup spec={config.dashboard} />
          </Fade>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <p className={cn("text-xs font-semibold uppercase tracking-[0.25em]", accentText)}>How It Works</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-gray-900">
              From first contact to fully automated.
            </h2>
          </Fade>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {config.workflow.map((w, i) => (
              <Fade key={w.step} delay={i * 0.05}>
                <div className="flex gap-5 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                  <span className={cn("shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white", accentColor)}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-gray-900">{w.step}</h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">{w.detail}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-28 bg-gray-900 text-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Fade>
            <Sparkles className={cn("h-8 w-8 mx-auto mb-6", accentText)} />
            <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed text-white/90 italic">
              "{config.testimonial.quote}"
            </blockquote>
            <div className="mt-8">
              <p className="text-sm font-medium text-white">{config.testimonial.name}</p>
              <p className="text-xs text-white/60">{config.testimonial.role}</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className={cn("rounded-3xl p-10 sm:p-16 text-center text-white", accentColor)}>
              <h2 className="font-serif text-3xl sm:text-4xl">Ready to see this for your business?</h2>
              <p className="mt-4 text-white/80 max-w-xl mx-auto">
                Book a $250 Strategy Call and we'll map out exactly which systems, automations, and dashboards would transform your operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-gray-900 hover:bg-white/90 transition-colors"
                >
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            Demo website by{" "}
            <Link to="/" className="text-copper hover:underline">Sonoran Systems & AI</Link>
            {" · "}Tucson, Arizona
          </p>
          <div className="flex items-center gap-4">
            <Link to="/industries/$slug" params={{ slug: config.slug }} className="text-xs text-gray-400 hover:text-copper transition-colors">
              Back to {config.brandName}
            </Link>
            <Link to="/contact" className="text-xs text-copper hover:underline">
              Build This For My Business
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
