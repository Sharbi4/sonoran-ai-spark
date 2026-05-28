import { Scale, Shield, Briefcase, Users, FileText, Phone, Award, ChevronRight, Clock, MapPin } from "lucide-react";
import { DemoShell, MonogramLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-[#1B3A6B]",
  accentBg: "bg-[#1B3A6B]",
  accentSoft: "bg-blue-50",
  logoFrom: "#1B3A6B",
  logoTo: "#0A1D3D",
  fontBody: "'Inter', sans-serif",
  fontHeading: "'Playfair Display', serif",
  pageBg: "#FAFAF7",
  pageFg: "#0F1A2E",
};

const PRACTICES = [
  { icon: Shield, name: "Personal Injury", desc: "Auto accidents, premises liability, wrongful death — no fee unless we win.", cases: "1,800+ cases" },
  { icon: Users, name: "Family Law", desc: "Divorce, custody, support modifications. Compassionate, decisive counsel.", cases: "Since 2009" },
  { icon: FileText, name: "Estate Planning", desc: "Wills, trusts, probate, and powers of attorney for Arizona families.", cases: "$420M+ protected" },
  { icon: Briefcase, name: "Business Law", desc: "Formation, contracts, disputes, and acquisitions for AZ small businesses.", cases: "200+ clients" },
  { icon: Scale, name: "Criminal Defense", desc: "DUI, misdemeanors, felonies. Aggressive representation at every stage.", cases: "24/7 available" },
  { icon: Award, name: "Civil Litigation", desc: "Trial-ready advocacy for commercial, real estate, and consumer disputes.", cases: "Trial-tested" },
];

const ATTORNEYS = [
  { name: "Margaret R. Ellison, Esq.", role: "Managing Partner", bar: "AZ Bar · 2002", focus: "Personal Injury · Trial", quote: "Every case is personal. Every client matters.", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  { name: "David Chen, J.D.", role: "Senior Partner", bar: "AZ + CA Bar", focus: "Business · Commercial Litigation", quote: "Prepared. Persistent. Unflinching at trial.", photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" },
  { name: "Sofia Vega, Esq.", role: "Partner", bar: "AZ Bar · 2011", focus: "Family Law · Mediation", quote: "Resolution over conflict, when possible.", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" },
  { name: "James A. Whitlock", role: "Of Counsel", bar: "AZ Bar · 1989", focus: "Estate Planning · Probate", quote: "Plan once. Protect for generations.", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
];

const RESULTS = [
  { amount: "$4.2M", type: "Truck Accident Verdict", year: "2024" },
  { amount: "$1.8M", type: "Premises Liability Settlement", year: "2024" },
  { amount: "$960K", type: "Wrongful Termination", year: "2023" },
  { amount: "$2.1M", type: "Medical Malpractice", year: "2023" },
];

export default function LawFirmsDemo() {
  return (
    <DemoShell
      slug="law-firms"
      brandName="Ellison & Chen"
      tagline="Arizona attorneys for personal injury, family law, and business matters."
      phone="(520) 555-2200"
      city="Tucson, Arizona"
      navLinks={[
        { label: "Practice Areas", href: "#practice" },
        { label: "Attorneys", href: "#attorneys" },
        { label: "Case Results", href: "#results" },
        { label: "Resources", href: "#resources" },
        { label: "Contact", href: "#contact" },
      ]}
      primaryCta={{ label: "Free Case Evaluation", href: "#contact" }}
      secondaryCta={{ label: "Client Portal", href: "#portal" }}
      logo={<MonogramLogo initials="EC" theme={theme} shape="shield" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, #0A1D3D 0%, #1B3A6B 60%, #2C5588 100%)" }} />
        <img
          aria-hidden
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(10,29,61,0.55) 0%, rgba(10,29,61,0.85) 100%)" }} />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M0 50h100M50 0v100' stroke='white' stroke-opacity='0.05'/></svg>\")", backgroundSize: "40px 40px" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-24 text-white grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Tucson · Phoenix · Established 2002</p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]" style={{ fontFamily: theme.fontHeading }}>
              Trusted counsel.<br /> Trial-tested results.
            </h1>
            <p className="mt-6 max-w-xl text-white/80 leading-relaxed">
              Two decades representing Arizona individuals, families, and businesses. We pair big-firm capability with the responsiveness of a Tucson practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white text-[#1B3A6B] px-6 py-3.5 text-sm font-semibold">
                Free Case Evaluation <ChevronRight className="h-4 w-4" />
              </a>
              <a href="tel:+15205552200" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
                <Phone className="h-4 w-4" /> (520) 555-2200 · 24/7
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-blue-100">
              <span className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5" /> Super Lawyers · 2018–2025</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> Avvo 10.0 Rated</span>
              <span className="flex items-center gap-1.5"><Scale className="h-3.5 w-3.5" /> AV Preeminent</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-xl bg-white text-gray-900 shadow-2xl p-7">
              <p className="text-xs uppercase tracking-wider text-[#1B3A6B] font-semibold">Free Case Evaluation</p>
              <p className="mt-1 text-sm text-gray-500">Confidential · No obligation · Responds in under 1 hour during business hours</p>
              <div className="mt-5 space-y-3">
                <select className="w-full h-11 rounded-md border border-gray-200 px-3 text-sm">
                  <option>What is your case about?</option>
                  <option>Personal Injury</option>
                  <option>Family Law</option>
                  <option>Estate Planning</option>
                  <option>Business / Litigation</option>
                  <option>Criminal Defense</option>
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Full Name" className="h-11 rounded-md border border-gray-200 px-3 text-sm" />
                  <input placeholder="Phone" className="h-11 rounded-md border border-gray-200 px-3 text-sm" />
                </div>
                <input placeholder="Email" className="w-full h-11 rounded-md border border-gray-200 px-3 text-sm" />
                <textarea placeholder="Briefly describe your situation..." className="w-full h-24 rounded-md border border-gray-200 px-3 py-2 text-sm" />
                <button className={cn("w-full h-12 rounded-md text-white text-sm font-semibold", theme.accentBg)}>Request Free Evaluation</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS BAR */}
      <section id="results" className="bg-[#0F1A2E] text-white py-10 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {RESULTS.map((r) => (
            <Reveal key={r.type}>
              <div className="text-center">
                <p className="text-3xl font-semibold" style={{ fontFamily: theme.fontHeading }}>{r.amount}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-blue-200">{r.type}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{r.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-[10px] text-white/40 mt-6">Past results do not guarantee future outcomes.</p>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel color={theme.accentText}>Practice Areas</SectionLabel>
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>How we serve Arizona.</h2>
              <p className="mt-4 text-gray-600">From a first DUI to a multi-million-dollar verdict, our team brings the same diligence and discretion to every matter.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRACTICES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <a href="#contact" className="block group h-full border border-gray-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-md">
                  <div className={cn("h-11 w-11 rounded-md flex items-center justify-center", theme.accentSoft)}>
                    <p.icon className={cn("h-5 w-5", theme.accentText)} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-xl text-gray-900" style={{ fontFamily: theme.fontHeading }}>{p.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                  <p className={cn("mt-4 text-xs font-semibold", theme.accentText)}>{p.cases} →</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ATTORNEYS */}
      <section id="attorneys" className="py-24 bg-[#FAFAF7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel color={theme.accentText}>Our Attorneys</SectionLabel>
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>The team in your corner.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ATTORNEYS.map((a) => (
              <Reveal key={a.name}>
                <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                  <div className="aspect-[4/5] bg-slate-800 relative overflow-hidden">
                    <img src={a.photo} alt={a.name} className="absolute inset-0 h-full w-full object-cover grayscale" loading="lazy" />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent h-3/5" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] uppercase tracking-wider text-blue-200">{a.role}</p>
                      <p className="mt-1 text-base font-semibold leading-tight" style={{ fontFamily: theme.fontHeading }}>{a.name}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-500">{a.bar}</p>
                    <p className="text-xs font-medium text-gray-900 mt-1">{a.focus}</p>
                    <p className="mt-3 text-sm text-gray-600 italic leading-relaxed">"{a.quote}"</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel color={theme.accentText}>Client Resources</SectionLabel>
                <h2 className="text-4xl text-gray-900" style={{ fontFamily: theme.fontHeading }}>Free legal guides for Arizona.</h2>
                <p className="mt-4 text-gray-600">Download our PI claim checklist, divorce timeline, or estate planning workbook. No email required.</p>
              </div>
              <div className="space-y-3">
                {[
                  { title: "After a Car Accident: 7-Day Action Plan", type: "PDF · 12 pages" },
                  { title: "Arizona Divorce Timeline & Cost Guide", type: "PDF · 18 pages" },
                  { title: "Small Business Formation Checklist", type: "PDF · 8 pages" },
                ].map((g) => (
                  <a key={g.title} href="#" className="flex items-center justify-between p-5 border border-gray-200 rounded-md bg-white hover:border-[#1B3A6B] transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{g.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{g.type}</p>
                    </div>
                    <FileText className={cn("h-5 w-5", theme.accentText)} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#0F1A2E] text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionLabel color="text-blue-300">Speak with an Attorney</SectionLabel>
            <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>Your free consultation.</h2>
            <p className="mt-4 text-white/70">Tell us what happened. We'll get back to you within one business hour with next steps.</p>
            <div className="mt-8 space-y-5 text-white/80">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-300" /> (520) 555-2200 · 24/7 for urgent matters</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-300" /> 200 W Congress St, Suite 1400, Tucson, AZ 85701</p>
              <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-blue-300" /> Mon–Fri 8am–6pm · Weekends by appointment</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white text-gray-900 p-7 rounded-md">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="First Name" className="h-11 rounded-md border border-gray-200 px-3 text-sm" />
                  <input placeholder="Last Name" className="h-11 rounded-md border border-gray-200 px-3 text-sm" />
                </div>
                <input placeholder="Email" className="w-full h-11 rounded-md border border-gray-200 px-3 text-sm" />
                <input placeholder="Phone" className="w-full h-11 rounded-md border border-gray-200 px-3 text-sm" />
                <select className="w-full h-11 rounded-md border border-gray-200 px-3 text-sm">
                  <option>Practice area</option>
                  {PRACTICES.map((p) => <option key={p.name}>{p.name}</option>)}
                </select>
                <textarea placeholder="Briefly describe your matter..." className="w-full h-28 rounded-md border border-gray-200 px-3 py-2 text-sm" />
                <button className={cn("w-full h-12 rounded-md text-white text-sm font-semibold", theme.accentBg)}>Submit Free Evaluation</button>
                <p className="text-[10px] text-gray-500 text-center">Submitting this form does not create an attorney-client relationship.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Legal Intake Assistant",
          subtitle: "Confidential · 24/7",
          greeting: "Hi, I'm the Ellison & Chen intake assistant. I can help triage your matter and connect you with the right attorney. What kind of case do you need help with?",
          quickReplies: ["Car accident", "Divorce / custody", "Make a will", "Business contract"],
          responses: [
            { match: ["car", "accident", "crash", "injur", "pi", "personal injury"], reply: "I'm sorry that happened. A few quick questions: was the accident in the last 30 days, did anyone need medical care, and was a police report filed? We handle PI on contingency — no fee unless we win. I'll route you to Margaret's team for a free evaluation." },
            { match: ["divorce", "custody", "child support", "family"], reply: "Sofia leads our family practice. We can start with a confidential consultation to map out timeline, custody options, and fees. Would you prefer a phone or in-person meeting?" },
            { match: ["will", "estate", "trust", "probate"], reply: "James handles estate planning. Most clients begin with a 45-minute strategy session ($0 for first consult). We can prep a will, trust, and powers of attorney in 2–3 weeks." },
            { match: ["business", "contract", "llc", "partner"], reply: "David handles business law: formation, contracts, litigation. We work on flat-fee for most formation/contract work, hourly or contingency for disputes. What stage is your business at?" },
            { match: ["dui", "criminal", "arrest", "charge"], reply: "Criminal matters are time-sensitive — we offer 24/7 emergency consults. Don't speak to investigators before you speak with counsel. Want me to page our on-call attorney now?" },
            { match: ["cost", "fee", "price", "how much"], reply: "Fees depend on the matter: PI is contingency (no win, no fee), family/business is hourly with retainer, estate planning is flat-fee. Initial consultations are always free." },
          ],
          fallback: "Got it. I'll flag this for an attorney. To move faster, can you share what kind of legal issue you're dealing with — injury, family, business, estate, or criminal?",
          accentBg: "bg-[#1B3A6B]",
          accentText: "text-[#1B3A6B]",
          buttonLabel: "Free Intake Chat",
        }}
      />
    </DemoShell>
  );
}