import type { LucideIcon } from "lucide-react";

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-bg-elevated">
      <Icon className="size-6 text-fg-default" />
    </div>
  );
}
