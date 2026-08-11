import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function SectionHeader({
  title,
  badge,
  showViewAll = true,
  viewAllHref,
  children,
}: {
  title: string;
  badge?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  children?: ReactNode;
}) {
  const viewAllClassName =
    "flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80";

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
        {showViewAll &&
          (viewAllHref ? (
            <Link to={viewAllHref} className={viewAllClassName}>
              View All
              <ArrowRight className="size-4" />
            </Link>
          ) : (
            <button type="button" className={viewAllClassName}>
              View All
              <ArrowRight className="size-4" />
            </button>
          ))}
        {children}
      </div>
    </div>
  );
}
