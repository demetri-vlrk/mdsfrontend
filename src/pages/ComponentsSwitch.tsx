import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { RichSwitchGroup, SwitchGroup } from "../components/ui/Switch";

const CHECKED_VALUES = ["unchecked", "checked"] as const;
type CheckedValue = (typeof CHECKED_VALUES)[number];
const STATES = ["default", "focused", "disabled"] as const;
type State = (typeof STATES)[number];

// Frozen renders for the documentation grid — Switch.tsx itself uses real
// peer-focus-visible:/peer-checked: pseudo-classes, which can only show
// one state at a time under the cursor, so these are built independently
// (same reasoning as Checkbox's grid, and the Badge fix that taught this
// project not to reuse the real component with override classes).
const STATE_STYLES: Record<CheckedValue, Record<State, string>> = {
  unchecked: {
    default: "border-[#cccccc] bg-[#cccccc]",
    focused: "border-[#a78bfa] bg-[#cccccc]",
    disabled: "border-[#afafaf] bg-[#afafaf]",
  },
  checked: {
    default: "border-brand-500 bg-brand-500",
    focused: "border-[#a78bfa] bg-brand-500",
    disabled: "border-[#808080] bg-[#808080]",
  },
};

const THUMB_BG: Record<CheckedValue, Record<State, string>> = {
  unchecked: { default: "bg-white", focused: "bg-white", disabled: "bg-[#ebebeb]" },
  checked: { default: "bg-white", focused: "bg-white", disabled: "bg-[#ebebeb]" },
};

const STATE_CSS: Record<CheckedValue, Record<State, { border: string; background: string }>> = {
  unchecked: {
    default: { border: "2px solid #cccccc", background: "#cccccc" },
    focused: { border: "2px solid #a78bfa", background: "#cccccc" },
    disabled: { border: "2px solid #afafaf", background: "#afafaf" },
  },
  checked: {
    default: { border: "2px solid var(--color-brand-500, #8b5cf6)", background: "var(--color-brand-500, #8b5cf6)" },
    focused: { border: "2px solid #a78bfa", background: "var(--color-brand-500, #8b5cf6)" },
    disabled: { border: "2px solid #808080", background: "#808080" },
  },
};

type Selection = { checkedValue: CheckedValue; state: State };

function SwitchSwatch({
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
      className={`relative flex h-[20px] w-[40px] shrink-0 cursor-pointer border-2 border-solid outline-offset-2 ${STATE_STYLES[checkedValue][state]} ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      <span
        className={`absolute top-0 size-[20px] ${THUMB_BG[checkedValue][state]} ${checkedValue === "checked" ? "right-0" : "left-0"}`}
      />
    </div>
  );
}

function switchInspectorLines(selection: Selection) {
  const css = STATE_CSS[selection.checkedValue][selection.state];
  const layoutLines: [string, string][] = [
    ["display", "inline-flex"],
    ["width", "40px"],
    ["height", "20px"],
  ];
  const styleLines: [string, string][] = [
    ["border", css.border],
    ["background", css.background],
  ];
  return { layoutLines, styleLines };
}

export function ComponentsSwitch() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);
  const [groupOff, setGroupOff] = useState(false);
  const [groupOn, setGroupOn] = useState(true);
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
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Switch</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Switch</h2>
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
                      <SwitchSwatch
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
            <h2 className="text-sm font-semibold text-fg-default">Switch Group</h2>
            <div className="flex flex-col gap-4 bg-white p-6">
              <SwitchGroup label="Label" checked={groupOff} onChange={(e) => setGroupOff(e.target.checked)} />
              <SwitchGroup label="Label" checked={groupOn} onChange={(e) => setGroupOn(e.target.checked)} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Rich Switch Group</h2>
            <div className="flex flex-col gap-4 bg-white p-6">
              <RichSwitchGroup label="Label" checked={richA} onChange={(e) => setRichA(e.target.checked)} />
              <RichSwitchGroup label="Label" checked={richB} onChange={(e) => setRichB(e.target.checked)} />
              <RichSwitchGroup label="Label" flipped checked={richC} onChange={(e) => setRichC(e.target.checked)} />
              <RichSwitchGroup label="Label" flipped checked={richD} onChange={(e) => setRichD(e.target.checked)} />
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`${selection.checkedValue} · ${selection.state}`}
          {...switchInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
