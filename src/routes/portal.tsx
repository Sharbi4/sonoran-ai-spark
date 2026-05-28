import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogOut, User as UserIcon, Mail, Building2, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout, Section, SectionLabel, CopperButton } from "@/components/site-layout";
import { toast } from "sonner";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Client Portal | Sonoran Systems & AI" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PortalPage,
});

type Profile = {
  full_name: string | null;
  company: string | null;
  email: string | null;
};

function PortalPage() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login", search: { redirect: "/portal" } });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("full_name, company, email").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => {
        setProfile(data ?? { full_name: null, company: null, email: user.email ?? null });
        setFetching(false);
      });
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-copper" />
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  const displayName = profile?.full_name || user.email?.split("@")[0] || "there";

  return (
    <SiteLayout>
      <Section>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionLabel>Client Portal</SectionLabel>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground">
              Welcome back, <span className="text-terracotta">{displayName}</span>.
            </h1>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 rounded-full border border-sand px-4 py-2 text-sm font-medium text-foreground/80 hover:border-copper hover:text-copper transition-colors"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
          <p className="mt-3 text-foreground/70 max-w-xl">
            Your project workspace. Dashboards, automations, and assets will appear here as we launch them.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Your profile">
            {fetching ? <Loader2 className="h-4 w-4 animate-spin text-copper" /> : (
              <ul className="space-y-3 text-sm text-foreground/80">
                <Row icon={<UserIcon className="h-4 w-4" />} label="Name" value={profile?.full_name || "—"} />
                <Row icon={<Mail className="h-4 w-4" />} label="Email" value={user.email || "—"} />
                <Row icon={<Building2 className="h-4 w-4" />} label="Company" value={profile?.company || "—"} />
              </ul>
            )}
          </Card>
          <Card title="Active projects">
            <p className="text-sm text-foreground/65">No active projects yet. Once we kick off, your milestones will appear here.</p>
            <div className="mt-5">
              <CopperButton to="/contact">Start a project</CopperButton>
            </div>
          </Card>
          <Card title="Quick links">
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-foreground/80 hover:text-copper">Browse services</Link></li>
              <li><Link to="/packages" className="text-foreground/80 hover:text-copper">Packages</Link></li>
              <li><Link to="/ai-audit" className="text-foreground/80 hover:text-copper">AI Business Audit</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-copper">Contact us</Link></li>
            </ul>
          </Card>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl glass-card p-7">
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-copper">{icon}</span>
      <div>
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground/50">{label}</p>
        <p className="text-foreground">{value}</p>
      </div>
    </li>
  );
}