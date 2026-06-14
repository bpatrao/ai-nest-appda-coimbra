import { t as cn } from "./utils-C_uf36nf.js";
import { t as Button } from "./button-Bq5vK6RO.js";
import { t as Label } from "./label-DBD1bRRP.js";
import { n as useT } from "./use-t-Dy7dpyOj.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import * as React from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Circle, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/ui/radio-group.tsx
var RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Item, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
//#endregion
//#region src/components/EnrollDialog.tsx
var APPDA_EMAIL = "geral@appda-coimbra.org.pt";
function EnrollDialog({ serviceKey, serviceName }) {
	const [open, setOpen] = useState(false);
	const [forWhom, setForWhom] = useState("self");
	function handleSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const get = (k) => String(fd.get(k) ?? "").trim();
		const lines = [`Pedido de inscrição no serviço: ${serviceName} (${serviceKey.toUpperCase()})`, ""];
		if (forWhom === "self") lines.push("Inscrição para o próprio", `Nome: ${get("name")}`, `Data de nascimento: ${get("dob")}`, `Telemóvel: ${get("phone")}`, `Email: ${get("email")}`);
		else lines.push("Inscrição para terceiro", `Responsável: ${get("guardianName")}`, `Nome da pessoa a inscrever: ${get("personName")}`, `Idade da pessoa a inscrever: ${get("personAge")}`, `Telemóvel do responsável: ${get("phone")}`, `Email do responsável: ${get("email")}`);
		const notes = get("notes");
		if (notes) lines.push("", "Observações:", notes);
		const subject = `Inscrição — ${serviceName}`;
		const body = lines.join("\n");
		const href = `mailto:${APPDA_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = href;
		setOpen(false);
	}
	return /* @__PURE__ */ jsxs(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsxs(Button, {
				className: "mt-5",
				children: ["Inscrever no ", serviceName]
			})
		}), /* @__PURE__ */ jsxs(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
			children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsxs(DialogTitle, { children: ["Inscrição — ", serviceName] }), /* @__PURE__ */ jsx(DialogDescription, { children: "Preencha o formulário e enviaremos o pedido por email para a APPDA Coimbra." })] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				className: "space-y-5",
				children: [
					/* @__PURE__ */ jsxs("fieldset", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("legend", {
							className: "text-sm font-medium",
							children: "Esta inscrição é para:"
						}), /* @__PURE__ */ jsxs(RadioGroup, {
							value: forWhom,
							onValueChange: (v) => setForWhom(v),
							className: "flex flex-col gap-2 sm:flex-row sm:gap-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(RadioGroupItem, {
									id: "forwhom-self",
									value: "self"
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: "forwhom-self",
									className: "font-normal",
									children: "O próprio"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(RadioGroupItem, {
									id: "forwhom-other",
									value: "other"
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: "forwhom-other",
									className: "font-normal",
									children: "Um familiar / terceiro"
								})]
							})]
						})]
					}),
					forWhom === "self" ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "name",
									children: "Nome completo *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "name",
									name: "name",
									required: true,
									maxLength: 120
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "dob",
									children: "Data de nascimento *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "dob",
									name: "dob",
									type: "date",
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "phone",
										children: "Telemóvel *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "phone",
										name: "phone",
										type: "tel",
										required: true,
										inputMode: "tel",
										maxLength: 20
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "email",
										children: "Email *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "email",
										name: "email",
										type: "email",
										required: true,
										maxLength: 254
									})]
								})]
							})
						]
					}) : /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "guardianName",
									children: "Nome do responsável (encarregado de educação / familiar) *"
								}), /* @__PURE__ */ jsx(Input, {
									id: "guardianName",
									name: "guardianName",
									required: true,
									maxLength: 120
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-[1fr_120px]",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "personName",
										children: "Nome da pessoa a inscrever *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "personName",
										name: "personName",
										required: true,
										maxLength: 120
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "personAge",
										children: "Idade *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "personAge",
										name: "personAge",
										type: "number",
										min: 0,
										max: 120,
										required: true
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "phone",
										children: "Telemóvel do responsável *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "phone",
										name: "phone",
										type: "tel",
										required: true,
										inputMode: "tel",
										maxLength: 20
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "email",
										children: "Email do responsável *"
									}), /* @__PURE__ */ jsx(Input, {
										id: "email",
										name: "email",
										type: "email",
										required: true,
										maxLength: 254
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs(DialogFooter, {
						className: "gap-2 sm:gap-0",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setOpen(false),
							children: "Cancelar"
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							children: "Enviar pedido"
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/routes/servicos.tsx?tsr-split=component
var items = [
	{
		k: "caci",
		image: "/images/serv-caci.jpg",
		audience: "Adultos",
		short: "Capacitação e participação"
	},
	{
		k: "catl",
		image: "/images/serv-catl.jpg",
		audience: "Crianças e jovens",
		short: "Tempos livres e férias"
	},
	{
		k: "rai",
		image: "/images/serv-rai.jpg",
		audience: "Todas as idades",
		short: "Acompanhamento terapêutico"
	},
	{
		k: "cfip",
		image: "/images/serv-cfip.jpg",
		audience: "Jovens e adultos",
		short: "Formação e emprego"
	}
];
function ServicesPage() {
	const { t } = useT();
	return /* @__PURE__ */ jsxs("article", {
		"aria-labelledby": "services-heading",
		children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", {
			id: "services-heading",
			className: "text-4xl font-semibold md:text-5xl",
			children: t("services.title")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-4 text-lg text-muted-foreground",
			children: t("services.lede")
		})] }), /* @__PURE__ */ jsx("div", {
			className: "mt-12 space-y-16 md:space-y-20",
			children: items.map(({ k, image, audience, short }, i) => /* @__PURE__ */ jsxs("section", {
				id: k,
				"aria-labelledby": `${k}-title`,
				className: "scroll-mt-24 grid items-center gap-6 md:grid-cols-2 md:gap-10",
				children: [/* @__PURE__ */ jsx("img", {
					src: image,
					alt: t(`services.${k}.title`),
					width: 1024,
					height: 768,
					loading: "lazy",
					className: `aspect-[4/3] w-full rounded-2xl object-cover ${i % 2 ? "md:order-2" : ""}`
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide",
						children: [/* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-primary/10 px-3 py-1 text-primary",
							children: audience
						}), /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-muted px-3 py-1 text-muted-foreground",
							children: short
						})]
					}),
					/* @__PURE__ */ jsx("h2", {
						id: `${k}-title`,
						className: "mt-3 font-serif text-2xl md:text-3xl",
						children: t(`services.${k}.title`)
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-foreground/80 md:text-lg",
						children: t(`services.${k}.body`)
					}),
					/* @__PURE__ */ jsx(EnrollDialog, {
						serviceKey: k,
						serviceName: t(`services.${k}.title`)
					})
				] })]
			}, k))
		})]
	});
}
//#endregion
export { ServicesPage as component };
