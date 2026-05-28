import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Lock, Mail, User as UserIcon, Building2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { LogoLockup } from "@/components/logo";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Mode = "signin" | "signup" | "forgot";

export const Route = createFileRoute("/login")({
  validateSearch: (s: Record<string, unknown>) => ({
    redirect: typeof s.redirect === "string" ? s.redirect : "/portal",
  }),
  head: () => ({
    meta: [
      { title: "Client Login | Sonoran Systems & AI" },
      { name: "description", content: "Sign in to your Sonoran Systems & AI client portal." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { redirect } = useSearch({ from: "/login" });
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate({ to: redirect, replace: true });
  }, [user, loading, redirect, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back");
      } else if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/portal",
            data: { full_name: fullName, company },
          },
        });
        if (error) throw error;
        toast.success("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + "/reset-password",
        });
        if (error) throw error;
        toast.success("Password reset link sent.");
        setMode("signin");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-copper/15 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-rose/15 blur-3xl" />
      </div>

      <header className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex items-center justify-between">
        <Link to="/" aria-label="Home"><LogoLockup /></Link>
        <Link to="/" className="text-sm text-foreground/70 hover:text-copper transition-colors">
          ← Back to site
        </Link>
      </header>

      <main className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-copper">
            Client Portal
          </p>
          <h1 className="mt-4 font-serif text-5xl xl:text-6xl leading-[1.05] tracking-tight text-foreground">
            Your projects, <span className="text-terracotta">in one calm place.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-md leading-relaxed">
            Sign in to view active builds, dashboards, automations, and invoices —
            everything Sonoran is running for your business.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/70">
            {[
              "Live project status & milestones",
              "Dashboards & automation reports",
              "Invoices, contracts, and assets",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="rounded-3xl glass-card p-8 sm:p-10 shadow-[0_30px_80px_-40px_rgba(31,31,31,0.25)]">
            <h2 className="font-serif text-3xl text-foreground">
              {mode === "signin" && "Welcome back"}
              {mode === "signup" && "Create your account"}
              {mode === "forgot" && "Reset your password"}
            </h2>
            <p className="mt-2 text-sm text-foreground/65">
              {mode === "signin" && "Sign in to your Sonoran client portal."}
              {mode === "signup" && "Set up access for your active projects."}
              {mode === "forgot" && "We'll email you a secure reset link."}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {mode === "signup" && (
                <>
                  <Field icon={<UserIcon className="h-4 w-4" />} label="Full name">
                    <input
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </Field>
                  <Field icon={<Building2 className="h-4 w-4" />} label="Company (optional)">
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Sonoran Co."
                      className={inputClass}
                    />
                  </Field>
                </>
              )}
              <Field icon={<Mail className="h-4 w-4" />} label="Email">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </Field>
              {mode !== "forgot" && (
                <Field icon={<Lock className="h-4 w-4" />} label="Password">
                  <input
                    required
                    type="password"
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className={inputClass}
                  />
                </Field>
              )}

              {mode === "signin" && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setMode("forgot")}
                    className="text-xs font-medium text-copper hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors shadow-[0_10px_30px_-12px_rgba(194,79,52,0.5)] disabled:opacity-60"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : (
                  <>
                    {mode === "signin" && "Sign in"}
                    {mode === "signup" && "Create account"}
                    {mode === "forgot" && "Send reset link"}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-foreground/65">
              {mode === "signin" && (
                <>New client?{" "}
                  <button onClick={() => setMode("signup")} className="font-medium text-copper hover:underline">
                    Create an account
                  </button>
                </>
              )}
              {mode === "signup" && (
                <>Already have an account?{" "}
                  <button onClick={() => setMode("signin")} className="font-medium text-copper hover:underline">
                    Sign in
                  </button>
                </>
              )}
              {mode === "forgot" && (
                <button onClick={() => setMode("signin")} className="font-medium text-copper hover:underline">
                  ← Back to sign in
                </button>
              )}
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-foreground/55">
            By continuing you agree to our{" "}
            <Link to="/terms" className="underline hover:text-copper">terms</Link>.
          </p>
        </motion.div>
      </main>
    </div>
  );
}

const inputClass = cn(
  "w-full rounded-xl border border-sand bg-white/80 px-4 py-3 pl-10 text-sm text-foreground placeholder:text-foreground/40",
  "focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/20 transition",
);

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold tracking-wide uppercase text-foreground/60 mb-1.5">
        {label}
      </span>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/50">{icon}</span>
        {children}
      </div>
    </label>
  );
}
