import { n as useT } from "./use-t-Dy7dpyOj.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/noticias.tsx?tsr-split=component
function NewsPage() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", {
		className: "text-4xl font-semibold md:text-5xl",
		children: t("news.title")
	}), /* @__PURE__ */ jsx("p", {
		className: "mt-4 max-w-full text-lg text-muted-foreground",
		children: t("news.lede")
	})] }), /* @__PURE__ */ jsxs("section", {
		className: "mt-10 grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-3 text-xl font-semibold",
			children: t("news.facebook")
		}), /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-xl border border-border bg-card",
			children: /* @__PURE__ */ jsx("iframe", {
				title: "Publicações Facebook APPDA Coimbra",
				src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fappda.coimbra&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false",
				loading: "lazy",
				className: "h-[700px] w-full",
				scrolling: "no",
				frameBorder: "0",
				allow: "encrypted-media"
			})
		})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-3 text-xl font-semibold",
			children: t("news.instagram")
		}), /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-xl border border-border bg-card",
			children: /* @__PURE__ */ jsx("iframe", {
				title: "Perfil Instagram APPDA Coimbra",
				src: "https://www.instagram.com/appdacoimbra/embed",
				loading: "lazy",
				className: "h-[700px] w-full",
				scrolling: "no",
				frameBorder: "0",
				allow: "encrypted-media"
			})
		})] })]
	})] });
}
//#endregion
export { NewsPage as component };
