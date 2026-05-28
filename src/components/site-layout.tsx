import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, Instagram, Linkedin, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoLockup } from "./logo";
import { Reveal } from "./motion/primitives";
import { PaymentTestModeBanner } from "./PaymentTestModeBanner";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
] as const;

const CORE_SERVICES = [
  { slug: "ai-consulting", label: "AI Consulting" },
  { slug: "websites", label: "Website Design" },
  { slug: "brand", label: "Brand & Logo Design" },
  { slug: "workflow", label: "Workflow Automation" },
  { slug: "chatbots", label: "AI Chatbots & Voice Agents" },
];

const ADVANCED_SERVICES: { to: string; label: string }[] = [
  { to: "/dashboards", label: "Business Intelligence Dashboards" },
  { to: "/email-automation", label: "Email Automation" },
  { to: "/services#lead-capture", label: "Lead Capture & Follow-Up" },
  { to: "/services#dashboards", label: "Industry Dashboards" },
];

function ServicesMegaMenu() {
  return (
    <div className="relative group">
      <Link
        to="/services"
        className="text-sm font-medium text-foreground/80 hover:text-copper transition-colors inline-flex items-center gap-1"
        activeProps={{ className: "text-copper" }}
      >
        Services
      </Link>
      <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
        <div className="w-[680px] rounded-3xl glass-card overflow-hidden">
          <div className="grid grid-cols-2 gap-10 p-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-copper mb-4">
                Core Services
              </p>
              <ul className="space-y-2.5">
                {CORE_SERVICES.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/services#${s.slug}`}
                      className="group/link flex items-center gap-2 text-sm text-foreground/85 hover:text-copper transition-colors"
                    >
                      <span>{s.label}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-sage mb-4">
                Advanced Systems
              </p>
              <ul className="space-y-2.5">
                {ADVANCED_SERVICES.map((s) => (
                  <li key={s.to + s.label}>
                    <a
                      href={s.to}
                      className="group/link flex items-center gap-2 text-sm text-foreground/85 hover:text-copper transition-colors"
                    >
                      <span>{s.label}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-sand/60 px-8 py-5 flex items-center justify-between gap-4 border-t border-sand">
            <p className="text-sm font-medium text-foreground">
              Start with the <span className="text-copper font-semibold">AI Business Systems Audit</span> — $497
            </p>
            <Link
              to="/ai-audit"
              className="inline-flex items-center gap-1.5 rounded-full bg-copper text-copper-foreground px-4 py-2 text-xs font-medium hover:bg-copper/90 transition-colors"
            >
              Buy the Audit <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <PaymentTestModeBanner />
      <header
        className={cn(
          "sticky top-0 z-40 glass-header border-b transition-all duration-300",
          scrolled
            ? "border-sand/80 shadow-[0_8px_30px_-20px_rgba(31,31,31,0.18)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[76px] flex items-center justify-between">
          <Link to="/" aria-label="Sonoran Systems & AI home" className="shrink-0">
            <LogoLockup />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <ServicesMegaMenu />
            {NAV.filter((n) => n.to !== "/services").map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-copper transition-colors"
                activeProps={{ className: "text-copper" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="md:hidden border-t border-sand glass-header"
            >
              <div className="px-5 py-5 flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-base font-medium text-foreground/85"
                    activeProps={{ className: "text-copper" }}
                  >
                    {n.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex justify-center items-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-copper-foreground"
                >
                  Let's Talk <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 bg-charcoal text-cream relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.18] satin-bands pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" aria-label="Home" className="inline-block bg-cream rounded-xl px-3 py-2">
            <LogoLockup />
          </Link>
          <p className="mt-6 text-base text-cream/80 max-w-md leading-relaxed">
            Modern systems and AI tools for Arizona businesses ready to grow.
          </p>
          <p className="mt-4 text-sm text-cream/55 max-w-md leading-relaxed">
            Connecting websites, automations, AI assistants, and dashboards into one
            calm, working system.
          </p>
          <div className="mt-7 flex items-center gap-3 text-sm text-cream/70">
            <MapPin className="h-4 w-4 text-rose" />
            Tucson · Phoenix · Scottsdale · Flagstaff
          </div>
        </div>
        <FooterCol
          title="Services"
          links={[
            { to: "/services", label: "All Services" },
            { to: "/dashboards", label: "Dashboards" },
            { to: "/email-automation", label: "Email Automation" },
            { to: "/ai-audit", label: "AI Business Audit" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { to: "/about", label: "About" },
            { to: "/case-studies", label: "Case Studies" },
            { to: "/packages", label: "Packages" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <div className="md:col-span-3">
          <p className="font-serif text-2xl text-cream">Let's build something great.</p>
          <div className="mt-5 flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-copper text-copper-foreground px-5 py-2.5 text-sm font-medium hover:bg-copper/90 transition-colors"
            >
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              className="h-10 w-10 rounded-full border border-cream/15 inline-flex items-center justify-center text-cream/75 hover:text-copper hover:border-copper transition"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full border border-cream/15 inline-flex items-center justify-center text-cream/75 hover:text-copper hover:border-copper transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs text-cream/55 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 Sonoran Systems &amp; AI. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-copper transition-colors">
              Terms &amp; Fine Print
            </Link>
            <span>Built in Tucson, Arizona.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs font-semibold text-cream uppercase tracking-[0.18em] mb-5">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-cream/65 hover:text-copper transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children, color = "copper" }: { children: React.ReactNode; color?: "copper" | "sage" | "rose" | "cream" }) {
  const c = color === "sage" ? "text-sage" : color === "rose" ? "text-rose" : color === "cream" ? "text-cream/80" : "text-copper";
  return (
    <p className={cn("text-[11px] font-semibold tracking-[0.28em] uppercase", c)}>{children}</p>
  );
}

export function CopperButton({
  to,
  children,
  variant = "filled",
  className,
}: {
  to: string;
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "ghost";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors group";
  const styles =
    variant === "filled"
      ? "bg-copper text-copper-foreground hover:bg-copper/90 shadow-[0_10px_30px_-12px_rgba(194,79,52,0.5)]"
      : variant === "outlined"
      ? "border border-copper text-copper hover:bg-copper hover:text-copper-foreground"
      : "text-foreground/80 hover:text-copper";
  return (
    <Link to={to} className={cn(base, styles, className)}>
      <span>{children}</span>
      <motion.span
        aria-hidden
        className="inline-flex"
        initial={false}
        whileHover={reduce ? undefined : { x: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </motion.span>
    </Link>
  );
}

export function PrimaryButton({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <CopperButton to={to} className={className}>{children}</CopperButton>;
}

export function SecondaryButton({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CopperButton to={to} variant="outlined" className={className}>
      {children}
    </CopperButton>
  );
}

// Accent-colored words in a headline.
export function Accent({
  children,
  color = "terracotta",
}: {
  children: React.ReactNode;
  color?: "terracotta" | "sage" | "rose";
}) {
  const c = color === "sage" ? "text-sage" : color === "rose" ? "text-rose" : "text-terracotta";
  return <span className={c}>{children}</span>;
}

// Decorative diagonal color bands used in hero compositions.
export function DiagonalBands({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("absolute inset-0 overflow-hidden rounded-3xl", className)}>
      <div className="absolute inset-0">
        {[
          { c: "#C24F34", top: "8%" },
          { c: "#E07A6B", top: "26%" },
          { c: "#E9DFCF", top: "44%" },
          { c: "#8BA395", top: "62%" },
          { c: "#1F1F1F", top: "80%" },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute -left-10 -right-10 h-12 rotate-[-14deg] rounded-full"
            style={{ backgroundColor: b.c, top: b.top, opacity: 0.92 }}
          />
        ))}
      </div>
    </div>
  );
}

export function FinalCTA({
  headline = "Ready to make your business easier to run?",
  sub = "Book a free phone consultation and we'll talk through your website, workflows, tools, and where AI can actually help.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-card p-12 sm:p-20 text-center">
            <div aria-hidden className="absolute inset-0 satin-bands opacity-60 pointer-events-none" />
            <div className="relative">
              <h2 className="font-serif text-4xl sm:text-5xl text-foreground text-balance max-w-3xl mx-auto">
                {headline}
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{sub}</p>
              <div className="mt-10 flex justify-center gap-3 flex-wrap">
                <PrimaryButton to="/contact">Book a Free Consultation</PrimaryButton>
                <SecondaryButton to="/packages">View Packages</SecondaryButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}