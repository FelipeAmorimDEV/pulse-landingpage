import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function Tickets() {
  return (
    <Section id="ingressos" tone="bg-neutral text-neutral-content">
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Da ideia ao “pode entrar.”
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-content/80">
          O ingresso nasce no cadastro, ganha lote e é lido na portaria.
        </p>
        <div className="mt-12 grid bg-base-100 text-base-content lg:grid-cols-3">
          <div
            id="cadastro"
            className="scroll-mt-28 border-b border-base-content/15 p-6 lg:border-r lg:border-b-0 lg:p-8"
          >
            <h3 className="text-xl font-bold">Cadastro do evento</h3>
            <dl className="mt-6 flex flex-col gap-4">
              <div>
                <dt className="text-sm text-base-content/60">Evento</dt>
                <dd className="text-lg font-bold">Nome do evento</dd>
              </div>
              <div>
                <dt className="text-sm text-base-content/60">Quando</dt>
                <dd className="text-lg font-bold">Data e abertura</dd>
              </div>
              <div>
                <dt className="text-sm text-base-content/60">Onde</dt>
                <dd className="text-lg font-bold">Local e portões</dd>
              </div>
            </dl>
          </div>
          <div className="border-b border-base-content/15 p-6 lg:border-r lg:border-b-0 lg:p-8">
            <h3 className="text-xl font-bold">Lote</h3>
            <p className="mt-6 text-sm font-bold text-secondary">Pista, 1º lote</p>
            <p className="mt-2 text-5xl font-bold tracking-tight">R$ 120</p>
            <p className="mt-4 leading-relaxed text-base-content/70">
              Tipos de ingresso e lotes no mesmo cadastro.
            </p>
          </div>
          <div id="portaria" className="scroll-mt-28 p-6 lg:p-8">
            <h3 className="text-xl font-bold">Portaria</h3>
            <p className="mt-6 text-sm font-bold text-secondary">Ingresso lido</p>
            <p className="mt-2 text-5xl font-bold tracking-tight">Pode entrar.</p>
            <p className="mt-4 leading-relaxed text-base-content/70">
              A leitura usa o ingresso que foi vendido nesse cadastro.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
