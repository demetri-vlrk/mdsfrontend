import { SectionHeader } from "./SectionHeader";
import { CreditUsageChart } from "./CreditUsageChart";

const MONTHS = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export function CreditUsage() {
  return (
    <div className="flex h-full flex-1 flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title="Credit Usage" />
      <div className="flex w-full flex-col items-start gap-6 border border-border p-6">
        <CreditUsageChart />
        <div className="flex w-full items-start justify-between text-xs text-muted-foreground">
          {MONTHS.map((m) => (
            <p key={m}>{m}</p>
          ))}
        </div>
        <div className="flex w-full items-start gap-2.5">
          <div className="flex flex-1 items-center gap-3 border border-border bg-card px-3 py-2">
            <div className="h-8 w-[3px] shrink-0 bg-foreground" />
            <div className="flex flex-1 flex-col items-start text-xs">
              <p className="font-semibold text-foreground">May</p>
              <div className="flex w-full items-center gap-2">
                <p className="flex-1 text-muted-foreground">Credits</p>
                <p className="shrink-0 font-semibold text-foreground">200</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 border border-border bg-card px-3 py-2">
            <div className="size-2.5 shrink-0 rounded-xs bg-chart-line" />
            <p className="flex-1 text-xs text-foreground">Balance</p>
            <p className="shrink-0 text-xs font-semibold text-foreground">
              10,958
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
