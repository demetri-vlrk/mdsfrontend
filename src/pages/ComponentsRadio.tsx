import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { RadioBox, RadioGroup, RichRadioGroup } from "../components/ui/Radio";

const CHECKED_VALUES = ["unchecked", "checked"] as const;
type CheckedValue = (typeof CHECKED_VALUES)[number];
const STATES = ["default", "focus", "error", "disabled"] as const;
type State = (typeof STATES)[number];

// Frozen renders for the documentation grid — same reasoning as
// Checkbox/Switch's grids: Radio.tsx uses real peer-focus-visible:/
// peer-checked: pseudo-classes, which can only show one state at a time
// under the cursor.
const STATE_STYLES: Record<CheckedValue, Record<State, string>> = {
  unchecked: {
    default: "border-[#cccccc] bg-[#ebebeb]",
    focus: "border-[#a78bfa] bg-[#ebebeb]",
    error: "border-[#ff9ba1] bg-[#ebebeb]",
    disabled: "border-[#afafaf] bg-[#cccccc]",
  },
  checked: {
    default: "border-[#cccccc] bg-[#ebebeb]",
    focus: "border-[#a78bfa] bg-[#ebebeb]",
    error: "border-[#ff9ba1] bg-[#ebebeb]",
    disabled: "border-[#afafaf] bg-[#cccccc]",
  },
};

const DOT_BG: Record<State, string> = {
  default: "bg-brand-500",
  focus: "bg-brand-500",
  error: "bg-brand-500",
  disabled: "bg-[#808080]",
};

const STATE_CSS: Record<CheckedValue, Record<State, { border: string; background: string }>> = {
  unchecked: {
    default: { border: "2px solid #cccccc", background: "#ebebeb" },
    focus: { border: "2px solid #a78bfa", background: "#ebebeb" },
    error: { border: "2px solid #ff9ba1", background: "#ebebeb" },
    disabled: { border: "2px solid #afafaf", background: "#cccccc" },
  },
  checked: {
    default: { border: "2px solid #cccccc", background: "#ebebeb" },
    focus: { border: "2px solid #a78bfa", background: "#ebebeb" },
    error: { border: "2px solid #ff9ba1", background: "#ebebeb" },
    disabled: { border: "2px solid #afafaf", background: "#cccccc" },
  },
};

type Selection = { checkedValue: CheckedValue; state: State };

function RadioSwatch({
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
      className={`relative flex size-[20px] shrink-0 cursor-pointer border-2 border-solid outline-offset-2 ${STATE_STYLES[checkedValue][state]} ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      {checkedValue === "checked" && <span className={`absolute inset-[3px] ${DOT_BG[state]}`} />}
    </div>
  );
}

function radioInspectorLines(selection: Selection) {
  const css = STATE_CSS[selection.checkedValue][selection.state];
  const layoutLines: [string, string][] = [
    ["display", "inline-flex"],
    ["width", "20px"],
    ["height", "20px"],
  ];
  const styleLines: [string, string][] = [
    ["border", css.border],
    ["background", css.background],
  ];
  return { layoutLines, styleLines };
}

export function ComponentsRadio() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);
  const [group, setGroup] = useState<"a" | "b">("a");
  const [richA, setRichA] = useState<"x" | "y">("x");
  const [richB, setRichB] = useState<"x" | "y">("y");
  const [box, setBox] = useState<"consumer" | "business">("consumer");

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Radio</h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Radio</h2>
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
                      <RadioSwatch
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
            <h2 className="text-sm font-semibold text-fg-default">Radio Group</h2>
            <div className="flex flex-col gap-4 bg-white p-6">
              <RadioGroup name="group" label="Option A" checked={group === "a"} onChange={() => setGroup("a")} />
              <RadioGroup name="group" label="Option B" checked={group === "b"} onChange={() => setGroup("b")} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Rich Radio Group</h2>
            <div className="flex flex-col gap-4 bg-white p-6">
              <RichRadioGroup name="rich" label="Option X" checked={richA === "x"} onChange={() => setRichA("x")} />
              <RichRadioGroup name="rich" label="Option Y" checked={richA === "y"} onChange={() => setRichA("y")} />
              <RichRadioGroup
                name="rich-flipped"
                label="Option X"
                flipped
                checked={richB === "x"}
                onChange={() => setRichB("x")}
              />
              <RichRadioGroup
                name="rich-flipped"
                label="Option Y"
                flipped
                checked={richB === "y"}
                onChange={() => setRichB("y")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Radio Box</h2>
            <div className="flex gap-4 bg-bg-canvas p-6">
              <RadioBox
                name="account-type"
                label="Consumer"
                checked={box === "consumer"}
                onChange={() => setBox("consumer")}
              />
              <RadioBox
                name="account-type"
                label="Business"
                checked={box === "business"}
                onChange={() => setBox("business")}
              />
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`${selection.checkedValue} · ${selection.state}`}
          {...radioInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
