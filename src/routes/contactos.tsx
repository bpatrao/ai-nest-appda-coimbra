import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useT } from "@/i18n/use-t";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — APPDA Coimbra" },
      { name: "description", content: "Morada, telefone, email e horário da APPDA Coimbra. Envie-nos uma mensagem." },
      { property: "og:title", content: "Contactos APPDA Coimbra" },
      { property: "og:description", content: "Estamos disponíveis para o ajudar." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useT();
  return (
    <article>
      <header>
        <h1 className="text-4xl font-semibold md:text-5xl">{t("contact.title")}</h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">{t("contact.lede")}</p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-5 text-primary" />
              {t("contact.address.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="whitespace-pre-line text-muted-foreground">
            {t("contact.address.body")}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center gap-2">
              <Phone aria-hidden="true" className="size-5 text-primary" />
              {t("contact.phone.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="tel:+351239802070" className="text-muted-foreground hover:text-foreground">
              +351 239 802 070
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center gap-2">
              <Mail aria-hidden="true" className="size-5 text-primary" />
              {t("contact.email.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="mailto:geral@appda-coimbra.org.pt" className="text-muted-foreground hover:text-foreground">
              geral@appda-coimbra.org.pt
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center gap-2">
              <Clock aria-hidden="true" className="size-5 text-primary" />
              {t("contact.hours.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{t("contact.hours.body")}</CardContent>
        </Card>
      </section>

      <section aria-labelledby="contact-form-title" className="mt-12">
        <h2 id="contact-form-title" className="text-2xl font-semibold">
          {t("contact.form.title")}
        </h2>
        <ContactForm />
      </section>
    </article>
  );
}

function ContactForm() {
  const { t } = useT();
  const [rgpd, setRgpd] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rgpd) {
      toast.error(t("form.required"));
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success(t("support.form.success"));
    (e.target as HTMLFormElement).reset();
    setRgpd(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid max-w-2xl gap-4">
      <div className="grid gap-2">
        <Label htmlFor="c-name">{t("support.form.name")} *</Label>
        <Input id="c-name" name="name" required autoComplete="name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-email">{t("support.form.email")} *</Label>
        <Input id="c-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-subject">{t("contact.form.subject")} *</Label>
        <Input id="c-subject" name="subject" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-message">{t("support.form.message")} *</Label>
        <Textarea id="c-message" name="message" required rows={6} />
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="c-rgpd" checked={rgpd} onCheckedChange={(v) => setRgpd(v === true)} />
        <Label htmlFor="c-rgpd" className="text-sm font-normal leading-relaxed">
          {t("support.form.rgpd")}
        </Label>
      </div>
      <div>
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? t("support.form.sending") : t("support.form.submit")}
        </Button>
      </div>
    </form>
  );
}
