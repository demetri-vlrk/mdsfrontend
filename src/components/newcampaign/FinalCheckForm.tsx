import { useState } from "react";
import { ArrowRight, Check, Info, Pencil, Plus } from "lucide-react";
import thumb1 from "../../assets/final-check-thumb-1.png";
import thumb2 from "../../assets/final-check-thumb-2.png";
import thumb3 from "../../assets/final-check-thumb-3.png";
import thumb4 from "../../assets/final-check-thumb-4.png";
import { StepBadge } from "../ui/StepBadge";
import { StepFooterButton } from "../ui/StepFooterButton";

const TILES = [thumb1, thumb2, thumb3, thumb1, thumb4];
const MAX_IMAGE_TILES = 9;

const SUMMARY_FIELDS = [
  {
    label: "Campaign Intention",
    value:
      "Eiusmod sunt consequat in laboris non veniam eu. Id nisi duis officia magna veniam aliqua sunt laborum aute elit officia.",
  },
  { label: "Product Category", value: "Category" },
  { label: "Competitors", value: "Competitor A, Competitor B" },
  { label: "Market Region", value: "India, Mizoram" },
  { label: "Price Bracket", value: "High" },
  { label: "Inspiration Brands", value: "Korg, Yamaha, Casino" },
  {
    label: "Brand USP",
    value:
      "Eiusmod sunt consequat in laboris non veniam eu. Id nisi duis officia magna veniam aliqua sunt laborum aute elit officia.",
  },
];

function ImageTile({
  image,
  isHero,
  onSetHero,
  onRemove,
}: {
  image: string;
  isHero: boolean;
  onSetHero: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="relative flex aspect-square flex-col justify-end gap-1 p-3">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black" />

      <div className="relative flex w-full gap-1 bg-white/15 p-1.5">
        <button
          type="button"
          onClick={onSetHero}
          className={`px-3 py-1.5 text-sm font-semibold ${isHero ? "bg-brand-500 text-white" : "text-fg-default"}`}
        >
          Hero
        </button>
        <span
          className={`flex-1 px-3 py-1.5 text-sm font-semibold ${!isHero ? "bg-brand-500 text-white" : "text-fg-default"}`}
        >
          Reference
        </span>
      </div>

      <button
        type="button"
        aria-label="Edit image"
        onClick={onRemove}
        className="absolute right-[10px] top-[10px] flex items-center justify-center p-[7px] text-white hover:text-white/70"
      >
        <Pencil className="size-2.5" />
      </button>
    </div>
  );
}

function SummaryField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex w-full items-center gap-1 text-xs text-fg-muted">
        {label}
      </div>
      <p className="w-full text-xs text-fg-default">{value}</p>
    </div>
  );
}

export function FinalCheckForm() {
  const [tiles, setTiles] = useState(TILES.map((image, i) => ({ id: i, image })));
  const [heroId, setHeroId] = useState(0);
  const [productName, setProductName] = useState("Product Name");
  const [isEditingName, setIsEditingName] = useState(false);

  const commitName = () => {
    setProductName((prev) => prev.trim() || "Product Name");
    setIsEditingName(false);
  };

  return (
    <div className="flex flex-col items-center gap-8 py-16">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-6">
          {isEditingName ? (
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              onBlur={commitName}
              onKeyDown={(e) => {
                if (e.key === "Enter") commitName();
              }}
              autoFocus
              style={{ width: `${Math.max(productName.length, 1) + 1}ch` }}
              className="font-stack-headline text-[64px] leading-none font-medium tracking-[-1.28px] text-fg-default outline-none"
            />
          ) : (
            <h1 className="font-stack-headline text-[64px] leading-none font-medium tracking-[-1.28px] text-fg-default">
              {productName}
            </h1>
          )}
          <button
            type="button"
            onClick={() =>
              isEditingName ? commitName() : setIsEditingName(true)
            }
            className="flex items-center gap-1.5 border border-white/25 p-3 text-sm font-semibold text-fg-default"
          >
            {isEditingName ? (
              <Check className="size-3.5" />
            ) : (
              <Pencil className="size-3.5" />
            )}
            {isEditingName ? "Save" : "Edit"}
          </button>
        </div>
        <div className="flex items-center font-stack-text text-xl">
          <span className="text-fg-muted">https://www.</span>
          <span className="text-fg-default">alphalpha.com</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5">
        <StepBadge step="03" label="Final Check" />

        <div className="flex items-start justify-center">
          <div className="flex flex-1 flex-col items-start gap-[42px] bg-white/5 p-6">
            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                <p className="font-stack-text text-2xl font-semibold tracking-[-0.48px] text-white">
                  Image Selection
                </p>
                <Info className="size-4 text-fg-muted" />
              </div>
              <p className="text-xs text-fg-muted">
                Pick a hero image and up to 6 references
              </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-5">
              {tiles.map((tile) => (
                <ImageTile
                  key={tile.id}
                  image={tile.image}
                  isHero={heroId === tile.id}
                  onSetHero={() => setHeroId(tile.id)}
                  onRemove={() =>
                    setTiles((prev) => prev.filter((t) => t.id !== tile.id))
                  }
                />
              ))}
              {tiles.length < MAX_IMAGE_TILES && (
                <button
                  type="button"
                  onClick={() =>
                    setTiles((prev) => [
                      ...prev,
                      { id: Date.now(), image: thumb1 },
                    ])
                  }
                  className="flex aspect-square flex-col items-center justify-center gap-2 border-[1.5px] border-white/25 text-fg-default hover:border-white/40"
                >
                  <Plus className="size-[20px]" />
                </button>
              )}
            </div>
          </div>

          <div className="flex w-[438px] shrink-0 flex-col items-start self-stretch">
            <div className="flex w-full flex-1 flex-col gap-[20px] bg-white/10 p-6">
              {SUMMARY_FIELDS.map((field) => (
                <SummaryField key={field.label} {...field} />
              ))}
            </div>
            <StepFooterButton
              to="/new-campaign/analyzing"
              label="Start Research"
              icon={ArrowRight}
              tone="brand"
              width="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
