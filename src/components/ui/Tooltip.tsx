import type { CSSProperties, ReactElement, ReactNode } from "react";
import { useState } from "react";

export type TooltipSide = "top" | "bottom" | "left" | "right";

const ARROW_STYLES: Record<TooltipSide, CSSProperties> = {
  top: { borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderBottom: "14px solid white" },
  bottom: { borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "14px solid white" },
  left: { borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderRight: "14px solid white" },
  right: { borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "14px solid white" },
};

const ARROW_POSITION: Record<TooltipSide, string> = {
  top: "left-1/2 top-[-14px] -translate-x-1/2",
  bottom: "left-1/2 bottom-[-14px] -translate-x-1/2",
  left: "left-[-14px] top-1/2 -translate-y-1/2",
  right: "right-[-14px] top-1/2 -translate-y-1/2",
};

type TooltipBubbleProps = {
  children: ReactNode;
  side?: TooltipSide;
  className?: string;
};

// From the MBS Figma design system (node 864:120085). The arrow is a CSS
// triangle (border trick) rather than an imported SVG asset — Figma's own
// polygon is a plain solid shape matching the bubble's white fill, so
// nothing is lost and it avoids an external asset dependency. Figma's
// "Top" variant is missing its arrow layer (likely a gap in the source
// file); the other 3 sides' rotations make its orientation unambiguous
// (no rotation — Bottom flips a default up-pointing triangle, Left/Right
// rotate it ±90°), so Top uses that same base triangle unrotated.
export function TooltipBubble({ children, side = "top", className }: TooltipBubbleProps) {
  return (
    <div
      className={`relative flex min-h-[40px] w-[211px] items-center justify-center bg-white px-[12px] ${className ?? ""}`}
    >
      <p className="text-center font-stack-text text-[16px] font-light text-[#1f1f1f]">{children}</p>
      <span className={`absolute size-0 ${ARROW_POSITION[side]}`} style={ARROW_STYLES[side]} />
    </div>
  );
}

type TooltipProps = {
  content: ReactNode;
  side?: TooltipSide;
  children: ReactElement;
  className?: string;
};

const WRAPPER_POSITION: Record<TooltipSide, string> = {
  top: "bottom-full left-1/2 mb-[14px] -translate-x-1/2",
  bottom: "top-full left-1/2 mt-[14px] -translate-x-1/2",
  left: "right-full top-1/2 mr-[14px] -translate-y-1/2",
  right: "left-full top-1/2 ml-[14px] -translate-y-1/2",
};

// Figma only documents the static bubble — the actual show/hide-on-hover
// behavior is a real functional addition, not in the source file.
export function Tooltip({ content, side = "top", children, className }: TooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span className={`pointer-events-none absolute z-50 ${WRAPPER_POSITION[side]}`}>
          <TooltipBubble side={side} className={className}>
            {content}
          </TooltipBubble>
        </span>
      )}
    </span>
  );
}
