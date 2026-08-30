import { useState } from "react";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import visualIdentityThumb from "../../assets/visual-identity-thumb.png";
import { StepBadge } from "../ui/StepBadge";
import { FieldLabel } from "../ui/FieldLabel";
import { TextAreaField } from "../ui/TextAreaField";
import { StepFooterButton } from "../ui/StepFooterButton";

const PRICE_BRACKETS = ["Comsumer", "Premium", "Luxury"] as const;
const MAX_VISUAL_IDENTITY_IMAGES = 6;

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
      <span className="text-[17px] text-fg-muted">{label}</span>
    </button>
  );
}

function VisualIdentityTile({ onRemove }: { onRemove: () => void }) {
  return (
    <div className="relative aspect-square border border-[#494c51] p-1.5">
      <img
        src={visualIdentityThumb}
        alt=""
        className="size-full object-cover"
      />
      <button
        type="button"
        aria-label="Remove image"
        onClick={onRemove}
        className="absolute -right-2 -top-2 flex items-center justify-center rounded-full bg-fg-default p-1 text-bg-canvas"
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
      <StepBadge step="02" label="Almost there... Just need a few more details..." />

      <div className="flex flex-col items-start">
        <div className="flex items-stretch gap-11 bg-white/5 p-8">
          <div className="flex w-[449px] flex-col gap-11">
            <div className="flex w-full flex-col gap-4">
              <FieldLabel>Price Bracket</FieldLabel>
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

            <TextAreaField
              label="Brand USP"
              placeholder="Lorem upsumm.."
              variant="accent"
            />
          </div>

          <div className="flex w-[416px] flex-col gap-4">
            <FieldLabel>Visual Identity</FieldLabel>
            <div className="grid flex-1 grid-cols-2 gap-3 border border-white/25 p-3">
              {images.map((id) => (
                <VisualIdentityTile
                  key={id}
                  onRemove={() =>
                    setImages((prev) => prev.filter((i) => i !== id))
                  }
                />
              ))}
              {images.length < MAX_VISUAL_IDENTITY_IMAGES && (
                <button
                  type="button"
                  className="flex aspect-square flex-col items-center justify-center gap-2 border-[1.5px] border-white/25 px-[20px] py-2.5 text-fg-default hover:border-white/40"
                  onClick={() => setImages((prev) => [...prev, Date.now()])}
                >
                  <Plus className="size-[20px]" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex w-full items-start">
          <StepFooterButton
            to="/new-campaign/step-1"
            label="Previous"
            icon={ArrowLeft}
            iconPosition="left"
            tone="ghost-muted"
            width="half"
          />
          <StepFooterButton
            to="/new-campaign/step-3"
            label="Next"
            icon={ArrowRight}
            tone="solid"
            width="half"
          />
        </div>
      </div>
    </div>
  );
}
