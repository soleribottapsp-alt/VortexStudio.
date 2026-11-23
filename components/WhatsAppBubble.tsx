import { useEffect, useState } from "react";
import { WhatsAppIcon, Close } from "@/components/icons";
import { MESSAGES, waLink } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

export function WhatsAppBubble() {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const show = window.setTimeout(() => setShowLabel(true), 2600);
    const hide = window.setTimeout(() => setShowLabel(false), 12000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[80] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      {showLabel && (
        <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-line bg-paper/95 py-1.5 pl-3.5 pr-2 shadow-float backdrop-blur">
          <span className="text-[11px] font-semibold text-ink">¿Charlamos de tu proyecto?</span>
          <button
            type="button"
            onClick={() => setShowLabel(false)}
            aria-label="Ocultar mensaje"
            className="flex h-5 w-5 items-center justify-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-ink"
          >
            <Close className="h-3 w-3" />
          </button>
        </div>
      )}

      <a
        href={waLink(MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className={cn(
          "pointer-events-auto group relative flex items-center justify-center rounded-full bg-wa text-white shadow-[0_16px_36px_-12px_rgba(15,129,72,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-dark",
          "h-14 w-14",
        )}
      >
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-wa/30 [animation-duration:3.2s]"
          aria-hidden
        />
        <WhatsAppIcon className="h-7 w-7" />
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cream bg-lime text-[9px] font-bold text-ink">
          1
        </span>
      </a>
    </div>
  );
}
