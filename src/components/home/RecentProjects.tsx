import { Plus, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import projectThumb from "../../assets/project-thumb.png";

const PROJECTS = [
  { name: "Summer Launch", created: "Created 14 June, 2026", thumb: projectThumb },
  { name: "Summer Launch", created: "Created 14 June, 2026", thumb: projectThumb },
  { name: "Summer Launch", created: "Created 14 June, 2026", thumb: projectThumb },
];

export function RecentProjects() {
  return (
    <div className="flex w-full flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title="Recent Projects" />
      <div className="flex w-full flex-col items-stretch sm:flex-row">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="relative flex h-[284px] w-full flex-1 flex-col items-start justify-end overflow-hidden border border-border p-8"
          >
            <img
              src={project.thumb}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black" />
            <div className="relative flex w-full flex-col items-start text-foreground">
              <p className="w-full overflow-hidden text-ellipsis text-2xl leading-[28.8px] font-semibold tracking-[-1px]">
                {project.name}
              </p>
              <p className="w-full text-xs leading-4">{project.created}</p>
            </div>
          </div>
        ))}
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-2.5 border border-border bg-secondary p-6">
          <div className="flex flex-col items-center gap-2.5">
            <button
              type="button"
              className="flex w-full min-h-9 items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="size-4" />
              New Project
            </button>
            <button
              type="button"
              className="flex w-full min-h-9 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
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
