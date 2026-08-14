import { useState } from "react";
import { ArrowRight, Info, Pencil, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import thumb1 from "../../assets/final-check-thumb-1.png";
import thumb2 from "../../assets/final-check-thumb-2.png";
import thumb3 from "../../assets/final-check-thumb-3.png";
import thumb4 from "../../assets/final-check-thumb-4.png";

const TILES = [thumb1, thumb2, thumb3, thumb1, thumb4];

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
          className={`px-3 py-1.5 text-sm font-semibold ${isHero ? "bg-brand-500 text-white" : "text-foreground"}`}
        >
          Hero
        </button>
        <span
          className={`flex-1 px-3 py-1.5 text-sm font-semibold ${!isHero ? "bg-brand-500 text-white" : "text-foreground"}`}
        >
          Reference
        </span>
      </div>

      <button
        type="button"
        aria-label="Remove image"
        onClick={onRemove}
        className="absolute right-2.5 top-2.5 flex items-center justify-center rounded-full bg-white/20 p-1.5 hover:bg-white/30"
      >
        <X className="size-2.5" />
      </button>
    </div>
  );
}

function SummaryField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex w-full items-center gap-1 text-xs text-muted-foreground">
        {label}
      </div>
      <p className="w-full text-xs text-foreground">{value}</p>
    </div>
  );
}

export function FinalCheckForm() {
  const [tiles, setTiles] = useState(TILES.map((image, i) => ({ id: i, image })));
  const [heroId, setHeroId] = useState(0);

  return (
    <div className="flex flex-col items-center gap-8 py-16">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-6">
          <h1 className="text-[64px] leading-none font-medium tracking-[-1.28px] text-foreground">
            Product Name
          </h1>
          <button
            type="button"
            className="flex items-center gap-1.5 border border-white/25 p-3 text-sm font-semibold text-foreground"
          >
            <Pencil className="size-3.5" />
            Edit
          </button>
        </div>
        <div className="flex items-center text-xl">
          <span className="text-muted-foreground">https://www.</span>
          <span className="text-foreground">alphalpha.com</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5">
        <div className="flex items-stretch">
          <span className="flex items-center bg-brand-500/50 p-3 text-base font-light text-brand-400">
            03
          </span>
          <span className="flex items-center bg-white/15 p-3 text-sm text-foreground">
            Final Check
          </span>
        </div>

        <div className="flex items-start justify-center">
          <div className="flex flex-1 flex-col items-center gap-8 bg-white/5 p-8">
            <div className="flex w-full flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold tracking-[-0.48px] text-white">
                  Image Selection
                </p>
                <Info className="size-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                Pick a hero image and up to 6 references
              </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-6">
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
              <button
                type="button"
                onClick={() =>
                  setTiles((prev) => [
                    ...prev,
                    { id: Date.now(), image: thumb1 },
                  ])
                }
                className="flex aspect-square flex-col items-center justify-center gap-2 border-[1.5px] border-white/25 text-foreground hover:border-white/40"
              >
                <Plus className="size-5" />
              </button>
            </div>
          </div>

          <div className="flex w-[438px] shrink-0 flex-col items-start self-stretch">
            <div className="flex w-full flex-1 flex-col gap-5 bg-white/10 p-8">
              {SUMMARY_FIELDS.map((field) => (
                <SummaryField key={field.label} {...field} />
              ))}
            </div>
            <Link
              to="/new-campaign/analyzing"
              className="flex w-full items-center justify-center gap-6 bg-brand-500/50 py-6 text-[17px] font-semibold text-foreground hover:bg-brand-500/60"
            >
              Start Research
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
