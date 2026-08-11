import { Paperclip, FileImage, Type, FileText, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FormCard } from "./FormCard";

type UploadedFile = {
  name: string;
  icon: LucideIcon;
};

const FILES: UploadedFile[] = [
  { name: "Brand_colors.png", icon: FileImage },
  { name: "Helvetica_blue.ttf", icon: Type },
  { name: "Guidelines.pdf", icon: FileText },
];

export function BrandCard() {
  return (
    <FormCard
      title="Define Your Brand"
      description="Brand visuals - fonts, guideline, colors, past visuals"
    >
      <div className="flex h-[87px] w-full items-center justify-center gap-2 rounded-lg bg-input px-3 py-[7.5px] shadow-xs">
        <Paperclip className="size-4 shrink-0 text-muted-foreground" />
        <span className="text-sm text-foreground">Drop file here or browse</span>
      </div>

      <div className="flex w-full flex-wrap items-start gap-2.5">
        {FILES.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex min-h-8 items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 shadow-xs"
          >
            <Icon className="size-4 shrink-0 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{name}</span>
            <button
              type="button"
              aria-label={`Remove ${name}`}
              className="flex size-4 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </FormCard>
  );
}
