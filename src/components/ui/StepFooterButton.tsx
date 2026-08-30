import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type Tone = "ghost" | "ghost-muted" | "solid" | "brand";

const TONE_CLASSES: Record<Tone, string> = {
  ghost: "bg-white/10 text-fg-default hover:bg-white/15",
  "ghost-muted": "bg-white/10 text-fg-muted hover:bg-white/15",
  solid: "bg-white/25 text-fg-default hover:bg-white/30",
  brand: "bg-brand-500/50 text-fg-default hover:bg-brand-500/60",
};

export function StepFooterButton({
  to,
  label,
  icon: Icon,
  iconPosition = "right",
  tone = "ghost",
  width = "full",
}: {
  to: string;
  label: string;
  icon: LucideIcon;
  iconPosition?: "left" | "right";
  tone?: Tone;
  width?: "half" | "full";
}) {
  return (
    <Link
      to={to}
      className={`relative z-10 flex items-center justify-center gap-5 p-5 text-[17px] font-semibold leading-normal ${
        width === "half" ? "flex-1" : "w-full"
      } ${TONE_CLASSES[tone]}`}
    >
      {iconPosition === "left" && <Icon className="size-[20px]" />}
      {label}
      {iconPosition === "right" && <Icon className="size-[20px]" />}
    </Link>
  );
}
