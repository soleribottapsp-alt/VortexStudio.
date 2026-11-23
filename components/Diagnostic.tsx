import { useState, type CSSProperties } from "react";
import { Button } from "@/components/Button";
import {
  WhatsAppIcon,
  Check,
  Sparkle,
  Compass,
  BotIcon,
  Clock,
  ArrowUpRight,
  Shield,
} from "@/components/icons";
import { rubros, type Rubro } from "@/data/services";
import { MESSAGES, waLink } from "@/utils/whatsapp";
import { cn } from "@/utils/cn";

const steps = [
  {
    icon: Compass,
    title: "Cómo se vería tu negocio online",
    copy: "Te mostramos una idea concreta, aplicada a lo que vendés.",
  },
  {
    icon: Sparkle,
    title: "Qué servicio o combo te conviene",
    copy: "Según tu rubro, tu objetivo y el momento de tu negocio.",
  },
  {
    icon: BotIcon,
    title: "Cómo sumar el bot sin complicarte",
    copy: "Te explicamos qué necesita y cómo lo dejamos funcionando.",
  },
];

export function Diagnostic() {
  const [selected, setSelected] = useState<Rubro | null>(null);

  const message = selected
    ? MESSAGES.diagnosisWithRubro(selected.label, `${selected.recommendation} (${selected.priceLabel})`)
    : MESSAGES.diagnosis;

  return (
    <section id="diagnostico" className="relative scroll-mt-24 bg-cream">
      <div className="shell py-14 sm:py-16 lg:py-20">
        <div
          data-reveal
          className="grain relative overflow-hidden rounded-[30px] border border-ink/10 bg-[linear-gradient(135deg,#e9fcab_0%,#d9fb76_48%,#c9f165_100%)] p-5 shadow-[0_30px_70px_-50px_rgba(20,22,15,0.7)] sm:rounded-[38px] sm:p-7 lg:p-9"
        >
          <div
            className="pointer-events-none absolute -right-10 -top-16 select-none font-display text-[15rem] font-bold leading-none tracking-tighter text-ink/[0.055] sm:text-[22rem]"
            aria-hidden
          >
            10
          </div>
          <div
            className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/25 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                  </span>
                  Diagnóstico Exprés
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-semibold text-ink/70">
                  <Clock className="h-3.5 w-3.5" />
                  10 minutos · sin costo
                </span>
              </div>

              <h2 className="mt-5 max-w-[30rem] font-display text-[clamp(2.1rem,4.8vw,3.3rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
                Veamos tu negocio online, en{" "}
                <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.02em]">serio.</span>
              </h2>

              <p className="mt-4 max-w-[30rem] text-[14.5px] leading-relaxed text-ink/70">
                Te mostramos cómo se vería tu negocio online, qué servicio o combo te conviene según tu rubro y cómo
                sumar el bot sin perder tiempo ni complicarte.
              </p>

              <ul data-reveal-group className="mt-5 flex flex-col gap-3.5">
                {steps.map((step, i) => (
                  <li key={step.title} data-reveal className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-lime">
                      <step.icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-[13.5px] font-semibold leading-tight text-ink">
                        <span className="mr-1.5 font-display text-[11px] text-ink/40">0{i + 1}</span>
                        {step.title}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-ink/60">{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-[11px] font-medium text-ink/65">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5" /> Garantía de Lanzamiento
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.4} /> Sin compromiso
                </span>
                <span className="flex items-center gap-1.5">
                  <WhatsAppIcon className="h-3.5 w-3.5" /> Por WhatsApp o videollamada
                </span>
              </div>
            </div>

            {/* selector */}
            <div
              data-reveal="scale"
              style={{ "--reveal-delay": "140ms" } as CSSProperties}
              className="relative"
            >
              <div className="rounded-[24px] border border-white/70 bg-paper p-4 shadow-float sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-moss">
                      <Sparkle className="h-3.5 w-3.5" />
                      Diagnóstico al instante
                    </p>
                    <h3 className="mt-2 font-display text-[1.45rem] font-semibold leading-tight tracking-[-0.03em] text-ink">
                      ¿Cuál es tu rubro?
                    </h3>
                  </div>
                  <span className="rounded-full bg-lime-soft px-2.5 py-1 text-[10px] font-semibold text-moss">
                    1 min
                  </span>
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                  Elegí una opción y te decimos qué te conviene.
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5" role="group" aria-label="Elegí tu rubro">
                  {rubros.map((rubro) => {
                    const active = selected?.id === rubro.id;
                    return (
                      <button
                        key={rubro.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSelected(active ? null : rubro)}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[11.5px] font-medium transition-all duration-200",
                          active
                            ? "border-ink bg-ink text-cream shadow-sm"
                            : "border-line bg-white text-ink/80 hover:-translate-y-0.5 hover:border-ink/40 hover:text-ink",
                        )}
                      >
                        <span aria-hidden>{rubro.emoji}</span>
                        {rubro.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 min-h-[142px]">
                  {selected ? (
                    <div
                      key={selected.id}
                      className="rise-in rounded-2xl border border-lime bg-lime-soft/60 p-4"
                      aria-live="polite"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-moss">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
                          Te conviene
                        </span>
                        <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-ink">
                          {selected.priceLabel}
                        </span>
                      </div>
                      <p className="mt-2 font-display text-[15px] font-semibold leading-tight tracking-tight text-ink">
                        {selected.recommendation}
                      </p>
                      <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink/65">{selected.reason}</p>
                      <a
                        href="#combos"
                        className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                      >
                        Ver qué incluye
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[142px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line-strong bg-white/40 px-4 py-5 text-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-soft text-moss">
                        <Compass className="h-4.5 w-4.5" />
                      </span>
                      <p className="text-[12px] font-medium leading-snug text-ink/75">
                        Seleccioná tu rubro y te mostramos la recomendación al instante.
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  href={waLink(message)}
                  variant="wa"
                  size="md"
                  className="mt-4 w-full"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                  ariaLabel="Agendar el Diagnóstico Exprés por WhatsApp"
                >
                  Agendar por WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                <p className="mt-2.5 text-center text-[10.5px] text-muted">
                  Te responde una persona del equipo, no un bot automático.
                </p>
              </div>

              <div className="absolute -bottom-4 -left-3 hidden rotate-[-3deg] items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[10.5px] font-semibold text-ink shadow-md sm:flex">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                Sin costo · sin vueltas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
