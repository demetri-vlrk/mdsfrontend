import { MessageSquareText } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { UtilityRail } from "../components/home/UtilityRail";
import { ProductSetupSection } from "../components/campaign/ProductSetupSection";
import { BrandDnaSection } from "../components/campaign/BrandDnaSection";
import { StrategyInsightsSection } from "../components/campaign/StrategyInsightsSection";
import glowAccent from "../assets/glow-accent.svg";

export function CampaignDetail() {
  return (
    <div className="min-h-svh bg-background">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-start">
          <div className="relative flex w-full flex-col items-start overflow-hidden">
            <img
              src={glowAccent}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -top-[55%] right-[-15%] w-[55%] max-w-none opacity-60"
            />
            <div className="relative flex w-full items-start gap-6 px-8 py-10">
              <h1 className="flex-1 text-7xl leading-none font-semibold tracking-[-1.5px] text-foreground">
                OP-1 Original Campaign
              </h1>
              <button
                type="button"
                className="flex min-h-9 shrink-0 items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <MessageSquareText className="size-4" />
                Open Chat
              </button>
            </div>

            <div className="flex w-full flex-col items-center gap-8 border border-border py-16">
              <p className="max-w-[478px] text-center text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-foreground">
                You campaign is ready!
              </p>
              <button
                type="button"
                className="flex min-h-9 items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Start creating content
              </button>
            </div>
          </div>

          <ProductSetupSection />
          <BrandDnaSection />
          <StrategyInsightsSection />
        </main>
        <UtilityRail />
      </div>
    </div>
  );
}
