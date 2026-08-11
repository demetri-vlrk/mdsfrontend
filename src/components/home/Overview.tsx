import { Box, Check, Sparkles, ChartSpline } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: Box, value: "24", label: "Active Campaigns" },
  { icon: Check, value: "8", label: "Pending Approvals" },
  { icon: Sparkles, value: "10K", label: "Credits left" },
  { icon: ChartSpline, value: "120", label: "Assets shipped in past week" },
];

export function Overview() {
  return (
    <div className="flex w-full flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title="Overview" />
      <div className="flex w-full flex-col items-stretch sm:flex-row">
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <div
            key={i}
            className="flex flex-1 items-center gap-6 border border-border p-6"
          >
            <div className="flex shrink-0 items-center justify-center rounded-full bg-secondary p-4">
              <Icon className="size-8 text-foreground" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-foreground">
                {value}
              </p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
