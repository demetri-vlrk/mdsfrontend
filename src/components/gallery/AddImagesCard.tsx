import { Plus } from "lucide-react";

export function AddImagesCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex w-full items-center justify-center border border-border bg-secondary p-6 ${className}`}
    >
      <button
        type="button"
        className="flex min-h-9 items-center justify-center gap-2 rounded-lg border border-border bg-white/10 px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-white/20"
      >
        <Plus className="size-4" />
        Add images
      </button>
    </div>
  );
}
