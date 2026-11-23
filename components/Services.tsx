import { Button } from "@/components/Button";
import {
  ServiceIcon,
  WhatsAppIcon,
  Check,
  ArrowUpRight,
  Sparkle,
  Shield,
  Clock,
  Compass,
} from "@/components/icons";
import { services, combos } from "@/data/services";
import { waLink } from "@/utils/whatsapp";
import { PRICES, formatPrice } from "@/config";

function SectionHeading({
  eyebrow,
  title,
  accent,
  copy,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  copy: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end">
      <div data-reveal>
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-[clamp(2rem,4.6vw,3.15rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
          {title}{" "}
          {accent && (
            <span className="font-serif text-[1.1em] font-normal italic tracking-[-0.01em] text-moss">{accent}</span>
          )}
        </h2>
      </div>
      <p data-reveal className="max-w-md text-[14.5px] leading-relaxed text-muted md:justify-self-end">
        {copy}
      </p>
    </div>
  );
}

const perks = [
  { icon: Clock, title: "Una sola puesta en marcha", copy: "Coordinamos todo nosotros." },
  { icon: Shield, title: "Dos servicios integrados", copy: "Tienda o landing + bot." },
  { icon: Compass, title: "Precio cerrado", copy: `${formatPrice(PRICES.combo)} en total.` },
];

export function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-24 bg-cream">
      <div className="shell py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="Servicios y precios"
          title="Elegí lo que tu negocio"
          accent="necesita."
          copy="Tres soluciones claras con precio fijo y, justo al lado, los combos que lo resuelven todo. Sin costos ocultos: si no sabés cuál te conviene, te lo decimos en el diagnóstico exprés de 10 minutos."
        />

        {/* servicios individuales — $50.000 / $60.000 */}
        <div data-reveal-group className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              data-reveal
              className="group relative flex flex-col rounded-[26px] border border-line bg-paper p-5 shadow-card sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/25 hover:shadow-float sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-soft text-ink ring-1 ring-inset ring-ink/5 transition-colors duration-300 group-hover:bg-lime">
                  <ServiceIcon name={service.icon} className="h-5.5 w-5.5" />
                </span>
                <div className="flex items-center gap-2">
                  {service.badge && (
                    <span className="rounded-full border border-line bg-white/70 px-2.5 py-1 text-[10px] font-semibold text-ink/70">
                      {service.badge}
                    </span>
                  )}
                  <span className="font-display text-[11px] font-semibold text-line-strong">{service.index}</span>
                </div>
              </div>

              <h3 className="mt-4 font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-ink">
                {service.name}
              </h3>
              <p className="mt-1 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-moss">
                {service.tagline}
              </p>

              <div className="mt-4 flex items-baseline gap-1.5 border-b border-line/80 pb-4">
                <span className="font-display text-[2.1rem] font-semibold tracking-[-0.04em] text-ink tabular-nums">
                  {service.priceLabel}
                </span>
                <span className="text-[11px] font-medium text-muted">ARS</span>
                <span className="ml-auto text-[10px] font-medium text-muted">pago único</span>
              </div>

              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{service.description}</p>

              <ul className="mt-3 flex flex-1 flex-col gap-2 pb-5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-ink/80">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime/70">
                      <Check className="h-2.5 w-2.5 text-ink" strokeWidth={2.6} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button
                href={waLink(service.message)}
                variant="wa"
                size="md"
                className="w-full"
                icon={<WhatsAppIcon className="h-4 w-4" />}
                ariaLabel={`Pedir ${service.name} por WhatsApp`}
              >
                Pedir por WhatsApp
                <ArrowUpRight className="ml-0.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-5 flex flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-line-strong/80 bg-white/40 px-5 py-4 sm:flex-row sm:items-center"
        >
          <p className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-muted sm:items-center">
            <Sparkle className="mt-0.5 h-4 w-4 shrink-0 text-moss sm:mt-0" />
            Todos los servicios incluyen diseño a medida, versión mobile y puesta en marcha. Sin costos ocultos.
          </p>
          <a
            href="#combos"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[12.5px] font-semibold text-ink underline decoration-lime decoration-2 underline-offset-4 hover:decoration-ink"
          >
            Ver combos con bot incluido
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* combos completos — $110.000, al lado de los servicios */}
        <div
          id="combos"
          data-reveal
          className="relative mt-5 scroll-mt-24 overflow-hidden rounded-[30px] border border-ink/10 bg-ink px-5 py-7 text-cream shadow-[0_30px_70px_-50px_rgba(20,22,15,0.8)] sm:rounded-[34px] sm:px-7 sm:py-8 lg:px-9"
        >
          <div className="pointer-events-none absolute inset-0 dot-field opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-moss/60 blur-[90px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-24 h-[320px] w-[320px] rounded-full bg-lime/10 blur-[90px]"
            aria-hidden
          />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow text-cream/55">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Combos completos
              </span>
              <h3 className="mt-3 font-display text-[clamp(1.6rem,3.4vw,2.35rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-cream">
                Llevá los dos y{" "}
                <span className="font-serif text-[1.08em] font-normal italic text-lime">ahorrá tiempo.</span>
              </h3>
            </div>
            <p className="max-w-sm text-[12.5px] leading-relaxed text-cream/60">
              Tienda o landing + chatbot de IA en una sola puesta en marcha. Dos servicios integrados por{" "}
              <span className="font-semibold text-cream">{formatPrice(PRICES.combo)}</span>.
            </p>
          </div>

          <div data-reveal-group className="relative mt-5 grid gap-4 lg:grid-cols-2">
            {combos.map((combo) => (
              <article
                key={combo.id}
                data-reveal
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/12 bg-[#1a1d15] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime/35 sm:p-6"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/5"
                  aria-hidden
                />

                <div className="relative flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <span className="whitespace-nowrap text-[9.5px] font-semibold uppercase tracking-[0.18em] text-lime/85 sm:text-[10px]">
                    {combo.eyebrow}
                  </span>
                  <div className="flex items-center gap-2">
                    {combo.badge && (
                      <span className="whitespace-nowrap rounded-full border border-lime/25 bg-lime/10 px-2.5 py-1 text-[9.5px] font-semibold text-lime">
                        {combo.badge}
                      </span>
                    )}
                    <span className="hidden font-display text-[11px] font-semibold text-cream/25 sm:inline">
                      {combo.index}
                    </span>
                  </div>
                </div>

                <h4 className="relative mt-3.5 max-w-[19rem] font-display text-[1.3rem] font-semibold leading-[1.12] tracking-[-0.03em] text-cream sm:text-[1.45rem]">
                  {combo.title}
                </h4>

                <div className="relative mt-3 flex items-end justify-between gap-3 border-b border-white/10 pb-3.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-[2.15rem] font-semibold leading-none tracking-[-0.04em] text-lime tabular-nums">
                      {combo.priceLabel}
                    </span>
                    <span className="text-[11px] font-medium text-cream/45">ARS</span>
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-[9.5px] font-medium text-cream/60 sm:text-[10px]">
                    todo incluido
                  </span>
                </div>

                <p className="relative mt-3.5 text-[12.5px] leading-relaxed text-cream/65">{combo.description}</p>

                <ul className="relative mt-3.5 grid flex-1 gap-2 pb-4 sm:grid-cols-2">
                  {combo.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-[11.5px] leading-snug text-cream/80">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime/15">
                        <Check className="h-2.5 w-2.5 text-lime" strokeWidth={2.6} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  href={waLink(combo.message)}
                  variant="lime"
                  size="md"
                  className="relative w-full"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                  ariaLabel={`Pedir ${combo.eyebrow} por WhatsApp`}
                >
                  Quiero este combo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </article>
            ))}
          </div>

          <div className="relative mt-3.5 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-center gap-3 bg-[#14160f] px-4 py-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-lime">
                  <perk.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-cream">{perk.title}</p>
                  <p className="text-[10.5px] text-cream/45">{perk.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-3.5 flex flex-col items-start justify-between gap-3 rounded-2xl border border-lime/20 bg-lime/[0.06] px-4 py-3.5 sm:flex-row sm:items-center">
            <p className="flex items-start gap-2 text-[12px] leading-snug text-cream/75 sm:items-center">
              <Sparkle className="mt-0.5 h-4 w-4 shrink-0 text-lime sm:mt-0" />
              ¿No sabés cuál elegir? En 10 minutos te decimos qué combo conviene para tu rubro.
            </p>
            <a
              href="#diagnostico"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-lime underline decoration-lime/40 decoration-2 underline-offset-4 hover:decoration-lime"
            >
              Hacer el diagnóstico
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <p className="relative mt-3 text-center text-[10.5px] text-cream/35">
            Precios en pesos argentinos (ARS). El pago se coordina directo por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
