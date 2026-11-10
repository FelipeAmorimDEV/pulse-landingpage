"use client";

import type { KeyboardEvent } from "react";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";
import { TalkButton } from "@/components/schedule";

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="size-6">
      <path
        d="M3 6h16M3 11h16M3 16h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function openMenuFromKeyboard(event: KeyboardEvent<HTMLLabelElement>) {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  const drawer = document.getElementById("nav-drawer");
  if (drawer instanceof HTMLInputElement) drawer.click();
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-content/15 bg-neutral text-neutral-content">
      <div className="navbar mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-16">
        <div className="navbar-start w-auto! gap-2 lg:w-1/2!">
          <label
            htmlFor="nav-drawer"
            role="button"
            tabIndex={0}
            aria-label="Abrir menu"
            onKeyDown={openMenuFromKeyboard}
            className="btn btn-square btn-ghost lg:hidden"
          >
            <MenuIcon />
          </label>
          <a
            href="#topo"
            className="inline-flex rounded-field focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Logo tone="light" />
          </a>
        </div>
        <nav className="navbar-center hidden lg:flex" aria-label="Seções">
          <NavLinks />
        </nav>
        <div className="navbar-end ml-auto w-auto! gap-2 lg:ml-0 lg:w-1/2!">
          <TalkButton size="lg" className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}
