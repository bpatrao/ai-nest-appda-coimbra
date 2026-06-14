import { Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useT } from "@/i18n/use-t";
import { useSitePrefs } from "@/lib/site-prefs";

export function A11yPanel() {
  const { t } = useT();
  const p = useSitePrefs();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Accessibility aria-hidden="true" className="size-4" />
          <span className="hidden sm:inline">{t("a11y.button")}</span>
          <span className="sr-only sm:hidden">{t("a11y.button")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{t("a11y.title")}</SheetTitle>
          <SheetDescription>{t("a11y.description")}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6 px-4">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="a11y-motion" className="text-base">
              {t("a11y.motion")}
            </Label>
            <Switch
              id="a11y-motion"
              checked={p.motion === "reduce"}
              onCheckedChange={(v) => p.setMotion(v ? "reduce" : "auto")}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="a11y-contrast" className="text-base">
              {t("a11y.contrast")}
            </Label>
            <Switch
              id="a11y-contrast"
              checked={p.contrast === "high"}
              onCheckedChange={(v) => p.setContrast(v ? "high" : "auto")}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base">{t("a11y.text")}</Label>
            <ToggleGroup
              type="single"
              value={p.text}
              onValueChange={(v) => v && p.setText(v as "sm" | "md" | "lg")}
              className="justify-start"
            >
              <ToggleGroupItem value="sm" aria-label={t("a11y.text.sm")}>
                A
              </ToggleGroupItem>
              <ToggleGroupItem value="md" aria-label={t("a11y.text.md")} className="text-lg">
                A
              </ToggleGroupItem>
              <ToggleGroupItem value="lg" aria-label={t("a11y.text.lg")} className="text-xl">
                A
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor="a11y-simple" className="text-base">
                {t("a11y.simple")}
              </Label>
              <Switch
                id="a11y-simple"
                checked={p.simple === "on"}
                onCheckedChange={(v) => p.setSimple(v ? "on" : "off")}
              />
            </div>
            <p className="text-sm text-muted-foreground">{t("a11y.simple.help")}</p>
          </div>

          <Button variant="ghost" onClick={p.reset} className="w-full">
            {t("a11y.reset")}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
