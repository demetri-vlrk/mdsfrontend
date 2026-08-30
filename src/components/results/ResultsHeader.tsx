import { Download, MessageSquareText, RefreshCw } from "lucide-react";
import { useState } from "react";

const TABS = ["Campaign Overview", "Assets"] as const;

export function ResultsHeader() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("Campaign Overview");

  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex w-full items-start gap-6 px-8 py-10">
        <h1 className="font-stack-headline flex-1 text-[64px] leading-none font-medium tracking-[-1.28px] text-fg-default">
          OP-1 Original
          <br />
          Campaign
        </h1>
        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            className="flex min-h-[36px] items-center justify-center gap-2 border border-border-subtle px-4 py-2 text-sm font-medium text-fg-default hover:bg-white/5"
          >
            Rebuilt Strategy
          </button>
          <div className="flex items-center">
            <button
              type="button"
              className="flex min-h-[36px] items-center justify-center gap-2 border border-border-subtle px-4 py-2 text-sm font-medium text-fg-default hover:bg-white/5"
            >
              Download Strategy
              <Download className="size-4" />
            </button>
          </div>
          <button
            type="button"
            className="flex min-h-[36px] items-center justify-center gap-2 bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#0a0a0a] hover:bg-white"
          >
            <MessageSquareText className="size-4" />
            Open Chat
          </button>
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-8">
        <div className="flex items-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-3 text-3xl leading-[30px] font-semibold tracking-[-1px] ${
                activeTab === tab
                  ? "text-fg-default"
                  : "border-b border-border-subtle text-fg-muted"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#7a1f0a] via-[#ff5500] to-white" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 py-3">
          <button
            type="button"
            className="flex min-h-6 items-center justify-center gap-1.5 bg-[#f5f5f5] px-3 py-1.5 text-sm font-medium text-[#0a0a0a] hover:bg-white"
          >
            <RefreshCw className="size-4" />
            Rebuilt Strategy
          </button>
          <button
            type="button"
            className="flex min-h-[36px] items-center justify-center gap-2 border border-border-subtle px-4 py-2 text-sm font-medium text-fg-default hover:bg-white/5"
          >
            Download Strategy
          </button>
        </div>
      </div>
    </div>
  );
}
