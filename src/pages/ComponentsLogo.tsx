import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MbsLogo } from "../components/MbsLogo";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";

type Selection = "light" | "dark" | null;

const INSPECTOR_LINES: Record<
  Exclude<Selection, null>,
  { layoutLines: [string, string][]; styleLines: [string, string][] }
> = {
  light: {
    layoutLines: [
      ["width", "64.19px"],
      ["height", "19.59px"],
    ],
    styleLines: [["color", "#000000"]],
  },
  dark: {
    layoutLines: [
      ["width", "64.19px"],
      ["height", "19.59px"],
    ],
    styleLines: [["color", "var(--color-fg-default)"]],
  },
};

export function ComponentsLogo() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Logo</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">On light (Top Nav)</h2>
            <div className="bg-white p-6">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelection("light")}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection("light")}
                className={`inline-flex cursor-pointer outline-offset-4 ${selection === "light" ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
              >
                <MbsLogo className="h-[38px] w-auto text-black" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">On dark (Sign Up)</h2>
            <div className="bg-bg-canvas p-6">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelection("dark")}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection("dark")}
                className={`inline-flex cursor-pointer outline-offset-4 ${selection === "dark" ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
              >
                <MbsLogo className="h-[38px] w-auto text-fg-default" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Logo · ${selection}`}
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
