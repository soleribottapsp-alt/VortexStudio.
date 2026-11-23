import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Diagnostic } from "@/components/Diagnostic";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // Cascada automática dentro de cada grupo marcado con data-reveal-group.
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      const items = Array.from(group.querySelectorAll<HTMLElement>(":scope > [data-reveal]"));
      items.forEach((item, i) => {
        if (item.style.getPropertyValue("--reveal-delay")) return;
        item.style.setProperty("--reveal-delay", `${Math.min(i * 85, 425)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-cream">
      <a
        href="#servicios"
        className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Saltar al contenido
      </a>

      <Header />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Diagnostic />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
