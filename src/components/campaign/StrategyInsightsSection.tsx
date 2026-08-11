import { Package } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { CardHeading } from "./CardHeading";
import { LinearProgress } from "../LinearProgress";
import { CircularProgress } from "../CircularProgress";
import chessPiece from "../../assets/chess-piece.png";
import propositionGlow from "../../assets/proposition-glow.png";

const LADDER_STEPS = ["Aware", "Interested", "Considering", "Acted", "Advocates"];

const KPI_GAUGES = [
  { label: "YoY Revenue Growth", percent: 54, target: "Target: +15%" },
  { label: "CLV via Advocacy", percent: 54, target: "Target: 60%" },
  { label: "CLV via Advocacy", percent: 54, target: "Target: +20%" },
];

const GRADIENT_TEXT = {
  backgroundImage:
    "linear-gradient(270deg, #00aaff 30%, #ffffff 29%, #ffc53f 39%, #ff4800 76%, rgba(10,10,10,0) 137%)",
};

export function StrategyInsightsSection() {
  return (
    <div className="flex w-full flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title="Strategy & Insights" />

      <div className="flex w-full items-stretch">
        <div className="relative flex flex-1 flex-col items-start gap-6 border border-border p-6">
          <CardHeading icon={Package} title="Proposition" />
          <img
            src={propositionGlow}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-0 left-[40%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 mix-blend-plus-lighter"
          />
          <img
            src={chessPiece}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-6 right-0 h-[394px] w-auto mix-blend-lighten"
          />
          <div className="relative flex max-w-[480px] flex-col gap-1">
            <p className="max-w-[410px] text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-foreground">
              Single-Minded Proposition
            </p>
            <div className="flex max-w-[328px] flex-col gap-1 text-muted-foreground">
              <p className="text-lg leading-[27px] font-semibold">
                OP‑1 is the synthesizer that grants permission to stop
                preparing and start creating.
              </p>
              <p className="text-sm font-medium">
                Move aspiring electronic musicians from DAW paralysis to
                finishing tracks on OP‑1 as their primary instrument.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[472px] shrink-0 flex-col items-start gap-6 border border-border p-4">
          <CardHeading icon={Package} title="Behavioral Ladder" />
          <div className="flex w-full flex-col gap-6">
            {LADDER_STEPS.map((step) => (
              <LinearProgress key={step} label={step} percent={65} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6 border border-border p-4">
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
    </div>
  );
}
