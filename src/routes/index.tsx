import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useT } from "@/i18n/use-t";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APPDA Coimbra — Início" },
      {
        name: "description",
        content:
          "Apoiamos pessoas autistas e suas famílias na região de Coimbra. Conheça os nossos serviços, projetos e como pode ajudar.",
      },
      { property: "og:title", content: "APPDA Coimbra" },
      {
        property: "og:description",
        content: "Pelas pessoas autistas e pelas suas famílias.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useT();
  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="relative left-1/2 w-screen -translate-x-1/2 bg-[#0b4650] py-16 md:py-24 -mt-10 md:-mt-14"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="text-white">
            <h1 id="hero-title" className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-5 max-w-prose text-lg text-white/85">
              {t("home.hero.lede")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white !text-[#0b4650] hover:bg-white/90">
                <Link to="/apoiar">
                  <HeartHandshake aria-hidden="true" className="size-5" />
                  {t("home.hero.cta.support")}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white !text-[#0b4650] hover:bg-white/90">
                <Link to="/servicos">
                  {t("home.hero.cta.services")}
                  <ArrowRight aria-hidden="true" className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
          <img
            src="/images/hero-people.jpg"
            alt="Pessoas autistas e famílias em atividades da APPDA Coimbra"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            width={1200}
            height={800}
          />
        </div>
      </section>

      

      <section aria-labelledby="highlights-title" className="pt-10">
        <h2 id="highlights-title" className="text-2xl font-semibold md:text-3xl">
          {t("home.highlights.title")}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("home.highlights.lede")}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["caci", "catl", "rai", "cfip"] as const).map((k) => (
            <Card key={k}>
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  {t(`home.highlights.${k}.title` as const)}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t(`home.highlights.${k}.desc` as const)}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/servicos">
              {t("home.highlights.cta")}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="cta-title" className="mt-20 rounded-2xl bg-primary px-6 py-12 text-primary-foreground md:px-12">
        <h2 id="cta-title" className="font-serif text-2xl font-semibold text-white md:text-3xl">
          {t("home.cta.title")}
        </h2>
        <p className="mt-3 text-primary-foreground/90">{t("home.cta.desc")}</p>
        <div className="mt-6">
        <Button asChild size="lg" className="bg-white !text-[#0b4650] hover:bg-white/90">
            <Link to="/apoiar">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
