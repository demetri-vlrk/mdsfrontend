import { Check, Minus } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { CheckboxGroup, RichCheckboxGroup } from "../components/ui/Checkbox";

const CHECKED_VALUES = ["unchecked", "checked", "indeterminate"] as const;
type CheckedValue = (typeof CHECKED_VALUES)[number];
const STATES = ["default", "focus", "error", "disabled"] as const;
type State = (typeof STATES)[number];

// Frozen renders for the documentation grid — Checkbox.tsx itself uses real
// peer-focus-visible:/peer-checked: pseudo-classes, which can only show one
// state at a time under the cursor, so these are built independently
// rather than reusing the real component (see the Badge fix earlier in
// this project for why reusing it here would silently break overrides).
const STATE_STYLES: Record<Exclude<CheckedValue, "unchecked">, Record<State, string>> & {
  unchecked: Record<State, string>;
} = {
  unchecked: {
    default: "border-[#cccccc] bg-[#ebebeb]",
    focus: "border-[#a78bfa] bg-[#ebebeb]",
    error: "border-[#ff9ba1] bg-[#ebebeb]",
    disabled: "border-[#afafaf] bg-[#cccccc]",
  },
  checked: {
    default: "border-brand-500 bg-brand-500",
    focus: "border-[#a78bfa] bg-brand-500",
    error: "border-[#ff9ba1] bg-[#ff5561]",
    disabled: "border-[#808080] bg-[#808080]",
  },
  indeterminate: {
    default: "border-brand-500 bg-brand-500",
    focus: "border-[#a78bfa] bg-brand-500",
    error: "border-[#ff9ba1] bg-[#ff5561]",
    disabled: "border-[#808080] bg-[#808080]",
  },
};

const STATE_CSS: Record<CheckedValue, Record<State, { border: string; background: string }>> = {
  unchecked: {
    default: { border: "2px solid #cccccc", background: "#ebebeb" },
    focus: { border: "2px solid #a78bfa", background: "#ebebeb" },
    error: { border: "2px solid #ff9ba1", background: "#ebebeb" },
    disabled: { border: "2px solid #afafaf", background: "#cccccc" },
  },
  checked: {
    default: { border: "2px solid var(--color-brand-500, #8b5cf6)", background: "var(--color-brand-500, #8b5cf6)" },
    focus: { border: "2px solid #a78bfa", background: "var(--color-brand-500, #8b5cf6)" },
    error: { border: "2px solid #ff9ba1", background: "#ff5561" },
    disabled: { border: "2px solid #808080", background: "#808080" },
  },
  indeterminate: {
    default: { border: "2px solid var(--color-brand-500, #8b5cf6)", background: "var(--color-brand-500, #8b5cf6)" },
    focus: { border: "2px solid #a78bfa", background: "var(--color-brand-500, #8b5cf6)" },
    error: { border: "2px solid #ff9ba1", background: "#ff5561" },
    disabled: { border: "2px solid #808080", background: "#808080" },
  },
};

type Selection = { checkedValue: CheckedValue; state: State };

function CheckboxSwatch({
  checkedValue,
  state,
  selected,
  onSelect,
}: {
  checkedValue: CheckedValue;
  state: State;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      className={`relative flex size-[20px] shrink-0 cursor-pointer items-center justify-center border-2 border-solid outline-offset-2 ${STATE_STYLES[checkedValue][state]} ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      {checkedValue === "checked" && <Check className="size-[13px] text-white" />}
      {checkedValue === "indeterminate" && <Minus className="size-[15px] text-white" />}
    </div>
  );
}

function checkboxInspectorLines(selection: Selection) {
  const css = STATE_CSS[selection.checkedValue][selection.state];
  const layoutLines: [string, string][] = [
    ["display", "inline-flex"],
    ["width", "20px"],
    ["height", "20px"],
    ["align-items", "center"],
    ["justify-content", "center"],
  ];
  const styleLines: [string, string][] = [
    ["border", css.border],
    ["background", css.background],
  ];
  return { layoutLines, styleLines };
}

export function ComponentsCheckbox() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);
  const [groupUnchecked, setGroupUnchecked] = useState(false);
  const [groupChecked, setGroupChecked] = useState(true);
  const [richA, setRichA] = useState(false);
  const [richB, setRichB] = useState(true);
  const [richC, setRichC] = useState(false);
  const [richD, setRichD] = useState(true);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Checkbox</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Checkbox</h2>
            <div className="overflow-x-auto bg-white p-6">
              <div
                className="grid items-center gap-x-10 gap-y-4"
                style={{ gridTemplateColumns: `max-content repeat(${STATES.length}, max-content)` }}
              >
                <span />
                {STATES.map((state) => (
                  <span key={state} className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
                    {state}
                  </span>
                ))}
                {CHECKED_VALUES.map((checkedValue) => (
                  <Fragment key={checkedValue}>
                    <span className="pr-2 text-[10px] font-medium tracking-wide text-black/40 uppercase">
                      {checkedValue}
                    </span>
                    {STATES.map((state) => (
                      <CheckboxSwatch
                        key={`${checkedValue}-${state}`}
                        checkedValue={checkedValue}
                        state={state}
                        selected={selection?.checkedValue === checkedValue && selection?.state === state}
                        onSelect={() => setSelection({ checkedValue, state })}
                      />
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Checkbox Group</h2>
            <div className="flex flex-col gap-4 bg-white p-6">
              <CheckboxGroup label="Label" checked={groupUnchecked} onChange={(e) => setGroupUnchecked(e.target.checked)} />
              <CheckboxGroup label="Label" checked={groupChecked} onChange={(e) => setGroupChecked(e.target.checked)} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Rich Checkbox Group</h2>
            <div className="flex flex-col gap-4 bg-white p-6">
              <RichCheckboxGroup label="Label" checked={richA} onChange={(e) => setRichA(e.target.checked)} />
              <RichCheckboxGroup label="Label" checked={richB} onChange={(e) => setRichB(e.target.checked)} />
              <RichCheckboxGroup label="Label" flipped checked={richC} onChange={(e) => setRichC(e.target.checked)} />
              <RichCheckboxGroup label="Label" flipped checked={richD} onChange={(e) => setRichD(e.target.checked)} />
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`${selection.checkedValue} · ${selection.state}`}
          {...checkboxInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
