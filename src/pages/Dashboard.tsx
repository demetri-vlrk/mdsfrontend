import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/Hero";
import { ProductSelectionCard } from "../components/ProductSelectionCard";
import { BrandCard } from "../components/BrandCard";
import { CampaignIntentionCard } from "../components/CampaignIntentionCard";
import { ReviewAndLaunch } from "../components/ReviewAndLaunch";

export function Dashboard() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-center">
          <Hero />
          <div className="flex w-full flex-col items-start border-t border-border-subtle">
            <div className="flex w-full flex-col items-stretch md:flex-row">
              <ProductSelectionCard />
              <BrandCard />
              <CampaignIntentionCard />
            </div>
            <ReviewAndLaunch />
          </div>
        </main>
      </div>
    </div>
  );
}
