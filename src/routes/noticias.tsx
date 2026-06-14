import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/use-t";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — APPDA Coimbra" },
      { name: "description", content: "Últimas publicações da APPDA Coimbra no Facebook e Instagram." },
      { property: "og:title", content: "Notícias APPDA Coimbra" },
      { property: "og:description", content: "Acompanhe as nossas últimas publicações." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const { t } = useT();
  return (
    <article>
      <header>
        <h1 className="text-4xl font-semibold md:text-5xl">{t("news.title")}</h1>
        <p className="mt-4 max-w-full text-lg text-muted-foreground">{t("news.lede")}</p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-xl font-semibold">{t("news.facebook")}</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title="Publicações Facebook APPDA Coimbra"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fappda.coimbra&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
              loading="lazy"
              className="h-[700px] w-full"
              scrolling="no"
              frameBorder="0"
              allow="encrypted-media"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold">{t("news.instagram")}</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title="Perfil Instagram APPDA Coimbra"
              src="https://www.instagram.com/appdacoimbra/embed"
              loading="lazy"
              className="h-[700px] w-full"
              scrolling="no"
              frameBorder="0"
              allow="encrypted-media"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
