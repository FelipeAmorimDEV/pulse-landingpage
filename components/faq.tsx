import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { TalkButton } from "@/components/schedule";

const QUESTIONS = [
  {
    title: "O que posso gerenciar com a Pulso?",
    answer:
      "O cadastro do evento, os tipos de ingresso, os lotes, a venda e a validação na portaria.",
  },
  {
    title: "Como funciona a compra com cashless?",
    answer:
      "O público recarrega a pulseira ou o cartão NFC. No PDV, o operador escolhe os produtos e a compra só confirma se o saldo cobre o pedido.",
  },
  {
    title: "De onde sai o dinheiro do cashless?",
    answer:
      "Da recarga. O saldo fica na pulseira ou no cartão. Sem saldo, o pedido não fecha.",
  },
  {
    title: "A venda do ingresso fica na Pulso?",
    answer:
      "Sim. O ingresso nasce no cadastro do evento e a portaria valida esse mesmo ingresso. A taxa de cada formato entra na conversa.",
  },
  {
    title: "A Pulso também cuida da entrada do público?",
    answer:
      "Sim. Os ingressos vendidos são validados na portaria, da venda até a chegada.",
  },
  {
    title: "E se a internet do local cair?",
    answer:
      "Portaria e PDV operam o mesmo evento. Na conversa, a equipe mostra como a entrada e o bar seguem se a rede oscilar.",
  },
  {
    title: "O mesmo cadastro vale para mais de um dia ou mais de um portão?",
    answer:
      "Tipos de ingresso e lotes ficam no mesmo cadastro. Dias e portões entram ali e são alinhados na conversa.",
  },
  {
    title: "Como levo a Pulso para o meu evento?",
    answer:
      "Agende uma conversa e diga o formato: festival, balada, corporativo ou estádio. A equipe mostra a operação de ingressos e cashless.",
  },
];

export function Faq() {
  return (
    <Section id="duvidas" className="border-t border-base-content/15">
      <Reveal>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Dúvidas da operação
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-base-content/70">
            Quer entender a operação para o seu evento?
          </p>
          <TalkButton size="lg" className="mt-8" />
        </div>
        <div>
          {QUESTIONS.map((question, index) => (
            <div
              key={question.title}
              className="collapse collapse-arrow scroll-mt-28 rounded-none border-b border-base-content/15"
            >
              <input
                type="radio"
                name="operacao"
                defaultChecked={index === 0}
                aria-label={question.title}
              />
              <div className="collapse-title px-0 text-lg font-bold sm:text-xl">
                {question.title}
              </div>
              <div className="collapse-content px-0 leading-relaxed text-base-content/70">
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </Section>
  );
}
