import { Stethoscope, Calendar, Shield, Heart, Phone, MapPin, Clock, CheckCircle, ChevronRight } from "lucide-react";
import { DemoShell, IconLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-sky-700",
  accentBg: "bg-sky-700",
  accentSoft: "bg-sky-50",
  logoFrom: "#0EA5E9",
  logoTo: "#075985",
  fontBody: "'Inter', sans-serif",
  fontHeading: "'DM Serif Display', serif",
  pageBg: "#FFFFFF",
  pageFg: "#0F1B26",
};

const SERVICES = [
  { name: "Primary Care", desc: "Annual physicals, chronic disease, sick visits.", icon: Stethoscope },
  { name: "Pediatrics", desc: "Newborn through teen. Same-day sick visits.", icon: Heart },
  { name: "Women's Health", desc: "Annual exams, fertility, menopause care.", icon: Shield },
  { name: "Telehealth", desc: "Video visits 7am–9pm, 7 days a week.", icon: Phone },
  { name: "Lab & Imaging", desc: "On-site draw + same-week imaging referrals.", icon: CheckCircle },
  { name: "Mental Health", desc: "Therapy, medication management, psychiatry.", icon: Heart },
];

const PROVIDERS = [
  { name: "Dr. Anita Reyes, MD", title: "Internal Medicine", years: "Practicing since 2008", accepting: true },
  { name: "Dr. James O'Brien, DO", title: "Family Medicine", years: "Practicing since 2012", accepting: true },
  { name: "Dr. Lin Chen, MD", title: "Pediatrics", years: "Practicing since 2015", accepting: false },
  { name: "Sarah Patel, NP", title: "Women's Health NP", years: "Practicing since 2017", accepting: true },
];

