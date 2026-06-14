import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useSitePrefs } from "@/lib/site-prefs";
import { useT } from "@/i18n/use-t";

export function ModeToggle() {
  const { mode, setMode } = useSitePrefs();
  const { t } = useT();
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">
        {t("mode.vivid")}
      </span>
      <Switch
        id="mode-switch"
        checked={mode === "calm"}
        onCheckedChange={(checked) => setMode(checked ? "calm" : "vivid")}
        aria-label={t("mode.label")}
      />
      <span className="text-sm font-medium text-muted-foreground">
        {t("mode.calm")}
      </span>
    </div>
  );
}

export function LangToggle() {
  const { t } = useT();
  const { lang, setLang } = useT();
  return (
    <div className="flex items-center gap-1">
      <Button
        variant={lang === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
      >
        {t("lang.pt")}
      </Button>
      <Button
        variant={lang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        {t("lang.en")}
      </Button>
    </div>
  );
}
