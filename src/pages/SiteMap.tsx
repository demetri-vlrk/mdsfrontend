import { Link } from "react-router-dom";

const pages = [
  { path: "/", label: "Dashboard" },
  { path: "/home", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/campaigns/op-1", label: "Campaign Detail" },
  { path: "/campaigns/op-1/images", label: "Campaign · All Images" },
  { path: "/campaigns/op-1/brand-dna", label: "Campaign · Brand DNA" },
  { path: "/new-campaign", label: "New Campaign" },
  { path: "/new-campaign/step-1", label: "New Campaign · Step 1" },
  { path: "/new-campaign/step-2", label: "New Campaign · Step 2" },
  { path: "/new-campaign/step-3", label: "New Campaign · Step 3" },
  { path: "/new-campaign/analyzing", label: "New Campaign · Analyzing" },
  { path: "/new-campaign/results", label: "New Campaign · Results" },
  { path: "/signup", label: "Sign Up" },
];

export function SiteMap() {
  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">
          All Pages
        </h1>
        <div className="flex flex-col gap-2">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="flex items-center justify-between border border-border-subtle bg-white/5 px-4 py-3 text-sm font-medium text-fg-default hover:bg-white/10"
            >
              <span>{page.label}</span>
              <span className="text-fg-muted">{page.path}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
