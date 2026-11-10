import { Reveal } from "@/components/reveal";
import { TalkButton } from "@/components/schedule";

export function Invite() {
  return (
    <section id="conversa" className="scroll-mt-28 bg-primary text-primary-content">
      <Reveal className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-24">
        <div>
          <h2 className="max-w-5xl text-4xl font-bold leading-[1.02] tracking-tighter sm:text-6xl lg:text-[6.25rem]">
            <span className="block">Seu evento.</span>
            <span className="block">Em outra frequência.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed sm:text-2xl">
            Você traz a ideia e o público. A Pulso conecta a operação.
          </p>
        </div>
        <TalkButton tone="neutral" size="lg" className="w-full shrink-0 lg:w-auto" />
      </Reveal>
    </section>
  );
}
