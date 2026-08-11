import { Crown, Tag, Trash2 } from "lucide-react";

export function GalleryImageCard({
  image,
  label,
  isHero = false,
  className = "",
}: {
  image: string;
  label: string;
  isHero?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative flex w-full flex-col items-start justify-end overflow-hidden border border-border p-6 ${className}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black" />
      <div className="relative flex w-full items-center gap-1.5">
        <div className="flex flex-1 items-start gap-1.5">
          <button
            type="button"
            className="flex min-h-9 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/10 px-4 py-2 text-sm font-medium text-foreground shadow-xs"
          >
            {isHero && <Crown className="size-4" />}
            {label}
          </button>
          <button
            type="button"
            aria-label="Edit tags"
            className="flex min-h-9 items-center justify-center rounded-full border border-white/80 bg-white/10 px-3 py-2 text-foreground shadow-xs hover:bg-white/20"
          >
            <Tag className="size-4" />
          </button>
        </div>
        <button
          type="button"
          aria-label="Delete image"
          className="flex size-6 shrink-0 items-center justify-center text-foreground hover:text-destructive"
        >
          <Trash2 className="size-6" />
        </button>
      </div>
    </div>
  );
}
