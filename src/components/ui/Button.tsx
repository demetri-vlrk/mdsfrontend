import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost" | "danger";
export type ButtonSize = "xs" | "sm" | "default" | "md" | "lg" | "xl";

export type ButtonSizeSpec = { height: string; box: string; padX: string; text: string; icon: string };

// Exact px values from the MBS Figma design system (node 789:2873), as
// arbitrary values rather than the numeric spacing scale (h-10, px-6, ...).
// This project's `@theme` in theme.css overrides --spacing-5 through
// --spacing-10 to the mbs-frontend token values, which diverge from
// Tailwind's standard ×4px scale past step 4 (e.g. --spacing-10 is 64px,
// not the usual 40px) — so those keys silently resolved to the wrong
// pixels here. Arbitrary values sidestep that scale entirely.
// `box` is the icon end-cap's own width+height, set explicitly (not via
// aspect-square) so it can't land on a fractional pixel and blur its border.
export const BUTTON_SIZES: Record<ButtonSize, ButtonSizeSpec> = {
  xs: { height: "h-[20px]", box: "size-[20px]", padX: "px-[12px]", text: "text-[10.24px]", icon: "size-[8px]" },
  sm: { height: "h-[26px]", box: "size-[26px]", padX: "px-[12px]", text: "text-[10.24px]", icon: "size-[16px]" },
  default: { height: "h-[32px]", box: "size-[32px]", padX: "px-[12px]", text: "text-[14.4px]", icon: "size-[24px]" },
  md: { height: "h-[40px]", box: "size-[40px]", padX: "px-[16px]", text: "text-[14.4px]", icon: "size-[24px]" },
  lg: { height: "h-[48px]", box: "size-[48px]", padX: "px-[24px]", text: "text-[20px]", icon: "size-[32px]" },
  xl: { height: "h-[56px]", box: "size-[56px]", padX: "px-[24px]", text: "text-[20px]", icon: "size-[32px]" },
};

export type ButtonVariantSpec = { container: string; iconBox: string };

// Colors pulled 1:1 from Figma variables. Several (gray/red/neutral) don't
// match this project's existing gray-*/red-* scale, so they're hardcoded
// hex rather than mapped to the wrong token.
export const BUTTON_VARIANTS: Record<ButtonVariant, ButtonVariantSpec> = {
  primary: {
    container:
      "border border-transparent bg-brand-500 text-white hover:bg-brand-600 focus-visible:border-brand-300 disabled:bg-[#afafaf]",
    iconBox: "bg-brand-400 group-hover:bg-brand-500 group-disabled:bg-[#afafaf]",
  },
  secondary: {
    container:
      "border border-transparent bg-[#f9fafb] text-[#1f1f1f] hover:bg-[#ebebeb] focus-visible:border-brand-400 disabled:bg-[#cccccc]",
    iconBox: "bg-[#f5f5f5] group-hover:bg-[#f6f6f6] group-disabled:bg-[#cccccc]",
  },
  outlined: {
    container:
      "border border-brand-500 bg-transparent text-brand-500 hover:border-brand-600 hover:text-brand-600 focus-visible:border-brand-300 disabled:border-[#808080] disabled:text-[#808080]",
    iconBox:
      "border border-brand-500 group-hover:border-brand-600 group-focus-visible:border-brand-300 group-disabled:border-[#808080]",
  },
  ghost: {
    container:
      "border border-transparent bg-transparent text-[#1f1f1f] hover:text-brand-500 focus-visible:border-brand-400 disabled:text-[#afafaf]",
    iconBox: "",
  },
  danger: {
    container:
      "border border-transparent bg-[#c32929] text-white focus-visible:border-brand-300 disabled:bg-[#afafaf]",
    iconBox: "bg-[#c32929] group-disabled:bg-[#afafaf]",
  },
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Button({
  variant = "primary",
  size = "default",
  leftIcon,
  rightIcon,
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const sizeSpec = BUTTON_SIZES[size];
  const variantSpec = BUTTON_VARIANTS[variant];

  return (
    <button
      type={type}
      className={`group inline-flex shrink-0 items-center justify-center whitespace-nowrap font-stack-text font-normal leading-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed ${sizeSpec.height} ${sizeSpec.text} ${variantSpec.container} ${className ?? ""}`}
      {...props}
    >
      {leftIcon && (
        <span
          className={`flex ${sizeSpec.box} shrink-0 items-center justify-center ${variantSpec.iconBox}`}
        >
          <span className={`flex items-center justify-center ${sizeSpec.icon}`}>{leftIcon}</span>
        </span>
      )}
      {children && <span className={sizeSpec.padX}>{children}</span>}
      {rightIcon && (
        <span
          className={`flex ${sizeSpec.box} shrink-0 items-center justify-center ${variantSpec.iconBox}`}
        >
          <span className={`flex items-center justify-center ${sizeSpec.icon}`}>{rightIcon}</span>
        </span>
      )}
    </button>
  );
}
