import type { ReactNode } from "react";

export type MainSubContentHeaderPadding = "wide" | "narrow";

// Exact px values from the MBS Figma design system (node 301:33514).
const PADDING_CLASSES: Record<MainSubContentHeaderPadding, string> = {
  wide: "py-[40px]",
  narrow: "py-[16px]",
};

type MainSubContentHeaderProps = {
  title: string;
  subtitle?: string;
  padding?: MainSubContentHeaderPadding;
  children?: ReactNode;
  className?: string;
};

// From the MBS Figma design system (node 301:33514, "MBS Main Sub-Content
// Header"). Same dark-theme adaptation as MainContentHeader/Sidebar —
// Figma's version is light (#f5f5f5 on #e5e5e5 border) with a bespoke
// #171717 button and a differently-styled checkbox from the Geist sub-
// system used elsewhere in this file (see Container.tsx's note on that).
// The right-side content reuses this project's real Button/Checkbox
// components instead, so it stays visually consistent with the rest of
// the app rather than introducing one-off styling.
export function MainSubContentHeader({
  title,
  subtitle,
  padding = "wide",
  children,
  className,
}: MainSubContentHeaderProps) {
  return (
    <div
      className={`flex items-center border border-border-subtle bg-bg-subtle px-[32px] ${PADDING_CLASSES[padding]} ${className ?? ""}`}
    >
      <div className="flex flex-1 flex-col items-start">
        <p className="font-sans text-[30px] leading-[30px] font-semibold tracking-[-1px] text-fg-default">{title}</p>
        {subtitle && <p className="text-[14px] text-fg-muted">{subtitle}</p>}
      </div>
      {children && <div className="flex shrink-0 items-center gap-[16px]">{children}</div>}
    </div>
  );
}
