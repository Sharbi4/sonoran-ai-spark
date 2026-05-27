import { cn } from "@/lib/utils";

// Layered chevron S-mark — terracotta, rose, sand, sage.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      {/* top chevron (terracotta) */}
      <path
        d="M10 18 L34 10 L54 18 L34 26 Z"
        stroke="#C24F34"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* mid-left (rose) */}
      <path
        d="M10 30 L34 22 L34 30 L14 36 Z"
        stroke="#E07A6B"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* mid-right (sand) */}
      <path
        d="M30 34 L54 26 L54 34 L34 42 Z"
        stroke="#BBA395"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* bottom chevron (sage) */}
      <path
        d="M10 46 L34 38 L54 46 L34 54 Z"
        stroke="#8BA395"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <span className="font-serif font-bold tracking-[0.02em] text-foreground text-[1.05rem] sm:text-[1.2rem]">
        SONORAN
      </span>
      <span className="font-serif text-foreground/80 tracking-[0.22em] text-[0.5rem] sm:text-[0.58rem] mt-0.5">
        SYSTEMS &amp; AI
      </span>
    </div>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <div className="h-8 w-px bg-foreground/15" />
      <LogoWordmark />
    </div>
  );
}