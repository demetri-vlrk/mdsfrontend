import { FieldLabel } from "./FieldLabel";

export function TextAreaField({
  label,
  placeholder,
  variant = "default",
  wrapperClassName = "flex-1",
}: {
  label: string;
  placeholder: string;
  variant?: "default" | "accent";
  wrapperClassName?: string;
}) {
  return (
    <div className={`flex w-full flex-col gap-4 ${wrapperClassName}`}>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        placeholder={placeholder}
        className={`w-full flex-1 resize-y border p-3 text-[17px] text-fg-muted outline-none placeholder:text-fg-muted ${
          variant === "accent" ? "border-brand-500" : "border-white/25"
        }`}
      />
    </div>
  );
}
