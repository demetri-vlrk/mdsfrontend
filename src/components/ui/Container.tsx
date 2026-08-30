import type { HTMLAttributes, ReactNode } from "react";

export type ContainerPadding = "wide" | "narrow" | "none";

// Exact px values from the MBS Figma design system (node 301:21331, "MBS
// Outline Container").
const PADDING_CLASSES: Record<ContainerPadding, string> = {
  wide: "p-[24px]",
  narrow: "p-[8px]",
  none: "",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  padding?: ContainerPadding;
  children?: ReactNode;
};

// Figma's demo fills this with an unrelated image-gallery card (Geist
// font, #171717/#f5f5f5 — not this design system's Stack Sans Text /
// brand-500 language used everywhere else), which is just placeholder
// content for the "children" slot, not part of the container itself. The
// border has no matching semantic token (see Button.tsx's note on the
// same issue elsewhere), and unlike Alert/Dialog/TopNav this component has
// no background of its own to anchor it to light mode, so it uses this
// project's own border-border-subtle token to fit the dark app instead of
// Figma's literal light-mode #e5e5e5.
export function Container({ padding = "wide", children, className, ...props }: ContainerProps) {
  return (
    <div
      className={`flex w-full flex-col items-start border border-border-subtle ${PADDING_CLASSES[padding]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
