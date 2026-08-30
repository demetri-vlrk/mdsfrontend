import type { ReactNode } from "react";

export function FieldLabel({ children }: { children: ReactNode }) {
  return <p className="text-[17px] font-medium text-fg-muted">{children}</p>;
}
