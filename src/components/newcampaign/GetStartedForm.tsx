import { useState } from "react";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";

function Tag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex shrink-0 items-center bg-[#5c5c5c]/38">
      <span className="px-3 py-1.5 text-sm font-semibold text-fg-default">
        {label}
      </span>
      <button
        type="button"
        aria-label={`Remove ${label}`}
        onClick={onRemove}
        className="flex h-full items-center bg-white/11 px-2 hover:bg-white/20"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}

function TagField({
  label,
  tags,
  onRemove,
}: {
  label: string;
  tags: string[];
  onRemove: (tag: string) => void;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <p className="text-[17px] font-medium text-fg-muted">{label}</p>
      <div className="flex h-12 w-full items-center gap-2.5 border border-white/25 px-3">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} onRemove={() => onRemove(tag)} />
        ))}
      </div>
    </div>
  );
}

function SelectField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <p className="text-[17px] font-medium text-fg-muted">{label}</p>
      <button
        type="button"
        className="flex h-12 w-full items-center border border-white/25 text-left"
      >
        <span className="flex-1 px-3.5 text-[17px] text-fg-muted">
          {placeholder}
        </span>
        <span className="flex aspect-square h-full items-center justify-center border border-[#77797d] bg-white/10">
          <ChevronDown className="size-5 text-fg-default" />
        </span>
      </button>
    </div>
  );
}

export function GetStartedForm() {
  const [competitors, setCompetitors] = useState(["Competitor A", "Competitor B"]);
  const [inspirations, setInspirations] = useState(["Inspiration A", "Inspiration B"]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-stretch">
        <span className="flex items-center bg-brand-500/50 p-3 text-base font-light text-brand-400">
          01
        </span>
        <span className="flex items-center bg-white/15 p-3 text-sm text-fg-default">
          Let's get started
        </span>
      </div>

      <div className="flex flex-col items-start">
        <div className="relative z-10 flex items-center gap-11 bg-white/5 p-8">
          <div className="flex w-[449px] flex-col gap-11">
            <TagField
              label="Key Competitors"
              tags={competitors}
              onRemove={(tag) =>
                setCompetitors((prev) => prev.filter((t) => t !== tag))
              }
            />
            <TagField
              label="Brand Inspirations"
              tags={inspirations}
              onRemove={(tag) =>
                setInspirations((prev) => prev.filter((t) => t !== tag))
              }
            />
            <SelectField label="Market Region" placeholder="Select Region" />
          </div>

          <div className="flex w-[449px] flex-col gap-6">
            <div className="flex w-full flex-col gap-4">
              <p className="text-[17px] font-medium text-fg-muted">
                Campaign Intention
              </p>
              <textarea
                placeholder="Lorem upsumm.."
                className="h-[120px] w-full resize-y border border-white/25 p-3 text-[17px] text-fg-muted outline-none placeholder:text-fg-muted"
              />
            </div>
            <SelectField
              label="Product Category"
              placeholder="Select Category"
            />
            <SelectField label="Market Region" placeholder="Select Region" />
          </div>
        </div>

        <Link
          to="/new-campaign/step-2"
          className="relative z-10 flex w-full items-center justify-center gap-6 bg-white/10 py-6 text-[17px] font-semibold text-fg-default hover:bg-white/15"
        >
          Next
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </div>
  );
}
