import { Package } from "lucide-react";
import { CardHeading } from "../campaign/CardHeading";
import { LinearProgress } from "../LinearProgress";
import chessPiece from "../../assets/chess-piece.png";
import propositionGlow from "../../assets/proposition-glow.png";

const LADDER_STEPS = [
  "Aware",
  "Interested",
  "Considering",
  "Acted",
  "Advocates",
];

export function PropositionRow() {
  return (
    <div className="flex w-full items-stretch px-8">
      <div className="relative flex flex-1 flex-col items-start justify-between border border-border-subtle p-6">
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
          className="pointer-events-none absolute top-6 right-6 h-[350px] w-auto mix-blend-lighten"
        />
        <div className="relative flex max-w-[410px] flex-col gap-1">
          <p className="text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-fg-default">
            Single-Minded Proposition
          </p>
          <p className="max-w-[328px] text-sm font-medium text-fg-muted">
            Move aspiring electronic musicians from DAW paralysis to
            finishing tracks on OP‑1 as their primary instrument.
          </p>
        </div>
        <div className="relative flex flex-col gap-3 p-3">
          <p className="text-xs text-fg-muted">Campaign Score</p>
          <p className="text-7xl leading-none font-semibold tracking-[-1.5px] text-fg-default">
            +22%
          </p>
          <p className="text-sm font-bold text-fg-default">
            Target: &lt; 14 days
          </p>
        </div>
      </div>

      <div className="flex w-[472px] shrink-0 flex-col items-start gap-6 border border-border-subtle p-4">
        <CardHeading icon={Package} title="Behavioral Ladder" />
        <div className="flex w-full flex-col gap-6">
          {LADDER_STEPS.map((step) => (
            <LinearProgress key={step} label={step} percent={65} />
          ))}
        </div>
      </div>
    </div>
  );
}
