import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { UtilityRail } from "../components/home/UtilityRail";
import { ResultsHeader } from "../components/results/ResultsHeader";
import { StartPlanningBanner } from "../components/results/StartPlanningBanner";
import { MarketPositioningHeader } from "../components/results/MarketPositioningHeader";
import { PropositionRow } from "../components/results/PropositionRow";
import { TimelineBenchmarkRow } from "../components/results/TimelineBenchmarkRow";
import { KpiDiagnosticsRow } from "../components/results/KpiDiagnosticsRow";
import { PersonasTensionRow } from "../components/results/PersonasTensionRow";

export function CampaignResults() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <div className="relative flex flex-1 overflow-hidden">
          <main className="flex min-h-[calc(100svh-64px)] flex-1 flex-col items-start">
            <ResultsHeader />

            <div className="flex w-full flex-col items-start gap-5 py-8">
              <MarketPositioningHeader />

              <div className="flex w-full flex-col items-start gap-0">
                <div className="w-full px-8">
                  <StartPlanningBanner />
                </div>

                <PropositionRow />
                <TimelineBenchmarkRow />
                <KpiDiagnosticsRow />
                <PersonasTensionRow />
              </div>
            </div>
          </main>
          <UtilityRail />
        </div>
      </div>
    </div>
  );
}
