import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useT } from "@/i18n/use-t";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — APPDA Coimbra" },
      { name: "description", content: "Próximos eventos da APPDA Coimbra: V Jornadas e Assembleia Geral." },
      { property: "og:title", content: "Eventos APPDA Coimbra" },
      { property: "og:description", content: "Encontros científicos e momentos da vida associativa." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t } = useT();
  const items = ["jornadas", "ag"] as const;
  return (
    <article>
      <header>
        <h1 className="text-4xl font-semibold md:text-5xl">{t("events.title")}</h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">{t("events.lede")}</p>
      </header>

      <section aria-labelledby="upcoming-title" className="mt-10">
        <h2 id="upcoming-title" className="text-2xl font-semibold">{t("events.upcoming")}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {items.map((k) => (
            <Card key={k}>
              <CardHeader>
                <CardTitle className="font-serif text-xl">{t(`events.${k}.title` as const)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p className="flex gap-2"><Calendar aria-hidden="true" className="mt-1 size-4 shrink-0" />{t(`events.${k}.when` as const)}</p>
                <p className="flex gap-2"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />{t(`events.${k}.where` as const)}</p>
                <p>{t(`events.${k}.body` as const)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </article>
  );
}
