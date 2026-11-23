import { Shield, Check, Sparkle, Clock } from "@/components/icons";
import { PRICES, formatPrice } from "@/config";

const steps = [
  {
    number: "01",
    title: "Nos contás",
    copy: "En una charla de 10 minutos vemos qué necesitás y te decimos qué servicio o combo conviene. Sin vueltas.",
    tag: "10 min",
  },
  {
    number: "02",
    title: "Diseñamos y armamos",
    copy: "Creamos tu tienda o landing con tu identidad y entrenamos el bot con la información real de tu negocio.",
    tag: "A medida",
  },
  {
    number: "03",
    title: "Probamos y lanzamos",
    copy: "Revisamos todo juntos, publicamos y te dejamos listo para recibir pedidos, consultas y reuniones.",
    tag: "Listo",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-[#f0ede2]">
      <div className="shell py-12 sm:py-14">
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          <div data-reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" />
              Así trabajamos
            </span>
            <h2 className="mt-4 max-w-md font-display text-[clamp(1.9rem,4.2vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              De la charla al lanzamiento,{" "}
              <span className="font-serif text-[1.08em] font-normal italic">en simple.</span>
            </h2>
            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-muted">
              Sin formularios eternos ni reuniones de más. Vos contás, nosotros construimos.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line-strong/70 bg-cream px-3.5 py-2 text-[11.5px] font-semibold text-ink/75">
              <Clock className="h-3.5 w-3.5 text-moss" />
              Entrega estimada: 7 a 10 días
            </div>
          </div>

          <div data-reveal-group className="grid gap-3 sm:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                data-reveal
                className="group relative flex flex-col rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[12px] font-semibold text-line-strong">{step.number}</span>
                  <span className="rounded-full bg-lime-soft px-2 py-0.5 text-[9.5px] font-semibold text-moss">
                    {step.tag}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-ink px-5 py-4 text-cream sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <div className="flex items-start gap-3 sm:items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
              <Shield className="h-4.5 w-4.5" />
            </span>
            <p className="text-[12.5px] leading-relaxed text-cream/85">
              <span className="font-semibold text-cream">Garantía de Lanzamiento.</span> Ajustamos todo lo acordado
              antes de publicar. Trabajás con precios claros desde el primer día.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11.5px] text-cream/60">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-lime" strokeWidth={2.4} /> Ajustes incluidos
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkle className="h-3.5 w-3.5 text-lime" /> Desde {formatPrice(PRICES.bot)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
