import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Card, type CardPadding } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const VARIANTS: { key: CardPadding; label: string }[] = [
  { key: "wide", label: "Padding = Wide" },
  { key: "narrow", label: "Padding = Narrow" },
  { key: "none", label: "Padding = No Padding" },
];

const INSPECTOR_LINES: Record<CardPadding, { layoutLines: [string, string][]; styleLines: [string, string][] }> = {
  wide: {
    layoutLines: [
      ["display", "flex"],
      ["flex-direction", "column"],
      ["padding", "24px"],
    ],
    styleLines: [["border", "1px solid var(--color-border-subtle)"]],
  },
  narrow: {
    layoutLines: [
      ["display", "flex"],
      ["flex-direction", "column"],
      ["padding", "8px"],
    ],
    styleLines: [["border", "1px solid var(--color-border-subtle)"]],
  },
  none: {
    layoutLines: [
      ["display", "flex"],
      ["flex-direction", "column"],
      ["padding", "0"],
    ],
    styleLines: [["border", "1px solid var(--color-border-subtle)"]],
  },
};

export function ComponentsCard() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<CardPadding | null>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Card</h1>
        </div>

        <p className="max-w-[600px] text-sm text-fg-muted">
          Same component as{" "}
          <button type="button" onClick={() => navigate("/components/container")} className="underline hover:text-fg-default">
            Container
          </button>{" "}
          — Figma documents "MBS Card Slot" as an identical spec to "MBS Outline Container," so this page just
          re-exports it under the name this part of the design system uses.
        </p>

        <div className="flex flex-col gap-10">
          {VARIANTS.map(({ key, label }) => (
            <div key={key} className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold text-fg-default">{label}</h2>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelection(key)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection(key)}
                className={`max-w-[400px] cursor-pointer outline-offset-4 ${selection === key ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
              >
                <Card padding={key}>
                  <div className="flex h-[120px] w-full items-center justify-center bg-white/5 text-sm text-fg-muted">
                    Content
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Card · ${selection}`}
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
