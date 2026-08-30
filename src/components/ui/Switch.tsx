import type { InputHTMLAttributes, ReactNode } from "react";

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">;

// From the MBS Figma design system (node 864:120249). Colors are literal
// hex where they don't match this project's existing scale (see Button.tsx
// for why). Figma only documents static end-states; the thumb's slide is a
// real CSS transition here, not just a snapshot swap.
export function Switch({ disabled, className, ...props }: SwitchProps) {
  const trackClasses = disabled
    ? "border-[#afafaf] bg-[#afafaf] peer-checked:border-[#808080] peer-checked:bg-[#808080]"
    : "border-[#cccccc] bg-[#cccccc] peer-checked:border-brand-500 peer-checked:bg-brand-500 peer-focus-visible:border-brand-400";
  const thumbBg = disabled ? "bg-[#ebebeb]" : "bg-white";

  return (
    <span className={`relative inline-flex h-[20px] w-[40px] shrink-0 ${className ?? ""}`}>
      <input
        type="checkbox"
        role="switch"
        disabled={disabled}
        className="peer absolute inset-0 z-10 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
        {...props}
      />
      <span className={`pointer-events-none absolute inset-0 border-2 border-solid transition-colors ${trackClasses}`} />
      <span
        className={`pointer-events-none absolute top-0 left-0 size-[20px] transition-transform peer-checked:translate-x-[20px] ${thumbBg}`}
      />
    </span>
  );
}

type SwitchGroupProps = SwitchProps & {
  label: ReactNode;
  flipped?: boolean;
  wrapperClassName?: string;
};

// From node 864:120327 ("MBS Switch Group") — a labeled switch. A real
// <label> wraps both, same as CheckboxGroup.
export function SwitchGroup({ label, flipped, wrapperClassName, ...switchProps }: SwitchGroupProps) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-[15px] ${flipped ? "w-full justify-between" : ""} ${switchProps.disabled ? "cursor-not-allowed" : ""} ${wrapperClassName ?? ""}`}
    >
      {flipped && <span className="font-stack-text text-[16px] font-light text-[#1f1f1f]">{label}</span>}
      <Switch {...switchProps} />
      {!flipped && <span className="font-stack-text text-[16px] font-light text-[#1f1f1f]">{label}</span>}
    </label>
  );
}

type RichSwitchGroupProps = SwitchGroupProps & { className?: string };

// From node 864:120382 ("MBS Rich Switch Group") — a full-width row (card)
// wrapping a SwitchGroup, identical structure to RichCheckboxGroup.
export function RichSwitchGroup({ label, flipped, className, ...switchProps }: RichSwitchGroupProps) {
  return (
    <div className={`flex min-h-[60px] w-full items-center bg-[#f9fafb] ${className ?? ""}`}>
      <div className="flex flex-1 items-center gap-[12px] px-[12px]">
        <SwitchGroup label={label} flipped={flipped} wrapperClassName={flipped ? "w-full" : ""} {...switchProps} />
      </div>
    </div>
  );
}
