import { ArrowRight, ChevronUp } from "lucide-react";

export function MarketPositioningHeader() {
  return (
    <div className="flex w-full items-center justify-between px-8">
      <p className="text-3xl leading-[30px] font-semibold tracking-[-1px] text-fg-default">
        Market Positioning
      </p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-semibold text-fg-default"
        >
          View All
          <ArrowRight className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Collapse"
          className="flex min-h-[36px] items-center justify-center rounded-lg px-4 py-2 text-fg-default hover:bg-white/5"
        >
          <ChevronUp className="size-4" />
        </button>
      </div>
    </div>
  );
}
