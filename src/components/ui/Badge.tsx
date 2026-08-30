import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "primary" | "secondary" | "outlined" | "ghost" | "danger";
export type BadgeSize = "xs" | "sm" | "default" | "md" | "lg" | "xl";

type BadgeSizeSpec = { height: string; padX: string; text: string };

// Exact px values from the MBS Figma design system (node 864:118387) — same
// height/padding/text scale as Button, arbitrary values rather than the
// numeric spacing scale (see Button.tsx for why).
export const BADGE_SIZES: Record<BadgeSize, BadgeSizeSpec> = {
  xs: { height: "h-[20px]", padX: "px-[12px]", text: "text-[10.24px]" },
  sm: { height: "h-[26px]", padX: "px-[12px]", text: "text-[10.24px]" },
  default: { height: "h-[32px]", padX: "px-[12px]", text: "text-[14.4px]" },
  md: { height: "h-[40px]", padX: "px-[16px]", text: "text-[14.4px]" },
  lg: { height: "h-[48px]", padX: "px-[24px]", text: "text-[20px]" },
  xl: { height: "h-[56px]", padX: "px-[24px]", text: "text-[20px]" },
};

// A badge is a static status label, not an interactive control — so unlike
// Button there's no focus-visible/disabled state to model (a <span> can't
// be disabled or meaningfully focused). `hover:` is kept since it still
// applies visually on mouseover even without click interactivity.
const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  primary: "border border-transparent bg-brand-500 text-white hover:bg-brand-600",
  secondary: "border border-transparent bg-[#f9fafb] text-[#1f1f1f] hover:bg-[#ebebeb]",
  outlined: "border border-brand-500 bg-transparent text-brand-500 hover:border-brand-600 hover:text-brand-600",
  ghost: "border border-transparent bg-transparent text-[#1f1f1f] hover:text-brand-500",
  danger: "border border-transparent bg-[#c32929] text-white",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
};

export function Badge({ variant = "primary", size = "default", children, className, ...props }: BadgeProps) {
  const sizeSpec = BADGE_SIZES[size];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap font-stack-text font-normal leading-normal ${sizeSpec.height} ${sizeSpec.padX} ${sizeSpec.text} ${BADGE_VARIANTS[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </span>
  );
}
