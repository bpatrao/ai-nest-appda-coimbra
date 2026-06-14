import { n as useT } from "./use-t-Dy7dpyOj.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BXjpJ96D.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/sobre.tsx?tsr-split=component
function AboutPage() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs("article", { children: [
		/* @__PURE__ */ jsxs("header", {
			className: "relative overflow-hidden rounded-2xl",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: "/images/about-people.jpg",
					alt: "Equipa da APPDA Coimbra a trabalhar com pessoas com autismo",
					className: "aspect-[16/9] w-full object-cover md:aspect-[21/9]",
					width: 1200,
					height: 675
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" }),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex flex-col justify-end p-6 md:p-12",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-3xl font-semibold text-white md:text-5xl",
						children: t("about.title")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-prose text-lg text-white/90",
						children: t("about.lede")
					})]
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "history-title",
			className: "mt-12",
			children: [/* @__PURE__ */ jsx("h2", {
				id: "history-title",
				className: "text-2xl font-semibold",
				children: t("about.history.title")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-3 text-muted-foreground",
				children: t("about.history.body")
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "values-title",
			className: "mt-12 grid gap-4 md:grid-cols-3",
			children: [/* @__PURE__ */ jsx("h2", {
				id: "values-title",
				className: "sr-only",
				children: "Missão, visão e valores"
			}), [
				"mission",
				"vision",
				"values"
			].map((k) => /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, {
				className: "font-serif text-xl",
				children: t(`about.${k}.title`)
			}) }), /* @__PURE__ */ jsx(CardContent, {
				className: "text-sm text-muted-foreground",
				children: t(`about.${k}.body`)
			})] }, k))]
		})
	] });
}
//#endregion
export { AboutPage as component };
