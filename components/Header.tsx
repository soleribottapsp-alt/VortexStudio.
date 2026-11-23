import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { WhatsAppIcon, Menu, Close, Sparkle } from "@/components/icons";
import { MESSAGES, waLink } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Combos", href: "#combos" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Preguntas", href: "#preguntas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line/90 bg-cream/90 shadow-[0_12px_30px_-30px_rgba(20,22,15,0.6)] backdrop-blur-xl"
            : "border-transparent bg-cream/70 backdrop-blur-md",
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4 sm:h-[76px]">
          <a href="#inicio" className="shrink-0" aria-label="Vortex Studio — Inicio">
            <Logo imgClassName="h-9 sm:h-10" />
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-ink/70 transition-colors hover:bg-paper hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="hidden items-center gap-1.5 text-[12px] font-medium text-muted xl:inline-flex">
              <Sparkle className="h-3.5 w-3.5 text-moss" />
              Diagnóstico exprés sin costo
            </span>
            <Button
              href={waLink(MESSAGES.general)}
              variant="ink"
              size="sm"
              icon={<WhatsAppIcon className="h-4 w-4" />}
              className="px-4"
            >
              Hablemos
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-ink md:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full origin-top border-b border-line bg-cream px-5 pb-6 pt-3 shadow-float transition-all duration-300 md:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Navegación móvil" className="flex flex-col">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line/70 py-3.5 font-display text-lg font-medium tracking-tight text-ink"
            >
              {link.label}
              <span className="font-sans text-[11px] font-medium tracking-widest text-muted">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <Button
          href={waLink(MESSAGES.general)}
          variant="wa"
          size="md"
          icon={<WhatsAppIcon className="h-4 w-4" />}
          className="mt-5 w-full"
        >
          Pedir presupuesto
        </Button>
        <p className="mt-3 text-center text-[12px] text-muted">Respuesta directa de Benjamin o Tiziano.</p>
      </div>
    </header>
  );
}
