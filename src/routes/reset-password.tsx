import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Lock, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { LogoLockup } from "@/components/logo";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset Password | Sonoran Systems & AI" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Passwords don't match");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password updated");
    navigate({ to: "/portal" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-copper/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sage/20 blur-3xl" />
      </div>
      <header className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex items-center justify-between">
        <Link to="/" aria-label="Home"><LogoLockup /></Link>
      </header>
      <main className="mx-auto max-w-md px-5 sm:px-8 pb-20 pt-10">
        <div className="rounded-3xl glass-card p-8 sm:p-10">
          <h1 className="font-serif text-3xl text-foreground">Set a new password</h1>
          <p className="mt-2 text-sm text-foreground/65">Choose a strong password (8+ characters).</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Field label="New password">
              <input
                required type="password" minLength={8}
                value={password} onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Confirm password">
              <input
                required type="password" minLength={8}
                value={confirm} onChange={(e) => setConfirm(e.target.value)}
                className={inputClass}
              />
            </Field>
            <button
              type="submit" disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-copper-foreground hover:bg-copper/90 transition-colors disabled:opacity-60"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : (<>Update password <ArrowRight className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

const inputClass = cn(
  "w-full rounded-xl border border-sand bg-white/80 px-4 py-3 pl-10 text-sm text-foreground placeholder:text-foreground/40",
  "focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/20 transition",
);

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold tracking-wide uppercase text-foreground/60 mb-1.5">{label}</span>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/50"><Lock className="h-4 w-4" /></span>
        {children}
      </div>
    </label>
  );
}