export default function DoctorsMedicalDemo() {
  return (
    <DemoShell
      slug="doctors-medical"
      brandName="Sonoran Medical Group"
      tagline="Modern primary care for Phoenix families."
      phone="(602) 555-4400"
      city="Phoenix, Arizona"
      navLinks={[
        { label: "Services", href: "#services" },
        { label: "Providers", href: "#providers" },
        { label: "Patient Portal", href: "#portal" },
        { label: "New Patients", href: "#new" },
        { label: "Locations", href: "#locations" },
      ]}
      primaryCta={{ label: "Book Appointment", href: "#book" }}
      secondaryCta={{ label: "Patient Login", href: "#portal" }}
      logo={<IconLogo icon={Stethoscope} theme={theme} shape="rounded" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-24 pb-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">Accepting new patients · Most insurance accepted</span>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-sky-950" style={{ fontFamily: theme.fontHeading }}>
              Care that fits<br /><em className="text-sky-700">your schedule.</em>
            </h1>
            <p className="mt-6 max-w-lg text-gray-600 leading-relaxed text-lg">
              Same-day appointments. 24/7 patient portal. AI-powered symptom triage. Real doctors who know your name.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className={cn("inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-lg", theme.accentBg)}>
                Book Appointment <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#portal" className="inline-flex items-center gap-2 rounded-full bg-white text-sky-900 border border-sky-200 px-6 py-3.5 text-sm font-medium hover:bg-sky-50">
                Patient Portal
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[{v:"4.9★",l:"1,200+ reviews"},{v:"<15 min",l:"Avg wait time"},{v:"24/7",l:"Patient portal"}].map(s=>(
                <div key={s.l}><p className="text-2xl font-bold text-sky-950" style={{fontFamily:theme.fontHeading}}>{s.v}</p><p className="text-xs text-gray-500 mt-1">{s.l}</p></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bg-white rounded-3xl shadow-2xl border border-sky-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">Quick Symptom Check</p>
              <p className="mt-2 text-lg font-semibold text-sky-950">What brings you in today?</p>
              <div className="mt-4 space-y-2">
                {["Sore throat / cough", "Annual physical", "Refill prescription", "Mental health check-in"].map((s,i)=>(
                  <button key={s} className={cn("w-full text-left px-4 py-3 rounded-xl text-sm border transition-colors", i===0?"bg-sky-700 text-white border-sky-700":"bg-white border-gray-200 hover:border-sky-400 text-gray-800")}>{s}</button>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-xl bg-sky-50 border border-sky-100">
                <p className="text-xs text-sky-700 font-bold uppercase tracking-wider">AI Triage Suggests</p>
                <p className="text-sm text-sky-950 mt-1">Same-day telehealth visit. Dr. Reyes has 3:45pm available today.</p>
                <button className="mt-3 w-full py-2.5 rounded-full bg-sky-700 text-white text-sm font-medium">Book Telehealth · 3:45pm</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel color={theme.accentText}>Services</SectionLabel>
              <h2 className="text-4xl sm:text-5xl text-sky-950" style={{ fontFamily: theme.fontHeading }}>Comprehensive primary care.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(s => (
              <Reveal key={s.name}>
                <div className="rounded-2xl bg-sky-50/60 border border-sky-100 p-7 hover:bg-white hover:shadow-lg transition-all">
                  <div className="h-10 w-10 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-4"><s.icon className="h-5 w-5" /></div>
                  <p className="text-xl text-sky-950" style={{ fontFamily: theme.fontHeading }}>{s.name}</p>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section id="providers" className="py-24 bg-sky-50/60 border-y border-sky-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel color={theme.accentText}>Our Providers</SectionLabel>
              <h2 className="text-4xl sm:text-5xl text-sky-950" style={{ fontFamily: theme.fontHeading }}>Doctors who know you.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROVIDERS.map(p => (
              <Reveal key={p.name}>
                <div className="rounded-2xl overflow-hidden bg-white border border-sky-100 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-sky-300 via-sky-500 to-sky-800" />
                  <div className="p-5">
                    <p className="text-base font-semibold text-sky-950" style={{ fontFamily: theme.fontHeading }}>{p.name}</p>
                    <p className="text-xs text-sky-700 mt-1 uppercase tracking-wider font-semibold">{p.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{p.years}</p>
                    {p.accepting ? (
                      <p className="text-[11px] mt-3 font-medium text-emerald-700 flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Accepting new patients</p>
                    ) : (
                      <p className="text-[11px] mt-3 font-medium text-amber-700">Waitlist · join below</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAL */}
      <section id="portal" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <Reveal>
            <SectionLabel color={theme.accentText}>Patient Portal</SectionLabel>
            <h2 className="text-4xl sm:text-5xl text-sky-950" style={{ fontFamily: theme.fontHeading }}>Your care, your data.</h2>
            <ul className="mt-6 space-y-3 text-gray-700">
              {["Message your doctor — replies within 24 hrs","Refill prescriptions in one tap","View labs, immunizations, visit notes","Family accounts: manage kids' care","Secure video visits"].map(x => (
                <li key={x} className="flex gap-3"><CheckCircle className="h-5 w-5 text-sky-700 shrink-0 mt-0.5" /><span>{x}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-900 p-7 shadow-2xl text-white">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm font-semibold">Hello, Emma</p>
                <span className="text-xs bg-white/15 px-2.5 py-1 rounded-full">Member since 2021</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider">Next Appointment</p>
                  <p className="mt-1 font-semibold">Annual physical — Dr. Reyes</p>
                  <p className="text-xs text-sky-200 mt-1">Tue, Sep 23 · 10:30am · In-office</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider">Recent Lab Result</p>
                  <p className="mt-1 font-semibold">Lipid Panel — Normal ✓</p>
                  <p className="text-xs text-sky-200 mt-1">Reviewed by Dr. Reyes · Released yesterday</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider">Prescription Refill</p>
                  <p className="mt-1 font-semibold">Lisinopril 10mg — Ready at Walgreens</p>
                  <p className="text-xs text-sky-200 mt-1">Pickup by Fri · Auto-refill enabled</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="py-24 bg-sky-700 text-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>Same-day appointments available.</h2>
            <p className="mt-3 text-sky-100">No long phone hold. Book online in under 60 seconds.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              <a href="#" className="bg-white text-sky-900 rounded-2xl py-4 font-semibold hover:bg-sky-50">In-Person Visit</a>
              <a href="#" className="bg-white text-sky-900 rounded-2xl py-4 font-semibold hover:bg-sky-50">Telehealth</a>
              <a href="#" className="bg-white text-sky-900 rounded-2xl py-4 font-semibold hover:bg-sky-50">New Patient</a>
            </div>
            <p className="mt-6 text-xs text-sky-100">After-hours? Call (602) 555-4400 — nurse triage available 24/7.</p>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Sonoran Health Assistant",
          subtitle: "Triage · Scheduling · Refills",
          greeting: "Hi! I'm Sonoran Medical's AI health assistant. I can triage symptoms, help you book a visit, request refills, or answer insurance questions. How can I help? (Not for medical emergencies — call 911.)",
          quickReplies: ["I have a sore throat", "Book annual physical", "Refill my Rx", "Do you take BCBS?"],
          responses: [
            { match: ["throat", "cough", "cold", "flu", "sick"], reply: "Sounds like a same-day visit is best. I can get you in telehealth today at 3:45pm with Dr. Reyes, or in-office tomorrow at 9am. Which works?" },
            { match: ["physical", "annual", "wellness", "checkup"], reply: "Annual physicals are usually 30 min. Dr. Reyes has Tue 10:30am or Thu 2pm open in the next 2 weeks. I'll send a pre-visit form to fill out." },
            { match: ["refill", "prescription", "rx", "medication"], reply: "Easy. Tell me the medication name and your pharmacy — I'll route the request to your provider. Most refills approved within 4 business hours." },
            { match: ["insurance", "bcbs", "blue cross", "aetna", "cigna", "united"], reply: "Yes — we accept BCBS, Aetna, Cigna, UnitedHealthcare, Humana, and Medicare. Self-pay rate is $135/visit. Want me to verify your specific plan?" },
            { match: ["new patient", "new", "first time"], reply: "Welcome! New patient visits are 45 min and include a full intake. Bring photo ID + insurance card. Dr. O'Brien is taking new patients with openings next week." },
          ],
          fallback: "I can help with symptoms, scheduling, refills, billing, or finding a provider. What do you need? For emergencies, please call 911.",
          accentBg: "bg-sky-700",
          accentText: "text-sky-700",
          buttonLabel: "Ask Sonoran Health",
        }}
      />
    </DemoShell>
  );
}
