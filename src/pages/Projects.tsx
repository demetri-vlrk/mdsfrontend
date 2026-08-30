import { Link } from "react-router-dom";
import { ChevronLeft, ListFilter, Plus } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { UtilityRail } from "../components/home/UtilityRail";
import { ProjectCard } from "../components/ProjectCard";

const FILTERS = ["Recent", "Past week", "Teams"];

const PROJECTS = Array.from({ length: 6 }, () => ({
  name: "Summer Launch",
  created: "Created 14 June, 2026",
}));

export function Projects() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-[calc(100svh-64px)] flex-1 flex-col items-start">
          <div className="flex w-full items-start gap-6 px-8 py-10">
            <div className="flex flex-1 flex-col items-start gap-6">
              <Link
                to="/home"
                className="flex min-h-9 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-fg-muted hover:text-fg-default"
              >
                <ChevronLeft className="size-4" />
                Back to dashboard
              </Link>
              <h1 className="text-5xl leading-[48px] font-semibold tracking-[-1.5px] text-fg-default">
                Projects
              </h1>
              <div className="flex w-full items-center gap-3">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className="flex min-h-9 items-center justify-center rounded-full bg-bg-subtle px-4 py-2 text-sm font-medium text-fg-default hover:bg-bg-elevated"
                  >
                    {filter}
                  </button>
                ))}
                <button
                  type="button"
                  className="flex min-h-9 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-fg-muted hover:text-fg-default"
                >
                  <ListFilter className="size-4" />
                  Filter
                </button>
              </div>
            </div>
            <button
              type="button"
              className="flex min-h-9 w-[167px] shrink-0 items-center justify-center gap-2 bg-accent-primary px-4 py-2 text-sm font-medium text-gray-0 hover:bg-accent-primaryhover"
            >
              <Plus className="size-4" />
              New Project
            </button>
          </div>

          <div className="grid w-full grid-cols-1 border-t border-border-subtle sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} {...project} className="h-[428px]" />
            ))}
          </div>
        </main>
        <UtilityRail />
      </div>
    </div>
  );
}
