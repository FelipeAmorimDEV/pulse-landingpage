"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ScrollTrigger, gsap, useGSAP } from "@/components/motion";
import { Section } from "@/components/section";

const STEPS = [
  {
    title: "Escolha os produtos",
    body: "O operador monta o pedido no PDV.",
    src: "/pdv/catalogo.png",
    width: 392,
    height: 914,
    alt: "Catálogo do PDV, com busca, categorias e produtos para o pedido",
  },
  {
    title: "Confira o carrinho",
    body: "O total fica na tela antes de cobrar.",
    src: "/pdv/carrinho.png",
    width: 392,
    height: 841,
    alt: "Carrinho do PDV com quatro refrigerantes e total de 50 reais e 22 centavos",
  },
  {
    title: "Aproxime o cartão NFC",
    body: "O público paga sem procurar a carteira.",
    src: "/pdv/leitura-nfc.png",
    width: 392,
    height: 841,
    alt: "Pagamento por aproximação, aguardando a pulseira ou o cartão NFC",
  },
];

function stepFromProgress(progress: number, current: number) {
  if (progress >= 0.72) return 2;
  if (progress >= 0.38 && progress < 0.66) return 1;
  if (progress < 0.28) return 0;
  return current;
}

export function Cashless() {
  const root = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const apply = (progress: number) => {
        const next = stepFromProgress(progress, activeRef.current);
        if (next === activeRef.current) return;
        activeRef.current = next;
        setActive(next);
      };

      const motion = gsap.matchMedia();

      motion.add(
        "(min-width: 1024px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)",
        () => {
          ScrollTrigger.create({
            trigger: root.current,
            start: "top 64px",
            end: "+=160%",
            pin: true,
            anticipatePin: 1,
            scrub: 0.4,
            onUpdate: (self) => apply(self.progress),
          });
        },
      );

      motion.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 1023px), (prefers-reduced-motion: no-preference) and (min-width: 1024px) and (max-height: 759px)",
        () => {
          ScrollTrigger.create({
            trigger: root.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 0.4,
            onUpdate: (self) => apply(self.progress),
          });
        },
      );

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    },
    { scope: root },
  );

  return (
    <Section
      ref={root}
      id="cashless"
      frame={false}
      className="py-12 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:py-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Menos carteira.
            <br />
            Mais festa.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-base-content/70">
            Aproximou, pagou e voltou pro show. A venda no PDV usa cartão
            cashless NFC, do pedido à confirmação.
          </p>
          <ul className="steps steps-vertical mt-10 w-full" aria-label="Passos do pagamento">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                data-content={String(index + 1)}
                aria-current={active === index ? "step" : undefined}
                className={`step text-left ${index <= active ? "step-secondary" : ""}`}
              >
                <span className="block px-2 py-2">
                  <span
                    className={`block text-lg font-bold ${active === index ? "text-base-content" : "text-base-content/70"}`}
                  >
                    {step.title}
                  </span>
                  <span className="mt-1 block text-base leading-relaxed text-base-content/70">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-base-content/70 motion-reduce:hidden">
            Role a página para acompanhar o pagamento.
          </p>
        </div>
        <div className="flex justify-center rounded-box bg-accent px-4 py-10 text-accent-content">
          <div className="w-full max-w-[280px] rounded-[2rem] bg-neutral p-2">
            <div key={active} aria-live="polite" className="pulse-swap overflow-hidden rounded-[1.45rem]">
              <Image
                src={STEPS[active].src}
                alt={STEPS[active].alt}
                width={STEPS[active].width}
                height={STEPS[active].height}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

