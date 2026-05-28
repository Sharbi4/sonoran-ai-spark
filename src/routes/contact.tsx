import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Phone, MapPin, CalendarCheck2, CheckCircle2 } from "lucide-react";
import { SiteLayout, Section, Accent } from "@/components/site-layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Consultation — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Book a free phone consultation with Sonoran Systems & AI. Tucson, Phoenix, and Arizona small businesses welcome.",
      },
    ],
  }),
  component: Contact,
});

const HELP_OPTIONS = [
  "Website",
  "Logo/Branding",
  "AI Workflow",
  "Customer Follow-Up",
  "Chatbot",
  "Booking System",
  "Lead Capture",
  "Not Sure Yet",
];

const BUSINESS_TYPES = [
  "Service business",
  "Retail / E-commerce",
  "Restaurant / Hospitality",
  "Healthcare / Wellness",
  "Real estate",
  "Trades / Construction",
  "Professional services",
  "Nonprofit",
  "Other",
];

const TIMELINES = ["ASAP", "1 month", "2-3 months", "Just exploring"];
const BUDGETS = ["Under $1k", "$1k–$2.5k", "$2.5k–$5k", "$5k+", "Prefer to discuss"];

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(80),
  lastName: z.string().trim().min(1, "Required").max(80),
  businessName: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Required").max(30),
  city: z.string().trim().min(1, "Required").max(80),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  businessType: z.string().min(1, "Required"),
  helpWith: z.array(z.string()).min(1, "Pick at least one"),
  challenge: z.string().trim().max(1500).optional().or(z.literal("")),
  repetitive: z.string().trim().max(1500).optional().or(z.literal("")),
  tools: z.string().trim().max(500).optional().or(z.literal("")),
  timeline: z.string().min(1, "Required"),
  budget: z.string().optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  businessName: "",
  email: "",
  phone: "",
  city: "",
  website: "",
  businessType: "",
  helpWith: [],
  challenge: "",
  repetitive: "",
  tools: "",
  timeline: "",
  budget: "",
};

function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function toggleHelp(opt: string) {
    setForm((f) => ({
      ...f,
      helpWith: f.helpWith.includes(opt)
        ? f.helpWith.filter((o) => o !== opt)
        : [...f.helpWith, opt],
    }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[issue.path.join(".")] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24 pb-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Contact</p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            Let's <Accent>talk</Accent> about your <Accent color="sage">business</Accent>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Tell us about your business. We'll review your details and reach out within one
            business day to schedule your free consultation.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2 rounded-3xl bg-card border border-sand p-7 sm:p-10 shadow-[0_1px_2px_rgba(28,28,30,0.03),0_18px_40px_-22px_rgba(28,28,30,0.18)]">
            <h2 className="font-serif text-2xl">Tell us about your business</h2>

            {submitted ? (
              <div className="mt-10 text-center py-12">
                <CheckCircle2 className="h-12 w-12 text-copper mx-auto" strokeWidth={1.5} />
                <h3 className="mt-5 font-serif text-2xl">Thanks — we got it.</h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  We'll review your details and reach out within one business day to schedule your
                  free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First name" error={errors.firstName}>
                    <Input
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      maxLength={80}
                    />
                  </Field>
                  <Field label="Last name" error={errors.lastName}>
                    <Input
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      maxLength={80}
                    />
                  </Field>
                </div>

                <Field label="Business name" error={errors.businessName}>
                  <Input
                    value={form.businessName}
                    onChange={(e) => update("businessName", e.target.value)}
                    maxLength={120}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email address" error={errors.email}>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      maxLength={255}
                    />
                  </Field>
                  <Field label="Phone number" error={errors.phone}>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      maxLength={30}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="City" error={errors.city}>
                    <Input
                      value={form.city}
                      onChange={(e) => update("city", e.target.value)}
                      maxLength={80}
                    />
                  </Field>
                  <Field label="Current website URL (optional)" error={errors.website}>
                    <Input
                      value={form.website}
                      onChange={(e) => update("website", e.target.value)}
                      placeholder="https://"
                      maxLength={255}
                    />
                  </Field>
                </div>

                <Field label="Type of business" error={errors.businessType}>
                  <Select
                    value={form.businessType}
                    onValueChange={(v) => update("businessType", v)}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUSINESS_TYPES.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field label="What do you need help with?" error={errors.helpWith}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {HELP_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 rounded-lg border border-sand bg-background px-3 py-2.5 cursor-pointer hover:border-copper/50 transition"
                      >
                        <Checkbox
                          checked={form.helpWith.includes(opt)}
                          onCheckedChange={() => toggleHelp(opt)}
                        />
                        <span className="text-sm">{opt}</span>
                      </label>
                    ))}
                  </div>
                </Field>

                <Field label="Biggest business challenge right now" error={errors.challenge}>
                  <Textarea
                    rows={3}
                    value={form.challenge}
                    onChange={(e) => update("challenge", e.target.value)}
                    maxLength={1500}
                  />
                </Field>

                <Field label="Any repetitive tasks you want to reduce?" error={errors.repetitive}>
                  <Textarea
                    rows={3}
                    value={form.repetitive}
                    onChange={(e) => update("repetitive", e.target.value)}
                    maxLength={1500}
                  />
                </Field>

                <Field label="Tools you currently use" error={errors.tools}>
                  <Input
                    value={form.tools}
                    onChange={(e) => update("tools", e.target.value)}
                    placeholder="e.g. Gmail, Squarespace, Square, etc."
                    maxLength={500}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Ideal timeline" error={errors.timeline}>
                    <Select value={form.timeline} onValueChange={(v) => update("timeline", v)}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIMELINES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Budget range (optional)" error={errors.budget}>
                    <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGETS.map((b) => (
                          <SelectItem key={b} value={b}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-copper px-7 py-3.5 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors"
                >
                  Send & Book My Consultation
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-cream to-sand/60 border border-sand p-7">
              <CalendarCheck2 className="h-6 w-6 text-copper" strokeWidth={1.5} />
              <h3 className="mt-3 font-serif text-xl">What happens next</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We'll review your inquiry and reach out within one business day to schedule a free
                30-minute consultation at a time that works for you.
              </p>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Want to lock in a time today? Book a paid{" "}
                <a href="/ai-audit" className="text-copper hover:underline">
                  Strategy Call
                </a>{" "}
                and our calendar opens right after checkout.
              </p>
            </div>

            <div className="rounded-3xl bg-card border border-sand p-7">
              <h3 className="font-serif text-xl">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-copper mt-0.5" strokeWidth={1.5} />
                  <a href="tel:+15205511113" className="hover:text-copper">
                    (520) 551-1113
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-copper mt-0.5" strokeWidth={1.5} />
                  <div>
                    Tucson, Arizona
                    <div className="text-muted-foreground">
                      Serving Tucson, Phoenix, and across Arizona.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | string[];
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {children}
      {error && (
        <p className="text-xs text-destructive">
          {Array.isArray(error) ? error.join(", ") : error}
        </p>
      )}
    </div>
  );
}

function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!existing) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  // Brand colors (hex without #): copper accent, charcoal text, cream background
  const url =
    "https://calendly.com/sharbin-sonoransystemsai/30min" +
    "?hide_event_type_details=0&hide_gdpr_banner=1" +
    "&background_color=fbf7f2&text_color=1f1f1f&primary_color=c24f34";

  return (
    <div
      ref={ref}
      className="calendly-inline-widget mt-5 rounded-xl overflow-hidden border border-sand"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}