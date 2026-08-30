import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "./Button";

export type CarouselVariant = "single" | "two";

type CarouselProps = {
  items: ReactNode[];
  variant?: CarouselVariant;
  className?: string;
};

// From the MBS Figma design system (node 864:119764) — "Single" (one slide
// per page) and "Two" (two slides per page, indicators in a strip below
// instead of overlaid). Figma's 1080/592px canvas sizes are just its demo
// artboard, not real breakpoints, so slides use aspect-square instead of a
// fixed px height to stay responsive at any width.
export function Carousel({ items, variant = "single", className }: CarouselProps) {
  const pageSize = variant === "two" ? 2 : 1;
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const [page, setPage] = useState(0);

  const go = (delta: number) => setPage((p) => (p + delta + pageCount) % pageCount);
  const visible = items.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className={`relative w-full ${variant === "two" ? "pb-[60px]" : ""} ${className ?? ""}`}>
      <div className={`flex items-stretch overflow-hidden ${variant === "two" ? "gap-[12px]" : ""}`}>
        {visible.map((item, i) => (
          <div key={i} className="aspect-square min-w-0 flex-1 overflow-hidden bg-[#d9d9d9]">
            {item}
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div
          className={`absolute left-[39px] right-[39px] flex items-center justify-between ${variant === "two" ? "top-[calc(50%-30px)]" : "top-1/2 -translate-y-1/2"}`}
        >
          <Button variant="primary" size="lg" onClick={() => go(-1)} aria-label="Previous slide" leftIcon={<ArrowLeft className="size-full" />} />
          <Button variant="primary" size="lg" onClick={() => go(1)} aria-label="Next slide" rightIcon={<ArrowRight className="size-full" />} />
        </div>
      )}

      {pageCount > 1 && (
        <div
          className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-[10px] ${variant === "two" ? "bottom-[16px]" : "bottom-[50px]"}`}
        >
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setPage(i)}
              className={`size-[24px] border border-brand-500 ${i === page ? "bg-brand-500" : "bg-transparent"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
