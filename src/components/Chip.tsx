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
          ? "bg-accent-primary text-gray-0"
          : "bg-white/5 text-fg-default hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}
