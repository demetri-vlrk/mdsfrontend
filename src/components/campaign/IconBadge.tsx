import type { LucideIcon } from "lucide-react";
import { ICON_GRADIENT_ID } from "./IconGradientDefs";

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent">
      <Icon className="size-6" color={`url(#${ICON_GRADIENT_ID})`} />
    </div>
  );
}
