import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

export type InputVariant = "outlined" | "filled";
export type InputSize = "xs" | "sm" | "default" | "md" | "lg" | "xl";

export type InputSizeSpec = { height: string; box: string; padX: string; text: string; icon: string };

// Exact px values from the MBS Figma design system (node 794:1396) —
// arbitrary values rather than the numeric spacing scale; see Button.tsx
// for why (this project's theme overrides --spacing-5 through --spacing-10).
export const INPUT_SIZES: Record<InputSize, InputSizeSpec> = {
  xs: { height: "h-[20px]", box: "size-[20px]", padX: "px-[12px]", text: "text-[10.24px]", icon: "size-[8px]" },
  sm: { height: "h-[26px]", box: "size-[26px]", padX: "px-[12px]", text: "text-[10.24px]", icon: "size-[16px]" },
  default: { height: "h-[32px]", box: "size-[32px]", padX: "px-[12px]", text: "text-[14.4px]", icon: "size-[24px]" },
  md: { height: "h-[40px]", box: "size-[40px]", padX: "px-[16px]", text: "text-[14.4px]", icon: "size-[24px]" },
  lg: { height: "h-[48px]", box: "size-[48px]", padX: "px-[24px]", text: "text-[20px]", icon: "size-[32px]" },
  xl: { height: "h-[56px]", box: "size-[56px]", padX: "px-[24px]", text: "text-[20px]", icon: "size-[32px]" },
};

export type InputVariantSpec = { base: string; error: string; disabled: string };

// Colors pulled 1:1 from Figma variables. `border/subtle` and the grays
// don't match this project's existing token scale, so they're hardcoded
// hex (see Button.tsx's note on the same issue).
export const INPUT_VARIANTS: Record<InputVariant, InputVariantSpec> = {
  outlined: {
    base: "border border-[#d4d4d4] bg-transparent hover:border-[#afafaf] focus-within:border-brand-500",
    error: "border border-[#c32929] bg-transparent",
    disabled: "border border-[#cccccc] bg-[#ebebeb]",
  },
  filled: {
    base: "border border-transparent bg-[#f9fafb] hover:bg-[#ebebeb] focus-within:border-brand-500 focus-within:bg-[#f9fafb]",
    error: "border border-[#c32929] bg-[#f9fafb]",
    disabled: "border border-transparent bg-[#ebebeb]",
  },
};

function wrapperClasses(variant: InputVariant, sizeSpec: InputSizeSpec, error: boolean, disabled: boolean | undefined) {
  const variantSpec = INPUT_VARIANTS[variant];
  const state = disabled ? variantSpec.disabled : error ? variantSpec.error : variantSpec.base;
  return `inline-flex w-full shrink-0 items-center font-stack-text font-normal leading-normal ${sizeSpec.height} ${state} ${disabled ? "cursor-not-allowed" : ""}`;
}

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  variant?: InputVariant;
  size?: InputSize;
  error?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  wrapperClassName?: string;
};

export function Input({
  variant = "outlined",
  size = "default",
  error = false,
  leftIcon,
  rightIcon,
  wrapperClassName,
  className,
  disabled,
  ...props
}: InputProps) {
  const sizeSpec = INPUT_SIZES[size];

  return (
    <div className={`${wrapperClasses(variant, sizeSpec, error, disabled)} ${wrapperClassName ?? ""}`}>
      {leftIcon && (
        <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
          <span className={`flex items-center justify-center ${sizeSpec.icon}`}>{leftIcon}</span>
        </span>
      )}
      <input
        disabled={disabled}
        className={`min-w-0 flex-1 bg-transparent text-[#1f1f1f] outline-none placeholder:text-[#afafaf] disabled:cursor-not-allowed ${sizeSpec.padX} ${sizeSpec.text} ${className ?? ""}`}
        {...props}
      />
      {rightIcon && (
        <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
          <span className={`flex items-center justify-center ${sizeSpec.icon}`}>{rightIcon}</span>
        </span>
      )}
    </div>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  wrapperClassName?: string;
};

// The Figma frame only documents Textarea at one size (min-height 64px)
// with the same Outlined coloring — no Filled/other-size variants exist.
export function Textarea({
  error = false,
  leftIcon,
  rightIcon,
  wrapperClassName,
  className,
  disabled,
  ...props
}: TextareaProps) {
  const sizeSpec = INPUT_SIZES.default;
  const variantSpec = INPUT_VARIANTS.outlined;
  const state = disabled ? variantSpec.disabled : error ? variantSpec.error : variantSpec.base;

  return (
    <div
      className={`inline-flex w-full min-h-[64px] shrink-0 items-start font-stack-text font-normal leading-normal ${state} ${disabled ? "cursor-not-allowed" : ""} ${wrapperClassName ?? ""}`}
    >
      {leftIcon && (
        <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
          <span className={`flex items-center justify-center ${sizeSpec.icon}`}>{leftIcon}</span>
        </span>
      )}
      <textarea
        disabled={disabled}
        className={`min-w-0 flex-1 resize-y bg-transparent py-[8px] text-[#1f1f1f] outline-none placeholder:text-[#afafaf] disabled:cursor-not-allowed ${sizeSpec.padX} ${sizeSpec.text} ${className ?? ""}`}
        {...props}
      />
      {rightIcon && (
        <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
          <span className={`flex items-center justify-center ${sizeSpec.icon}`}>{rightIcon}</span>
        </span>
      )}
    </div>
  );
}
