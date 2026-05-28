import { motion } from "framer-motion";
import { SectionLabel } from "@/components/site-layout";
import { Reveal } from "@/components/motion/primitives";

const TOOLS = [
  "QuickBooks", "Stripe", "Square", "Toast", "Clio", "MyCase", "Jobber",
  "ServiceTitan", "GoHighLevel", "HubSpot", "Gmail", "Outlook",
  "Google Calendar", "Calendly", "Shopify", "WooCommerce", "Vagaro",
  "Mindbody", "Boulevard", "Follow Up Boss", "Vapi", "Voiceflow", "n8n",
  "Make.com", "Supabase", "Twilio", "Slack", "Airtable",
];

export function IntegrationsMarquee() {
  return (
    <section className="py-20 sm:py-24 bg-cream/50 border-y border-sand/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Integrations</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-foreground">
              We connect the tools your business already uses.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-12 group">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream/90 to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream/90 to-transparent z-10"
        />
        <motion.div
          className="flex gap-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="inline-flex items-center rounded-full border border-sand bg-card px-5 py-2.5 text-sm font-medium text-foreground/80"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-8">
        <p className="text-xs text-muted-foreground">
          Available integrations depend on each platform's API access, permissions,
          and plan requirements.
        </p>
      </div>
    </section>
  );
}