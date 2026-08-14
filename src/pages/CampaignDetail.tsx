import { MessageSquareText } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { UtilityRail } from "../components/home/UtilityRail";
import { ProductSetupSection } from "../components/campaign/ProductSetupSection";
import { BrandDnaSection } from "../components/campaign/BrandDnaSection";
import { StrategyInsightsSection } from "../components/campaign/StrategyInsightsSection";
import headerGlow from "../assets/campaign-header-glow.png";

export function CampaignDetail() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <div className="relative flex flex-1 overflow-hidden">
          <img
            src={headerGlow}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-[460px] w-auto max-w-none saturate-150 brightness-125"
          />
          <main className="flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-start">
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full items-start gap-6 px-8 py-10">
                <h1 className="flex-1 text-7xl leading-none font-semibold tracking-[-1.5px] text-fg-default">
                  OP-1 Original Campaign
                </h1>
                <button
                  type="button"
                  className="flex min-h-9 shrink-0 items-center justify-center gap-2 bg-accent-primary px-4 py-2 text-sm font-medium text-gray-0 hover:bg-accent-primaryhover"
                >
                  <MessageSquareText className="size-4" />
                  Open Chat
                </button>
              </div>

              <div className="flex w-full flex-col items-center gap-8 border border-border-subtle py-16">
                <p className="max-w-[478px] text-center text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-fg-default">
                  You campaign is ready!
                </p>
                <button
                  type="button"
                  className="flex min-h-9 items-center justify-center gap-2 bg-accent-primary px-4 py-2 text-sm font-medium text-gray-0 hover:bg-accent-primaryhover"
                >
                  Start creating content
                </button>
              </div>
            </div>

            <ProductSetupSection />
            <BrandDnaSection viewAllHref="/campaigns/op-1/brand-dna" />
            <StrategyInsightsSection />
          </main>
          <UtilityRail />
        </div>
      </div>
    </div>
  );
}
