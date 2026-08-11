import { ChevronDown } from "lucide-react";
import { LinearProgress } from "./LinearProgress";
import { CircularProgress } from "./CircularProgress";
import gradientArrow from "../assets/gradient-arrow.svg";

export function ReviewAndLaunch() {
  return (
    <div className="flex w-full flex-col items-stretch border-t border-border md:flex-row">
      <div className="flex flex-1 flex-col justify-center gap-1 border border-border px-6 py-[43px]">
        <h3 className="text-2xl leading-[28.8px] font-semibold tracking-[-1px] text-foreground">
          Review and Launch
        </h3>
        <p className="text-xs leading-4 text-muted-foreground">
          Fugiat laborum incididunt do sunt aliqua ad. Exercitation
          adipisicing nostrud et labore reprehenderit aliquip sit.
          Consectetur aute ullamco incididunt proident eu veniam sint enim
          excepteur sint dolor eu. Irure aute esse enim aliquip cupidatat
          reprehenderit. Quis et sunt nulla excepteur voluptate.
        </p>
      </div>

      <div className="flex shrink-0 flex-col justify-center gap-1 border border-border px-6 py-[43px] md:w-[282px]">
        <LinearProgress label="Product Score" percent={65} />
        <LinearProgress label="Branding Score" percent={65} />
      </div>

      <div className="flex shrink-0 items-end gap-1 border border-border px-6 py-[43px]">
        <CircularProgress percent={54} label="Score Prediction" />
        <CircularProgress percent={54} label="Performance Forecast" />
      </div>

      <div className="flex shrink-0 flex-col items-center justify-center gap-2 border border-border md:w-[315px]">
        <button
          type="button"
          className="flex min-h-9 w-[320px] items-center gap-2 rounded-lg border border-border bg-input py-2 pr-2 pl-3 text-sm text-muted-foreground shadow-xs hover:text-foreground"
        >
          <span className="flex-1 text-left">Content Calendar</span>
          <ChevronDown className="size-4 shrink-0" />
        </button>
        <button
          type="button"
          className="flex w-[315px] items-center justify-between gap-2 bg-input px-3 shadow-xs hover:bg-white/10"
        >
          <span className="text-sm text-foreground">Start/Go</span>
          <img
            src={gradientArrow}
            alt=""
            className="h-[57.5px] w-auto shrink-0 py-[7px]"
          />
        </button>
      </div>
    </div>
  );
}
