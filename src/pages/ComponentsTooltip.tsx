import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { Tooltip, TooltipBubble, type TooltipSide } from "../components/ui/Tooltip";

const SIDES: TooltipSide[] = ["top", "bottom", "left", "right"];

const INSPECTOR_LINES: Record<TooltipSide, { layoutLines: [string, string][]; styleLines: [string, string][] }> = {
  top: {
    layoutLines: [
      ["display", "flex"],
      ["width", "211px"],
      ["min-height", "40px"],
      ["align-items", "center"],
      ["justify-content", "center"],
    ],
    styleLines: [
      ["background", "white"],
      ["arrow", "border-bottom: 14px solid white"],
    ],
  },
  bottom: {
    layoutLines: [
      ["display", "flex"],
      ["width", "211px"],
      ["min-height", "40px"],
      ["align-items", "center"],
      ["justify-content", "center"],
    ],
    styleLines: [
      ["background", "white"],
      ["arrow", "border-top: 14px solid white"],
    ],
  },
  left: {
    layoutLines: [
      ["display", "flex"],
      ["width", "211px"],
      ["min-height", "40px"],
      ["align-items", "center"],
      ["justify-content", "center"],
    ],
    styleLines: [
      ["background", "white"],
      ["arrow", "border-right: 14px solid white"],
    ],
  },
  right: {
    layoutLines: [
      ["display", "flex"],
      ["width", "211px"],
      ["min-height", "40px"],
      ["align-items", "center"],
      ["justify-content", "center"],
    ],
    styleLines: [
      ["background", "white"],
      ["arrow", "border-left: 14px solid white"],
    ],
  },
};

export function ComponentsTooltip() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<TooltipSide | null>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Tooltip</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-fg-default">Sides</h2>
          <div className="flex flex-wrap gap-16 bg-bg-subtle p-16">
            {SIDES.map((side) => (
              <div key={side} className="flex flex-col items-center gap-3">
                <span className="text-[10px] font-medium tracking-wide text-fg-muted uppercase">{side}</span>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelection(side)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection(side)}
                  className={`cursor-pointer outline-offset-8 ${selection === side ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
                >
                  <TooltipBubble side={side}>Tooltip Text</TooltipBubble>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-fg-default">Live (hover a button)</h2>
          <div className="flex flex-wrap items-center gap-24 bg-bg-subtle p-16">
            {SIDES.map((side) => (
              <Tooltip key={side} content="Tooltip Text" side={side}>
                <Button variant="secondary" size="default" className="capitalize">
                  {side}
                </Button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Tooltip · ${selection}`}
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
