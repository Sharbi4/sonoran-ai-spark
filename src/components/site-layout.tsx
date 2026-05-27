import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Wordmark() {
  return (
    <Link to="/" className="flex items-baseline gap-1 group">
      <span className="font-serif text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
        Sonoran Systems
      </span>
      <span className="font-serif text-xl sm:text-2xl font-semibold text-copper">
        &amp; AI
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-sand/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Wordmark />
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
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
              className="inline-flex items-center rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors"
            >
              Book a Free Call
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
              {NAV.map((n) => (
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
                className="mt-3 inline-flex justify-center items-center rounded-full bg-copper px-5 py-3 text-sm font-medium text-copper-foreground"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-sand bg-card/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Practical AI, websites, and automation for small businesses across Arizona.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground font-sans mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-copper">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground font-sans mb-3">Service area</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based in Tucson, Arizona. Serving Tucson, Phoenix, and businesses across Arizona.
            </p>
          </div>
        </div>
        <div className="border-t border-sand">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Sonoran Systems &amp; AI. All rights reserved.</span>
            <span>Tucson · Phoenix · Arizona</span>
          </div>
        </div>
      </footer>
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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "filled"
      ? "bg-copper text-copper-foreground hover:bg-copper/90"
      : "border border-copper text-copper hover:bg-copper hover:text-copper-foreground";
  return (
    <Link to={to} className={cn(base, styles, className)}>
      {children}
    </Link>
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
        <div className="rounded-3xl bg-gradient-to-br from-cream via-card to-sand/60 border border-sand p-10 sm:p-16 text-center shadow-sm">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">{headline}</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p>
          <div className="mt-8 flex justify-center">
            <CopperButton to="/contact">Book a Free Consultation</CopperButton>
          </div>
        </div>
      </div>
    </section>
  );
}