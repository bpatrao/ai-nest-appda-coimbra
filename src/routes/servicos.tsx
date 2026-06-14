import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/use-t";
import { EnrollDialog } from "@/components/EnrollDialog";


export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — APPDA Coimbra" },
      { name: "description", content: "CACI, CATL, RAI e CFIP — respostas para diferentes idades e necessidades." },
      { property: "og:title", content: "Serviços APPDA Coimbra" },
      { property: "og:description", content: "Respostas terapêuticas, ocupacionais e formativas." },
    ],
  }),
  component: ServicesPage,
});

const items = [
  { k: "caci", image: "/images/serv-caci.jpg", audience: "Adultos", short: "Capacitação e participação" },
  { k: "catl", image: "/images/serv-catl.jpg", audience: "Crianças e jovens", short: "Tempos livres e férias" },
  { k: "rai", image: "/images/serv-rai.jpg", audience: "Todas as idades", short: "Acompanhamento terapêutico" },
  { k: "cfip", image: "/images/serv-cfip.jpg", audience: "Jovens e adultos", short: "Formação e emprego" },
] as const;

function ServicesPage() {
  const { t } = useT();
  return (
    <article aria-labelledby="services-heading">
      <header>
        <h1 id="services-heading" className="text-4xl font-semibold md:text-5xl">{t("services.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("services.lede")}</p>
      </header>


      <div className="mt-12 space-y-16 md:space-y-20">
        {items.map(({ k, image, audience, short }, i) => (
          <section
            key={k}
            id={k}
            aria-labelledby={`${k}-title`}
            className="scroll-mt-24 grid items-center gap-6 md:grid-cols-2 md:gap-10"
          >
            <img
              src={image}
              alt={t(`services.${k}.title` as const)}
              width={1024}
              height={768}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded-2xl object-cover ${i % 2 ? "md:order-2" : ""}`}
            />
            <div>
              <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{audience}</span>
                <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground">{short}</span>
              </div>
              <h2 id={`${k}-title`} className="mt-3 font-serif text-2xl md:text-3xl">
                {t(`services.${k}.title` as const)}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/80 md:text-lg">
                {t(`services.${k}.body` as const)}
              </p>
              <EnrollDialog
                serviceKey={k}
                serviceName={t(`services.${k}.title` as const)}
              />
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

