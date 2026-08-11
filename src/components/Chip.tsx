import type { ReactNode } from "react";

export function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-8 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium shadow-xs ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-white/5 text-foreground hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}
