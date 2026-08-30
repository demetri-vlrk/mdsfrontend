import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { Dialog, DialogFooter, DialogHeader } from "../components/ui/Dialog";

const FOOTER_VARIANTS = [
  { key: "caption-button", label: "With Caption + Button" },
  { key: "caption-only", label: "Caption only" },
  { key: "right-buttons", label: "Right Buttons" },
  { key: "full-buttons", label: "Full with Button" },
] as const;
type FooterVariantKey = (typeof FOOTER_VARIANTS)[number]["key"];

type Selection = "header" | `footer-${FooterVariantKey}` | "dialog" | null;

const INSPECTOR_LINES: Record<
  Exclude<Selection, null>,
  { layoutLines: [string, string][]; styleLines: [string, string][] }
> = {
  header: {
    layoutLines: [
      ["display", "flex"],
      ["min-height", "40px"],
      ["align-items", "center"],
    ],
    styleLines: [["background", "white"]],
  },
  "footer-caption-button": {
    layoutLines: [
      ["display", "flex"],
      ["min-height", "40px"],
      ["align-items", "center"],
    ],
    styleLines: [["background", "white"]],
  },
  "footer-caption-only": {
    layoutLines: [
      ["display", "flex"],
      ["min-height", "40px"],
      ["align-items", "center"],
    ],
    styleLines: [["background", "white"]],
  },
  "footer-right-buttons": {
    layoutLines: [
      ["display", "flex"],
      ["min-height", "40px"],
      ["justify-content", "flex-end"],
      ["align-items", "center"],
    ],
    styleLines: [["background", "white"]],
  },
  "footer-full-buttons": {
    layoutLines: [
      ["display", "flex"],
      ["min-height", "40px"],
      ["align-items", "stretch"],
    ],
    styleLines: [["background", "white"]],
  },
  dialog: {
    layoutLines: [
      ["display", "flex"],
      ["flex-direction", "column"],
      ["width", "527px"],
      ["height", "206px"],
    ],
    styleLines: [["background", "white"]],
  },
};

function renderFooter(key: FooterVariantKey) {
  switch (key) {
    case "caption-button":
      return <DialogFooter caption="Line 1" actions={[{ label: "Label" }]} />;
    case "caption-only":
      return <DialogFooter caption="Line 1" />;
    case "right-buttons":
      return <DialogFooter actions={[{ label: "Label" }, { label: "Label" }]} actionsLayout="auto" />;
    case "full-buttons":
      return <DialogFooter actions={[{ label: "Label" }, { label: "Label" }]} actionsLayout="full" />;
  }
}

export function ComponentsDialog() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Dialog</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Header</h2>
            <div className="overflow-x-auto bg-white p-6">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelection("header")}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection("header")}
                style={{ width: 527 }}
                className={`cursor-pointer border border-[#e5e5e5] outline-offset-2 ${selection === "header" ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
              >
                <DialogHeader title="Line 1" leftIcon={<ArrowLeft className="size-full" />} onDismiss={() => {}} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Footer</h2>
            <div className="overflow-x-auto bg-white p-6">
              <div className="flex flex-col gap-4">
                {FOOTER_VARIANTS.map(({ key, label }) => {
                  const selectionKey = `footer-${key}` as const;
                  return (
                    <div key={key} className="flex flex-col items-start gap-1">
                      <span className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
                        {label}
                      </span>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelection(selectionKey)}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection(selectionKey)}
                        style={{ width: 527 }}
                        className={`cursor-pointer border border-[#e5e5e5] outline-offset-2 ${selection === selectionKey ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
                      >
                        {renderFooter(key)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Full Dialog</h2>
            <div className="overflow-x-auto bg-white p-6">
              <div className="flex flex-col items-start gap-4">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelection("dialog")}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelection("dialog")}
                  style={{ width: 527 }}
                  className={`flex cursor-pointer flex-col items-start border border-[#e5e5e5] outline-offset-2 ${selection === "dialog" ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
                >
                  <DialogHeader title="Line 1" leftIcon={<ArrowLeft className="size-full" />} onDismiss={() => {}} />
                  <div className="h-[110px] w-full" />
                  <DialogFooter caption="Line 1" actions={[{ label: "Label" }]} />
                </div>
                <Button variant="primary" size="md" onClick={() => setDialogOpen(true)}>
                  Open Dialog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Line 1"
        leftIcon={<ArrowLeft className="size-full" />}
        caption="Line 1"
        actions={[{ label: "Label", onClick: () => setDialogOpen(false) }]}
      >
        <p className="font-stack-text text-[14.4px] text-[#737373]">Dialog content goes here.</p>
      </Dialog>

      {selection && (
        <InspectorPanel
          label={
            selection === "header"
              ? "Dialog Header"
              : selection === "dialog"
                ? "Dialog"
                : `Dialog Footer · ${selection.replace("footer-", "")}`
          }
          {...INSPECTOR_LINES[selection]}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
