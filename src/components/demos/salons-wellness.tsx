import { useState } from "react";
import { Flower2, Scissors, Sparkles, Heart, Calendar, Clock, Star, MapPin, ChevronRight } from "lucide-react";
import { DemoShell, MonogramLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-rose-600",
  accentBg: "bg-rose-500",
  accentSoft: "bg-rose-50",
  logoFrom: "#F472B6",
  logoTo: "#9D174D",
  fontBody: "'Nunito', sans-serif",
  fontHeading: "'Cormorant Garamond', serif",
  pageBg: "#FBF7F5",
  pageFg: "#2A1820",
};

const SERVICES = [
  { category: "Hair", items: [
    { name: "Signature Cut & Style", time: "60 min", price: "$95" },
    { name: "Single-Process Color", time: "90 min", price: "$140" },
    { name: "Balayage / Highlights", time: "3 hr", price: "$285+" },
    { name: "Brazilian Smoothing", time: "2.5 hr", price: "$320" },
  ]},
  { category: "Skin & Face", items: [
    { name: "Signature Facial", time: "60 min", price: "$135" },
    { name: "Microneedling", time: "75 min", price: "$280" },
    { name: "Dermaplane + Mask", time: "45 min", price: "$95" },
    { name: "LED Light Therapy", time: "30 min", price: "$65" },
  ]},
  { category: "Lash & Brow", items: [
    { name: "Lash Lift + Tint", time: "60 min", price: "$95" },
    { name: "Volume Lash Set", time: "2.5 hr", price: "$220" },
    { name: "Brow Lamination", time: "45 min", price: "$85" },
    { name: "Microblading (Initial)", time: "2 hr", price: "$450" },
  ]},
];

