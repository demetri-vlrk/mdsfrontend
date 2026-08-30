import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/ui/Button";

const layoutLines: [string, string][] = [
  ["display", "flex"],
  ["flex-direction", "column"],
  ["width", "300px"],
  ["padding", "12px 16px"],
];

const styleLines: [string, string][] = [
  ["background", "var(--color-sidebar)"],
  ["border-right", "1px solid var(--color-border-subtle)"],
];

export function ComponentsSidebar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Sidebar</h1>
        </div>

        <div className="bg-bg-subtle p-6">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelected(true)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(true)}
            className={`inline-block cursor-pointer outline-offset-4 ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
          >
            <Sidebar />
          </div>
        </div>
      </div>

      {selected && (
        <InspectorPanel label="Sidebar" layoutLines={layoutLines} styleLines={styleLines} onClose={() => setSelected(false)} />
      )}
    </div>
  );
}
