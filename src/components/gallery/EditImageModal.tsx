import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Download,
  ZoomIn,
  ZoomOut,
  ArrowRight,
  X,
} from "lucide-react";
import { Modal } from "../Modal";

const INITIAL_TAGS = [
  "Single product, plain background",
  "Frontal shot",
  "white backdrop",
  "studio lighting",
  "one item",
];

export function EditImageModal({
  image,
  label,
  onClose,
}: {
  image: string;
  label: string;
  onClose: () => void;
}) {
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    const trimmed = newTag.trim();
    if (trimmed) {
      setTags((t) => [...t, trimmed]);
      setNewTag("");
    }
  };

  return (
    <Modal title="Edit Image" onClose={onClose}>
      <div className="flex w-full items-stretch">
        <button
          type="button"
          aria-label="Previous image"
          className="flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full p-2.5 text-foreground hover:bg-white/5"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex flex-1 flex-col items-start p-4">
          <div className="relative flex h-[600px] w-full flex-col items-start justify-end overflow-hidden border border-border p-8">
            <img
              src={image}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black/70" />
            <div className="relative flex w-full items-end justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-stretch">
                  <span className="flex items-center justify-center border-2 border-border px-8 py-4 text-sm font-medium text-foreground">
                    Download
                  </span>
                  <button
                    type="button"
                    aria-label="Download"
                    className="flex items-center justify-center border-2 border-l-0 border-border px-4 py-4 text-foreground hover:bg-white/5"
                  >
                    <Download className="size-4" />
                  </button>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-sm font-medium text-foreground shadow-xs"
                >
                  {label}
                  <ChevronsUpDown className="size-4" />
                </button>
              </div>
              <div className="flex items-stretch">
                <span className="flex items-center justify-center border-2 border-border px-8 py-4 text-sm font-medium text-foreground">
                  100%
                </span>
                <button
                  type="button"
                  aria-label="Zoom in"
                  className="flex items-center justify-center border-2 border-l-0 border-border px-4 py-4 text-foreground hover:bg-white/5"
                >
                  <ZoomIn className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Zoom out"
                  className="flex items-center justify-center border-2 border-l-0 border-border px-4 py-4 text-foreground hover:bg-white/5"
                >
                  <ZoomOut className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Next image"
          className="flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full p-2.5 text-foreground hover:bg-white/5"
        >
          <ChevronRight className="size-4" />
        </button>

        <div className="flex w-[485px] shrink-0 flex-col items-start">
          <div className="flex w-full flex-col items-start gap-8 p-6">
            <div className="flex w-full flex-wrap items-start gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex min-h-8 items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-foreground shadow-xs"
                >
                  {tag}
                  <button
                    type="button"
                    aria-label={`Remove ${tag}`}
                    onClick={() => setTags((t) => t.filter((x) => x !== tag))}
                    className="flex size-4 items-center justify-center hover:text-muted-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex w-full flex-col items-start gap-1">
              <p className="text-sm font-medium text-foreground">
                Add more tags
              </p>
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTag()}
                placeholder="Type and press enter"
                className="w-full rounded-lg bg-input px-4 py-2.5 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-2.5 border-t border-border p-6">
            <button
              type="button"
              className="flex min-h-9 w-full items-center justify-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Edit in Iris
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="flex min-h-9 w-full items-center justify-center gap-2 border border-border bg-white/10 px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-white/20"
            >
              Upscale Image
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="flex min-h-9 w-full items-center justify-center gap-2 border border-border bg-white/10 px-4 py-2 text-sm font-medium text-foreground shadow-xs hover:bg-white/20"
            >
              Create Video
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="flex min-h-9 w-full items-center justify-center gap-2 bg-destructive px-4 py-2 text-sm font-medium text-white hover:bg-destructive/90"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
