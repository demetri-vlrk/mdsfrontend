import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./Button";

// Standard "sibling count" page-range algorithm — always shows first/last
// page plus `page` ± siblingCount, collapsing the rest into ellipses.
function getPageRange(page: number, pageCount: number, siblingCount: number): (number | "ellipsis")[] {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= pageCount) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(page - siblingCount, 1);
  const rightSiblingIndex = Math.min(page + siblingCount, pageCount);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < pageCount - 2;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    return [...Array.from({ length: leftItemCount }, (_, i) => i + 1), "ellipsis", pageCount];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    return [1, "ellipsis", ...Array.from({ length: rightItemCount }, (_, i) => pageCount - rightItemCount + i + 1)];
  }

  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
    return [1, "ellipsis", ...middleRange, "ellipsis", pageCount];
  }

  return Array.from({ length: pageCount }, (_, i) => i + 1);
}

type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  className?: string;
};

// From the MBS Figma design system (nodes 864:119971 "MBS Pagination"
// [First/Previous/Next/Last arrows], 864:120033 "MBS Pagination Button"
// [page numbers], and the composed example at 864:121093). Every piece
// here is a real Button variant already built for this project — active
// page = primary, inactive page/nav arrows = outlined, ellipsis = ghost —
// so this is pure composition, no new button styling.
export function Pagination({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  className,
}: PaginationProps) {
  const range = getPageRange(page, pageCount, siblingCount);

  return (
    <div className={`flex items-center gap-[10px] ${className ?? ""}`}>
      {showFirstLast && (
        <Button
          variant="outlined"
          size="default"
          disabled={page === 1}
          onClick={() => onPageChange(1)}
          aria-label="First page"
          leftIcon={<ChevronsLeft className="size-full" />}
        />
      )}
      <Button
        variant="outlined"
        size="default"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
        leftIcon={<ChevronLeft className="size-full" />}
      />

      {range.map((item, i) =>
        item === "ellipsis" ? (
          <Button
            key={`ellipsis-${i}`}
            variant="ghost"
            size="default"
            aria-hidden
            className="pointer-events-none"
          >
            …
          </Button>
        ) : (
          <Button
            key={item}
            variant={item === page ? "primary" : "outlined"}
            size="default"
            onClick={() => onPageChange(item)}
            aria-current={item === page ? "page" : undefined}
          >
            {item}
          </Button>
        ),
      )}

      <Button
        variant="outlined"
        size="default"
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
        rightIcon={<ChevronRight className="size-full" />}
      />
      {showFirstLast && (
        <Button
          variant="outlined"
          size="default"
          disabled={page === pageCount}
          onClick={() => onPageChange(pageCount)}
          aria-label="Last page"
          rightIcon={<ChevronsRight className="size-full" />}
        />
      )}
    </div>
  );
}
