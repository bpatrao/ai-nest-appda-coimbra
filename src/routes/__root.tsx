import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { I18nProvider, useT } from "@/i18n/use-t";
import { SitePrefsProvider } from "@/lib/site-prefs";
import { Toaster } from "@/components/ui/sonner";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "APPDA Coimbra",
  alternateName:
    "Associação Portuguesa para as Perturbações do Desenvolvimento e Autismo de Coimbra",
  url: "https://appda-coimbra.org.pt",
  email: "geral@appda-coimbra.org.pt",
  telephone: "+351-239-802-070",
  taxID: "505772302",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Quinta da Conraria",
    postalCode: "3040-714",
    addressLocality: "Castelo Viegas, Coimbra",
    addressCountry: "PT",
  },
  sameAs: [
    "https://www.facebook.com/appda.coimbra",
    "https://www.instagram.com/appdacoimbra",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-6xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A página que procura não existe.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Algo correu mal
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Pode tentar de novo ou voltar à página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-3 text-base font-medium text-foreground hover:bg-muted"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "APPDA Coimbra — Pelas pessoas autistas e suas famílias" },
      {
        name: "description",
        content:
          "Associação sem fins lucrativos que apoia pessoas autistas e suas famílias na região de Coimbra. Serviços, projetos, eventos e formas de apoiar.",
      },
      { name: "author", content: "APPDA Coimbra" },
      { property: "og:title", content: "APPDA Coimbra" },
      {
        property: "og:description",
        content:
          "Pelas pessoas autistas e pelas suas famílias — apoio terapêutico, ocupacional e de inclusão social em Coimbra.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Lora:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='appda.prefs.v1';var p=JSON.parse(localStorage.getItem(k)||'{}');var r=document.documentElement;r.setAttribute('data-color-mode',p.mode||'vivid');r.setAttribute('data-a11y-text',p.text||'sm');r.setAttribute('data-a11y-motion',p.motion||'auto');r.setAttribute('data-a11y-contrast',p.contrast||'auto');r.setAttribute('data-a11y-simple',p.simple||'off');var l=localStorage.getItem('appda.lang');if(l==='pt'||l==='en')r.lang=l;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SkipLink() {
  const { t } = useT();
  return <a href="#main" className="skip-link">{t("a11y.skip")}</a>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <SitePrefsProvider>
          <SkipLink />
          <SiteHeader />
          <main id="main" className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
            <Outlet />
          </main>
          <SiteFooter />
          <Toaster />
        </SitePrefsProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}
