import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { IconBadge } from "./IconBadge";

export function CardHeading({
  icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex w-full items-center gap-2.5">
      <IconBadge icon={icon} />
      <p className="flex-1 text-2xl leading-[28.8px] font-semibold tracking-[-1px] text-fg-default">
        {title}
      </p>
      {children}
    </div>
  );
}
