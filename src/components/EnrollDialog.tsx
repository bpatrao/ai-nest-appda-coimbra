import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const APPDA_EMAIL = "geral@appda-coimbra.org.pt";

type Props = {
  serviceKey: string;
  serviceName: string;
};

export function EnrollDialog({ serviceKey, serviceName }: Props) {
  const [open, setOpen] = useState(false);
  const [forWhom, setForWhom] = useState<"self" | "other">("self");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const lines: string[] = [
      `Pedido de inscrição no serviço: ${serviceName} (${serviceKey.toUpperCase()})`,
      "",
    ];

    if (forWhom === "self") {
      lines.push(
        "Inscrição para o próprio",
        `Nome: ${get("name")}`,
        `Data de nascimento: ${get("dob")}`,
        `Telemóvel: ${get("phone")}`,
        `Email: ${get("email")}`,
      );
    } else {
      lines.push(
        "Inscrição para terceiro",
        `Responsável: ${get("guardianName")}`,
        `Nome da pessoa a inscrever: ${get("personName")}`,
        `Idade da pessoa a inscrever: ${get("personAge")}`,
        `Telemóvel do responsável: ${get("phone")}`,
        `Email do responsável: ${get("email")}`,
      );
    }

    const notes = get("notes");
    if (notes) {
      lines.push("", "Observações:", notes);
    }

    const subject = `Inscrição — ${serviceName}`;
    const body = lines.join("\n");
    const href = `mailto:${APPDA_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-5">Inscrever no {serviceName}</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Inscrição — {serviceName}</DialogTitle>
          <DialogDescription>
            Preencha o formulário e enviaremos o pedido por email para a APPDA Coimbra.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium">Esta inscrição é para:</legend>
            <RadioGroup
              value={forWhom}
              onValueChange={(v) => setForWhom(v as "self" | "other")}
              className="flex flex-col gap-2 sm:flex-row sm:gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem id="forwhom-self" value="self" />
                <Label htmlFor="forwhom-self" className="font-normal">
                  O próprio
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id="forwhom-other" value="other" />
                <Label htmlFor="forwhom-other" className="font-normal">
                  Um familiar / terceiro
                </Label>
              </div>
            </RadioGroup>
          </fieldset>

          {forWhom === "self" ? (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Nome completo *</Label>
                <Input id="name" name="name" required maxLength={120} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dob">Data de nascimento *</Label>
                <Input id="dob" name="dob" type="date" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Telemóvel *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    maxLength={20}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={254} />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="guardianName">
                  Nome do responsável (encarregado de educação / familiar) *
                </Label>
                <Input id="guardianName" name="guardianName" required maxLength={120} />
              </div>
              <div className="grid gap-4 sm:grid-cols-[1fr_120px]">
                <div className="space-y-1.5">
                  <Label htmlFor="personName">Nome da pessoa a inscrever *</Label>
                  <Input id="personName" name="personName" required maxLength={120} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="personAge">Idade *</Label>
                  <Input
                    id="personAge"
                    name="personAge"
                    type="number"
                    min={0}
                    max={120}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Telemóvel do responsável *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    maxLength={20}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email do responsável *</Label>
                  <Input id="email" name="email" type="email" required maxLength={254} />
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Enviar pedido</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
