import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionLink } from "@/components/section-link";

export function Crew() {
  return (
    <Section id="equipe">
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Três pessoas no mesmo cadastro.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-base-content/70">
          Cada uma abre uma parte da noite. O cadastro é o mesmo.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-px bg-base-content/15 lg:grid-cols-12">
        <Reveal className="bg-base-100 p-6 sm:p-8 lg:col-span-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
          <h3 className="text-3xl font-bold leading-tight lg:col-span-4">Quem organiza</h3>
          <div className="mt-4 lg:col-span-8 lg:mt-0">
            <p className="max-w-xl text-lg leading-relaxed text-base-content/70">
              Cadastra o evento, publica os tipos de ingresso e abre os lotes
              antes da casa encher.
            </p>
            <SectionLink href="#cadastro" className="mt-5">
              Abrir o cadastro
            </SectionLink>
          </div>
        </Reveal>
        <Reveal className="bg-secondary p-6 text-secondary-content sm:p-8 lg:col-span-5">
          <h3 className="text-3xl font-bold leading-tight">Quem está na portaria</h3>
          <p className="mt-4 text-lg leading-relaxed text-secondary-content/80">
            Lê o ingresso que saiu desse cadastro e confirma quem pode entrar.
          </p>
          <SectionLink href="#portaria" className="mt-6">
            Ver a leitura
          </SectionLink>
        </Reveal>
        <Reveal className="bg-accent p-6 text-accent-content sm:p-8 lg:col-span-7">
          <h3 className="text-3xl font-bold leading-tight">Quem opera o bar</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed">
            Monta o pedido no celular e recebe com a pulseira ou o cartão NFC.
          </p>
          <SectionLink href="#cashless" className="mt-6">
            Ver o PDV
          </SectionLink>
        </Reveal>
      </div>
    </Section>
  );
}
