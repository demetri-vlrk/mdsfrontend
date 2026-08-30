import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Pagination } from "../components/ui/Pagination";

export function ComponentsPagination() {
  const navigate = useNavigate();
  const [page10, setPage10] = useState(1);
  const [pageFew, setPageFew] = useState(2);
  const [pageMany, setPageMany] = useState(24);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Pagination</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">10 pages (matches Figma's example)</h2>
            <div className="bg-white p-6">
              <Pagination page={page10} pageCount={10} onPageChange={setPage10} />
            </div>
            <p className="text-xs text-fg-muted">Current page: {page10}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Few pages (no ellipsis needed)</h2>
            <div className="bg-white p-6">
              <Pagination page={pageFew} pageCount={5} onPageChange={setPageFew} />
            </div>
            <p className="text-xs text-fg-muted">Current page: {pageFew}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Many pages (ellipsis on both sides)</h2>
            <div className="bg-white p-6">
              <Pagination page={pageMany} pageCount={50} onPageChange={setPageMany} />
            </div>
            <p className="text-xs text-fg-muted">Current page: {pageMany}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
