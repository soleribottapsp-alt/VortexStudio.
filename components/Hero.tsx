import type { CSSProperties } from "react";
import { Button } from "@/components/Button";
import {
  WhatsAppIcon,
  Check,
  Sparkle,
  ArrowDown,
  Bag,
  Send,
  BotIcon,
  Star,
} from "@/components/icons";
import { MESSAGES, waLink } from "@/utils/whatsapp";

import photoVase from "@/assets/store-vase.jpg";
import photoMug from "@/assets/store-mug.jpg";
import photoPottery from "@/assets/store-pottery.jpg";
import photoVase2 from "@/assets/store-vase2.jpg";

function StorefrontMockup() {
  return (
    <div className="relative z-10 ml-auto w-full rounded-[20px] border border-line bg-white p-[5px] shadow-float sm:w-[94%]">
      <div className="overflow-hidden rounded-[16px] border border-line/70 bg-white">
        {/* browser bar */}
        <div className="flex items-center gap-2 border-b border-line/70 bg-[#f1eee4] px-3 py-2">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#d8d2c1]" />
            <span className="h-2 w-2 rounded-full bg-[#d8d2c1]" />
            <span className="h-2 w-2 rounded-full bg-[#d8d2c1]" />
          </div>
          <div className="mx-auto flex max-w-[190px] flex-1 items-center justify-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[9px] font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-wa" />
            norte-tienda.com.ar
          </div>
          <span className="h-4 w-4 rounded-full border border-line bg-white/60" />
        </div>

        <div className="p-2.5 sm:p-3">
          {/* store nav */}
          <div className="flex items-center justify-between px-0.5 pb-2.5">
            <span className="font-display text-[13px] font-bold tracking-[0.18em] text-ink">NORTE</span>
            <div className="flex items-center gap-3 text-[9px] font-medium text-muted">
              <span className="hidden xs:inline">Tienda</span>
              <span className="hidden xs:inline">Nosotros</span>
              <span className="relative inline-flex">
                <Bag className="h-3.5 w-3.5 text-ink" />
                <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-ink text-[7px] font-bold text-cream">
                  2
                </span>
              </span>
            </div>
          </div>

          {/* store hero */}
          <div className="grid grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-xl bg-[#ece5d6]">
            <div className="flex flex-col justify-center gap-2 p-3.5 sm:p-4">
              <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                Nueva colección
              </span>
              <p className="font-display text-[15px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[17px]">
                Objetos que
                <br />
                hacen casa.
              </p>
              <p className="hidden text-[8px] leading-snug text-ink/60 xs:block">
                Piezas hechas a mano, en series pequeñas.
              </p>
              <span className="mt-0.5 inline-flex w-fit items-center gap-1 rounded-full bg-ink px-2.5 py-1.5 text-[8px] font-semibold text-cream">
                Ver tienda <span aria-hidden>→</span>
              </span>
            </div>
            <div className="relative min-h-[112px]">
              <img
                src={photoVase}
                alt="Jarrón de cerámica artesanal de la tienda de ejemplo"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-1 text-[7px] font-semibold text-ink backdrop-blur">
                $24.900
              </span>
            </div>
          </div>

          {/* products */}
          <div className="mt-2.5">
            <div className="flex items-baseline justify-between px-0.5">
              <span className="font-display text-[9px] font-semibold text-ink">Favoritos de la casa</span>
              <span className="text-[7px] text-muted">Ver todo</span>
            </div>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              {[
                { img: photoMug, name: "Taza Rayada", price: "$8.400" },
                { img: photoPottery, name: "Juego de piezas", price: "$19.200" },
                { img: photoVase2, name: "Jarrón Nube", price: "$24.900" },
              ].map((p) => (
                <div key={p.name} className="overflow-hidden rounded-lg border border-line/70 bg-paper">
                  <img
                    src={p.img}
                    alt={`Producto de ejemplo: ${p.name}`}
                    className="h-11 w-full object-cover sm:h-12"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="px-1.5 py-1">
                    <p className="truncate text-[6.5px] font-medium text-ink">{p.name}</p>
                    <p className="text-[7px] font-semibold text-ink/60">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* order toast */}
      <div className="absolute -bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-2.5 py-1.5 text-[8.5px] font-semibold text-ink shadow-md backdrop-blur sm:right-5">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime">
          <Check className="h-2.5 w-2.5" strokeWidth={2.4} />
        </span>
        Pedido recibido
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="w-full rounded-[20px] border border-line bg-paper p-2.5 shadow-float sm:p-3">
      <div className="flex items-center gap-2 border-b border-line/70 pb-2.5">
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink text-lime">
          <BotIcon className="h-4 w-4" />
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-paper bg-wa" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[10.5px] font-semibold leading-tight text-ink">Asistente de Norte</p>
          <p className="flex items-center gap-1 text-[8px] text-muted">
            <span className="h-1 w-1 rounded-full bg-wa" /> En línea · responde al instante
          </p>
        </div>
        <WhatsAppIcon className="h-3.5 w-3.5 text-wa" />
      </div>

      <div className="space-y-1.5 pt-2.5">
        <p className="max-w-[92%] rounded-xl rounded-tl-sm bg-[#efece1] px-2.5 py-2 text-[9px] leading-snug text-ink">
          ¡Hola! 👋 Soy el asistente de Norte. ¿Buscás un regalo o algo para vos?
        </p>
        <div className="flex flex-wrap gap-1">
          {["Ver regalos", "Envíos", "Precios"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-line-strong/70 bg-white px-2 py-1 text-[8px] font-medium text-ink/80"
            >
              {chip}
            </span>
          ))}
        </div>
        <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-tr-sm bg-ink px-2.5 py-2 text-[9px] leading-snug text-cream">
          Busco un regalo 🎁
        </p>
        <p className="max-w-[92%] rounded-xl rounded-tl-sm bg-[#efece1] px-2.5 py-2 text-[9px] leading-snug text-ink">
          ¡Genial! Te muestro 3 opciones. ¿Tenés un presupuesto en mente?
        </p>
      </div>

      <div className="mt-2 flex items-center gap-1.5 rounded-full border border-line bg-white p-1 pl-2.5">
        <span className="flex-1 truncate text-[8.5px] text-muted">Escribí tu mensaje…</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime text-ink">
          <Send className="h-2.5 w-2.5" />
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-lime/35 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-64 h-72 w-72 rounded-full bg-[#e3dbc7]/60 blur-[90px]"
        aria-hidden
      />

      <div className="shell relative grid items-center gap-12 pb-16 pt-8 sm:pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-20 lg:pt-12">
        <div className="rise-in max-w-[600px]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-wa" />
              Estudio digital · San Francisco, Córdoba
            </span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" />
            <span className="text-[11px] font-medium tracking-wide text-muted">Precios claros, sin sorpresas</span>
          </div>

          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11.5px] leading-tight text-muted">
            <span className="flex -space-x-1.5" aria-hidden="true">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cream bg-ink text-[7.5px] font-bold text-lime">
                BW
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cream bg-moss text-[7.5px] font-bold text-cream">
                TB
              </span>
            </span>
            <span>
              Fundadores:{" "}
              <strong className="font-semibold text-ink">Benjamin Wolf</strong> y{" "}
              <strong className="font-semibold text-ink">Tiziano Botta</strong>
            </span>
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.65rem,8.5vw,4.35rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink">
            Tu negocio online,
            <br />
            listo para{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-serif text-[1.07em] font-normal italic tracking-[-0.02em] text-moss">
                vender.
              </span>
              <svg
                className="absolute -bottom-1.5 left-0 z-0 h-3 w-full text-lime sm:-bottom-2"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9.5C38 4 108 2.5 197 6.5"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-5 max-w-[30rem] text-[15.5px] leading-relaxed text-muted sm:text-base">
            Tienda web, landing page y chatbot de IA con precios claros. Tu negocio se ve profesional, atiende
            consultas solo y está listo para recibir pedidos.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Button
              href={waLink(MESSAGES.general)}
              variant="ink"
              size="lg"
              icon={<WhatsAppIcon className="h-4.5 w-4.5 text-lime" />}
              className="w-full sm:w-auto"
            >
              Pedir presupuesto
            </Button>
            <Button
              href="#servicios"
              variant="outline"
              size="lg"
              icon={<ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />}
              className="w-full sm:w-auto"
            >
              Ver servicios
            </Button>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[
                { initials: "BW", bg: "bg-ink", color: "text-lime" },
                { initials: "TB", bg: "bg-moss", color: "text-cream" },
              ].map((a) => (
                <span
                  key={a.initials}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream text-[9px] font-bold tracking-wide ${a.bg} ${a.color}`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <div className="text-[12px] leading-tight text-muted">
              <p className="font-semibold text-ink">Hablás directo con Benjamin y Tiziano</p>
              <p>Sin intermediarios, del primer mensaje al lanzamiento</p>
            </div>
          </div>

          <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] font-medium text-ink/70">
            {["Diseño a medida", "Entrega en 7–10 días", "Pago coordinado por WhatsApp"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-moss" strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* visual */}
        <div
          data-reveal="right"
          style={{ "--reveal-delay": "120ms" } as CSSProperties}
          className="relative mx-auto w-full max-w-[540px] pb-16 sm:pb-14 lg:mx-0 lg:max-w-none"
        >
          <div
            className="pointer-events-none absolute -right-4 top-6 hidden h-36 w-36 rounded-full border border-ink/10 sm:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-10 top-12 hidden h-24 w-24 dot-field opacity-60 sm:block"
            aria-hidden
          />

          <div className="absolute -top-5 left-0 z-30 sm:-left-4 lg:-left-6">
            <div className="float-soft flex items-center gap-2 rounded-full border border-line bg-paper/95 py-1.5 pl-1.5 pr-3.5 shadow-float backdrop-blur sm:gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime sm:h-7 sm:w-7">
                <Sparkle className="h-3.5 w-3.5 text-ink" />
              </span>
              <span className="text-[10px] font-semibold tracking-tight text-ink sm:text-[11px]">
                Chatbot entrenado para tu negocio
              </span>
            </div>
          </div>

          <div className="absolute right-0 top-[42%] z-30 hidden rotate-3 sm:block lg:-right-2">
            <div className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-lime px-3 py-1.5 text-[10px] font-bold tracking-tight text-ink shadow-md">
              <Star className="h-3 w-3" />
              Listo para vender
            </div>
          </div>

          <StorefrontMockup />

          <div className="absolute -bottom-6 left-0 z-20 w-[246px] sm:-bottom-8 sm:-left-6 sm:w-[272px] lg:-left-8">
            <ChatMockup />
          </div>

          <div className="absolute -bottom-4 right-2 z-20 hidden items-center gap-1.5 text-[10px] font-medium text-muted sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            Tienda real + bot, funcionando
          </div>
        </div>
      </div>
    </section>
  );
}
