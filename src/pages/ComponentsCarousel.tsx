import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { Carousel } from "../components/ui/Carousel";

// Figma's actual placeholder is a flat grey box (#d9d9d9) — Carousel.tsx's
// slide wrapper already defaults to that. The number label here is just
// for telling slides apart while testing navigation, not a Figma detail.
function slides(count: number) {
  return Array.from({ length: count }, (_, i) => (
    <div key={i} className="flex size-full items-center justify-center">
      <span className="font-stack-text text-2xl font-semibold text-[#8a8a8a]">Slide {i + 1}</span>
    </div>
  ));
}

type Selection = "single" | "two" | null;

const INSPECTOR_LINES: Record<
  Exclude<Selection, null>,
  { layoutLines: [string, string][]; styleLines: [string, string][] }
> = {
  single: {
    layoutLines: [
      ["display", "flex"],
      ["aspect-ratio", "1 / 1"],
      ["align-items", "stretch"],
    ],
    styleLines: [["background", "#d9d9d9"]],
  },
  two: {
    layoutLines: [
      ["display", "flex"],
      ["gap", "12px"],
      ["padding-bottom", "60px"],
    ],
    styleLines: [["background", "#d9d9d9"]],
  },
};

export function ComponentsCarousel() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Carousel</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Single</h2>
            <div className="bg-white p-6">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelection("single")}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection("single")}
                className={`mx-auto max-w-[480px] cursor-pointer outline-offset-4 ${selection === "single" ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
              >
                <Carousel variant="single" items={slides(4)} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Two</h2>
            <div className="bg-white p-6">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelection("two")}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection("two")}
                className={`mx-auto max-w-[720px] cursor-pointer outline-offset-4 ${selection === "two" ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
              >
                <Carousel variant="two" items={slides(5)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Carousel · ${selection}`}
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
