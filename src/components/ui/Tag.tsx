import { X } from "lucide-react";

export function Tag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex shrink-0 items-stretch bg-[#5c5c5c]/38">
      <span className="px-3 py-1.5 text-sm font-semibold text-fg-default">
        {label}
      </span>
      <button
        type="button"
        aria-label={`Remove ${label}`}
        onClick={onRemove}
        className="flex w-6 items-center justify-center bg-white/11 hover:bg-white/20"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
