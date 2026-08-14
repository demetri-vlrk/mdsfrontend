import { ChevronDown, Info } from "lucide-react";
import { MbsLogo } from "./MbsLogo";

export function TopNav() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-border-subtle bg-bg-canvas px-4 py-3">
      <div className="flex items-center gap-4">
        <MbsLogo className="h-5 w-auto text-fg-default" />
        <div className="h-4 w-px bg-border-subtle" />
        <button
          type="button"
          className="flex items-center gap-1 text-sm text-fg-muted hover:text-fg-default"
        >
          My Org Name
          <ChevronDown className="size-3" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Help"
          className="flex min-h-9 min-w-9 items-center justify-center rounded-lg p-2 text-fg-default hover:bg-white/5"
        >
          <Info className="size-4" />
        </button>
        <div className="flex size-10 items-center justify-center rounded-full bg-bg-elevated text-sm font-semibold text-fg-default">
          RK
        </div>
      </div>
    </header>
  );
}
