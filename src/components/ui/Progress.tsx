export type ProgressSize = "default" | "small" | "xs";

// Exact px values from the MBS Figma design system (node 864:120100).
const SIZE_HEIGHT: Record<ProgressSize, string> = {
  default: "h-[20px]",
  small: "h-[10px]",
  xs: "h-[4px]",
};

type ProgressProps = {
  value: number;
  max?: number;
  size?: ProgressSize;
  className?: string;
};

export function Progress({ value, max = 100, size = "default", className }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={`relative w-full overflow-hidden bg-[#cccccc] ${SIZE_HEIGHT[size]} ${className ?? ""}`}
    >
      <div className="h-full bg-brand-500 transition-[width]" style={{ width: `${pct}%` }} />
    </div>
  );
}
