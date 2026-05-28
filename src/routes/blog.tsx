import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight, Brain, Workflow, BarChart3, Bot, Sparkles, TrendingUp } from "lucide-react";
import { SiteLayout, Section, FinalCTA, Accent } from "@/components/site-layout";

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

const FEATURED_POST = {
  slug: "ai-automation-small-business-2025",
  title: "How AI Automation Is Transforming Small Business Operations in 2025",
  excerpt:
    "From intelligent lead capture to automated follow-ups, discover how Arizona businesses are leveraging AI to save 15+ hours per week and increase revenue by 40%.",
  category: "AI Strategy",
  date: "May 25, 2025",
  readTime: "8 min read",
  icon: Brain,
};

const BLOG_POSTS = [
  {
    slug: "workflow-automation-roi",
    title: "The ROI of Workflow Automation: What Arizona Business Owners Need to Know",
    excerpt:
      "We break down the real numbers behind automation — how much it costs, how fast it pays off, and which processes to automate first for maximum impact.",
    category: "Automation",
    date: "May 20, 2025",
    readTime: "6 min read",
    icon: Workflow,
  },
  {
    slug: "ai-chatbots-customer-service",
    title: "AI Chatbots vs. Traditional Customer Service: A Cost-Benefit Analysis",
    excerpt:
      "AI-powered chatbots can handle 80% of routine inquiries instantly. Here's how to implement one without losing the personal touch your customers expect.",
    category: "AI Tools",
    date: "May 15, 2025",
    readTime: "7 min read",
    icon: Bot,
  },
  {
    slug: "business-intelligence-dashboards",
    title: "5 Business Intelligence Dashboards Every Growing Company Needs",
    excerpt:
      "Stop guessing and start knowing. These five dashboard types give you real-time visibility into revenue, operations, marketing, and team performance.",
    category: "Dashboards",
    date: "May 10, 2025",
    readTime: "5 min read",
    icon: BarChart3,
  },
  {
    slug: "process-excellence-ai-era",
    title: "Process Excellence in the AI Era: Combining 50 Years of Methodology with Modern Tech",
    excerpt:
      "Lean, Six Sigma, and systems thinking aren't dead — they're supercharged by AI. Learn how process excellence principles guide smarter automation.",
    category: "Process Design",
    date: "May 5, 2025",
    readTime: "9 min read",
    icon: Sparkles,
  },
  {
    slug: "email-automation-sequences",
    title: "Email Automation That Actually Converts: Sequences for Service Businesses",
    excerpt:
      "Generic drip campaigns don't work anymore. Here are the AI-optimized email sequences that turn leads into booked appointments for service businesses.",
    category: "Email Marketing",
    date: "Apr 28, 2025",
    readTime: "6 min read",
    icon: TrendingUp,
  },
  {
    slug: "ai-implementation-mistakes",
    title: "7 AI Implementation Mistakes That Cost Businesses Thousands",
    excerpt:
      "Most AI projects fail not because of the technology, but because of poor planning. Avoid these common pitfalls to ensure your AI investment pays off.",
    category: "AI Strategy",
    date: "Apr 22, 2025",
    readTime: "7 min read",
    icon: Brain,
  },
];

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
        <div className="rounded-3xl bg-gradient-to-br from-copper/5 via-cream to-sage/5 border border-sand p-8 sm:p-12">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-copper uppercase tracking-wider bg-copper/10 px-3 py-1 rounded-full">
                Featured
              </span>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl leading-tight">
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
              <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-copper/20 to-sage/20 border border-sand flex items-center justify-center">
                <FEATURED_POST.icon className="h-20 w-20 text-copper/60" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Grid */}
      <Section className="bg-card/50 border-y border-sand">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-copper uppercase tracking-wider">Latest Articles</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Stay ahead of the curve</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl bg-card border border-sand p-6 hover:shadow-lg hover:border-copper/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-copper/10 to-sage/10 flex items-center justify-center">
                  <post.icon className="h-5 w-5 text-copper" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-copper uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <h3 className="font-serif text-lg leading-snug group-hover:text-copper transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-sand">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
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
