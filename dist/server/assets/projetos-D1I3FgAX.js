import { n as useT } from "./use-t-Dy7dpyOj.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BXjpJ96D.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/projetos.tsx?tsr-split=component
function ProjectsPage() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", {
		className: "text-4xl font-semibold md:text-5xl",
		children: t("projects.title")
	}), /* @__PURE__ */ jsx("p", {
		className: "mt-4 max-w-prose text-lg text-muted-foreground",
		children: t("projects.lede")
	})] }), /* @__PURE__ */ jsx("section", {
		className: "mt-10 grid gap-5 md:grid-cols-2",
		children: [
			"azul",
			"quiosque",
			"bluewash",
			"convida"
		].map((k) => /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, {
			className: "font-serif text-xl",
			children: t(`projects.${k}.title`)
		}) }), /* @__PURE__ */ jsx(CardContent, {
			className: "text-muted-foreground",
			children: t(`projects.${k}.body`)
		})] }, k))
	})] });
}
//#endregion
export { ProjectsPage as component };
