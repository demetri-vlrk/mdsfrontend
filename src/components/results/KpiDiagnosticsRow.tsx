import { Package } from "lucide-react";
import { CardHeading } from "../campaign/CardHeading";
import { CircularProgress } from "../CircularProgress";

const KPI_GAUGES = [
  { label: "YoY Revenue Growth", percent: 54, target: "Target: +15%" },
  { label: "CLV via Advocacy", percent: 54, target: "Target: 60%" },
  { label: "CLV via Advocacy", percent: 54, target: "Target: +20%" },
];

const GRADIENT_TEXT = {
  backgroundImage:
    "linear-gradient(270deg, #00aaff 30%, #ffffff 29%, #ffc53f 39%, #ff4800 76%, rgba(10,10,10,0) 137%)",
};

export function KpiDiagnosticsRow() {
  return (
    <div className="mx-8 flex flex-col items-start gap-4 border border-border p-4">
      <CardHeading icon={Package} title="KPIs & Diagnostics" />
      <div className="flex w-full items-start">
        {KPI_GAUGES.map((kpi, i) => (
          <div key={i} className="flex flex-1 items-stretch">
            <CircularProgress
              percent={kpi.percent}
              topLabel={kpi.label}
              bottomLabel={kpi.target}
            />
          </div>
        ))}
        <div className="flex h-[181px] flex-1 flex-col items-center justify-center gap-3 p-3">
          <p className="text-xs text-muted-foreground">
            Time to First Finished Track
          </p>
          <p
            className="bg-clip-text text-7xl leading-none font-semibold text-transparent"
            style={GRADIENT_TEXT}
          >
            +22%
          </p>
          <p className="text-sm font-bold text-foreground">
            Target: &lt; 14 days
          </p>
        </div>
      </div>
    </div>
  );
}
