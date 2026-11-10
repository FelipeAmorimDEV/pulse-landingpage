import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SectionLink } from "@/components/section-link";

const RECORDS = [
  {
    title: "Entrada conferida",
    text: "A portaria fecha com os ingressos que entraram.",
    href: "#portaria",
    link: "Voltar à portaria",
  },
  {
    title: "Venda do bar fechada",
    text: "O PDV guarda cada pedido feito na noite.",
    href: "#cashless",
    link: "Voltar ao PDV",
  },
  {
    title: "Cashless conciliado",
    text: "O saldo usado na pulseira fecha com o caixa.",
    href: "#cashless",
    link: "Voltar ao cashless",
  },
];

export function Closeout() {
  return (
    <Section id="fechamento" tone="bg-neutral text-neutral-content">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <Reveal>
          <h2 className="max-w-sm text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            O que fecha com o evento.
          </h2>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-neutral-content/80">
            Três registros. Cada um aponta para a parte da noite de onde veio.
          </p>
        </Reveal>
        <dl>
          {RECORDS.map((record) => (
            <Reveal key={record.title}>
              <div className="grid gap-3 border-b border-neutral-content/20 py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
                <div>
                  <dt className="text-2xl font-bold">{record.title}</dt>
                  <dd className="mt-2 max-w-md text-lg leading-relaxed text-neutral-content/80">
                    {record.text}
                  </dd>
                </div>
                <SectionLink href={record.href} className="text-primary lg:text-right">
                  {record.link}
                </SectionLink>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
