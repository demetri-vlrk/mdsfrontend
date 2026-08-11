import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-background/80"
      />
      <div className="relative flex max-h-[85vh] w-[1313px] max-w-[90vw] flex-col items-start overflow-auto border border-border bg-accent">
        <div className="flex w-full shrink-0 items-center justify-center gap-2.5 border-b border-border px-6 py-[25px]">
          <p className="flex-1 text-xl leading-6 font-semibold text-foreground">
            {title}
          </p>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex size-4 shrink-0 items-center justify-center text-foreground hover:text-muted-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
