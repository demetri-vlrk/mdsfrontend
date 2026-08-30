import type { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";

type TableProps = {
  children: ReactNode;
  className?: string;
};

export function Table({ children, className }: TableProps) {
  return <table className={`w-full border-collapse ${className ?? ""}`}>{children}</table>;
}

// From the MBS Figma design system (node 864:119920, "MBS Table Header").
// White/self-contained regardless of app theme, matching the rest of this
// Stack-Sans/brand-500 component family (Button, Input, Dialog, Alert,
// Badge) rather than the dark-adapted Geist family (Sidebar, Container,
// TopNav).
export function TableHeaderCell({ children, className, ...props }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`h-[40px] bg-white px-[12px] text-left font-stack-text text-[16px] font-bold text-[#1f1f1f] ${className ?? ""}`}
      {...props}
    >
      {children}
    </th>
  );
}

// NOT documented in Figma — only the header cell was specified there. This
// is a plain row/cell style built from this component family's existing
// visual language (white surface, #1f1f1f text, spacing/3 = 12px, the same
// border/subtle #e5e5e5 used elsewhere) so the header is actually usable
// as a real table. Replace with real Figma-sourced styling if that shows
// up later.
export function TableCell({ children, className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={`border-t border-[#e5e5e5] bg-white px-[12px] py-[12px] text-left font-stack-text text-[14.4px] font-light text-[#1f1f1f] ${className ?? ""}`}
      {...props}
    >
      {children}
    </td>
  );
}
