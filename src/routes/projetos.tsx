import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useT } from "@/i18n/use-t";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — APPDA Coimbra" },
      { name: "description", content: "Azul Mirtilo, Quiosque CoMsigo, BlueWash e ConVida — inclusão pelo trabalho e pela comunidade." },
      { property: "og:title", content: "Projetos APPDA Coimbra" },
      { property: "og:description", content: "Iniciativas com impacto e receita própria para sustentar os serviços." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useT();
  const items = ["azul", "quiosque", "bluewash", "convida"] as const;
  return (
    <article>
      <header>
        <h1 className="text-4xl font-semibold md:text-5xl">{t("projects.title")}</h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">{t("projects.lede")}</p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((k) => (
          <Card key={k}>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{t(`projects.${k}.title` as const)}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {t(`projects.${k}.body` as const)}
            </CardContent>
          </Card>
        ))}
      </section>
    </article>
  );
}
