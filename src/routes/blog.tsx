import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SiteLayout, Section, FinalCTA, Accent } from "@/components/site-layout";
import { BLOG_POSTS } from "@/lib/blog/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "AI Blog | Business AI Insights for Tucson, Phoenix & Arizona — Sonoran Systems & AI" },
      {
        name: "description",
        content:
          "Expert AI insights for Arizona businesses — automation strategies, workflow optimization, AI implementation guides & process excellence tips. Tucson, Phoenix, Flagstaff & beyond.",
      },
      { property: "og:title", content: "AI Blog — Sonoran Systems & AI | Tucson AZ" },
      {
        property: "og:description",
        content:
          "Practical AI insights, automation strategies & business intelligence guides for Tucson, Phoenix, Flagstaff & Arizona businesses.",
      },
      { property: "og:type", content: "blog" },
      { property: "og:url", content: "https://sonoransystemsai.com/blog" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Blog,
});

const [FEATURED_POST, ...REST_POSTS] = BLOG_POSTS;

function Blog() {
  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">AI Blog</p>
          <h1 className="mt-3 font-serif font-bold text-4xl sm:text-5xl leading-[1.05]">
            Insights on <Accent>AI</Accent>, automation, and <Accent color="sage">business growth</Accent>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Practical guides, strategy deep-dives, and real-world case studies on how AI and
            process excellence drive measurable results for businesses.
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      <Section>
        <Link to="/posts/$slug" params={{ slug: FEATURED_POST.slug }} className="block group rounded-3xl bg-gradient-to-br from-copper/5 via-cream to-sage/5 border border-sand p-8 sm:p-12 hover:border-copper/40 transition-colors">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-copper uppercase tracking-wider bg-copper/10 px-3 py-1 rounded-full">
                Featured
              </span>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl leading-tight group-hover:text-copper transition-colors">
                {FEATURED_POST.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {FEATURED_POST.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {FEATURED_POST.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {FEATURED_POST.readTime}
                </span>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-copper/80 transition-colors cursor-pointer">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="md:col-span-2 flex items-center justify-center">
              <img src={FEATURED_POST.heroImage} alt={FEATURED_POST.title} className="w-full aspect-square rounded-2xl object-cover border border-sand" loading="lazy" />
            </div>
          </div>
        </Link>
      </Section>

      {/* Blog Grid */}
      <Section className="bg-card/50 border-y border-sand">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Latest Articles</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Stay ahead of the curve</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REST_POSTS.map((post) => (
            <Link
              key={post.slug}
              to="/posts/$slug"
              params={{ slug: post.slug }}
              className="group rounded-2xl bg-card border border-sand overflow-hidden hover:shadow-lg hover:border-copper/20 transition-all duration-300"
            >
              <img src={post.heroImage} alt={post.title} className="w-full aspect-[16/9] object-cover" loading="lazy" />
              <div className="p-6">
                <span className="text-xs font-medium text-copper uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="mt-3 font-serif text-lg leading-snug group-hover:text-copper transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Stay Updated</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Get AI insights delivered weekly</h2>
          <p className="mt-3 text-muted-foreground">
            Join Arizona business owners who receive our weekly digest on AI tools,
            automation strategies, and growth tactics.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@business.com"
              className="w-full px-4 py-3 rounded-xl border border-sand bg-card text-sm focus:outline-none focus:ring-2 focus:ring-copper/30 focus:border-copper transition-all"
            />
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-copper text-white text-sm font-medium hover:bg-copper/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
        </div>
      </Section>

      <FinalCTA headline="Ready to implement AI in your business?" sub="Book a $250 Strategy Call with our team." />
    </SiteLayout>
  );
}
