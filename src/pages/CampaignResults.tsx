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
import headerGlow from "../assets/campaign-header-glow.png";

export function CampaignResults() {
  return (
    <div className="min-h-svh bg-background">
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
            <ResultsHeader />

            <div className="flex w-full flex-col items-start gap-8 py-8">
              <div className="w-full px-8">
                <StartPlanningBanner />
              </div>

              <MarketPositioningHeader />
              <PropositionRow />
              <TimelineBenchmarkRow />
              <KpiDiagnosticsRow />
              <PersonasTensionRow />
            </div>
          </main>
          <UtilityRail />
        </div>
      </div>
    </div>
  );
}
