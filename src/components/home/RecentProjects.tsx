import { Plus, ArrowRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { ProjectCard } from "../ProjectCard";

const PROJECTS = [
  { name: "Summer Launch", created: "Created 14 June, 2026" },
  { name: "Summer Launch", created: "Created 14 June, 2026" },
  { name: "Summer Launch", created: "Created 14 June, 2026" },
];

export function RecentProjects() {
  return (
    <div className="flex w-full flex-col items-start gap-6 border border-border-subtle px-8 py-10">
      <SectionHeader title="Recent Projects" />
      <div className="flex w-full flex-col items-stretch sm:flex-row">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} className="h-[284px] flex-1" />
        ))}
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-2.5 border border-border-subtle bg-bg-subtle p-6">
          <div className="flex flex-col items-center gap-2.5">
            <button
              type="button"
              className="flex w-full min-h-9 items-center justify-center gap-2 bg-accent-primary px-4 py-2 text-sm font-medium text-gray-0 hover:bg-accent-primaryhover"
            >
              <Plus className="size-4" />
              New Project
            </button>
            <button
              type="button"
              className="flex w-full min-h-9 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-fg-muted hover:text-fg-default"
            >
              View All Projects
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
