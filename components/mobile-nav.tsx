"use client";

import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";
import { TalkButton } from "@/components/schedule";

export function MobileNav() {
  function close() {
    const drawer = document.getElementById("nav-drawer");
    if (drawer instanceof HTMLInputElement) drawer.checked = false;
  }

  return (
    <div className="drawer-side z-50">
      <label htmlFor="nav-drawer" aria-label="Fechar menu" className="drawer-overlay" />
      <div className="flex min-h-full w-72 flex-col gap-6 bg-neutral p-6 text-neutral-content">
        <Logo tone="light" />
        <nav aria-label="Seções">
          <NavLinks orientation="vertical" onNavigate={close} />
        </nav>
        <TalkButton size="lg" className="w-full" />
      </div>
    </div>
  );
}
