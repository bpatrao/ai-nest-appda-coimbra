import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useT } from "@/i18n/use-t";

const IBAN = "PT50 0035 0072 0000 5772 3023 0";

export const Route = createFileRoute("/apoiar")({
  head: () => ({
    meta: [
      { title: "Apoiar — APPDA Coimbra" },
      { name: "description", content: "Escalões de patrocínio, IBAN para donativos e consignação de 0,5% do IRS à APPDA Coimbra." },
      { property: "og:title", content: "Apoiar a APPDA Coimbra" },
      { property: "og:description", content: "Patrocine, doe ou consigne 0,5% do seu IRS." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const { t } = useT();
  const [copied, setCopied] = useState(false);

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN.replace(/\s/g, ""));
      setCopied(true);
      toast.success(t("support.iban.copied"));
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("—");
    }
  };

  return (
    <article>
      <header>
        <h1 className="text-4xl font-semibold md:text-5xl">{t("support.title")}</h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">{t("support.lede")}</p>
      </header>

      <section aria-labelledby="tiers-title" className="mt-12">
        <h2 id="tiers-title" className="text-2xl font-semibold">{t("support.tiers.title")}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {(["friend", "partner", "patron"] as const).map((k) => (
            <Card key={k}>
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  {t(`support.tiers.${k}.name` as const)}
                </CardTitle>
                <p className="text-sm font-semibold text-accent">
                  {t(`support.tiers.${k}.amount` as const)}
                </p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t(`support.tiers.${k}.benefits` as const)}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="iban-title" className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle id="iban-title" className="font-serif text-xl">{t("support.iban.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{t("support.iban.label")}</p>
            <p className="mt-2 select-all font-mono text-lg">{IBAN}</p>
            <Button onClick={copyIban} variant="outline" className="mt-4 gap-2">
              {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
              {t("support.iban.copy")}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl">{t("support.irs.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t("support.irs.body")}</p>
            <p className="mt-3 font-mono text-lg font-semibold text-primary">{t("support.irs.nipc")}</p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="form-title" className="mt-12">
        <h2 id="form-title" className="text-2xl font-semibold">{t("support.form.title")}</h2>
        <SupportForm />
      </section>
    </article>
  );
}

function SupportForm() {
  const { t } = useT();
  const [tier, setTier] = useState<string>("");
  const [rgpd, setRgpd] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rgpd) {
      toast.error(t("form.required"));
      return;
    }
    setSubmitting(true);
    // Without backend wired, simulate. Replace with server fn after enabling Cloud.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success(t("support.form.success"));
    (e.target as HTMLFormElement).reset();
    setTier("");
    setRgpd(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid max-w-2xl gap-4">
      <div className="grid gap-2">
        <Label htmlFor="sup-name">{t("support.form.name")} *</Label>
        <Input id="sup-name" name="name" required autoComplete="name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sup-email">{t("support.form.email")} *</Label>
        <Input id="sup-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sup-org">{t("support.form.org")}</Label>
        <Input id="sup-org" name="org" autoComplete="organization" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sup-tier">{t("support.form.tier")}</Label>
        <Select value={tier} onValueChange={setTier}>
          <SelectTrigger id="sup-tier">
            <SelectValue placeholder={t("support.form.tier.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="friend">{t("support.tiers.friend.name")}</SelectItem>
            <SelectItem value="partner">{t("support.tiers.partner.name")}</SelectItem>
            <SelectItem value="patron">{t("support.tiers.patron.name")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sup-msg">{t("support.form.message")} *</Label>
        <Textarea id="sup-msg" name="message" required rows={5} />
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="sup-rgpd" checked={rgpd} onCheckedChange={(v) => setRgpd(v === true)} />
        <Label htmlFor="sup-rgpd" className="text-sm font-normal leading-relaxed">
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
