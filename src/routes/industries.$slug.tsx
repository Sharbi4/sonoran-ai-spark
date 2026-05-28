import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustryTemplate, type DemoInfo } from "@/components/industry-template";
import { INDUSTRIES, INDUSTRY_MOCKUPS, INDUSTRY_SLUGS, type IndustrySlug } from "@/lib/industries-content";

const DEMO_INFO: Record<string, DemoInfo> = {
  "law-firms": { brandName: "Ellison & Chen", stats: [{ value: "74%", label: "Faster Intake" }, { value: "4 min", label: "Avg Response Time" }, { value: "$22K", label: "Monthly Revenue Gain" }, { value: "98%", label: "Lead Capture Rate" }] },
  contractors: { brandName: "Summit Builders", stats: [{ value: "43%", label: "More Jobs Booked" }, { value: "100%", label: "Follow-Up Rate" }, { value: "73%", label: "Revenue Growth" }, { value: "38%", label: "Close Rate" }] },
  restaurants: { brandName: "Copper Canyon Grill", stats: [{ value: "31%", label: "Revenue Growth" }, { value: "139%", label: "Catering Revenue Up" }, { value: "0 min", label: "Manual Reporting" }, { value: "95%", label: "Reviews Answered" }] },
  "salons-wellness": { brandName: "Oasis Studio", stats: [{ value: "22%", label: "Rebook Rate Increase" }, { value: "62%", label: "Retention Rate" }, { value: "$148", label: "Avg Ticket" }, { value: "61%", label: "Review Response Rate" }] },
  "real-estate": { brandName: "Sonoran Realty Group", stats: [{ value: "184", label: "Active Leads" }, { value: "$4.2M", label: "Pipeline Volume" }, { value: "24%", label: "Lead → Appointment" }, { value: "$112K", label: "Projected GCI" }] },
  "consultants-coaches": { brandName: "Atlas Advisory", stats: [{ value: "14", label: "Active Clients" }, { value: "$28.4K", label: "Monthly Revenue" }, { value: "48h", label: "Proposal to Signature" }, { value: "6 hrs", label: "Admin Time Saved/Week" }] },
  "doctors-medical": { brandName: "Sonoran Medical Group", stats: [{ value: "34%", label: "Fewer No-Shows" }, { value: "2+ hrs", label: "Staff Time Saved Daily" }, { value: "92", label: "Patient NPS Score" }, { value: "82%", label: "Digital Check-In Rate" }] },
  "financial-advisors": { brandName: "Pinnacle Wealth", stats: [{ value: "$42.8M", label: "AUM Managed" }, { value: "4 days", label: "Avg Onboarding Time" }, { value: "186", label: "Active Clients" }, { value: "18%", label: "Revenue Growth YTD" }] },
  "political-campaigns": { brandName: "Maria Vasquez for Arizona", stats: [{ value: "$284K", label: "Donations Raised" }, { value: "342", label: "Active Volunteers" }, { value: "8,420", label: "Doors Knocked" }, { value: "34%", label: "Email Open Rate" }] },
  "small-business-teams": { brandName: "Team Command", stats: [{ value: "18 min", label: "Avg Response Time" }, { value: "42", label: "Active Leads" }, { value: "14%", label: "Revenue Growth" }, { value: "8 hrs", label: "Admin Time Saved/Week" }] },
};

export const Route = createFileRoute("/industries/$slug")({
  beforeLoad: ({ params }) => {
    if (!(INDUSTRY_SLUGS as readonly string[]).includes(params.slug)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const slug = params.slug as IndustrySlug;
    const ind = INDUSTRIES[slug];
    if (!ind) return { meta: [{ title: "Industry — Sonoran Systems & AI" }] };
    const title = `${ind.label} — Sonoran Systems & AI`;
    return {
      meta: [
        { title },
        { name: "description", content: ind.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: ind.intro },
        { property: "og:url", content: `/industries/${slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl">Industry not found</h1>
      <p className="mt-4 text-muted-foreground">
        Check the URL or visit our <a href="/industries" className="text-copper underline">industries overview</a>.
      </p>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl">Something went wrong</h1>
      <button onClick={reset} className="mt-6 rounded-full bg-copper px-5 py-2.5 text-copper-foreground text-sm">
        Try again
      </button>
    </div>
  ),
  component: IndustryDetailPage,
});

function IndustryDetailPage() {
  const { slug } = Route.useParams();
  const ind = INDUSTRIES[slug as IndustrySlug];
  return (
    <IndustryTemplate
      content={ind}
      mockup={INDUSTRY_MOCKUPS[slug as IndustrySlug]}
      slug={slug}
      demoInfo={DEMO_INFO[slug]}
    />
  );
}