import { t as Button } from "./button-Bq5vK6RO.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { n as useT } from "./use-t-Dy7dpyOj.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BXjpJ96D.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import { n as Textarea, t as Checkbox } from "./checkbox-Ct1cZehL.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
//#region src/routes/contactos.tsx?tsr-split=component
function ContactPage() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs("article", { children: [
		/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", {
			className: "text-4xl font-semibold md:text-5xl",
			children: t("contact.title")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-4 max-w-prose text-lg text-muted-foreground",
			children: t("contact.lede")
		})] }),
		/* @__PURE__ */ jsxs("section", {
			className: "mt-10 grid gap-5 md:grid-cols-2",
			children: [
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, {
					className: "font-serif text-xl flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(MapPin, {
						"aria-hidden": "true",
						className: "size-5 text-primary"
					}), t("contact.address.title")]
				}) }), /* @__PURE__ */ jsx(CardContent, {
					className: "whitespace-pre-line text-muted-foreground",
					children: t("contact.address.body")
				})] }),
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, {
					className: "font-serif text-xl flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Phone, {
						"aria-hidden": "true",
						className: "size-5 text-primary"
					}), t("contact.phone.title")]
				}) }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("a", {
					href: "tel:+351239802070",
					className: "text-muted-foreground hover:text-foreground",
					children: "+351 239 802 070"
				}) })] }),
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, {
					className: "font-serif text-xl flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Mail, {
						"aria-hidden": "true",
						className: "size-5 text-primary"
					}), t("contact.email.title")]
				}) }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("a", {
					href: "mailto:geral@appda-coimbra.org.pt",
					className: "text-muted-foreground hover:text-foreground",
					children: "geral@appda-coimbra.org.pt"
				}) })] }),
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, {
					className: "font-serif text-xl flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Clock, {
						"aria-hidden": "true",
						className: "size-5 text-primary"
					}), t("contact.hours.title")]
				}) }), /* @__PURE__ */ jsx(CardContent, {
					className: "text-muted-foreground",
					children: t("contact.hours.body")
				})] })
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "contact-form-title",
			className: "mt-12",
			children: [/* @__PURE__ */ jsx("h2", {
				id: "contact-form-title",
				className: "text-2xl font-semibold",
				children: t("contact.form.title")
			}), /* @__PURE__ */ jsx(ContactForm, {})]
		})
	] });
}
function ContactForm() {
	const { t } = useT();
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
		setRgpd(false);
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		className: "mt-6 grid max-w-2xl gap-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "c-name",
					children: [t("support.form.name"), " *"]
				}), /* @__PURE__ */ jsx(Input, {
					id: "c-name",
					name: "name",
					required: true,
					autoComplete: "name"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "c-email",
					children: [t("support.form.email"), " *"]
				}), /* @__PURE__ */ jsx(Input, {
					id: "c-email",
					name: "email",
					type: "email",
					required: true,
					autoComplete: "email"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "c-subject",
					children: [t("contact.form.subject"), " *"]
				}), /* @__PURE__ */ jsx(Input, {
					id: "c-subject",
					name: "subject",
					required: true
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ jsxs(Label, {
					htmlFor: "c-message",
					children: [t("support.form.message"), " *"]
				}), /* @__PURE__ */ jsx(Textarea, {
					id: "c-message",
					name: "message",
					required: true,
					rows: 6
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					id: "c-rgpd",
					checked: rgpd,
					onCheckedChange: (v) => setRgpd(v === true)
				}), /* @__PURE__ */ jsx(Label, {
					htmlFor: "c-rgpd",
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
export { ContactPage as component };
