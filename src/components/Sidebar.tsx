import { Link } from "react-router-dom";
import { House, SquareDashed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  icon: LucideIcon;
  to?: string;
};

const mainItems: NavItem[] = [
  { label: "Campaigns", icon: SquareDashed, to: "/projects" },
  { label: "Billing", icon: SquareDashed },
  { label: "Usage", icon: SquareDashed },
  { label: "Admin", icon: SquareDashed },
];

const favouriteItems: NavItem[] = [
  { label: "OP-1", icon: SquareDashed, to: "/campaigns/op-1" },
  { label: "Campaign 02", icon: SquareDashed },
];

function SidebarLink({ label, icon: Icon, to }: NavItem) {
  const className =
    "flex h-[32px] w-full items-center gap-[8px] rounded-[6px] px-[12px] text-left text-[14px] text-sidebar-foreground hover:bg-white/5";
  const content = (
    <>
      <Icon className="size-[16px] shrink-0" />
      <span className="min-w-0 flex-1 truncate">{label}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  );
}

// From the MBS Figma design system (node 281:18063). Figma's version is
// light-themed (bg #fafafa) — kept dark here per this app's existing
// convention, unlike TopNav which switched to match Figma's light chrome.
export function Sidebar() {
  return (
    <aside className="flex h-[calc(100svh-64px)] w-[300px] shrink-0 flex-col items-start border-r border-border-subtle bg-sidebar px-[16px] py-[12px]">
      <div className="flex min-h-[36px] w-full items-center gap-[8px] border border-border-subtle bg-white/5 px-[12px] py-[7.5px] shadow-xs">
        <span className="flex-1 text-[14px] text-fg-muted">Search</span>
        <div className="flex items-center gap-[4px]">
          <kbd className="rounded-[4px] bg-bg-subtle px-[4px] py-[2px] font-sans text-[12px] text-fg-default">
            Ctrl
          </kbd>
          <span className="text-[12px] text-fg-muted">+</span>
          <kbd className="rounded-[4px] bg-bg-subtle px-[4px] py-[2px] font-sans text-[12px] text-fg-default">
            K
          </kbd>
        </div>
      </div>

      <div className="h-[16px] w-full" />

      <SidebarLink label="Home" icon={House} to="/home" />

      <div className="h-[16px] w-full" />

      <nav className="flex w-full flex-col items-start">
        {mainItems.map((item) => (
          <SidebarLink key={item.label} {...item} />
        ))}
      </nav>

      <div className="h-[16px] w-full" />

      <div className="flex w-full flex-col items-start">
        <div className="flex w-full items-center px-[12px] py-[8px]">
          <p className="flex-1 text-[12px] font-semibold text-sidebar-muted">Favourites</p>
        </div>
        {favouriteItems.map((item) => (
          <SidebarLink key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
}
