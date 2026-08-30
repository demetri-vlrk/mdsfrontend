import { MessageCircle, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { Checkbox } from "../components/ui/Checkbox";
import { MainContentHeader } from "../components/ui/MainContentHeader";
import { MainSubContentHeader, type MainSubContentHeaderPadding } from "../components/ui/MainSubContentHeader";

type Selection = "main" | `sub-${MainSubContentHeaderPadding}` | null;

const INSPECTOR_LINES: Record<Exclude<Selection, null>, { layoutLines: [string, string][]; styleLines: [string, string][] }> = {
  main: {
    layoutLines: [
      ["display", "flex"],
      ["gap", "24px"],
      ["padding", "40px 32px"],
    ],
    styleLines: [["border-bottom", "1px solid var(--color-border-subtle)"]],
  },
  "sub-wide": {
    layoutLines: [
      ["display", "flex"],
      ["align-items", "center"],
      ["padding", "40px 32px"],
    ],
    styleLines: [
      ["background", "var(--color-bg-subtle)"],
      ["border", "1px solid var(--color-border-subtle)"],
    ],
  },
  "sub-narrow": {
    layoutLines: [
      ["display", "flex"],
      ["align-items", "center"],
      ["padding", "16px 32px"],
    ],
    styleLines: [
      ["background", "var(--color-bg-subtle)"],
      ["border", "1px solid var(--color-border-subtle)"],
    ],
  },
};

export function ComponentsHeader() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Header</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Main Content Header</h2>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelection("main")}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection("main")}
              className={`cursor-pointer bg-bg-canvas outline-offset-4 ${selection === "main" ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
            >
              <MainContentHeader title="Recent Projects">
                <Button variant="outlined" size="default" leftIcon={<Plus className="size-full" />}>
                  New Project
                </Button>
                <Button variant="primary" size="default" leftIcon={<MessageCircle className="size-full" />}>
                  Open Chat
                </Button>
              </MainContentHeader>
            </div>
          </div>

          {(["wide", "narrow"] as const).map((padding) => {
            const selectionKey = `sub-${padding}` as const;
            return (
              <div key={padding} className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-fg-default capitalize">Main Sub-Content Header · {padding}</h2>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelection(selectionKey)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection(selectionKey)}
                  className={`cursor-pointer outline-offset-4 ${selection === selectionKey ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
                >
                  <MainSubContentHeader title="12" subtitle="Monday" padding={padding}>
                    <Button variant="primary" size="md" leftIcon={<Sparkles className="size-full" />}>
                      Generate All
                    </Button>
                    <Checkbox />
                  </MainSubContentHeader>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={selection === "main" ? "Main Content Header" : `Main Sub-Content Header · ${selection.replace("sub-", "")}`}
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
