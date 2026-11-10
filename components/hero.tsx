import Image from "next/image";
import { Logo } from "@/components/logo";
import { TalkButton } from "@/components/schedule";

export function Hero() {
  return (
    <section
      id="topo"
      className="hero relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-neutral text-neutral-content"
    >
      <Image
        src="/crowd.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral from-5% via-neutral/55 via-48% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral/85 via-transparent to-neutral/25" />
      <div className="hero-content z-10 mx-auto min-h-[calc(100svh-4.5rem)] w-full max-w-[1440px] flex-col items-stretch justify-end px-4 pt-28 pb-8 sm:px-8 lg:px-16 lg:pb-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-[0.98] tracking-tighter sm:text-6xl lg:text-8xl">
              <span className="pulse-settle block">O evento pulsa.</span>
              <span className="pulse-settle pulse-settle-late block text-primary">
                Você comanda.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">
              Do primeiro ingresso ao último pedido. Cashless e gestão de eventos
              na mesma frequência.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <TalkButton size="lg" className="w-full sm:w-auto" />
              <a
                href="#cashless"
                className="btn btn-lg w-full border-neutral-content bg-transparent px-7 text-base text-neutral-content sm:w-auto hover:border-neutral-content hover:bg-neutral-content hover:text-neutral"
              >
                Ver a operação
              </a>
            </div>
          </div>
          <aside className="pulse-settle pulse-settle-late w-full max-w-sm rounded-box bg-primary p-6 text-primary-content">
            <Logo tone="forest" />
            <p className="mt-8 text-2xl font-bold leading-tight">Seu acesso ao agora.</p>
            <p className="mt-3 text-sm leading-relaxed">Aproxime, viva, repita.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
