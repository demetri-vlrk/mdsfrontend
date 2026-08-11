import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ListFilter, MessageSquareText, Plus } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { UtilityRail } from "../components/home/UtilityRail";
import { BrandDnaSection } from "../components/campaign/BrandDnaSection";
import { EditLogosModal } from "../components/campaign/EditLogosModal";

const FILTERS = ["Hero image", "Scale reference", "Ingredients", "Tagged"];

export function BrandDna() {
  const [isEditLogosOpen, setIsEditLogosOpen] = useState(false);

  return (
    <div className="min-h-svh bg-background">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-start">
          <div className="flex w-full items-start gap-6 px-8 py-10">
            <div className="flex flex-1 flex-col items-start gap-6">
              <Link
                to="/campaigns/op-1"
                className="flex min-h-9 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
                Back to campaign
              </Link>
              <h1 className="text-7xl leading-none font-semibold tracking-[-1.5px] text-foreground">
                Brand DNA
              </h1>
              <div className="flex w-full items-center gap-3">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className="flex min-h-9 items-center justify-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
                  >
                    {filter}
                  </button>
                ))}
                <button
                  type="button"
                  className="flex min-h-9 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <ListFilter className="size-4" />
                  Filter
                </button>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <button
                type="button"
                className="flex min-h-9 items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <MessageSquareText className="size-4" />
                Open Chat
              </button>
              <button
                type="button"
                className="flex min-h-9 items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
              >
                <Plus className="size-4" />
                Upload Assets
              </button>
            </div>
          </div>

          <BrandDnaSection
            title="Brand Assets"
            showViewAll={false}
            onLogosClick={() => setIsEditLogosOpen(true)}
          />
        </main>
        <UtilityRail />
      </div>
      {isEditLogosOpen && (
        <EditLogosModal onClose={() => setIsEditLogosOpen(false)} />
      )}
    </div>
  );
}
