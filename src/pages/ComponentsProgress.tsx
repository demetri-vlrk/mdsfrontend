import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Progress, type ProgressSize } from "../components/ui/Progress";
import { Button } from "../components/ui/Button";

const SIZES: { key: ProgressSize; label: string; height: number }[] = [
  { key: "default", label: "Default", height: 20 },
  { key: "small", label: "Small", height: 10 },
  { key: "xs", label: "Extra Small", height: 4 },
];
const VALUES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export function ComponentsProgress() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<ProgressSize | null>(null);
  const [live, setLive] = useState(20);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Progress</h1>
        </div>

        <div className="flex flex-col gap-10">
          {SIZES.map(({ key, label, height }) => (
            <div key={key} className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold text-fg-default">{label}</h2>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelection(key)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection(key)}
                className={`cursor-pointer bg-bg-subtle p-6 outline-offset-4 ${selection === key ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
              >
                <div className="flex flex-col gap-3">
                  {VALUES.map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <span className="w-8 shrink-0 text-right text-[10px] text-fg-muted">{v}</span>
                      <Progress value={v} size={key} className="max-w-[300px]" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-fg-muted">height: {height}px</p>
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Live</h2>
            <div className="flex flex-col gap-4 bg-bg-subtle p-6">
              <Progress value={live} size="default" className="max-w-[300px]" />
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" onClick={() => setLive((v) => Math.max(0, v - 10))}>
                  -10
                </Button>
                <Button variant="secondary" size="sm" onClick={() => setLive((v) => Math.min(100, v + 10))}>
                  +10
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Progress · ${selection}`}
          layoutLines={[["height", `${SIZES.find((s) => s.key === selection)!.height}px`]]}
          styleLines={[
            ["track", "#cccccc"],
            ["fill", "var(--color-brand-500, #8b5cf6)"],
          ]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
