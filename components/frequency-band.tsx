const ITEMS = ["Ingressos", "Portaria", "Cashless", "PDV"];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 items-center gap-8 px-4 py-6 text-xl font-bold sm:gap-12 sm:text-3xl ${hidden ? "marquee-duplicate" : ""}`}
      aria-hidden={hidden}
    >
      {ITEMS.map((item) => (
        <li key={`${hidden ? "b" : "a"}-${item}`} className="flex items-center gap-8 sm:gap-12">
          <span>{item}</span>
          <span aria-hidden="true" className="text-primary-content/40">
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

export function FrequencyBand() {
  return (
    <section aria-label="Operação da Pulso" className="overflow-hidden bg-primary text-primary-content">
      <div className="marquee-track flex w-max">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </section>
  );
}