const STYLISTS = [
  { name: "Sienna Rivera", title: "Master Colorist", specialty: "Balayage · Dimensional Color", books: "Booking 3 weeks out", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80" },
  { name: "Maya Thornton", title: "Lead Stylist", specialty: "Precision Cuts · Curls", books: "Booking 1 week out", img: "https://images.unsplash.com/photo-1614287859820-7d3eeae8d29d?auto=format&fit=crop&w=600&q=80" },
  { name: "Dr. Lena Park", title: "Lead Esthetician", specialty: "Anti-aging · Acne", books: "Booking 2 weeks out", img: "https://images.unsplash.com/photo-1592621385612-4d7129426394?auto=format&fit=crop&w=600&q=80" },
  { name: "Ava Kohler", title: "Lash Specialist", specialty: "Volume · Wispy Sets", books: "Booking 5 days out", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80" },
];

const MEMBERSHIPS = [
  { tier: "Glow", price: "$89/mo", perks: ["1 facial credit/mo", "10% off retail", "Free brow shape"], featured: false },
  { tier: "Radiance", price: "$179/mo", perks: ["1 facial + 1 lash fill/mo", "15% off retail", "Birthday cocktail bar visit", "Priority booking"], featured: true },
  { tier: "Oasis VIP", price: "$349/mo", perks: ["Unlimited facials", "Free color refresh quarterly", "20% off all services", "Exclusive product previews"], featured: false },
];

export default function SalonsWellnessDemo() {
  const [cat, setCat] = useState("Hair");

  return (
    <DemoShell
      slug="salons-wellness"
      brandName="Oasis Studio"
      tagline="Luxe hair, skin, and lash studio in Old Town Scottsdale."
      phone="(480) 555-3344"
      city="Scottsdale, Arizona"
      navLinks={[
        { label: "Services", href: "#services" },
        { label: "Stylists", href: "#stylists" },
        { label: "Book Now", href: "#book" },
        { label: "Memberships", href: "#memberships" },
        { label: "Gallery", href: "#gallery" },
      ]}
      primaryCta={{ label: "Book Now", href: "#book" }}
      secondaryCta={{ label: "Gift Cards", href: "#" }}
      logo={<MonogramLogo initials="OS" theme={theme} shape="circle" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 30%, #F9A8D4 60%, #FBCFE8 100%)" }} />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, rgba(244,114,182,0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(157,23,77,0.3) 0%, transparent 50%)" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-700 font-medium">Est. 2016 · Award-Winning · Scottsdale's Best 2024</p>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-rose-950" style={{ fontFamily: theme.fontHeading }}>
              Be your most<br /><em>radiant self.</em>
            </h1>
            <p className="mt-6 max-w-lg text-rose-950/70 leading-relaxed text-lg">
              A modern oasis for hair, skin, and lash treatments. Curated by Scottsdale's top stylists and estheticians.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className={cn("inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-lg", theme.accentBg)}>
                Book Your Appointment <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#memberships" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur text-rose-900 border border-rose-200 px-6 py-3.5 text-sm font-medium hover:bg-white transition-colors">
                Explore Memberships
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-rose-900/80">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-rose-500 text-rose-500" /> 4.9 · 612 reviews</span>
              <span className="flex items-center gap-1.5"><Heart className="h-4 w-4" /> 1,400+ members</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Old Town Scottsdale</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85" alt="Oasis Studio interior" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white shadow-xl p-4 max-w-[200px]">
                <p className="text-[10px] uppercase tracking-wider text-rose-600 font-bold">Most Booked</p>
                <p className="mt-1 text-sm font-medium text-gray-900">Balayage + Cut</p>
                <p className="text-xs text-gray-500">From $325 · 3.5 hrs</p>
              </div>
              <div className="absolute -top-4 -right-4 rounded-full bg-white shadow-lg px-4 py-3">
                <p className="text-xs font-medium text-gray-900">✨ 23 stylists available this week</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE MENU */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel color={theme.accentText}>Service Menu</SectionLabel>
              <h2 className="text-5xl text-rose-950" style={{ fontFamily: theme.fontHeading }}>Treatments & rituals.</h2>
            </div>
          </Reveal>
          <div className="flex justify-center gap-2 mb-10">
            {SERVICES.map((s) => (
              <button key={s.category} onClick={() => setCat(s.category)} className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-full transition-all",
                cat === s.category ? cn("text-white", theme.accentBg) : "bg-white text-rose-900 border border-rose-200 hover:bg-rose-50",
              )}>{s.category}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {SERVICES.find((s) => s.category === cat)?.items.map((item) => (
              <Reveal key={item.name}>
                <div className="border-b border-rose-100 pb-5 group">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl text-rose-950" style={{ fontFamily: theme.fontHeading }}>{item.name}</h3>
                    <span className="text-rose-700 font-medium">{item.price}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs text-rose-900/60 flex items-center gap-1.5"><Clock className="h-3 w-3" /> {item.time}</p>
                    <a href="#book" className="text-xs font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">Book →</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section id="book" className="py-24 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <SectionLabel color={theme.accentText}>Book Online</SectionLabel>
              <h2 className="text-5xl text-rose-950" style={{ fontFamily: theme.fontHeading }}>Choose your moment.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl shadow-xl p-7 border border-rose-100">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2 block">Service</label>
                  <select className="w-full h-11 rounded-lg border border-rose-200 px-3 text-sm">
                    <option>Signature Cut & Style</option>
                    <option>Balayage</option>
                    <option>Signature Facial</option>
                    <option>Lash Lift + Tint</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2 block">Stylist</label>
                  <select className="w-full h-11 rounded-lg border border-rose-200 px-3 text-sm">
                    <option>Any available</option>
                    {STYLISTS.map(s => <option key={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-2 block">Date</label>
                  <div className="h-11 rounded-lg border border-rose-200 px-3 flex items-center text-sm gap-2"><Calendar className="h-4 w-4 text-rose-600" /> Sat, Jun 13</div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-700 mb-3">Available Times</p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {["9:00", "10:30", "12:00", "1:30", "3:00", "4:30"].map((t, i) => (
                    <button key={t} className={cn(
                      "py-2.5 rounded-lg text-sm font-medium border transition-colors",
                      i === 2 ? "bg-rose-500 text-white border-rose-500" : "bg-white border-rose-200 text-rose-900 hover:bg-rose-50",
                    )}>{t}</button>
                  ))}
                </div>
              </div>
              <button className={cn("mt-6 w-full h-12 rounded-full text-white font-medium", theme.accentBg)}>Continue to Confirm — Sat 12:00pm with Sienna</button>
              <p className="text-center text-xs text-rose-900/60 mt-3">Auto-reminders at 48h, 24h, and 2h before your appointment.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STYLISTS */}
      <section id="stylists" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel color={theme.accentText}>Our Team</SectionLabel>
              <h2 className="text-5xl text-rose-950" style={{ fontFamily: theme.fontHeading }}>The artists.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STYLISTS.map((s) => (
              <Reveal key={s.name}>
                <div className="rounded-3xl overflow-hidden bg-white border border-rose-100 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img src={s.img} alt={s.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-lg text-rose-950" style={{ fontFamily: theme.fontHeading }}>{s.name}</p>
                    <p className="text-xs text-rose-600 font-semibold uppercase tracking-wider mt-1">{s.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{s.specialty}</p>
                    <p className="text-[11px] text-rose-700 mt-3 font-medium">{s.books}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-rose-50/40 border-y border-rose-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel color={theme.accentText}>Before & After</SectionLabel>
              <h2 className="text-5xl text-rose-950" style={{ fontFamily: theme.fontHeading }}>Client transformations.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array(12).fill(0).map((_, i) => (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <div className={cn(
                  "aspect-square rounded-2xl bg-gradient-to-br relative overflow-hidden",
                  i % 4 === 0 ? "from-rose-300 to-pink-500" :
                  i % 4 === 1 ? "from-fuchsia-400 to-rose-600" :
                  i % 4 === 2 ? "from-pink-200 to-rose-400" :
                  "from-rose-400 to-fuchsia-500",
                )}>
                  <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.3), transparent 50%)" }} />
                  <div className="absolute bottom-2 right-2 text-[9px] bg-white/90 px-1.5 py-0.5 rounded text-rose-700 font-bold">B/A</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section id="memberships" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel color={theme.accentText}>Memberships</SectionLabel>
              <h2 className="text-5xl text-rose-950" style={{ fontFamily: theme.fontHeading }}>The Oasis Circle.</h2>
              <p className="mt-4 text-gray-600">Monthly perks for your most loyal self-care ritual.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {MEMBERSHIPS.map((m) => (
              <Reveal key={m.tier}>
                <div className={cn(
                  "rounded-3xl p-7 border-2 h-full flex flex-col",
                  m.featured ? "bg-gradient-to-br from-rose-500 to-pink-600 text-white border-rose-500 shadow-2xl scale-[1.04]" : "bg-white border-rose-100",
                )}>
                  <p className={cn("text-xs uppercase tracking-wider font-bold", m.featured ? "text-rose-100" : "text-rose-600")}>{m.tier}</p>
                  <p className="mt-3 text-4xl" style={{ fontFamily: theme.fontHeading }}>{m.price}</p>
                  <ul className="mt-5 space-y-2.5 text-sm flex-1">
                    {m.perks.map(p => <li key={p} className="flex gap-2"><Sparkles className="h-4 w-4 shrink-0 mt-0.5" />{p}</li>)}
                  </ul>
                  <button className={cn("mt-6 w-full rounded-full py-3 text-sm font-medium", m.featured ? "bg-white text-rose-600" : "bg-rose-500 text-white")}>Join {m.tier}</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Oasis Style Concierge",
          subtitle: "Recommendations, booking, gift cards",
          greeting: "Hi gorgeous ✨ I'm Oasis's AI style concierge. I can recommend the right service for what you want, match you to a stylist, or get you booked. What are you in the mood for?",
          quickReplies: ["What balayage costs", "Best for first-time facial?", "Wedding hair trial", "Gift card for mom"],
          responses: [
            { match: ["balayage", "highlights", "color"], reply: "Balayage starts at $285 and takes about 3 hours. Sienna is our master colorist for dimensional work — she's booking 3 weeks out. Want me to hold a Saturday slot?" },
            { match: ["facial", "skin", "acne", "anti-age"], reply: "For a first-time facial I'd recommend the Signature Facial ($135, 60 min) — Dr. Lena does a full skin assessment and customizes from there. Bookings open this Friday." },
            { match: ["wedding", "bridal", "prom", "event"], reply: "We do bridal trials ($120, credited back if you book the wedding-day service). For the day-of, our package is $185 plus $95 per bridesmaid. Want me to send our bridal lookbook?" },
            { match: ["lash", "extension", "fill"], reply: "Full volume set is $220 (~2.5 hrs). Fills run $85–$110 depending on how long it's been. Ava is our lash artist — she's booking 5 days out." },
            { match: ["gift", "card"], reply: "Gift cards in any amount, delivered digitally or printed at the front desk. Popular gifts: $135 facial, $95 lash lift, or $200 'choose your treatment.' Want me to send a link?" },
            { match: ["member", "join", "price", "monthly"], reply: "We have 3 tiers: Glow ($89/mo, 1 facial), Radiance ($179/mo, facial + lash fill + priority booking), and Oasis VIP ($349/mo, unlimited facials). All members get 10–20% off retail." },
            { match: ["cancel", "reschedule", "policy"], reply: "No problem — you can reschedule from your confirmation text up to 24 hours before. Less than 24 hours we keep a 50% deposit. Want me to send your reschedule link?" },
          ],
          fallback: "Let me get you to the right person! Can you tell me a bit more about what kind of service or look you're going for?",
          accentBg: "bg-rose-500",
          accentText: "text-rose-600",
          buttonLabel: "Style Concierge",
        }}
      />
    </DemoShell>
  );
}