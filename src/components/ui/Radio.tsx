import type { InputHTMLAttributes, ReactNode } from "react";

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  error?: boolean;
};

// From the MBS Figma design system (node 922:9823, "MBS Radio"). Square,
// not circular — matching this design system's consistent sharp-corner
// language (Button, Input, Avatar, Checkbox, Switch all confirmed the
// same way), confirmed here by inspecting the actual rendered pixels
// rather than assuming the usual radio-button convention. Structurally
// identical to Checkbox.tsx: a real <input> (peer) driving a visual box
// via peer-checked:/peer-focus-visible:, plus an error prop for the one
// state that isn't a real CSS pseudo-class.
export function Radio({ error, disabled, className, ...props }: RadioProps) {
  const boxClasses = disabled
    ? "border-[#afafaf] bg-[#cccccc]"
    : error
      ? "border-[#ff9ba1] bg-[#ebebeb] peer-focus-visible:border-brand-400"
      : "border-[#cccccc] bg-[#ebebeb] peer-focus-visible:border-brand-400";
  const dotBg = disabled ? "bg-[#808080]" : "bg-brand-500";

  return (
    <span className={`relative inline-flex size-[20px] shrink-0 ${className ?? ""}`}>
      <input
        type="radio"
        disabled={disabled}
        className="peer absolute inset-0 z-10 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
        {...props}
      />
      <span className={`pointer-events-none absolute inset-0 border-2 border-solid ${boxClasses}`} />
      <span className={`pointer-events-none absolute inset-[3px] hidden peer-checked:block ${dotBg}`} />
    </span>
  );
}

type RadioGroupProps = RadioProps & {
  label: ReactNode;
  flipped?: boolean;
  wrapperClassName?: string;
};

// From node 922:9880 ("MBS Radio Group") — a labeled radio, same pattern
// as CheckboxGroup/SwitchGroup.
export function RadioGroup({ label, flipped, wrapperClassName, ...radioProps }: RadioGroupProps) {
  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-[15px] ${flipped ? "w-full justify-between" : ""} ${radioProps.disabled ? "cursor-not-allowed" : ""} ${wrapperClassName ?? ""}`}
    >
      {flipped && <span className="font-stack-text text-[16px] font-light text-[#1f1f1f]">{label}</span>}
      <Radio {...radioProps} />
      {!flipped && <span className="font-stack-text text-[16px] font-light text-[#1f1f1f]">{label}</span>}
    </label>
  );
}

type RichRadioGroupProps = RadioGroupProps & { className?: string };

// From node 922:9887 ("MBS Rich Radio Group") — full-width card row,
// same pattern as RichCheckboxGroup/RichSwitchGroup.
export function RichRadioGroup({ label, flipped, className, ...radioProps }: RichRadioGroupProps) {
  return (
    <div className={`flex min-h-[60px] w-full items-center bg-[#f9fafb] ${className ?? ""}`}>
      <div className="flex flex-1 items-center gap-[12px] px-[12px]">
        <RadioGroup label={label} flipped={flipped} wrapperClassName={flipped ? "w-full" : ""} {...radioProps} />
      </div>
    </div>
  );
}

type RadioBoxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label: ReactNode;
  className?: string;
};

// From node 927:22275 ("MBS Radio Box") — a big selectable tile (e.g.
// choosing an account type), not the small 20px control. Unlike the rest
// of this design system it's built to sit directly on a dark surface —
// its unchecked state is a transparent box with white label text, no
// self-contained light background — so no dark-theme adaptation is
// needed the way Button/Badge/Alert required.
export function RadioBox({ label, className, disabled, ...props }: RadioBoxProps) {
  return (
    <label
      className={`relative flex aspect-square w-[120px] cursor-pointer flex-col items-start justify-between border border-[#f6f6f6] p-[12px] has-[:checked]:border-transparent has-[:checked]:bg-brand-500/50 ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className ?? ""}`}
    >
      <input type="radio" disabled={disabled} className="peer sr-only" {...props} />
      <span className="relative size-[20px] shrink-0 border border-[#ebebeb] peer-checked:border-brand-300 peer-checked:bg-brand-500" />
      <span className="font-['Inter',sans-serif] text-[17px] text-white">{label}</span>
    </label>
  );
}
