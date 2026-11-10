import { Cashless } from "@/components/cashless";
import { Closeout } from "@/components/closeout";
import { Crew } from "@/components/crew";
import { Faq } from "@/components/faq";
import { FrequencyBand } from "@/components/frequency-band";
import { Gear } from "@/components/gear";
import { Hero } from "@/components/hero";
import { Invite } from "@/components/invite";
import { Manifesto } from "@/components/manifesto";
import { MobileNav } from "@/components/mobile-nav";
import { Rhythm } from "@/components/rhythm";
import { ScheduleRoot } from "@/components/schedule";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Tickets } from "@/components/tickets";

export default function Home() {
  return (
    <ScheduleRoot>
      <div className="drawer">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <a
            href="#conteudo"
            className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
          >
            Ir para o conteúdo
          </a>
          <SiteHeader />
          <main id="conteudo">
            <Hero />
            <FrequencyBand />
            <Manifesto />
            <Crew />
            <Cashless />
            <Gear />
            <Tickets />
            <Rhythm />
            <Closeout />
            <Faq />
            <Invite />
          </main>
          <SiteFooter />
        </div>
        <MobileNav />
      </div>
    </ScheduleRoot>
  );
}
