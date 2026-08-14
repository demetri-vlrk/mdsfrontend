import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import visualIdentityThumb from "../../assets/visual-identity-thumb.png";

const PRICE_BRACKETS = ["Comsumer", "Premium", "Luxury"] as const;

function PriceBracketOption({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[123px] flex-1 flex-col items-start justify-between px-3 py-3 text-left ${
        active
          ? "bg-brand-500/50"
          : "border border-[#494c51] hover:border-white/40"
      }`}
    >
      <span
        className={`size-5 shrink-0 border ${
          active
            ? "border-brand-300 bg-brand-500"
            : "border-white/25"
        }`}
      />
      <span className="text-[17px] text-muted-foreground">{label}</span>
    </button>
  );
}

function VisualIdentityTile({ onRemove }: { onRemove: () => void }) {
  return (
    <div className="relative border border-[#494c51] p-1.5">
      <img
        src={visualIdentityThumb}
        alt=""
        className="size-full object-cover"
      />
      <button
        type="button"
        aria-label="Remove image"
        onClick={onRemove}
        className="absolute -right-2 -top-2 flex items-center justify-center rounded-full bg-foreground p-1 text-background"
      >
        <X className="size-2.5" />
      </button>
    </div>
  );
}

export function AlmostThereForm() {
  const [priceBracket, setPriceBracket] = useState<(typeof PRICE_BRACKETS)[number]>(
    "Comsumer",
  );
  const [images, setImages] = useState([0, 1]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-stretch">
        <span className="flex items-center bg-brand-500/50 p-3 text-base font-light text-brand-400">
          02
        </span>
        <span className="flex items-center bg-white/15 p-3 text-sm text-foreground">
          Almost there... Just need a few more details...
        </span>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex items-center gap-11 bg-white/5 p-8">
          <div className="flex w-[449px] flex-col gap-11">
            <div className="flex w-full flex-col gap-4">
              <p className="text-[17px] font-medium text-muted-foreground">
                Price Bracket
              </p>
              <div className="flex h-[123px] w-full items-center gap-[15px]">
                {PRICE_BRACKETS.map((label) => (
                  <PriceBracketOption
                    key={label}
                    label={label}
                    active={priceBracket === label}
                    onClick={() => setPriceBracket(label)}
                  />
                ))}
              </div>
            </div>

            <div className="flex h-[203px] w-full flex-col gap-4">
              <p className="text-[17px] font-medium text-muted-foreground">
                Brand USP
              </p>
              <textarea
                placeholder="Lorem upsumm.."
                className="h-full w-full resize-y border border-brand-500 p-3 text-[17px] text-muted-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex h-full w-[416px] flex-col gap-4">
            <p className="text-[17px] font-medium text-muted-foreground">
              Visual Identity
            </p>
            <div className="grid flex-1 grid-cols-2 gap-3 border border-white/25 p-3">
              {images.map((id) => (
                <VisualIdentityTile
                  key={id}
                  onRemove={() =>
                    setImages((prev) => prev.filter((i) => i !== id))
                  }
                />
              ))}
              <button
                type="button"
                className={`col-span-2 flex items-center justify-center gap-2 border-[1.5px] border-white/25 px-5 py-2.5 text-foreground hover:border-white/40 ${
                  images.length === 0 ? "row-span-2" : ""
                }`}
                onClick={() => setImages((prev) => [...prev, Date.now()])}
              >
                <Plus className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full items-start">
          <Link
            to="/new-campaign/step-1"
            className="flex flex-1 items-center justify-center gap-6 bg-white/10 py-6 text-[17px] font-semibold text-muted-foreground hover:bg-white/15"
          >
            <ArrowLeft className="size-5" />
            Previous
          </Link>
          <Link
            to="/new-campaign/step-3"
            className="flex flex-1 items-center justify-center gap-6 bg-white/25 py-6 text-[17px] font-semibold text-foreground hover:bg-white/30"
          >
            Next
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
