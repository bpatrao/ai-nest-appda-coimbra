import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useT } from "@/i18n/use-t";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — APPDA Coimbra" },
      { name: "description", content: "História, missão, visão e valores da APPDA Coimbra." },
      { property: "og:title", content: "Sobre a APPDA Coimbra" },
      { property: "og:description", content: "Mais de duas décadas a apoiar pessoas autistas e suas famílias." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useT();
  return (
    <article>
      <header className="relative overflow-hidden rounded-2xl">
        <img
          src="/images/about-people.jpg"
          alt="Equipa da APPDA Coimbra a trabalhar com pessoas com autismo"
          className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          width={1200}
          height={675}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">{t("about.title")}</h1>
          <p className="mt-3 max-w-prose text-lg text-white/90">{t("about.lede")}</p>
        </div>
      </header>

      <section aria-labelledby="history-title" className="mt-12">
        <h2 id="history-title" className="text-2xl font-semibold">{t("about.history.title")}</h2>
        <p className="mt-3 text-muted-foreground">{t("about.history.body")}</p>
      </section>

      <section aria-labelledby="values-title" className="mt-12 grid gap-4 md:grid-cols-3">
        <h2 id="values-title" className="sr-only">Missão, visão e valores</h2>
        {(["mission", "vision", "values"] as const).map((k) => (
          <Card key={k}>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{t(`about.${k}.title` as const)}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {t(`about.${k}.body` as const)}
            </CardContent>
          </Card>
        ))}
      </section>
    </article>
  );
}
