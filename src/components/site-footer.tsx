import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/use-t";

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-primary">APPDA Coimbra</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("footer.nipc")}</p>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-semibold text-foreground">{t("contact.title")}</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" /> Quinta da Conraria, 3040-714 Castelo Viegas, Coimbra</li>
            <li className="flex gap-2"><Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0" /> <a href="tel:+351239802070" className="hover:text-foreground">+351 239 802 070</a></li>
            <li className="flex gap-2"><Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" /> <a href="mailto:geral@appda-coimbra.org.pt" className="hover:text-foreground">geral@appda-coimbra.org.pt</a></li>
          </ul>
        </address>

        <div>
          <h2 className="text-sm font-semibold text-foreground">{t("footer.follow")}</h2>
          <ul className="mt-3 flex gap-3">
            <li>
              <a
                href="https://www.facebook.com/appda.coimbra"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook APPDA Coimbra"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted"
              >
                <Facebook aria-hidden="true" className="size-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/appdacoimbra"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram APPDA Coimbra"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted"
              >
                <Instagram aria-hidden="true" className="size-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/appda-coimbra"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn APPDA Coimbra"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted"
              >
                <Linkedin aria-hidden="true" className="size-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@appdacoimbra"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube APPDA Coimbra"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted"
              >
                <Youtube aria-hidden="true" className="size-5" />
              </a>
            </li>
          </ul>

          <nav aria-label="Rodapé" className="mt-6">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <li><Link to="/sobre" className="hover:text-foreground">{t("nav.about")}</Link></li>
              <li><Link to="/apoiar" className="hover:text-foreground">{t("nav.support")}</Link></li>
              <li><Link to="/contactos" className="hover:text-foreground">{t("nav.contact")}</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} APPDA Coimbra. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
