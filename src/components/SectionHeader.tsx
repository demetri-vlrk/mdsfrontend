import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeader({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex w-full items-center">
      <div className="flex flex-1 items-center gap-6 min-w-0">
        <h2 className="text-[30px] leading-[30px] font-semibold tracking-[-1px] text-foreground">
          {title}
        </h2>
        {badge && (
          <span className="flex min-h-6 shrink-0 items-center justify-center rounded-full bg-secondary px-2 py-[3px] text-xs font-medium text-secondary-foreground">
            {badge}
          </span>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80"
        >
          View All
          <ArrowRight className="size-4" />
        </button>
        {children}
      </div>
    </div>
  );
}
