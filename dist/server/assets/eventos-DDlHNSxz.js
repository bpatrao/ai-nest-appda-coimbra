import { n as useT } from "./use-t-Dy7dpyOj.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BXjpJ96D.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Calendar, MapPin } from "lucide-react";
//#region src/routes/eventos.tsx?tsr-split=component
function EventsPage() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", {
		className: "text-4xl font-semibold md:text-5xl",
		children: t("events.title")
	}), /* @__PURE__ */ jsx("p", {
		className: "mt-4 max-w-prose text-lg text-muted-foreground",
		children: t("events.lede")
	})] }), /* @__PURE__ */ jsxs("section", {
		"aria-labelledby": "upcoming-title",
		className: "mt-10",
		children: [/* @__PURE__ */ jsx("h2", {
			id: "upcoming-title",
			className: "text-2xl font-semibold",
			children: t("events.upcoming")
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-5 grid gap-5 md:grid-cols-2",
			children: ["jornadas", "ag"].map((k) => /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, {
				className: "font-serif text-xl",
				children: t(`events.${k}.title`)
			}) }), /* @__PURE__ */ jsxs(CardContent, {
				className: "space-y-2 text-muted-foreground",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ jsx(Calendar, {
							"aria-hidden": "true",
							className: "mt-1 size-4 shrink-0"
						}), t(`events.${k}.when`)]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ jsx(MapPin, {
							"aria-hidden": "true",
							className: "mt-1 size-4 shrink-0"
						}), t(`events.${k}.where`)]
					}),
					/* @__PURE__ */ jsx("p", { children: t(`events.${k}.body`) })
				]
			})] }, k))
		})]
	})] });
}
//#endregion
export { EventsPage as component };
