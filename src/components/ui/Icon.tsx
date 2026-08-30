import { cloneElement, type ReactElement } from "react";
import type { LucideProps } from "lucide-react";

export type IconSize = "xs" | "sm" | "regular" | "md" | "lg" | "xl";
export type IconThickness = "thin" | "regular" | "thick" | "dot";

// Exact px values from the MBS Figma design system (node 789:2718). Figma's
// largest step is oddly named "Size6" rather than following the Small/
// Medium/Large pattern — kept here as "xl" since that name carries no
// meaning outside the Figma file.
export const ICON_SIZES: Record<IconSize, number> = {
  xs: 8,
  sm: 16,
  regular: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

// Figma's "thickness" variants are a stroke-width step, not a size step.
// "Dot" is the odd one out — a dashed stroke, not just a heavier line — so
// it also carries a strokeDasharray, applied by the Icon wrapper below.
export const ICON_THICKNESS_STROKE: Record<IconThickness, number> = {
  thin: 1.5,
  regular: 2,
  thick: 3,
  dot: 2,
};

type IconProps = {
  icon: ReactElement<LucideProps>;
  size?: IconSize;
  thickness?: IconThickness;
};

// Thin convenience wrapper so any lucide icon can be sized/weighted using
// this design system's tokens instead of raw size/strokeWidth numbers.
export function Icon({ icon, size = "regular", thickness = "regular" }: IconProps) {
  return cloneElement(icon, {
    size: ICON_SIZES[size],
    strokeWidth: ICON_THICKNESS_STROKE[thickness],
    strokeDasharray: thickness === "dot" ? "2 3" : undefined,
  });
}
