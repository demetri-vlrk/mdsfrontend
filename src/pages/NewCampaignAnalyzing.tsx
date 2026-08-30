import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { AnalyzingScreen } from "../components/newcampaign/AnalyzingScreen";

export function NewCampaignAnalyzing() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-64px)] flex-1">
          <AnalyzingScreen />
        </main>
      </div>
    </div>
  );
}
