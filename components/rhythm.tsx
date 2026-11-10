"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/components/motion";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionLink } from "@/components/section-link";

const MOMENTS = [
  {
    when: "Antes",
    title: "O evento sai do papel.",
    text: "Nome, data, local, tipos de ingresso e lotes entram no mesmo cadastro.",
    href: "#cadastro",
    link: "Ver o cadastro",
  },
  {
    when: "Na chegada",
    title: "A portaria lê o ingresso.",
    text: "A leitura usa o ingresso que foi vendido. Quem está na lista entra.",
    href: "#portaria",
    link: "Ver a portaria",
  },
  {
    when: "Lá dentro",
    title: "O bar cobra na pulseira.",
    text: "O operador monta o pedido no PDV e o público aproxima o cartão NFC.",
    href: "#cashless",
    link: "Ver o PDV",
  },
];

const LIGHT_AT = [0.08, 0.4, 0.72];

export function Rhythm() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const moments = gsap.utils.toArray<HTMLElement>("[data-rhythm-moment]", root.current);

        gsap.fromTo(
          line.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 78%",
              end: "center 52%",
              scrub: 0.45,
              onUpdate: (self) => {
                moments.forEach((moment, index) => {
                  moment.dataset.lit = self.progress >= LIGHT_AT[index] ? "true" : "false";
                });
              },
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <Section ref={root} id="ritmo">
      <Reveal>
        <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Cada momento no seu ritmo.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-base-content/70">
          Da publicação do evento ao pagamento no PDV.
        </p>
      </Reveal>
      <div className="relative mt-14">
        <span aria-hidden="true" className="rhythm-track" />
        <span ref={line} aria-hidden="true" className="rhythm-line" />
        <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {MOMENTS.map((moment) => (
            <li
              key={moment.when}
              data-rhythm-moment
              data-lit="false"
              className="rhythm-moment relative border-l border-secondary pl-5 lg:border-0 lg:pl-0"
            >
              <span aria-hidden="true" className="rhythm-dot" />
              <p className="rhythm-when font-bold text-secondary lg:mt-8">{moment.when}</p>
              <p className="rhythm-title mt-3 text-xl font-bold">{moment.title}</p>
              <p className="mt-2 max-w-xs text-base leading-relaxed text-base-content/70">
                {moment.text}
              </p>
              <SectionLink href={moment.href} className="mt-4">
                {moment.link}
              </SectionLink>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
