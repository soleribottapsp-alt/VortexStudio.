import { WHATSAPP_NUMBER } from "@/config";

/** Arma un link de WhatsApp con un mensaje prearmado. */
export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const MESSAGES = {
  general:
    "¡Hola Vortex Studio! 👋 Vi la web y quiero hacer crecer mi negocio online. ¿Me cuentan cómo arrancamos?",
  store:
    "¡Hola Vortex Studio! 🛍️ Me interesa la *Tienda Web* ($60.000). Quiero una tienda online completa con carrito, catálogo y pagos. ¿Cómo empezamos?",
  landing:
    "¡Hola Vortex Studio! 🚀 Me interesa la *Landing Page* ($60.000). Necesito una página rápida y clara para convertir visitas en consultas. ¿Cómo empezamos?",
  bot:
    "¡Hola Vortex Studio! 🤖 Me interesa el *Chatbot de IA* ($50.000). Quiero un asistente entrenado para mi negocio que responda y ayude a cerrar consultas. ¿Cómo empezamos?",
  combo1:
    "¡Hola Vortex Studio! 🔥 Me interesa el *Combo Completo 1: Tienda Web + Chatbot de IA* ($110.000). Quiero la tienda completa con el bot entrenado para mi negocio. ¿Cómo seguimos?",
  combo2:
    "¡Hola Vortex Studio! 🔥 Me interesa el *Combo Completo 2: Landing Page + Chatbot de IA* ($110.000). Quiero la landing de conversión con el bot entrenado a medida. ¿Cómo seguimos?",
  diagnosis:
    "¡Hola Vortex Studio! 📋 Quiero mi *Diagnóstico Exprés de 10 minutos*. Quiero ver cómo se vería mi negocio online y qué servicio o combo me conviene. ¿Cuándo tenemos la charla?",
  diagnosisWithRubro: (rubro: string, recommendation: string) =>
    `¡Hola Vortex Studio! 📋 Quiero mi *Diagnóstico Exprés de 10 minutos*. Mi rubro es *${rubro}* y en la web me recomendó *${recommendation}*. ¿Cómo seguimos?`,
  footer:
    "¡Hola Vortex Studio! 👋 Quiero hablar sobre la web de mi negocio. ¿Me pasan los próximos pasos?",
};
