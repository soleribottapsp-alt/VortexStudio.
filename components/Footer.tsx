import type { CSSProperties } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { WhatsAppIcon, ArrowUpRight, Clock, Check, Sparkle, ArrowDown } from "@/components/icons";
import { MESSAGES, waLink } from "@/utils/whatsapp";
import { BRAND } from "@/config";

const links = {
  servicios: [
    { label: "Tienda Web — $60.000", href: "#servicios" },
    { label: "Landing Page — $60.000", href: "#servicios" },
    { label: "Chatbot de IA — $50.000", href: "#servicios" },
  ],
  combos: [
    { label: "Combo 1: Tienda + Bot", href: "#combos" },
    { label: "Combo 2: Landing + Bot", href: "#combos" },
    { label: "Diagnóstico Exprés", href: "#diagnostico" },
  ],
  estudio: [
    { label: "Cómo trabajamos", href: "#inicio" },
    { label: "Preguntas frecuentes", href: "#preguntas" },
    { label: "Hablemos por WhatsApp", href: waLink(MESSAGES.footer) },
  ],
};

export function Footer() {
  return (
    <>
      {/* closing CTA */}
      <section className="relative bg-cream pb-12 pt-1 sm:pb-14">
        <div className="shell">
          <div
            data-reveal
            className="grain relative overflow-hidden rounded-[30px] border border-white/10 bg-moss px-6 py-8 text-cream shadow-[0_40px_80px_-60px_rgba(20,22,15,0.9)] sm:rounded-[38px] sm:px-10 sm:py-10 lg:px-12 lg:py-12"
          >
            <div className="pointer-events-none absolute inset-0 dot-field opacity-30" aria-hidden />
            <div
              className="pointer-events-none absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full border border-lime/20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-6 -top-20 h-[260px] w-[260px] rounded-full border border-lime/15"
              aria-hidden
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-lime">
                  <Sparkle className="h-3.5 w-3.5" />
                  Empezamos cuando quieras
                </span>
                <h2 className="mt-5 max-w-[32rem] font-display text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-cream">
                  Tu negocio merece verse{" "}
                  <span className="font-serif text-[1.08em] font-normal italic text-lime">así de bien.</span>
                </h2>
                <p className="mt-4 max-w-md text-[14px] leading-relaxed text-cream/60">
                  Escribinos, contanos qué tenés en mente y en 10 minutos te decimos cómo lo hacemos realidad. Sin
                  compromiso, sin vueltas.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-cream/60">
                    <Clock className="h-3.5 w-3.5 text-lime" />
                    Diagnóstico Exprés · 10 minutos
                  </div>
                  <p className="mt-2 text-[13px] leading-snug text-cream/85">
                    Te mostramos cómo se vería tu negocio online y qué te conviene según tu rubro.
                  </p>
                  <Button
                    href={waLink(MESSAGES.diagnosis)}
                    variant="lime"
                    size="md"
                    className="mt-4 w-full"
                    icon={<WhatsAppIcon className="h-4 w-4" />}
                  >
                    Agendar mi diagnóstico
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                  <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[10.5px] text-cream/45">
                    <Check className="h-3 w-3 text-lime" strokeWidth={2.6} /> Sin costo ni compromiso
                  </p>
                </div>
                <a
                  href="#inicio"
                  className="group inline-flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-cream/50 transition-colors hover:text-cream"
                >
                  <ArrowDown className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-y-0.5" />
                  Volver arriba
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="relative overflow-hidden bg-ink text-cream">
        <div className="pointer-events-none absolute inset-0 dot-field opacity-20" aria-hidden />
        <div className="shell relative pb-24 pt-12 sm:pb-20 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1.7fr]">
            <div data-reveal>
              <a href="#inicio" aria-label="Vortex Studio — Inicio" className="inline-block">
                <Logo variant="light" imgClassName="h-9 sm:h-10" />
              </a>
              <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-cream/55">
                Estudio digital especializado en tiendas web, landing pages y chatbots de IA para negocios que
                quieren crecer en serio.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Button
                  href={waLink(MESSAGES.general)}
                  variant="wa"
                  size="sm"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                >
                  Escribinos por WhatsApp
                </Button>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-[12.5px] font-semibold text-cream/80 transition-colors hover:border-lime/50 hover:text-cream"
                >
                  Ver precios
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-cream/35">Fundadores</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                  {BRAND.founders.map((name, i) => (
                    <div key={name} className="flex items-center gap-2.5">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-[9.5px] font-bold ${
                          i === 0 ? "bg-lime text-ink" : "bg-cream/10 text-cream ring-1 ring-inset ring-white/15"
                        }`}
                      >
                        {name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <div>
                        <p className="text-[12.5px] font-semibold leading-tight text-cream">{name}</p>
                        <p className="text-[10px] text-cream/40">Vortex Studio</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties} className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {Object.entries(links).map(([title, items]) => (
                <div key={title}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream/35">{title}</p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-[12.5px] leading-snug text-cream/65 transition-colors hover:text-lime"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Vortex Studio. Todos los derechos reservados.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <span>{BRAND.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-cream/20 sm:block" />
              <span>Precios en ARS</span>
              <span className="hidden h-1 w-1 rounded-full bg-cream/20 sm:block" />
              <a href="#diagnostico" className="transition-colors hover:text-lime">
                Diagnóstico exprés
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
