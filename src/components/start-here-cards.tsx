import { FileText, PhoneCall, ClipboardCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { SectionLabel, Accent } from "@/components/site-layout";
import { Reveal } from "@/components/motion/primitives";

export function StartHereCards({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const { openCheckout, checkoutElement } = useStripeCheckout();

  return (
    <section className="py-20 sm:py-28">
      {checkoutElement}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading && (
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Not sure where to begin?</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground text-balance">
                Choose the best way to <Accent>start</Accent>.
              </h2>
            </Reveal>
          </div>
        )}

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Inquiry */}
          <Card
            icon={FileText}
            title="Submit Project Inquiry"
            price="Free"
            description="Tell us about your project and we'll review your needs before recommending a path forward. No commitment required."
            bestFor="You want to explain your project first."
            cta={
              <Link
                to="/contact"
                className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-full border border-copper text-copper px-5 py-3 text-sm font-medium hover:bg-copper hover:text-copper-foreground transition-colors"
              >
                Submit Inquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            }
          />

          {/* Strategy Call */}
          <Card
            icon={PhoneCall}
            title="Book Strategy Call"
            price="$250 · 2 hr"
            description="A paid 2-hour one-on-one advisory session. Direct expert guidance on your specific business challenges, tools, and AI opportunities."
            bestFor="You want direct consulting guidance now."
            badge={
              <span className="inline-flex items-center rounded-full bg-sand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/70">
                Paid advisory session
              </span>
            }
            cta={
              <button
                type="button"
                onClick={() => openCheckout({ priceId: "strategy_call_60min" })}
                className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors shadow-[0_10px_30px_-12px_rgba(194,79,52,0.5)]"
              >
                Pay & Book
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            }
            footnote="After checkout you'll be redirected to choose a time on the calendar."
          />

          {/* AI Audit */}
          <Card
            icon={ClipboardCheck}
            title="AI Business Systems Audit"
            price="$497"
            description="Our most comprehensive starting point. Full review of your business, workflow, tools, and digital presence — plus a written action plan delivered within 3 business days."
            bestFor="You want a written roadmap for AI in your business."
            badge={
              <span className="inline-flex items-center rounded-full bg-copper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-copper-foreground">
                Most Popular
              </span>
            }
            highlight
            cta={
              <button
                type="button"
                onClick={() => openCheckout({ priceId: "ai_audit_497" })}
                className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors shadow-[0_10px_30px_-12px_rgba(194,79,52,0.5)]"
              >
                Buy Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            }
            footnote="Includes intake form, consultation, and written action plan."
          />
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not sure which fits?{" "}
          <Link to="/contact" className="text-copper hover:underline">
            Submit a free inquiry
          </Link>{" "}
          and we'll tell you what we recommend.
        </p>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  price,
  description,
  bestFor,
  cta,
  badge,
  footnote,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  price: string;
  description: string;
  bestFor: string;
  cta: React.ReactNode;
  badge?: React.ReactNode;
  footnote?: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 110, damping: 22 }}
      className={`relative h-full rounded-3xl bg-card border p-7 sm:p-8 flex flex-col shadow-[0_1px_2px_rgba(28,28,30,0.03),0_18px_40px_-22px_rgba(28,28,30,0.18)] ${
        highlight ? "border-copper/40 ring-1 ring-copper/20" : "border-sand"
      }`}
    >
      {badge && <div className="absolute -top-3 left-7">{badge}</div>}
      <div className="h-11 w-11 rounded-xl bg-sage/15 text-sage flex items-center justify-center">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
      <p className="mt-2 font-serif text-3xl text-copper">{price}</p>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <p className="mt-5 text-xs font-medium text-foreground/70">
        <span className="text-foreground/50 uppercase tracking-[0.16em] mr-2">Best for</span>
        {bestFor}
      </p>
      <div className="mt-auto pt-7">{cta}</div>
      {footnote && (
        <p className="mt-3 text-[11px] text-muted-foreground text-center leading-relaxed">
          {footnote}
        </p>
      )}
    </motion.div>
  );
}