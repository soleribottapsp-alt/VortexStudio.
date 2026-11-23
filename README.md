# Vortex Studio — Sitio de servicios

Sitio de una página (React + Vite + Tailwind CSS 4) con todos los servicios, combos,
el Diagnóstico Exprés y botones de WhatsApp con mensaje prearmado por opción.

## 1. Configurar el WhatsApp

Editá **`src/config.ts`** y reemplazá el número de ejemplo:

```ts
export const WHATSAPP_NUMBER = "5493564218065"; // sin +, sin espacios, sin guiones
```

Formato internacional. Ejemplo Argentina (Buenos Aires): `5491123456789`.

Los mensajes prearmados de cada tarjeta viven en **`src/utils/whatsapp.ts`** (`MESSAGES`).
Hay uno para Tienda Web, Landing Page, Chatbot de IA, Combo 1, Combo 2, Diagnóstico y footer.

## 2. Código del chatbot

Antes del cierre de `</body>` de **`index.html`** está el espacio reservado:

```html
<!-- AQUÍ VA EL CÓDIGO DEL CHATBOT -->
```

Pegá ahí el widget. La burbuja flotante de WhatsApp usa `z-[80]`, por encima del resto
del sitio, y el footer reserva espacio inferior para que nada la tape.

## 3. Logo

Los archivos de marca están en `src/assets/logo-dark.png` y `src/assets/logo-light.png`.
El logo público (`public/logo.png`, fondo transparente) es el mismo lockup horizontal.

## 4. Build y deploy en Netlify

```bash
npm install
npm run build
```

Se genera **`dist/`**. Con `vite-plugin-singlefile`, `dist/index.html` queda unificado
(HTML + CSS + JS + assets en línea), por lo que se puede arrastrar la carpeta `dist/`
directo a Netlify. También podés conectar el repo: `netlify.toml` ya define
`command = "npm run build"` y `publish = "dist"`.

- `public/favicon.svg` y `public/logo.png` se copian con rutas relativas (`./`).
- No hay dependencias de imágenes locales fuera de las incluidas en el build.

## 5. Contenido

| Servicio     | Precio   | Incluye                                                                    |
| ------------ | -------- | -------------------------------------------------------------------------- |
| Tienda Web   | $60.000  | Carrito, catálogo, organización visual, pedidos y cobros                   |
| Landing Page | $60.000  | Página de conversión, rápida y clara, para campañas, servicios o lanzamientos |
| Chatbot IA   | $50.000  | Entrenado para el negocio, responde, guía y cierra consultas o reuniones    |
| Combo 1      | $110.000 | Tienda Web + Chatbot de IA                                                  |
| Combo 2      | $110.000 | Landing Page + Chatbot de IA                                                |

**Vortex Studio** — Benjamin Wolf y Tiziano Botta.
