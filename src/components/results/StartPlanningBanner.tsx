import { ArrowRight } from "lucide-react";

export function StartPlanningBanner() {
  return (
    <div className="flex w-full flex-col items-center gap-6 border border-border py-10">
      <p className="text-2xl leading-[28.8px] font-semibold tracking-[-1px] text-foreground">
        Ready to start your Campaign?
      </p>
      <div className="flex items-stretch">
        <span className="flex items-center bg-brand-400 px-4 py-3 text-base text-[#1c1d1f]">
          Start Planning Content
        </span>
        <button
          type="button"
          aria-label="Start planning content"
          className="flex items-center justify-center bg-foreground p-3 text-background hover:opacity-90"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
