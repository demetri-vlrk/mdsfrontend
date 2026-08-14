import { ChevronUp, Box, Palette, Link2, List, Plus } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { CardHeading } from "./CardHeading";
import { MediaCard } from "./MediaCard";
import { ColorSwatches } from "./ColorSwatches";
import heroImage from "../../assets/campaign-hero.png";
import lifestyleImage from "../../assets/campaign-lifestyle.png";
import ingredientsImage from "../../assets/campaign-ingredients.png";

export function ProductSetupSection() {
  return (
    <div className="flex w-full flex-col items-start gap-6 border border-border-subtle px-8 py-10">
      <SectionHeader title="Product Setup">
        <button
          type="button"
          aria-label="Collapse section"
          className="flex min-h-9 items-center justify-center rounded-lg px-4 py-2 text-fg-muted hover:text-fg-default"
        >
          <ChevronUp className="size-4" />
        </button>
      </SectionHeader>

      <div className="flex w-full items-stretch">
        <MediaCard image={heroImage} title="Hero Images" badge="5 Images" className="h-[284px] flex-1" />

        <div className="flex flex-1 flex-col items-stretch gap-2">
          <MediaCard image={lifestyleImage} title="Lifestyle" badge="5 Images" className="flex-1" />
          <MediaCard image={ingredientsImage} title="Ingredients" badge="5 Images" className="flex-1" />
        </div>

        <div className="flex flex-1 flex-col items-stretch">
          <div className="flex flex-col items-start gap-6 border border-border-subtle p-6">
            <CardHeading icon={Box} title="Product details" />
            <div className="flex w-full flex-col gap-2.5 text-sm text-fg-muted">
              <div className="flex w-full items-center justify-between">
                <p>Length</p>
                <p>XXXmm x XXmm</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p>Weight</p>
                <p>XXX kg</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p>Volume</p>
                <p>XXX</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 border border-border-subtle p-6">
            <CardHeading icon={Palette} title="Color Variations" />
            <ColorSwatches colors={["#6f3535", "#324c19", "#ffe045", "#d9d9d9"]} />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-stretch">
          <div className="flex flex-col items-start gap-6 border border-border-subtle p-6">
            <CardHeading icon={Link2} title="Product url" />
            <div className="flex min-h-9 w-full items-center gap-1 rounded-lg bg-bg-subtle px-3 py-2 shadow-xs">
              <span className="text-sm text-fg-muted">https://www.</span>
              <span className="flex-1 truncate text-sm text-fg-default">
                teenage.engineering/
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start border border-border-subtle">
            <div className="w-full p-6">
              <CardHeading icon={List} title="Categories">
                <Plus className="size-6 shrink-0 text-fg-default" />
              </CardHeading>
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full items-center border-t border-border-subtle px-6 py-5 text-sm text-fg-muted">
                Category 1
              </div>
              <div className="flex w-full items-center border-t border-border-subtle px-6 py-5 text-sm text-fg-muted">
                Category 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
