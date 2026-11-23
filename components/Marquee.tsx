import { Sparkle } from "@/components/icons";
import { marqueeItems } from "@/data/services";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div data-reveal="fade" className="marquee relative overflow-hidden border-y border-ink/10 bg-ink py-3.5 text-cream">
      <div className="marquee-track items-center" aria-hidden="true">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center">
            <span className="px-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/85">
              {item}
            </span>
            <Sparkle className="h-3.5 w-3.5 shrink-0 text-lime" />
          </span>
        ))}
      </div>
      <span className="sr-only">
        Servicios de Vortex Studio: tienda web, landing page, chatbot de IA, diseño a medida y precios claros.
      </span>
    </div>
  );
}
