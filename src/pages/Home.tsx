import { MessageSquareText } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { UtilityRail } from "../components/home/UtilityRail";
import { RecentProjects } from "../components/home/RecentProjects";
import { Overview } from "../components/home/Overview";
import { CreditUsage } from "../components/home/CreditUsage";
import { CreativeReview } from "../components/home/CreativeReview";
import { UpcomingSchedule } from "../components/home/UpcomingSchedule";
import { ContentCalendar } from "../components/home/ContentCalendar";

export function Home() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-start">
          <div className="flex w-full items-start gap-6 px-8 py-10">
            <h1 className="flex-1 text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-fg-default">
              Welcome back, John!
            </h1>
            <button
              type="button"
              className="flex min-h-9 shrink-0 items-center justify-center gap-2 bg-accent-primary px-4 py-2 text-sm font-medium text-gray-0 hover:bg-accent-primaryhover"
            >
              <MessageSquareText className="size-4" />
              Open Chat
            </button>
          </div>

          <div className="flex w-full flex-col items-start">
            <RecentProjects />
            <Overview />
            <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-[806fr_606fr]">
              <CreditUsage />
              <CreativeReview />
            </div>
            <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-[465fr_947fr]">
              <UpcomingSchedule />
              <ContentCalendar />
            </div>
          </div>
        </main>
        <UtilityRail />
      </div>
    </div>
  );
}
