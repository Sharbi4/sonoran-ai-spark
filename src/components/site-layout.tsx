import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoLockup } from "./logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/dashboards", label: "Dashboards" },
  { to: "/packages", label: "Packages" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const CORE_SERVICES = [
  { slug: "ai-consulting", label: "AI Consulting" },
  { slug: "websites", label: "Website Design" },
  { slug: "brand", label: "Brand & Logo Design" },
  { slug: "workflow", label: "Workflow Automation" },
  { slug: "chatbots", label: "AI Chatbots & Voice Agents" },
];

type ServiceLink = { to: string; label: string; external?: boolean };
const ADVANCED_SERVICES: ServiceLink[] = [
  { to: "/dashboards", label: "Business Intelligence Dashboards" },
  { to: "/email-automation", label: "Email Automation" },
  { to: "/services#lead-capture", label: "Lead Capture & Follow-Up" },
  { to: "/services#booking", label: "Booking & Intake Systems" },
];

function HeaderBrand() {
  return (
    <Link to="/" aria-label="Sonoran Systems & AI home">
      <LogoLockup />
    </Link>
  );
}

function ServicesMegaMenu() {
  return (
    <div className="relative group">
      <Link
        to="/services"
        className="text-sm font-medium text-foreground/75 hover:text-copper transition-colors inline-flex items-center gap-1"
        activeProps={{ className: "text-copper" }}
      >
        Services
      </Link>
      <div
        className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
      >
        <div className="w-[640px] rounded-2xl bg-card border border-sand shadow-[0_20px_50px_-20px_rgba(31,31,31,0.25)] overflow-hidden">
          <div className="grid grid-cols-2 gap-8 p-7">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3">
                Core Services
              </p>
              <ul className="space-y-2">
                {CORE_SERVICES.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/services#${s.slug}`}
                      className="block text-sm text-foreground/85 hover:text-copper"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3">
                Advanced Systems
              </p>
              <ul className="space-y-2">
                {ADVANCED_SERVICES.map((s) => (
                  <li key={s.to + s.label}>
                    <a
                      href={s.to}
                      className="block text-sm text-foreground/85 hover:text-copper"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-sand/70 px-7 py-4 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-foreground">
              Start with an <span className="text-copper">AI Business Audit</span> — $297
            </p>
            <Link
              to="/ai-audit"
              className="inline-flex items-center gap-1.5 rounded-full bg-copper text-copper-foreground px-4 py-2 text-xs font-medium hover:bg-copper/90"
            >
              Book Your Audit <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-sand/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
          <HeaderBrand />
          <nav className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/75 hover:text-copper transition-colors"
              activeProps={{ className: "text-copper" }}
            >
              Home
            </Link>
            <ServicesMegaMenu />
            {NAV.filter((n) => n.to !== "/").map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/75 hover:text-copper transition-colors"
                activeProps={{ className: "text-copper" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors"
            >
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
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
        {open && (
          <div className="md:hidden border-t border-sand bg-background">
            <div className="px-5 py-4 flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-copper" }}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-copper" }}
              >
                Services
              </Link>
              <div className="pl-3 pb-2 flex flex-col gap-1.5">
                {CORE_SERVICES.map((s) => (
                  <a
                    key={s.slug + s.label}
                    href={`/services#${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-copper"
                  >
                    {s.label}
                  </a>
                ))}
                {ADVANCED_SERVICES.map((s) => (
                  <a
                    key={s.to + s.label}
                    href={s.to}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-copper"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              {NAV.filter((n) => n.to !== "/").map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-base font-medium text-foreground/80"
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
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-sand bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" aria-label="Home">
            <LogoLockup />
          </Link>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Modern systems and AI tools for Arizona businesses ready to grow.
          </p>
          <p className="mt-3 text-xs text-muted-foreground/85 max-w-xs leading-relaxed">
            Connecting QuickBooks, Toast, Clio, Jobber, Mindbody, and 50+ business tools to
            custom AI-powered dashboards.
          </p>
        </div>
        <FooterCol
          title="Services"
          links={[
            { to: "/services", label: "Websites" },
            { to: "/services", label: "Automation" },
            { to: "/services", label: "AI Chatbots" },
            { to: "/dashboards", label: "Dashboards" },
            { to: "/email-automation", label: "Email Automation" },
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
        <div className="md:col-span-4">
          <p className="font-serif text-xl text-foreground">Let's build something great.</p>
          <div className="mt-4 flex items-center gap-3">
            <PrimaryButton to="/contact">Let's Talk</PrimaryButton>
            <a
              href="#"
              className="h-10 w-10 rounded-full border border-sand inline-flex items-center justify-center text-foreground/70 hover:text-copper hover:border-copper transition"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full border border-sand inline-flex items-center justify-center text-foreground/70 hover:text-copper hover:border-copper transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-sand">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Sonoran Systems &amp; AI. All rights reserved.</span>
          <span>Tucson · Phoenix · Scottsdale · Flagstaff</span>
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
      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground hover:text-copper">
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
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
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
  variant?: "filled" | "outlined";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "filled"
      ? "bg-copper text-copper-foreground hover:bg-copper/90"
      : "border border-copper text-copper hover:bg-copper hover:text-copper-foreground";
  return (
    <Link to={to} className={cn(base, styles, className)}>
      {children}
      <ArrowRight className="h-4 w-4" />
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

// Accent-colored words in a headline. Wrap target words with <Accent>.
export function Accent({
  children,
  color = "terracotta",
}: {
  children: React.ReactNode;
  color?: "terracotta" | "sage" | "rose";
}) {
  const c =
    color === "sage" ? "text-sage" : color === "rose" ? "text-rose" : "text-copper";
  return <span className={c}>{children}</span>;
}

// Decorative diagonal color bands used in hero compositions.
export function DiagonalBands({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 overflow-hidden rounded-3xl", className)}
    >
      <div className="absolute inset-0">
        {[
          { c: "#C24F34", top: "10%" },
          { c: "#E07A6B", top: "28%" },
          { c: "#E9DFCF", top: "46%" },
          { c: "#8BA395", top: "64%" },
          { c: "#1F1F1F", top: "82%" },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute -left-10 -right-10 h-12 rotate-[-12deg] rounded-full"
            style={{ backgroundColor: b.c, top: b.top }}
          />
        ))}
      </div>
    </div>
  );
}

export function FinalCTA({
  headline = "Ready to modernize your business?",
  sub = "Start with a free consultation.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="rounded-3xl bg-card border border-sand p-10 sm:p-16 text-center shadow-[0_1px_2px_rgba(31,31,31,0.04),0_20px_50px_-26px_rgba(194,79,52,0.25)]">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">{headline}</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <PrimaryButton to="/contact">Book a Free Consultation</PrimaryButton>
            <SecondaryButton to="/packages">View Packages</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}