import { Reveal } from "@/components/reveal";
import { SectionLink } from "@/components/section-link";

export function Manifesto() {
  return (
    <section id="plataforma" className="scroll-mt-28 grid lg:grid-cols-2">
      <Reveal className="px-4 py-16 sm:px-8 lg:py-28 lg:pr-16 lg:pl-[max(4rem,calc((100vw-1440px)/2+4rem))]">
        <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Dois lados.
          <br />
          Um só pulso.
        </h2>
        <p className="mt-8 max-w-md text-2xl font-bold leading-snug">Na frente, a pista.</p>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-base-content/70">
          O público aproxima a pulseira, paga no bar e volta para o show sem
          procurar a carteira.
        </p>
        <SectionLink href="#cashless" className="mt-8">
          Ver o pagamento no PDV
        </SectionLink>
      </Reveal>
      <div className="bg-neutral px-4 py-16 text-neutral-content sm:px-8 lg:py-28 lg:pr-[max(4rem,calc((100vw-1440px)/2+4rem))] lg:pl-16">
        <Reveal>
          <p className="max-w-md text-2xl font-bold leading-snug sm:text-3xl">
            Nos bastidores, o cadastro.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-content/80">
            O ingresso nasce no evento, ganha lote e é lido na portaria. Quem
            organiza, quem confere a entrada e quem cobra no bar usam o mesmo
            cadastro.
          </p>
          <SectionLink href="#ingressos" className="mt-8 text-primary">
            Ver o ingresso
          </SectionLink>
        </Reveal>
      </div>
    </section>
  );
}
