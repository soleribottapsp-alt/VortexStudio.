/**
 * CONFIGURACIÓN DE CONTACTO
 * -------------------------
 * Reemplazá WHATSAPP_NUMBER por el número real del negocio:
 * formato internacional, sin +, sin espacios y sin guiones.
 * Ejemplo Argentina: 5491123456789
 */
export const WHATSAPP_NUMBER = "5493564218065";

export const BRAND = {
  name: "Vortex Studio",
  founders: ["Benjamin Wolf", "Tiziano Botta"],
  location: "San Francisco, Córdoba",
  email: "hola@vortexstudio.com",
  instagram: "@vortexstudio",
};

export const PRICES = {
  store: 60000,
  landing: 60000,
  bot: 50000,
  combo: 110000,
};

export const formatPrice = (value: number) =>
  `$${value.toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;
