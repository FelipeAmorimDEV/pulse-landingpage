"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/components/site-links";

type NavLinksProps = {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export function NavLinks({ orientation = "horizontal", onNavigate }: NavLinksProps) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (section): section is HTMLElement => section !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      className={`menu menu-lg nav-menu ${orientation === "horizontal" ? "menu-horizontal px-0" : "w-full px-0"}`}
    >
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            aria-current={active === link.id ? "true" : undefined}
            onClick={onNavigate}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
