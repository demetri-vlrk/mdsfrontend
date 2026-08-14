import { useState } from "react";
import heroBlob from "../assets/hero-blob.svg";

const TABS = ["MBS Setup Wizard", "One Time Setup"] as const;

export function Hero() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(
    "One Time Setup",
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-end overflow-hidden">
      <img
        src={heroBlob}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-[26%] -top-[20%] w-[160%] max-w-none opacity-90"
      />

      <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-2.5 px-4 py-6">
        <h1 className="w-full max-w-[480px] text-center text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-fg-default">
          Build your whole campaign at shot!
        </h1>
        <p className="max-w-[560px] text-center text-base leading-6 text-fg-muted">
          Build your entire campaign by entering a few details about your
          product.
          <br />
          Click <span className="underline">here</span> to learn more about
          how it works.
        </p>

        <div className="flex w-full flex-col items-center justify-center py-5">
          <div
            role="tablist"
            className="flex items-start gap-1 rounded-full border border-border-strong p-3"
          >
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-8 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent-primary text-gray-0 shadow-xs"
                      : "bg-transparent text-fg-default hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
