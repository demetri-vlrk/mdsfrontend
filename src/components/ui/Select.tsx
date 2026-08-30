import { ChevronDown } from "lucide-react";
import { FieldLabel } from "./FieldLabel";

export function Select({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <FieldLabel>{label}</FieldLabel>
      <button
        type="button"
        className="flex h-12 w-full items-center border border-white/25 text-left"
      >
        <span className="flex-1 px-3.5 text-[17px] text-fg-muted">
          {placeholder}
        </span>
        <span className="flex aspect-square h-full items-center justify-center border border-[#77797d] bg-white/10">
          <ChevronDown className="size-[20px] text-fg-default" />
        </span>
      </button>
    </div>
  );
}
