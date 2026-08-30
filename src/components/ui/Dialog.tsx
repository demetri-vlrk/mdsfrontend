import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { Icon } from "./Icon";

type DialogHeaderProps = {
  title?: string;
  leftIcon?: ReactNode;
  onDismiss?: () => void;
  className?: string;
};

// From the MBS Figma design system (node 864:118109). Colors are literal
// hex — this panel is deliberately light (like TopNav), and neutral/300
// (#d4d4d4) isn't in this project's existing gray-* scale.
export function DialogHeader({ title, leftIcon, onDismiss, className }: DialogHeaderProps) {
  return (
    <div className={`flex min-h-[40px] w-full items-center bg-white ${className ?? ""}`}>
      <div className="flex flex-1 items-center gap-[12px] px-[12px]">
        {leftIcon && (
          <span className="flex h-[32px] w-[24px] shrink-0 items-center justify-center text-[#1f1f1f]">
            {leftIcon}
          </span>
        )}
        {title && (
          <p className="flex-1 font-stack-text text-[16px] leading-[1.5] font-light text-[#1f1f1f]">
            {title}
          </p>
        )}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close"
          className="flex size-[48px] shrink-0 items-center justify-center bg-[#d4d4d4] text-[#1f1f1f] hover:bg-[#cccccc]"
        >
          <Icon icon={<X />} size="sm" />
        </button>
      )}
    </div>
  );
}

export type DialogFooterAction = { label: string; onClick?: () => void };

type DialogFooterProps = {
  caption?: string;
  actions?: DialogFooterAction[];
  // Only meaningful with 2 actions and no caption — Figma documents these
  // as two distinct variants ("Right Buttons" vs "Full with Button"), not
  // one variant with a modifier, so this mirrors that split.
  actionsLayout?: "auto" | "full";
  className?: string;
};

const dialogActionButtonClass =
  "flex min-h-[48px] items-center justify-center bg-[#d4d4d4] px-[24px] font-stack-text text-[20px] text-[#1f1f1f] hover:bg-[#cccccc]";

// From the MBS Figma design system (node 864:118149, "MBS Dialog Footer"),
// covering all 4 documented variants: Caption only, With Caption + Button,
// Right Buttons (auto-width, right-aligned), and Full with Button (two
// buttons splitting the full width evenly).
export function DialogFooter({ caption, actions = [], actionsLayout = "auto", className }: DialogFooterProps) {
  if (caption) {
    const action = actions[0];
    return (
      <div className={`flex min-h-[40px] w-full items-center bg-white ${className ?? ""}`}>
        <div className="flex flex-1 items-center gap-[12px] px-[12px]">
          <p className="flex-1 font-stack-text text-[12.8px] leading-[1.7] font-light tracking-[0.384px] text-[#1f1f1f]">
            {caption}
          </p>
        </div>
        {action && (
          <button type="button" onClick={action.onClick} className={`shrink-0 ${dialogActionButtonClass}`}>
            {action.label}
          </button>
        )}
      </div>
    );
  }

  if (actions.length === 0) return null;

  if (actionsLayout === "full") {
    return (
      <div className={`flex min-h-[40px] w-full items-stretch bg-white ${className ?? ""}`}>
        {actions.map((action, i) => (
          <button key={i} type="button" onClick={action.onClick} className={`flex-1 ${dialogActionButtonClass}`}>
            {action.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex min-h-[40px] w-full items-center justify-end bg-white ${className ?? ""}`}>
      {actions.map((action, i) => (
        <button key={i} type="button" onClick={action.onClick} className={`shrink-0 ${dialogActionButtonClass}`}>
          {action.label}
        </button>
      ))}
    </div>
  );
}

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  leftIcon?: ReactNode;
  caption?: string;
  actions?: DialogFooterAction[];
  actionsLayout?: "auto" | "full";
  children?: ReactNode;
  className?: string;
};

// Figma's MBS Dialog (node 864:118221) is just the panel — Header, a
// Content slot, Footer — with no backdrop/overlay of its own. The
// open/close mechanics (fixed backdrop, Escape-to-close, click-outside)
// are adapted from this project's existing Modal.tsx convention rather
// than invented from scratch.
export function Dialog({
  open,
  onClose,
  title,
  leftIcon,
  caption,
  actions,
  actionsLayout,
  children,
  className,
}: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div aria-hidden onClick={onClose} className="absolute inset-0 bg-black/50" />
      <div
        className={`relative flex w-[527px] max-w-[90vw] flex-col items-start bg-white ${className ?? ""}`}
      >
        <DialogHeader title={title} leftIcon={leftIcon} onDismiss={onClose} />
        <div className="min-h-[110px] w-full p-[12px]">{children}</div>
        <DialogFooter caption={caption} actions={actions} actionsLayout={actionsLayout} />
      </div>
    </div>
  );
}
