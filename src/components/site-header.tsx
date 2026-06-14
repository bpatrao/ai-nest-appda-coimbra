import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { A11yPanel } from "./a11y-panel";
import { ModeToggle, LangToggle } from "./mode-toggle";
import { useT } from "@/i18n/use-t";
import type { DictKey } from "@/i18n/dict";

// Served from public/ so the build is self-contained (no external Lovable CDN).
const LOGO_URL = "/appda-coimbra-logo.png";

const NAV: { to: string; key: DictKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/sobre", key: "nav.about" },
  { to: "/servicos", key: "nav.services" },
  { to: "/projetos", key: "nav.projects" },
  { to: "/eventos", key: "nav.events" },
  { to: "/noticias", key: "nav.news" },
  { to: "/apoiar", key: "nav.support" },
  { to: "/contactos", key: "nav.contact" },
];

export function SiteHeader() {
  const { t } = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="APPDA Coimbra">
          <img src={LOGO_URL} alt="APPDA Coimbra" className="h-10 w-auto" />
          <span className="sr-only">APPDA Coimbra</span>
        </Link>

        <nav aria-label="Principal" className="ml-6 hidden gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-foreground" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex"><ModeToggle /></div>
          <div className="hidden md:flex"><LangToggle /></div>
          <A11yPanel />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label={t("nav.menu")}>
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>{t("nav.menu")}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Principal mobile" className="mt-6 flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                    activeProps={{ className: "bg-muted text-foreground" }}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3 px-4">
                <ModeToggle />
                <LangToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
