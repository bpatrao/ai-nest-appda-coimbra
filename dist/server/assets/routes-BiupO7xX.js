import { t as Button } from "./button-Bq5vK6RO.js";
import { n as useT } from "./use-t-Dy7dpyOj.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BXjpJ96D.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, HeartHandshake } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
function HomePage() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			"aria-labelledby": "hero-title",
			className: "relative left-1/2 w-screen -translate-x-1/2 bg-[#0b4650] py-16 md:py-24 -mt-10 md:-mt-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.3fr_1fr] md:items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-white",
					children: [
						/* @__PURE__ */ jsx("h1", {
							id: "hero-title",
							className: "text-4xl font-semibold leading-tight text-white md:text-5xl",
							children: t("home.hero.title")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-prose text-lg text-white/85",
							children: t("home.hero.lede")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								className: "bg-white !text-[#0b4650] hover:bg-white/90",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/apoiar",
									children: [/* @__PURE__ */ jsx(HeartHandshake, {
										"aria-hidden": "true",
										className: "size-5"
									}), t("home.hero.cta.support")]
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: "lg",
								className: "bg-white !text-[#0b4650] hover:bg-white/90",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/servicos",
									children: [t("home.hero.cta.services"), /* @__PURE__ */ jsx(ArrowRight, {
										"aria-hidden": "true",
										className: "size-5"
									})]
								})
							})]
						})
					]
				}), /* @__PURE__ */ jsx("img", {
					src: "/images/hero-people.jpg",
					alt: "Pessoas autistas e famílias em atividades da APPDA Coimbra",
					className: "aspect-[4/3] w-full rounded-2xl object-cover",
					width: 1200,
					height: 800
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "highlights-title",
			className: "pt-10",
			children: [
				/* @__PURE__ */ jsx("h2", {
					id: "highlights-title",
					className: "text-2xl font-semibold md:text-3xl",
					children: t("home.highlights.title")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: t("home.highlights.lede")
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						"caci",
						"catl",
						"rai",
						"cfip"
					].map((k) => /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, {
						className: "font-serif text-xl",
						children: t(`home.highlights.${k}.title`)
					}) }), /* @__PURE__ */ jsx(CardContent, {
						className: "text-sm text-muted-foreground",
						children: t(`home.highlights.${k}.desc`)
					})] }, k))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/servicos",
							children: [t("home.highlights.cta"), /* @__PURE__ */ jsx(ArrowRight, {
								"aria-hidden": "true",
								className: "size-5"
							})]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "cta-title",
			className: "mt-20 rounded-2xl bg-primary px-6 py-12 text-primary-foreground md:px-12",
			children: [
				/* @__PURE__ */ jsx("h2", {
					id: "cta-title",
					className: "font-serif text-2xl font-semibold text-white md:text-3xl",
					children: t("home.cta.title")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-primary-foreground/90",
					children: t("home.cta.desc")
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Button, {
						asChild: true,
						size: "lg",
						className: "bg-white !text-[#0b4650] hover:bg-white/90",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/apoiar",
							children: t("home.cta.button")
						})
					})
				})
			]
		})
	] });
}
//#endregion
export { HomePage as component };
