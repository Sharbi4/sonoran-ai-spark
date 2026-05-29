import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { SiteLayout, Section, FinalCTA } from "@/components/site-layout";
import { getPost } from "@/lib/blog/posts";

export const Route = createFileRoute("/posts/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found" }] };
    const url = `https://www.sonoransystemsai.com/posts/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} — Sonoran Systems & AI` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.heroImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.heroImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.dateISO,
            image: post.heroImage,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Sonoran Systems & AI",
              url: "https://www.sonoransystemsai.com",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <p className="text-muted-foreground">Post not found.</p>
        <Link to="/blog" className="text-copper underline">Back to blog</Link>
      </Section>
    </SiteLayout>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article>
        <Section className="pt-16 sm:pt-24 pb-8">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-copper hover:underline">
              <ArrowLeft className="h-4 w-4" /> All posts
            </Link>
            <p className="mt-6 text-xs font-semibold text-copper uppercase tracking-wider">{post.category}</p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-[1.1]">{post.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </div>
        </Section>
        <Section className="py-4">
          <div className="max-w-4xl">
            <img src={post.heroImage} alt={post.title} className="w-full rounded-3xl border border-sand aspect-[16/9] object-cover" loading="eager" />
          </div>
        </Section>
        <Section className="pt-8">
          <div className="max-w-3xl prose-content">
            {renderMarkdown(post.body)}
          </div>
        </Section>
      </article>
      <FinalCTA headline="Ready to put this to work in your business?" sub="Book a $250 Strategy Call and walk away with an action plan." />
    </SiteLayout>
  );
}

// Lightweight markdown renderer (headings, paragraphs, lists, code, links, bold)
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("## ")) {
      out.push(<h2 key={key++} className="mt-12 font-serif text-3xl text-foreground">{inline(line.slice(3))}</h2>);
      i++;
    } else if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) { buf.push(lines[i]); i++; }
      i++;
      out.push(<pre key={key++} className="mt-6 rounded-2xl bg-foreground/5 border border-sand p-5 overflow-x-auto text-sm"><code data-lang={lang}>{buf.join("\n")}</code></pre>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i++; }
      out.push(<ul key={key++} className="mt-5 space-y-2 list-disc pl-5 text-muted-foreground leading-relaxed">{items.map((it, idx) => <li key={idx}>{inline(it)}</li>)}</ul>);
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) { items.push(lines[i].replace(/^\d+\.\s/, "")); i++; }
      out.push(<ol key={key++} className="mt-5 space-y-2 list-decimal pl-5 text-muted-foreground leading-relaxed">{items.map((it, idx) => <li key={idx}>{inline(it)}</li>)}</ol>);
    } else {
      out.push(<p key={key++} className="mt-5 text-muted-foreground leading-relaxed">{inline(line)}</p>);
      i++;
    }
  }
  return out;
}

function inline(text: string): React.ReactNode {
  // Process **bold** and [text](href)
  const parts: React.ReactNode[] = [];
  let rest = text;
  let k = 0;
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/;
  const boldRe = /\*\*([^*]+)\*\*/;
  while (rest.length) {
    const linkMatch = linkRe.exec(rest);
    const boldMatch = boldRe.exec(rest);
    const linkIdx = linkMatch ? linkMatch.index : Infinity;
    const boldIdx = boldMatch ? boldMatch.index : Infinity;
    if (linkIdx === Infinity && boldIdx === Infinity) { parts.push(rest); break; }
    if (linkIdx < boldIdx && linkMatch) {
      if (linkIdx > 0) parts.push(rest.slice(0, linkIdx));
      parts.push(<a key={k++} href={linkMatch[2]} className="text-copper underline hover:no-underline">{linkMatch[1]}</a>);
      rest = rest.slice(linkIdx + linkMatch[0].length);
    } else if (boldMatch) {
      if (boldIdx > 0) parts.push(rest.slice(0, boldIdx));
      parts.push(<strong key={k++} className="text-foreground font-semibold">{boldMatch[1]}</strong>);
      rest = rest.slice(boldIdx + boldMatch[0].length);
    }
  }
  return parts;
}