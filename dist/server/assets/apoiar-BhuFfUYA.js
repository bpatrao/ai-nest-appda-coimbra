import { t as cn } from "./utils-C_uf36nf.js";
import { t as Button } from "./button-Bq5vK6RO.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { n as useT } from "./use-t-Dy7dpyOj.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BXjpJ96D.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { n as Textarea, t as Checkbox } from "./checkbox-Ct1cZehL.js";
import * as React from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, ChevronDown, ChevronUp, Copy } from "lucide-react";
import { toast } from "sonner";
import * as SelectPrimitive from "@radix-ui/react-select";
//#region src/components/ui/select.tsx
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
		asChild: true,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
		/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ jsx(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ jsx("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
}));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
//#endregion
//#region src/routes/apoiar.tsx?tsr-split=component
var IBAN = "PT50 0035 0072 0000 5772 3023 0";
function SupportPage() {
	const { t } = useT();
	const [copied, setCopied] = useState(false);
	const copyIban = async () => {
		try {
			await navigator.clipboard.writeText(IBAN.replace(/\s/g, ""));
			setCopied(true);
			toast.success(t("support.iban.copied"));
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error("—");
		}
	};
	return /* @__PURE__ */ jsxs("article", { children: [
		/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", {
			className: "text-4xl font-semibold md:text-5xl",
			children: t("support.title")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-4 max-w-prose text-lg text-muted-foreground",
			children: t("support.lede")
		})] }),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "tiers-title",
			className: "mt-12",
			children: [/* @__PURE__ */ jsx("h2", {
				id: "tiers-title",
				className: "text-2xl font-semibold",
				children: t("support.tiers.title")
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-5 grid gap-5 md:grid-cols-3",
				children: [
					"friend",
					"partner",
					"patron"
				].map((k) => /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsxs(CardHeader, { children: [/* @__PURE__ */ jsx(CardTitle, {
					className: "font-serif text-xl",
					children: t(`support.tiers.${k}.name`)
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold text-accent",
					children: t(`support.tiers.${k}.amount`)
				})] }), /* @__PURE__ */ jsx(CardContent, {
					className: "text-sm text-muted-foreground",
					children: t(`support.tiers.${k}.benefits`)
				})] }, k))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "iban-title",
			className: "mt-12 grid gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, {
				id: "iban-title",
				className: "font-serif text-xl",
				children: t("support.iban.title")
			}) }), /* @__PURE__ */ jsxs(CardContent, { children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: t("support.iban.label")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 select-all font-mono text-lg",
					children: IBAN
				}),
				/* @__PURE__ */ jsxs(Button, {
					onClick: copyIban,
					variant: "outline",
					className: "mt-4 gap-2",
					children: [copied ? /* @__PURE__ */ jsx(Check, {
						"aria-hidden": "true",
						className: "size-4"
					}) : /* @__PURE__ */ jsx(Copy, {
						"aria-hidden": "true",
						className: "size-4"
					}), t("support.iban.copy")]
				})
			] })] }), /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, {
				className: "font-serif text-xl",
				children: t("support.irs.title")
			}) }), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground",
				children: t("support.irs.body")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-3 font-mono text-lg font-semibold text-primary",
				children: t("support.irs.nipc")
			})] })] })]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "form-title",
			className: "mt-12",
			children: [/* @__PURE__ */ jsx("h2", {
				id: "form-title",
				className: "text-2xl font-semibold",
				children: t("support.form.title")
			}), /* @__PURE__ */ jsx(SupportForm, {})]
		})
	] });
}
function SupportForm() {
	const { t } = useT();
	const [tier, setTier] = useState("");
	const [rgpd, setRgpd] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!rgpd) {
			toast.error(t("form.required"));
			return;
		}
		setSubmitting(true);
		await new Promise((r) => setTimeout(r, 700));
		setSubmitting(false);
		toast.success(t("support.form.success"));
		e.target.reset();
		setTier("");
		setRgpd(false);
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		className: "mt-6 grid max-w-2xl gap-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "sup-name",
					children: [t("support.form.name"), " *"]
				}), /* @__PURE__ */ jsx(Input, {
					id: "sup-name",
					name: "name",
					required: true,
					autoComplete: "name"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "sup-email",
					children: [t("support.form.email"), " *"]
				}), /* @__PURE__ */ jsx(Input, {
					id: "sup-email",
					name: "email",
					type: "email",
					required: true,
					autoComplete: "email"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "sup-org",
					children: t("support.form.org")
				}), /* @__PURE__ */ jsx(Input, {
					id: "sup-org",
					name: "org",
					autoComplete: "organization"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "sup-tier",
					children: t("support.form.tier")
				}), /* @__PURE__ */ jsxs(Select, {
					value: tier,
					onValueChange: setTier,
					children: [/* @__PURE__ */ jsx(SelectTrigger, {
						id: "sup-tier",
						children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("support.form.tier.placeholder") })
					}), /* @__PURE__ */ jsxs(SelectContent, { children: [
						/* @__PURE__ */ jsx(SelectItem, {
							value: "friend",
							children: t("support.tiers.friend.name")
						}),
						/* @__PURE__ */ jsx(SelectItem, {
							value: "partner",
							children: t("support.tiers.partner.name")
						}),
						/* @__PURE__ */ jsx(SelectItem, {
							value: "patron",
							children: t("support.tiers.patron.name")
						})
					] })]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "sup-msg",
					children: [t("support.form.message"), " *"]
				}), /* @__PURE__ */ jsx(Textarea, {
					id: "sup-msg",
					name: "message",
					required: true,
					rows: 5
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					id: "sup-rgpd",
					checked: rgpd,
					onCheckedChange: (v) => setRgpd(v === true)
				}), /* @__PURE__ */ jsx(Label, {
					htmlFor: "sup-rgpd",
					className: "text-sm font-normal leading-relaxed",
					children: t("support.form.rgpd")
				})]
			}),
			/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, {
				type: "submit",
				size: "lg",
				disabled: submitting,
				children: submitting ? t("support.form.sending") : t("support.form.submit")
			}) })
		]
	});
}
//#endregion
export { SupportPage as component };
