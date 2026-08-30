import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { StepBadge } from "../ui/StepBadge";
import { TagInput } from "../ui/TagInput";
import { Select } from "../ui/Select";
import { TextAreaField } from "../ui/TextAreaField";
import { StepFooterButton } from "../ui/StepFooterButton";

export function GetStartedForm() {
  const [competitors, setCompetitors] = useState(["Competitor A", "Competitor B"]);
  const [inspirations, setInspirations] = useState(["Inspiration A", "Inspiration B"]);

  return (
    <div className="flex flex-col items-center gap-6">
      <StepBadge step="01" label="Let's get started" />

      <div className="flex flex-col items-start">
        <div className="relative z-10 flex items-stretch gap-11 bg-white/5 p-8">
          <div className="flex w-[449px] flex-col gap-11">
            <TagInput
              label="Key Competitors"
              tags={competitors}
              onAdd={(tag) => setCompetitors((prev) => [...prev, tag])}
              onRemove={(tag) =>
                setCompetitors((prev) => prev.filter((t) => t !== tag))
              }
            />
            <TagInput
              label="Brand Inspirations"
              tags={inspirations}
              onAdd={(tag) => setInspirations((prev) => [...prev, tag])}
              onRemove={(tag) =>
                setInspirations((prev) => prev.filter((t) => t !== tag))
              }
            />
            <Select label="Market Region" placeholder="Select Region" />
          </div>

          <div className="flex w-[449px] flex-col items-start gap-2.5">
            <TextAreaField label="Campaign Intention" placeholder="Lorem upsumm.." />
            <Select label="Product Category" placeholder="Select Category" />
            <Select label="Market Region" placeholder="Select Region" />
          </div>
        </div>

        <StepFooterButton
          to="/new-campaign/step-2"
          label="Next"
          icon={ArrowRight}
          tone="ghost"
          width="full"
        />
      </div>
    </div>
  );
}
