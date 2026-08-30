import { Check, Minus } from "lucide-react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  indeterminate?: boolean;
  error?: boolean;
};

// From the MBS Figma design system (node 864:120879). Colors are literal
// hex where they don't match this project's existing scale (see Button.tsx
// for why). `indeterminate` isn't a real HTML attribute — it's set on the
// DOM node via a ref, same as any React checkbox — but the browser still
// exposes it as the real :indeterminate CSS pseudo-class, so peer-indeterminate
// works exactly like peer-checked.
export function Checkbox({ indeterminate, error, disabled, className, ...props }: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  const stateClasses = disabled
    ? "border-[#afafaf] bg-[#cccccc] peer-checked:border-[#808080] peer-checked:bg-[#808080] peer-indeterminate:border-[#808080] peer-indeterminate:bg-[#808080]"
    : error
      ? "border-[#ff9ba1] bg-[#ebebeb] peer-checked:bg-[#ff5561] peer-indeterminate:bg-[#ff5561] peer-focus-visible:border-brand-400"
      : "border-[#cccccc] bg-[#ebebeb] peer-checked:border-brand-500 peer-checked:bg-brand-500 peer-indeterminate:border-brand-500 peer-indeterminate:bg-brand-500 peer-focus-visible:border-brand-400";

  return (
    <span className={`relative inline-flex size-[20px] shrink-0 ${className ?? ""}`}>
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        className="peer absolute inset-0 z-10 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
        {...props}
      />
      <span className={`pointer-events-none absolute inset-0 border-2 border-solid ${stateClasses}`} />
      <Check className="pointer-events-none absolute inset-0 m-auto hidden size-[13px] text-white peer-checked:block" />
      <Minus className="pointer-events-none absolute inset-0 m-auto hidden size-[15px] text-white peer-indeterminate:block" />
    </span>
  );
}

type CheckboxGroupProps = CheckboxProps & {
  label: ReactNode;
  flipped?: boolean;
  wrapperClassName?: string;
};

// From node 864:120990 ("MBS Checkbox Group") — a labeled checkbox. A real
// <label> wraps both (better than Figma's plain div+p: clicking the label
// text toggles the checkbox, for free).
export function CheckboxGroup({ label, flipped, wrapperClassName, ...checkboxProps }: CheckboxGroupProps) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-[15px] ${flipped ? "w-full justify-between" : ""} ${checkboxProps.disabled ? "cursor-not-allowed" : ""} ${wrapperClassName ?? ""}`}
    >
      {flipped && <span className="font-stack-text text-[16px] font-light text-[#1f1f1f]">{label}</span>}
      <Checkbox {...checkboxProps} />
      {!flipped && <span className="font-stack-text text-[16px] font-light text-[#1f1f1f]">{label}</span>}
    </label>
  );
}

type RichCheckboxGroupProps = CheckboxGroupProps & { className?: string };

// From node 864:120997 ("MBS Rich Checkbox Group") — a full-width row
// (card) wrapping a CheckboxGroup. `flipped` moves the checkbox to the
// right edge with the label on the left (Figma internally calls this
// layout "MBS Switch Group" — reusing the switch's label-left pattern).
export function RichCheckboxGroup({ label, flipped, className, ...checkboxProps }: RichCheckboxGroupProps) {
  return (
    <div className={`flex min-h-[60px] w-full items-center bg-[#f9fafb] ${className ?? ""}`}>
      <div className="flex flex-1 items-center gap-[12px] px-[12px]">
        <CheckboxGroup label={label} flipped={flipped} wrapperClassName={flipped ? "w-full" : ""} {...checkboxProps} />
      </div>
    </div>
  );
}
