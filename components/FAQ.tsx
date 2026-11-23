import { Button } from "@/components/Button";
import { WhatsAppIcon, Plus, ArrowUpRight } from "@/components/icons";
import { MESSAGES, waLink } from "@/utils/whatsapp";

const faqs = [
  {
    q: "¿Cuánto tarda mi proyecto?",
    a: "Entre 7 y 10 días hábiles desde que tenemos tu información y el contenido. Si el proyecto es más grande, te damos una fecha concreta antes de empezar.",
  },
  {
    q: "¿Qué necesito para arrancar?",
    a: "Solo la información de tu negocio: qué vendés, tus fotos o logo si los tenés y qué querés lograr. Si te falta algo, lo ordenamos juntos en el diagnóstico exprés.",
  },
  {
    q: "¿El chatbot responde cualquier cosa?",
    a: "Se entrena con la información de tu negocio. Responde lo que definimos juntos y, cuando una consulta necesita a una persona, la deriva directo a tu WhatsApp.",
  },
  {
    q: "¿Puedo empezar con una cosa y sumar el bot después?",
    a: "Sí. Podés arrancar con la tienda web o la landing page y agregar el chatbot de IA más adelante. Si querés todo resuelto de una, los combos ya incluyen ambos servicios.",
  },
  {
    q: "¿Cómo se coordina el pago?",
    a: "Te pasamos la propuesta clara por WhatsApp, sin costos ocultos, y coordinamos el pago y los tiempos directo con nosotros. Nada de letra chica.",
  },
];

export function FAQ() {
  return (
    <section id="preguntas" className="relative scroll-mt-24 bg-cream">
      <div className="shell grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:py-20">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
            Las dudas
            <br />
            <span className="font-serif text-[1.08em] font-normal italic text-moss">de siempre.</span>
          </h2>
          <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-muted">
            Si te queda algo por resolver, escribinos: contestamos una persona del equipo.
          </p>

          <div className="mt-5 rounded-2xl border border-line bg-paper p-4 shadow-card">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime">
                <WhatsAppIcon className="h-4 w-4 text-ink" />
              </span>
              <div>
                <p className="text-[12.5px] font-semibold text-ink">Hablemos directo</p>
                <p className="text-[10.5px] text-muted">Benjamin y Tiziano · Vortex Studio</p>
              </div>
            </div>
            <Button
              href={waLink(MESSAGES.footer)}
              variant="ink"
              size="sm"
              className="mt-3.5 w-full"
              icon={<WhatsAppIcon className="h-4 w-4 text-lime" />}
            >
              Hacer mi consulta
            </Button>
          </div>
        </div>

        <div data-reveal-group className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.q} data-reveal className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[15.5px] font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors group-hover:text-moss sm:text-[17px]">
                  {faq.q}
                </h3>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-lime">
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <div className="pb-5 pr-10 text-[13.5px] leading-relaxed text-muted">{faq.a}</div>
            </details>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-3 py-4">
            <p className="text-[12.5px] text-muted">¿Tu caso es distinto? Lo vemos sin compromiso.</p>
            <a
              href="#diagnostico"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink underline decoration-lime decoration-2 underline-offset-4 hover:decoration-ink"
            >
              Agendar diagnóstico
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
