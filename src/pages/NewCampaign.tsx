import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { NewCampaignHero } from "../components/newcampaign/NewCampaignHero";

export function NewCampaign() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-64px)] flex-1 flex-col">
          <NewCampaignHero />
        </main>
      </div>
    </div>
  );
}
