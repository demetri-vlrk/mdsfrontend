import { SectionHeader } from "../SectionHeader";
import { CreditUsageChart } from "./CreditUsageChart";

const MONTHS = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export function CreditUsage() {
  return (
    <div className="flex h-full flex-1 flex-col items-start gap-6 border border-border-subtle px-8 py-10">
      <SectionHeader title="Credit Usage" />
      <div className="flex w-full flex-col items-start gap-6 border border-border-subtle p-6">
        <CreditUsageChart />
        <div className="flex w-full items-start justify-between text-xs text-fg-muted">
          {MONTHS.map((m) => (
            <p key={m}>{m}</p>
          ))}
        </div>
        <div className="flex w-full items-start gap-2.5">
          <div className="flex flex-1 items-center gap-3 border border-border-subtle bg-bg-surface px-3 py-2">
            <div className="h-8 w-[3px] shrink-0 bg-fg-default" />
            <div className="flex flex-1 flex-col items-start text-xs">
              <p className="font-semibold text-fg-default">May</p>
              <div className="flex w-full items-center gap-2">
                <p className="flex-1 text-fg-muted">Credits</p>
                <p className="shrink-0 font-semibold text-fg-default">200</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 border border-border-subtle bg-bg-surface px-3 py-2">
            <div className="size-2.5 shrink-0 rounded-xs bg-chart-line" />
            <p className="flex-1 text-xs text-fg-default">Balance</p>
            <p className="shrink-0 text-xs font-semibold text-fg-default">
              10,958
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
