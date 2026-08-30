import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Alert, type AlertVariant } from "../components/ui/Alert";
import { Button } from "../components/ui/Button";

const VARIANTS: AlertVariant[] = ["neutral", "primary", "danger"];

const INSPECTOR_LINES: Record<AlertVariant, { layoutLines: [string, string][]; styleLines: [string, string][] }> = {
  neutral: {
    layoutLines: [
      ["display", "flex"],
      ["align-items", "stretch"],
      ["padding", "12px"],
      ["gap", "12px"],
    ],
    styleLines: [["background", "white"]],
  },
  primary: {
    layoutLines: [
      ["display", "flex"],
      ["align-items", "stretch"],
      ["padding", "12px"],
      ["gap", "12px"],
    ],
    styleLines: [["background", "var(--color-brand-500, #8b5cf6)"]],
  },
  danger: {
    layoutLines: [
      ["display", "flex"],
      ["align-items", "stretch"],
      ["padding", "12px"],
      ["gap", "12px"],
    ],
    styleLines: [["background", "#c32929"]],
  },
};

export function ComponentsAlert() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<AlertVariant | null>(null);
  const [dismissed, setDismissed] = useState<Record<AlertVariant, boolean>>({
    neutral: false,
    primary: false,
    danger: false,
  });

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Alert</h1>
        </div>

        <div className="flex flex-col gap-3">
          <div className="overflow-x-auto bg-white p-6">
            <div className="flex flex-col gap-4">
              {VARIANTS.map((variant) => (
                <div key={variant} className="flex flex-col items-start gap-1">
                  <span className="text-[10px] font-medium tracking-wide text-black/40 uppercase">{variant}</span>
                  {dismissed[variant] ? (
                    <Button variant="ghost" size="xs" onClick={() => setDismissed((d) => ({ ...d, [variant]: false }))}>
                      Show again
                    </Button>
                  ) : (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelection(variant)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection(variant)}
                      className={`w-full max-w-[527px] cursor-pointer outline-offset-4 ${selection === variant ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
                    >
                      <Alert
                        variant={variant}
                        icon={<ArrowLeft className="size-full" />}
                        title="Line 1"
                        description="Line 2"
                        actionLabel="Label"
                        onDismiss={() => setDismissed((d) => ({ ...d, [variant]: true }))}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Alert · ${selection}`}
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
