import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { RangeSlider, Slider, type SliderTrackSize } from "../components/ui/Slider";

const TRACK_SIZES: SliderTrackSize[] = ["default", "thin"];

const INSPECTOR_LINES: Record<SliderTrackSize, { layoutLines: [string, string][]; styleLines: [string, string][] }> = {
  default: {
    layoutLines: [
      ["height", "20px"],
      ["thumb-width", "8px"],
    ],
    styleLines: [
      ["track", "#cccccc"],
      ["fill", "var(--color-brand-500, #8b5cf6)"],
      ["thumb", "white"],
    ],
  },
  thin: {
    layoutLines: [
      ["height", "10px"],
      ["thumb-width", "8px"],
    ],
    styleLines: [
      ["track", "#cccccc"],
      ["fill", "var(--color-brand-500, #8b5cf6)"],
      ["thumb", "white"],
    ],
  },
};

export function ComponentsSlider() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<SliderTrackSize | null>(null);
  const [singleH, setSingleH] = useState<Record<SliderTrackSize, number>>({ default: 10, thin: 10 });
  const [singleV, setSingleV] = useState<Record<SliderTrackSize, number>>({ default: 10, thin: 10 });
  const [rangeH, setRangeH] = useState<Record<SliderTrackSize, [number, number]>>({
    default: [38, 62],
    thin: [18, 82],
  });
  const [rangeV, setRangeV] = useState<Record<SliderTrackSize, [number, number]>>({
    default: [38, 62],
    thin: [18, 82],
  });

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Slider</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Horizontal</h2>
            <div className="flex flex-col gap-8 bg-bg-subtle p-8">
              {TRACK_SIZES.map((trackSize) => (
                <div key={trackSize} className="flex flex-col gap-2">
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelection(trackSize)}
                    className="w-fit cursor-pointer text-[10px] font-medium tracking-wide text-fg-muted uppercase hover:text-fg-default"
                  >
                    Single · {trackSize}
                  </span>
                  <Slider
                    trackSize={trackSize}
                    value={singleH[trackSize]}
                    onChange={(v) => setSingleH((s) => ({ ...s, [trackSize]: v }))}
                  />
                </div>
              ))}
              {TRACK_SIZES.map((trackSize) => (
                <div key={`range-${trackSize}`} className="flex flex-col gap-2">
                  <span className="text-[10px] font-medium tracking-wide text-fg-muted uppercase">
                    Range · {trackSize}
                  </span>
                  <RangeSlider
                    trackSize={trackSize}
                    minValue={rangeH[trackSize][0]}
                    maxValue={rangeH[trackSize][1]}
                    onMinChange={(v) => setRangeH((s) => ({ ...s, [trackSize]: [v, s[trackSize][1]] }))}
                    onMaxChange={(v) => setRangeH((s) => ({ ...s, [trackSize]: [s[trackSize][0], v] }))}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Vertical</h2>
            <div className="flex items-end gap-16 bg-bg-subtle p-8">
              {TRACK_SIZES.map((trackSize) => (
                <div key={trackSize} className="flex flex-col items-center gap-2">
                  <Slider
                    orientation="vertical"
                    length={160}
                    trackSize={trackSize}
                    value={singleV[trackSize]}
                    onChange={(v) => setSingleV((s) => ({ ...s, [trackSize]: v }))}
                  />
                  <span className="text-[10px] font-medium tracking-wide text-fg-muted uppercase">
                    Single · {trackSize}
                  </span>
                </div>
              ))}
              {TRACK_SIZES.map((trackSize) => (
                <div key={`range-${trackSize}`} className="flex flex-col items-center gap-2">
                  <RangeSlider
                    orientation="vertical"
                    length={160}
                    trackSize={trackSize}
                    minValue={rangeV[trackSize][0]}
                    maxValue={rangeV[trackSize][1]}
                    onMinChange={(v) => setRangeV((s) => ({ ...s, [trackSize]: [v, s[trackSize][1]] }))}
                    onMaxChange={(v) => setRangeV((s) => ({ ...s, [trackSize]: [s[trackSize][0], v] }))}
                  />
                  <span className="text-[10px] font-medium tracking-wide text-fg-muted uppercase">
                    Range · {trackSize}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Slider · ${selection}`}
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
