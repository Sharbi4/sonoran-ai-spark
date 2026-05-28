import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustryTemplate } from "@/components/industry-template";
import { INDUSTRIES, INDUSTRY_MOCKUPS, INDUSTRY_SLUGS, type IndustrySlug } from "@/lib/industries-content";

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
  return <IndustryTemplate content={ind} mockup={INDUSTRY_MOCKUPS[slug as IndustrySlug]} />;
}