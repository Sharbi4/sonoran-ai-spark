import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AIChatScript {
  /** Title shown at the top of the chat panel */
  title: string;
  /** Subtitle / role */
  subtitle: string;
  /** Initial assistant greeting */
  greeting: string;
  /** Quick-reply suggestion chips */
  quickReplies: string[];
  /** Scripted responses, keyed by lowercase substring trigger */
  responses: { match: string[]; reply: string }[];
  /** Fallback reply when nothing matches */
  fallback: string;
  /** Color theme */
  accentBg: string; // tailwind bg
  accentText: string; // tailwind text
  /** Optional: floating button label */
  buttonLabel?: string;
}

interface Message {
  role: "user" | "assistant";
  text: string;
}

/**
 * Floating AI chat widget — opens a side panel with scripted but interactive
 * industry-specific responses so the demo feels alive.
 */
export function AIChatWidget({ script }: { script: AIChatScript }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: script.greeting }]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  function send(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [...m, { role: "user", text: clean }]);
    setDraft("");
    setTyping(true);
    const lc = clean.toLowerCase();
    const match = script.responses.find((r) => r.match.some((k) => lc.includes(k)));
    const reply = match?.reply ?? script.fallback;
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    }, 700 + Math.random() * 500);
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-5 right-5 z-[70] rounded-full px-4 py-3 text-white shadow-2xl flex items-center gap-2 text-sm font-medium hover:opacity-90 transition-all",
          script.accentBg,
        )}
        aria-label="Open AI assistant"
      >
        {open ? <X className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
        <span className="hidden sm:inline">{open ? "Close" : (script.buttonLabel ?? "Ask AI")}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="fixed bottom-20 right-5 z-[70] w-[min(380px,calc(100vw-2.5rem))] rounded-2xl bg-white shadow-2xl border border-black/10 flex flex-col overflow-hidden"
            style={{ maxHeight: "70vh" }}
          >
            <div className={cn("px-4 py-3 text-white", script.accentBg)}>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{script.title}</p>
                  <p className="text-[11px] text-white/80">{script.subtitle}</p>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50/60" style={{ minHeight: "300px" }}>
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
                      m.role === "user"
                        ? cn("text-white rounded-br-sm", script.accentBg)
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm",
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm flex gap-1">
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {script.quickReplies.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className={cn(
                        "text-xs px-3 py-1.5 rounded-full border bg-white hover:bg-gray-50 transition-colors",
                        script.accentText,
                      )}
                      style={{ borderColor: "currentColor" }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
              className="border-t border-gray-200 bg-white p-2 flex gap-2"
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className={cn("h-9 w-9 rounded-full text-white flex items-center justify-center hover:opacity-90 transition-opacity", script.accentBg)}
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="text-[10px] text-center text-gray-400 pb-2 px-2">AI demo — responses are scripted samples</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}