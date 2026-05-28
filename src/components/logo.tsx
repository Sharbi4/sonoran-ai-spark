import { cn } from "@/lib/utils";
import lockupSrc from "@/assets/sonoran-lockup.png";
import markSrc from "@/assets/sonoran-mark.png";

// Official S-mark only.
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={markSrc}
      alt="Sonoran Systems & AI"
      className={cn("h-9 w-auto select-none", className)}
      draggable={false}
    />
  );
}

// Full lockup: mark + divider + SONORAN / SYSTEMS & AI wordmark.
export function LogoLockup({ className }: { className?: string }) {
  return (
    <img
      src={lockupSrc}
      alt="Sonoran Systems & AI"
      className={cn("h-10 sm:h-11 w-auto select-none", className)}
      draggable={false}
    />
  );
}