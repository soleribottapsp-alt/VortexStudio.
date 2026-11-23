import { PRICES, formatPrice } from "@/config";
import { MESSAGES } from "@/utils/whatsapp";

export type IconName = "store" | "landing" | "bot";

export type Service = {
  id: string;
  index: string;
  name: string;
  price: number;
  priceLabel: string;
  tagline: string;
  description: string;
  features: string[];
  icon: IconName;
  message: string;
  badge?: string;
};

export const services: Service[] = [
  {
    id: "tienda-web",
    index: "01",
    name: "Tienda Web",
    price: PRICES.store,
    priceLabel: formatPrice(PRICES.store),
    tagline: "Vendé sin límites de horario",
    description:
      "Una tienda online completa con carrito, catálogo de productos, organización visual y todo listo para recibir pedidos y cobros.",
    features: [
      "Carrito y catálogo de productos",
      "Productos organizados por categorías",
      "Lista para recibir pedidos y cobros",
      "Optimizada para celular",
    ],
    icon: "store",
    message: MESSAGES.store,
    badge: "Vendé 24/7",
  },
  {
    id: "landing-page",
    index: "02",
    name: "Landing Page",
    price: PRICES.landing,
    priceLabel: formatPrice(PRICES.landing),
    tagline: "Convertí visitas en clientes",
    description:
      "Una página enfocada en convertir visitas en consultas o ventas directas. Rápida, clara e ideal para campañas, servicios o lanzamientos.",
    features: [
      "Estructura pensada para convertir",
      "Carga rápida y diseño impactante",
      "Ideal para campañas y lanzamientos",
      "Botones y contacto directo",
    ],
    icon: "landing",
    message: MESSAGES.landing,
    badge: "Más directa",
  },
  {
    id: "chatbot-ia",
    index: "03",
    name: "Chatbot de IA",
    price: PRICES.bot,
    priceLabel: formatPrice(PRICES.bot),
    tagline: "Tu negocio atiende solo",
    description:
      "Un chatbot entrenado totalmente para tu negocio y para lo que necesiten: responde preguntas frecuentes, guía a los clientes y ayuda a cerrar consultas o reuniones.",
    features: [
      "Entrenado con la info de tu negocio",
      "Responde consultas las 24 horas",
      "Guía y califica a cada cliente",
      "Deriva a WhatsApp o a una reunión",
    ],
    icon: "bot",
    message: MESSAGES.bot,
    badge: "IA a medida",
  },
];

export type Combo = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  message: string;
  badge?: string;
};

export const combos: Combo[] = [
  {
    id: "combo-1",
    index: "01",
    eyebrow: "Combo Completo 1",
    title: "Tienda Web + Chatbot de IA",
    price: PRICES.combo,
    priceLabel: formatPrice(PRICES.combo),
    description:
      "La tienda web completa, con carrito y catálogo, junto al chatbot de IA entrenado para tu negocio. Todo integrado y coordinado por nosotros.",
    features: [
      "Tienda con carrito y catálogo",
      "Chatbot entrenado para tu negocio",
      "Atención automática 24/7",
      "Una sola puesta en marcha",
    ],
    message: MESSAGES.combo1,
    badge: "El más elegido",
  },
  {
    id: "combo-2",
    index: "02",
    eyebrow: "Combo Completo 2",
    title: "Landing Page + Chatbot de IA",
    price: PRICES.combo,
    priceLabel: formatPrice(PRICES.combo),
    description:
      "La landing page de conversión junto al chatbot de IA entrenado a medida. Captá consultas y respondelas al instante, incluso fuera de horario.",
    features: [
      "Landing enfocada en conversión",
      "Chatbot entrenado a medida",
      "Respuestas al instante",
      "Ideal para campañas y lanzamientos",
    ],
    message: MESSAGES.combo2,
    badge: "Ideal para campañas",
  },
];

export type Rubro = {
  id: string;
  label: string;
  emoji: string;
  recommendation: string;
  serviceId: string;
  priceLabel: string;
  reason: string;
};

export const rubros: Rubro[] = [
  {
    id: "indumentaria",
    label: "Ropa y accesorios",
    emoji: "🛍️",
    recommendation: "Combo Completo 1 · Tienda Web + Chatbot",
    serviceId: "combo-1",
    priceLabel: formatPrice(PRICES.combo),
    reason:
      "Tu catálogo necesita estar publicado y organizado. El bot responde talles, stock y envíos mientras vos vendés.",
  },
  {
    id: "gastronomia",
    label: "Gastronomía",
    emoji: "☕",
    recommendation: "Combo Completo 1 · Tienda Web + Chatbot",
    serviceId: "combo-1",
    priceLabel: formatPrice(PRICES.combo),
    reason:
      "Con menú y pedidos online ordenados, el bot toma las consultas de horarios, delivery y reservas por vos.",
  },
  {
    id: "servicios",
    label: "Servicios profesionales",
    emoji: "💼",
    recommendation: "Combo Completo 2 · Landing Page + Chatbot",
    serviceId: "combo-2",
    priceLabel: formatPrice(PRICES.combo),
    reason:
      "Una landing clara más un bot que responde dudas y agenda reuniones: el combo exacto para conseguir consultas.",
  },
  {
    id: "salud",
    label: "Salud y bienestar",
    emoji: "🌿",
    recommendation: "Combo Completo 2 · Landing Page + Chatbot",
    serviceId: "combo-2",
    priceLabel: formatPrice(PRICES.combo),
    reason:
      "Transmití confianza con una página profesional y dejá que el bot responda y ordene los turnos desde el primer mensaje.",
  },
  {
    id: "arte",
    label: "Arte y deco",
    emoji: "🏺",
    recommendation: "Combo Completo 1 · Tienda Web + Chatbot",
    serviceId: "combo-1",
    priceLabel: formatPrice(PRICES.combo),
    reason:
      "Cada pieza merece su espacio. La tienda muestra el producto y el bot se ocupa de las consultas de envío y personalización.",
  },
  {
    id: "otro",
    label: "Mi rubro es otro",
    emoji: "✨",
    recommendation: "Diagnóstico personalizado",
    serviceId: "diagnosis",
    priceLabel: "Sin costo",
    reason:
      "En 10 minutos vemos tu caso, qué servicio se adapta mejor y cómo sumar el bot sin perder tiempo. Escribinos y lo definimos juntos.",
  },
];

export const marqueeItems = [
  "Tienda Web",
  "Landing Page",
  "Chatbot de IA",
  "Carrito y catálogo",
  "Convertí consultas",
  "Atención 24/7",
  "Diseño a medida",
  "Precios claros",
];
