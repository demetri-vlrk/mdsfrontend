import type { ReactNode } from "react";

type MainContentHeaderProps = {
  title: string;
  children?: ReactNode;
  className?: string;
};

// From the MBS Figma design system (node 300:16454, "MBS Main Content
// Header"). Figma has no background (just a border) and locks the title
// to dark text (#0a0a0a) — since this app is dark-only, that's adapted to
// this project's fg-default/border-subtle tokens rather than pasted
// verbatim (same call as Sidebar). Only a bottom border is kept, matching
// how TopNav — the other full-width header bar in this app — does it,
// rather than Figma's literal 4-sided border which would look like a
// floating box in a content area.
export function MainContentHeader({ title, children, className }: MainContentHeaderProps) {
  return (
    <div className={`flex items-start gap-[24px] border-b border-border-subtle px-[32px] py-[40px] ${className ?? ""}`}>
      <p className="min-w-0 flex-1 font-sans text-[30px] leading-[30px] font-semibold tracking-[-1px] text-fg-default">
        {title}
      </p>
      {children && <div className="flex shrink-0 items-center gap-[24px]">{children}</div>}
    </div>
  );
}
