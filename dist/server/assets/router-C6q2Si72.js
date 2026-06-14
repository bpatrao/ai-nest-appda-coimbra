import { t as cn } from "./utils-C_uf36nf.js";
import { t as Button } from "./button-Bq5vK6RO.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { n as useT, t as I18nProvider } from "./use-t-Dy7dpyOj.js";
import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Accessibility, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X, Youtube } from "lucide-react";
import { cva } from "class-variance-authority";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { Toaster } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-ebKao7NJ.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/ui/sheet.tsx
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Overlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(SheetPrimitive.Content, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ jsxs(SheetPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
//#endregion
//#region src/components/ui/switch.tsx
var Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SwitchPrimitives.Root, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ jsx(SwitchPrimitives.Thumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = SwitchPrimitives.Root.displayName;
//#endregion
//#region src/components/ui/toggle.tsx
var toggleVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-9 px-2 min-w-9",
			sm: "h-8 px-1.5 min-w-8",
			lg: "h-10 px-2.5 min-w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(TogglePrimitive.Root, {
	ref,
	className: cn(toggleVariants({
		variant,
		size,
		className
	})),
	...props
}));
Toggle.displayName = TogglePrimitive.Root.displayName;
//#endregion
//#region src/components/ui/toggle-group.tsx
var ToggleGroupContext = React.createContext({
	size: "default",
	variant: "default"
});
var ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsx(ToggleGroupPrimitive.Root, {
	ref,
	className: cn("flex items-center justify-center gap-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ToggleGroupContext.Provider, {
		value: {
			variant,
			size
		},
		children
	})
}));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
	const context = React.useContext(ToggleGroupContext);
	return /* @__PURE__ */ jsx(ToggleGroupPrimitive.Item, {
		ref,
		className: cn(toggleVariants({
			variant: context.variant || variant,
			size: context.size || size
		}), className),
		...props,
		children
	});
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
//#endregion
//#region src/lib/site-prefs.tsx
var DEFAULTS = {
	mode: "vivid",
	text: "sm",
	motion: "auto",
	contrast: "auto",
	simple: "off"
};
var PrefsCtx = createContext(null);
var KEY = "appda.prefs.v1";
function readSaved() {
	if (typeof window === "undefined") return {};
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}
function applyToDom(p) {
	const root = document.documentElement;
	root.setAttribute("data-color-mode", p.mode);
	root.setAttribute("data-a11y-text", p.text);
	root.setAttribute("data-a11y-motion", p.motion);
	root.setAttribute("data-a11y-contrast", p.contrast);
	root.setAttribute("data-a11y-simple", p.simple);
}
function SitePrefsProvider({ children }) {
	const [prefs, setPrefs] = useState(DEFAULTS);
	useEffect(() => {
		const saved = readSaved();
		const merged = {
			...DEFAULTS,
			...saved
		};
		setPrefs(merged);
		applyToDom(merged);
	}, []);
	useEffect(() => {
		applyToDom(prefs);
		try {
			window.localStorage.setItem(KEY, JSON.stringify(prefs));
		} catch {}
	}, [prefs]);
	const ctx = {
		...prefs,
		setMode: (mode) => setPrefs((p) => ({
			...p,
			mode
		})),
		setText: (text) => setPrefs((p) => ({
			...p,
			text
		})),
		setMotion: (motion) => setPrefs((p) => ({
			...p,
			motion
		})),
		setContrast: (contrast) => setPrefs((p) => ({
			...p,
			contrast
		})),
		setSimple: (simple) => setPrefs((p) => ({
			...p,
			simple
		})),
		reset: () => setPrefs(DEFAULTS)
	};
	return /* @__PURE__ */ jsx(PrefsCtx.Provider, {
		value: ctx,
		children
	});
}
function useSitePrefs() {
	const ctx = useContext(PrefsCtx);
	if (!ctx) throw new Error("useSitePrefs must be used within SitePrefsProvider");
	return ctx;
}
//#endregion
//#region src/components/a11y-panel.tsx
function A11yPanel() {
	const { t } = useT();
	const p = useSitePrefs();
	return /* @__PURE__ */ jsxs(Sheet, { children: [/* @__PURE__ */ jsx(SheetTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "outline",
			size: "sm",
			className: "gap-2",
			children: [
				/* @__PURE__ */ jsx(Accessibility, {
					"aria-hidden": "true",
					className: "size-4"
				}),
				/* @__PURE__ */ jsx("span", {
					className: "hidden sm:inline",
					children: t("a11y.button")
				}),
				/* @__PURE__ */ jsx("span", {
					className: "sr-only sm:hidden",
					children: t("a11y.button")
				})
			]
		})
	}), /* @__PURE__ */ jsxs(SheetContent, {
		side: "right",
		className: "w-full sm:max-w-md",
		children: [/* @__PURE__ */ jsxs(SheetHeader, { children: [/* @__PURE__ */ jsx(SheetTitle, { children: t("a11y.title") }), /* @__PURE__ */ jsx(SheetDescription, { children: t("a11y.description") })] }), /* @__PURE__ */ jsxs("div", {
			className: "mt-6 space-y-6 px-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "a11y-motion",
						className: "text-base",
						children: t("a11y.motion")
					}), /* @__PURE__ */ jsx(Switch, {
						id: "a11y-motion",
						checked: p.motion === "reduce",
						onCheckedChange: (v) => p.setMotion(v ? "reduce" : "auto")
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "a11y-contrast",
						className: "text-base",
						children: t("a11y.contrast")
					}), /* @__PURE__ */ jsx(Switch, {
						id: "a11y-contrast",
						checked: p.contrast === "high",
						onCheckedChange: (v) => p.setContrast(v ? "high" : "auto")
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						className: "text-base",
						children: t("a11y.text")
					}), /* @__PURE__ */ jsxs(ToggleGroup, {
						type: "single",
						value: p.text,
						onValueChange: (v) => v && p.setText(v),
						className: "justify-start",
						children: [
							/* @__PURE__ */ jsx(ToggleGroupItem, {
								value: "sm",
								"aria-label": t("a11y.text.sm"),
								children: "A"
							}),
							/* @__PURE__ */ jsx(ToggleGroupItem, {
								value: "md",
								"aria-label": t("a11y.text.md"),
								className: "text-lg",
								children: "A"
							}),
							/* @__PURE__ */ jsx(ToggleGroupItem, {
								value: "lg",
								"aria-label": t("a11y.text.lg"),
								className: "text-xl",
								children: "A"
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "a11y-simple",
							className: "text-base",
							children: t("a11y.simple")
						}), /* @__PURE__ */ jsx(Switch, {
							id: "a11y-simple",
							checked: p.simple === "on",
							onCheckedChange: (v) => p.setSimple(v ? "on" : "off")
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: t("a11y.simple.help")
					})]
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					onClick: p.reset,
					className: "w-full",
					children: t("a11y.reset")
				})
			]
		})]
	})] });
}
//#endregion
//#region src/components/mode-toggle.tsx
function ModeToggle() {
	const { mode, setMode } = useSitePrefs();
	const { t } = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-sm font-medium text-muted-foreground",
				children: t("mode.vivid")
			}),
			/* @__PURE__ */ jsx(Switch, {
				id: "mode-switch",
				checked: mode === "calm",
				onCheckedChange: (checked) => setMode(checked ? "calm" : "vivid"),
				"aria-label": t("mode.label")
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-sm font-medium text-muted-foreground",
				children: t("mode.calm")
			})
		]
	});
}
function LangToggle() {
	const { t } = useT();
	const { lang, setLang } = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1",
		children: [/* @__PURE__ */ jsx(Button, {
			variant: lang === "pt" ? "default" : "ghost",
			size: "sm",
			onClick: () => setLang("pt"),
			"aria-pressed": lang === "pt",
			children: t("lang.pt")
		}), /* @__PURE__ */ jsx(Button, {
			variant: lang === "en" ? "default" : "ghost",
			size: "sm",
			onClick: () => setLang("en"),
			"aria-pressed": lang === "en",
			children: t("lang.en")
		})]
	});
}
//#endregion
//#region src/components/site-header.tsx
var LOGO_URL = "/appda-coimbra-logo.png";
var NAV = [
	{
		to: "/",
		key: "nav.home"
	},
	{
		to: "/sobre",
		key: "nav.about"
	},
	{
		to: "/servicos",
		key: "nav.services"
	},
	{
		to: "/projetos",
		key: "nav.projects"
	},
	{
		to: "/eventos",
		key: "nav.events"
	},
	{
		to: "/noticias",
		key: "nav.news"
	},
	{
		to: "/apoiar",
		key: "nav.support"
	},
	{
		to: "/contactos",
		key: "nav.contact"
	}
];
function SiteHeader() {
	const { t } = useT();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2",
					"aria-label": "APPDA Coimbra",
					children: [/* @__PURE__ */ jsx("img", {
						src: LOGO_URL,
						alt: "APPDA Coimbra",
						className: "h-10 w-auto"
					}), /* @__PURE__ */ jsx("span", {
						className: "sr-only",
						children: "APPDA Coimbra"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Principal",
					className: "ml-6 hidden gap-1 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground",
						activeProps: { className: "bg-muted text-foreground" },
						children: t(item.key)
					}, item.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "ml-auto flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "hidden md:flex",
							children: /* @__PURE__ */ jsx(ModeToggle, {})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "hidden md:flex",
							children: /* @__PURE__ */ jsx(LangToggle, {})
						}),
						/* @__PURE__ */ jsx(A11yPanel, {}),
						/* @__PURE__ */ jsxs(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ jsx(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "icon",
									className: "lg:hidden",
									"aria-label": t("nav.menu"),
									children: /* @__PURE__ */ jsx(Menu, {
										"aria-hidden": "true",
										className: "size-5"
									})
								})
							}), /* @__PURE__ */ jsxs(SheetContent, {
								side: "left",
								className: "w-80",
								children: [
									/* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsx(SheetTitle, { children: t("nav.menu") }) }),
									/* @__PURE__ */ jsx("nav", {
										"aria-label": "Principal mobile",
										className: "mt-6 flex flex-col gap-1 px-4",
										children: NAV.map((item) => /* @__PURE__ */ jsx(Link, {
											to: item.to,
											activeOptions: { exact: item.to === "/" },
											onClick: () => setOpen(false),
											className: "rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground",
											activeProps: { className: "bg-muted text-foreground" },
											children: t(item.key)
										}, item.to))
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-6 flex flex-col gap-3 px-4",
										children: [/* @__PURE__ */ jsx(ModeToggle, {}), /* @__PURE__ */ jsx(LangToggle, {})]
									})
								]
							})]
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/components/site-footer.tsx
function SiteFooter() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-24 border-t border-border bg-muted/40",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-serif text-lg font-semibold text-primary",
						children: "APPDA Coimbra"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("footer.tagline")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("footer.nipc")
					})
				] }),
				/* @__PURE__ */ jsxs("address", {
					className: "not-italic",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-sm font-semibold text-foreground",
						children: t("contact.title")
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ jsx(MapPin, {
									"aria-hidden": "true",
									className: "mt-0.5 size-4 shrink-0"
								}), " Quinta da Conraria, 3040-714 Castelo Viegas, Coimbra"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ jsx(Phone, {
										"aria-hidden": "true",
										className: "mt-0.5 size-4 shrink-0"
									}),
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "tel:+351239802070",
										className: "hover:text-foreground",
										children: "+351 239 802 070"
									})
								]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ jsx(Mail, {
										"aria-hidden": "true",
										className: "mt-0.5 size-4 shrink-0"
									}),
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "mailto:geral@appda-coimbra.org.pt",
										className: "hover:text-foreground",
										children: "geral@appda-coimbra.org.pt"
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-sm font-semibold text-foreground",
						children: t("footer.follow")
					}),
					/* @__PURE__ */ jsxs("ul", {
						className: "mt-3 flex gap-3",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "https://www.facebook.com/appda.coimbra",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook APPDA Coimbra",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted",
								children: /* @__PURE__ */ jsx(Facebook, {
									"aria-hidden": "true",
									className: "size-5"
								})
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "https://www.instagram.com/appdacoimbra",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram APPDA Coimbra",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted",
								children: /* @__PURE__ */ jsx(Instagram, {
									"aria-hidden": "true",
									className: "size-5"
								})
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "https://www.linkedin.com/company/appda-coimbra",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "LinkedIn APPDA Coimbra",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted",
								children: /* @__PURE__ */ jsx(Linkedin, {
									"aria-hidden": "true",
									className: "size-5"
								})
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "https://www.youtube.com/@appdacoimbra",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "YouTube APPDA Coimbra",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-background hover:bg-muted",
								children: /* @__PURE__ */ jsx(Youtube, {
									"aria-hidden": "true",
									className: "size-5"
								})
							}) })
						]
					}),
					/* @__PURE__ */ jsx("nav", {
						"aria-label": "Rodapé",
						className: "mt-6",
						children: /* @__PURE__ */ jsxs("ul", {
							className: "flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/sobre",
									className: "hover:text-foreground",
									children: t("nav.about")
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/apoiar",
									className: "hover:text-foreground",
									children: t("nav.support")
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/contactos",
									className: "hover:text-foreground",
									children: t("nav.contact")
								}) })
							]
						})
					})
				] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" APPDA Coimbra. ",
					t("footer.rights")
				]
			})
		})]
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/routes/__root.tsx
var ORG_JSONLD = {
	"@context": "https://schema.org",
	"@type": "NGO",
	name: "APPDA Coimbra",
	alternateName: "Associação Portuguesa para as Perturbações do Desenvolvimento e Autismo de Coimbra",
	url: "https://appda-coimbra.org.pt",
	email: "geral@appda-coimbra.org.pt",
	telephone: "+351-239-802-070",
	taxID: "505772302",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Quinta da Conraria",
		postalCode: "3040-714",
		addressLocality: "Castelo Viegas, Coimbra",
		addressCountry: "PT"
	},
	sameAs: ["https://www.facebook.com/appda.coimbra", "https://www.instagram.com/appdacoimbra"]
};
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-6xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "A página que procura não existe."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90",
						children: "Voltar ao início"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-2xl font-semibold text-foreground",
					children: "Algo correu mal"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Pode tentar de novo ou voltar à página inicial."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90",
						children: "Tentar novamente"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-3 text-base font-medium text-foreground hover:bg-muted",
						children: "Início"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "APPDA Coimbra — Pelas pessoas autistas e suas famílias" },
			{
				name: "description",
				content: "Associação sem fins lucrativos que apoia pessoas autistas e suas famílias na região de Coimbra. Serviços, projetos, eventos e formas de apoiar."
			},
			{
				name: "author",
				content: "APPDA Coimbra"
			},
			{
				property: "og:title",
				content: "APPDA Coimbra"
			},
			{
				property: "og:description",
				content: "Pelas pessoas autistas e pelas suas famílias — apoio terapêutico, ocupacional e de inclusão social em Coimbra."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "pt_PT"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Lora:wght@500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(ORG_JSONLD)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "pt",
		children: [/* @__PURE__ */ jsxs("head", { children: [/* @__PURE__ */ jsx(HeadContent, {}), /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var k='appda.prefs.v1';var p=JSON.parse(localStorage.getItem(k)||'{}');var r=document.documentElement;r.setAttribute('data-color-mode',p.mode||'vivid');r.setAttribute('data-a11y-text',p.text||'sm');r.setAttribute('data-a11y-motion',p.motion||'auto');r.setAttribute('data-a11y-contrast',p.contrast||'auto');r.setAttribute('data-a11y-simple',p.simple||'off');var l=localStorage.getItem('appda.lang');if(l==='pt'||l==='en')r.lang=l;}catch(e){}})();` } })] }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function SkipLink() {
	const { t } = useT();
	return /* @__PURE__ */ jsx("a", {
		href: "#main",
		className: "skip-link",
		children: t("a11y.skip")
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsxs(SitePrefsProvider, { children: [
			/* @__PURE__ */ jsx(SkipLink, {}),
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("main", {
				id: "main",
				className: "mx-auto w-full max-w-6xl px-4 py-10 md:py-14",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {}),
			/* @__PURE__ */ jsx(Toaster$1, {})
		] }) })
	});
}
//#endregion
//#region src/routes/sobre.tsx
var $$splitComponentImporter$7 = () => import("./sobre-C35jYxaS.js");
var Route$7 = createFileRoute("/sobre")({
	head: () => ({ meta: [
		{ title: "Sobre — APPDA Coimbra" },
		{
			name: "description",
			content: "História, missão, visão e valores da APPDA Coimbra."
		},
		{
			property: "og:title",
			content: "Sobre a APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Mais de duas décadas a apoiar pessoas autistas e suas famílias."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/servicos.tsx
var $$splitComponentImporter$6 = () => import("./servicos-DY74SBaL.js");
var Route$6 = createFileRoute("/servicos")({
	head: () => ({ meta: [
		{ title: "Serviços — APPDA Coimbra" },
		{
			name: "description",
			content: "CACI, CATL, RAI e CFIP — respostas para diferentes idades e necessidades."
		},
		{
			property: "og:title",
			content: "Serviços APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Respostas terapêuticas, ocupacionais e formativas."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/projetos.tsx
var $$splitComponentImporter$5 = () => import("./projetos-D1I3FgAX.js");
var Route$5 = createFileRoute("/projetos")({
	head: () => ({ meta: [
		{ title: "Projetos — APPDA Coimbra" },
		{
			name: "description",
			content: "Azul Mirtilo, Quiosque CoMsigo, BlueWash e ConVida — inclusão pelo trabalho e pela comunidade."
		},
		{
			property: "og:title",
			content: "Projetos APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Iniciativas com impacto e receita própria para sustentar os serviços."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/noticias.tsx
var $$splitComponentImporter$4 = () => import("./noticias-VYpVvOTi.js");
var Route$4 = createFileRoute("/noticias")({
	head: () => ({ meta: [
		{ title: "Notícias — APPDA Coimbra" },
		{
			name: "description",
			content: "Últimas publicações da APPDA Coimbra no Facebook e Instagram."
		},
		{
			property: "og:title",
			content: "Notícias APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Acompanhe as nossas últimas publicações."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/eventos.tsx
var $$splitComponentImporter$3 = () => import("./eventos-DDlHNSxz.js");
var Route$3 = createFileRoute("/eventos")({
	head: () => ({ meta: [
		{ title: "Eventos — APPDA Coimbra" },
		{
			name: "description",
			content: "Próximos eventos da APPDA Coimbra: V Jornadas e Assembleia Geral."
		},
		{
			property: "og:title",
			content: "Eventos APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Encontros científicos e momentos da vida associativa."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contactos.tsx
var $$splitComponentImporter$2 = () => import("./contactos-R19XrPqM.js");
var Route$2 = createFileRoute("/contactos")({
	head: () => ({ meta: [
		{ title: "Contactos — APPDA Coimbra" },
		{
			name: "description",
			content: "Morada, telefone, email e horário da APPDA Coimbra. Envie-nos uma mensagem."
		},
		{
			property: "og:title",
			content: "Contactos APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Estamos disponíveis para o ajudar."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/apoiar.tsx
var $$splitComponentImporter$1 = () => import("./apoiar-BhuFfUYA.js");
var Route$1 = createFileRoute("/apoiar")({
	head: () => ({ meta: [
		{ title: "Apoiar — APPDA Coimbra" },
		{
			name: "description",
			content: "Escalões de patrocínio, IBAN para donativos e consignação de 0,5% do IRS à APPDA Coimbra."
		},
		{
			property: "og:title",
			content: "Apoiar a APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Patrocine, doe ou consigne 0,5% do seu IRS."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-BiupO7xX.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "APPDA Coimbra — Início" },
		{
			name: "description",
			content: "Apoiamos pessoas autistas e suas famílias na região de Coimbra. Conheça os nossos serviços, projetos e como pode ajudar."
		},
		{
			property: "og:title",
			content: "APPDA Coimbra"
		},
		{
			property: "og:description",
			content: "Pelas pessoas autistas e pelas suas famílias."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SobreRoute = Route$7.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => Route$8
});
var ServicosRoute = Route$6.update({
	id: "/servicos",
	path: "/servicos",
	getParentRoute: () => Route$8
});
var ProjetosRoute = Route$5.update({
	id: "/projetos",
	path: "/projetos",
	getParentRoute: () => Route$8
});
var NoticiasRoute = Route$4.update({
	id: "/noticias",
	path: "/noticias",
	getParentRoute: () => Route$8
});
var EventosRoute = Route$3.update({
	id: "/eventos",
	path: "/eventos",
	getParentRoute: () => Route$8
});
var ContactosRoute = Route$2.update({
	id: "/contactos",
	path: "/contactos",
	getParentRoute: () => Route$8
});
var ApoiarRoute = Route$1.update({
	id: "/apoiar",
	path: "/apoiar",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	ApoiarRoute,
	ContactosRoute,
	EventosRoute,
	NoticiasRoute,
	ProjetosRoute,
	ServicosRoute,
	SobreRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
