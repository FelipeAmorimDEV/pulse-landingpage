import { Logo } from "@/components/logo";
import { FOOTER_GROUPS } from "@/components/site-links";
import { TalkButton } from "@/components/schedule";

export function SiteFooter() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:px-16">
        <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-4">
          <Logo tone="light" />
          <p className="max-w-xs text-lg leading-relaxed">
            Tecnologia para quem faz o evento acontecer.
          </p>
        </div>
        {FOOTER_GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title} className="flex flex-col gap-2 lg:col-span-2">
            <p className="text-base font-bold">{group.title}</p>
            {group.links.map((link) => (
              <a key={link.href} className="link link-hover py-1 text-base" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}
        <div className="flex flex-col items-start gap-4 md:col-span-2 lg:col-span-4 lg:items-end">
          <p className="max-w-xs text-base leading-relaxed lg:text-right">
            Conta o formato do evento e a equipe mostra a operação.
          </p>
          <TalkButton size="lg" className="w-full sm:w-auto" />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 border-t border-neutral-content/20 px-4 py-6 text-base sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
        <p>Pulso, no ritmo do seu evento.</p>
        <p>Do primeiro ingresso ao último pedido.</p>
      </div>
    </footer>
  );
}
