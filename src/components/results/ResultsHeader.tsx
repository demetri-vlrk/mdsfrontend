import { Download, MessageSquareText, RefreshCw } from "lucide-react";
import { useState } from "react";

const TABS = ["Campaign Overview", "Assets"] as const;

export function ResultsHeader() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("Campaign Overview");

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full items-start gap-6 px-8 py-10">
        <h1 className="flex-1 text-7xl leading-none font-semibold tracking-[-1.5px] text-foreground">
          OP-1 Original Campaign
        </h1>
        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            className="flex min-h-9 items-center justify-center gap-2 border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-white/5"
          >
            Rebuilt Strategy
          </button>
          <div className="flex items-center">
            <button
              type="button"
              className="flex min-h-9 items-center justify-center gap-2 border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-white/5"
            >
              Download Strategy
              <Download className="size-4" />
            </button>
          </div>
          <button
            type="button"
            className="flex min-h-9 items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <MessageSquareText className="size-4" />
            Open Chat
          </button>
        </div>
      </div>

      <div className="flex w-full items-center justify-between border-b border-border px-8">
        <div className="flex items-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 px-6 py-3 text-3xl leading-[30px] font-semibold tracking-[-1px] ${
                activeTab === tab
                  ? "border-[#0af] text-foreground"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 py-3">
          <button
            type="button"
            className="flex min-h-8 items-center justify-center gap-1.5 bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <RefreshCw className="size-4" />
            Rebuilt Strategy
          </button>
          <button
            type="button"
            className="flex min-h-9 items-center justify-center gap-2 border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-white/5"
          >
            Download Strategy
          </button>
        </div>
      </div>
    </div>
  );
}
