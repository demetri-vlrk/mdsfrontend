import { Info } from "lucide-react";
import type { ReactNode } from "react";

export function FormCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col gap-5 border border-border-subtle px-5 py-16">
      <div className="flex flex-col gap-1">
        <div className="flex w-full items-center justify-center gap-2.5">
          <h3 className="flex-1 text-2xl leading-[28.8px] font-semibold tracking-[-1px] text-white">
            {title}
          </h3>
          <Info className="size-4 shrink-0 text-fg-muted" />
        </div>
        <p className="text-xs leading-4 text-fg-muted">
          {description}
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-2">{children}</div>
    </div>
  );
}
