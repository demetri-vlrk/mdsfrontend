import { Link } from "react-router-dom";
import { House, SquareDashed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  icon: LucideIcon;
};

const mainItems: NavItem[] = [
  { label: "Projects", icon: SquareDashed },
  { label: "Team", icon: SquareDashed },
  { label: "Usage", icon: SquareDashed },
  { label: "Admin", icon: SquareDashed },
];

const favouriteItems: NavItem[] = [
  { label: "Projects", icon: SquareDashed },
  { label: "Team", icon: SquareDashed },
  { label: "Usage", icon: SquareDashed },
  { label: "Admin", icon: SquareDashed },
];

function SidebarLink({ label, icon: Icon }: NavItem) {
  return (
    <button
      type="button"
      className="flex h-8 w-full items-center gap-2 rounded-md px-3 py-1 text-left text-sm text-sidebar-foreground hover:bg-white/5"
    >
      <Icon className="size-4 shrink-0" />
      <span className="min-w-0 flex-1 truncate">{label}</span>
    </button>
  );
}

export function Sidebar() {
  return (
    <aside className="flex h-[calc(100svh-4rem)] w-[259px] shrink-0 flex-col items-start border-r border-border bg-sidebar px-4 py-3">
      <div className="flex w-full items-center gap-2 rounded-lg border border-border bg-white/5 px-3 py-[7.5px] shadow-xs">
        <span className="flex-1 text-sm text-muted-foreground">Search</span>
        <div className="flex items-center gap-1">
          <kbd className="rounded bg-white/5 px-1 py-0.5 text-xs text-foreground">
            Ctrl
          </kbd>
          <span className="text-xs text-muted-foreground">+</span>
          <kbd className="rounded bg-white/5 px-1 py-0.5 text-xs text-foreground">
            K
          </kbd>
        </div>
      </div>

      <div className="h-4 w-full" />

      <Link
        to="/home"
        className="flex h-8 w-full items-center gap-2 rounded-md px-3 py-1 text-left text-sm text-sidebar-foreground hover:bg-white/5"
      >
        <House className="size-4 shrink-0" />
        <span className="flex-1">Home</span>
      </Link>

      <div className="h-4 w-full" />

      <nav className="flex w-full flex-col items-start">
        {mainItems.map((item) => (
          <SidebarLink key={item.label} {...item} />
        ))}
      </nav>

      <div className="h-4 w-full" />

      <div className="flex w-full flex-col items-start">
        <div className="flex w-full items-center px-3 py-2">
          <p className="flex-1 text-xs font-semibold text-sidebar-muted">
            Favourites
          </p>
        </div>
        {favouriteItems.map((item) => (
          <SidebarLink key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
}
