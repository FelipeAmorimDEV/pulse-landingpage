import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionLink } from "@/components/section-link";

export function Gear() {
  return (
    <Section id="equipamento" className="border-t border-base-content/15">
      <Reveal>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            O que vai para o evento.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-base-content/70">
            A pulseira fica com o público. O leitor e o celular ficam com a equipe.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-16">
        <Reveal>
          <article className="border-t-4 border-secondary pt-6">
            <h3 className="max-w-md text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Pulseira ou cartão NFC
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-base-content/70">
              O público recarrega o saldo e aproxima para pagar. A compra só
              confirma se o saldo cobre o pedido.
            </p>
            <SectionLink href="#cashless" className="mt-6">
              Ver o pagamento
            </SectionLink>
          </article>
        </Reveal>
        <div className="flex flex-col gap-10 border-t border-base-content/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <Reveal>
            <article>
              <h3 className="text-2xl font-bold">Leitor</h3>
              <p className="mt-3 text-lg leading-relaxed text-base-content/70">
                Na portaria, lê o ingresso. No bar, lê a pulseira.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <SectionLink href="#portaria">Na portaria</SectionLink>
                <SectionLink href="#cashless">No bar</SectionLink>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article>
              <h3 className="text-2xl font-bold">Celular com o PDV</h3>
              <p className="mt-3 text-lg leading-relaxed text-base-content/70">
                O operador escolhe os produtos, confere o total e confirma a
                leitura na mesma tela.
              </p>
              <SectionLink href="#cashless" className="mt-4">
                Abrir o PDV
              </SectionLink>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
