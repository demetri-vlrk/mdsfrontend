import { Search, User } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { INPUT_SIZES, type InputSize, type InputVariant } from "../components/ui/Input";

const VARIANTS: InputVariant[] = ["outlined", "filled"];
const SIZES: InputSize[] = ["xs", "sm", "default", "md", "lg", "xl"];
const STATES = ["default", "hover", "focused", "disabled", "error"] as const;
type State = (typeof STATES)[number];

// Frozen renders of Input's real hover:/focus-within:/disabled: classes
// and the error prop (see INPUT_VARIANTS in Input.tsx), flattened per
// state so every state can sit side by side like the Figma frame — a live
// :hover only shows one state at a time under the cursor.
const STATE_STYLES: Record<InputVariant, Record<State, string>> = {
  outlined: {
    default: "border border-[#d4d4d4] bg-transparent",
    hover: "border border-[#afafaf] bg-transparent",
    focused: "border border-brand-500 bg-transparent",
    disabled: "border border-[#cccccc] bg-[#ebebeb]",
    error: "border border-[#c32929] bg-transparent",
  },
  filled: {
    default: "border border-transparent bg-[#f9fafb]",
    hover: "border border-transparent bg-[#ebebeb]",
    focused: "border border-brand-500 bg-[#f9fafb]",
    disabled: "border border-transparent bg-[#ebebeb]",
    error: "border border-[#c32929] bg-[#f9fafb]",
  },
};

// Literal CSS values for the inspector panel — brand color references this
// project's real --color-brand-500 (theme.css); border/subtle and the
// grays don't have a matching token, so those are the plain Figma hex.
const STATE_CSS: Record<InputVariant, Record<State, { border: string; background: string }>> = {
  outlined: {
    default: { border: "1px solid #d4d4d4", background: "transparent" },
    hover: { border: "1px solid #afafaf", background: "transparent" },
    focused: { border: "1px solid var(--color-brand-500, #8b5cf6)", background: "transparent" },
    disabled: { border: "1px solid #cccccc", background: "#ebebeb" },
    error: { border: "1px solid #c32929", background: "transparent" },
  },
  filled: {
    default: { border: "1px solid transparent", background: "#f9fafb" },
    hover: { border: "1px solid transparent", background: "#ebebeb" },
    focused: { border: "1px solid var(--color-brand-500, #8b5cf6)", background: "#f9fafb" },
    disabled: { border: "1px solid transparent", background: "#ebebeb" },
    error: { border: "1px solid #c32929", background: "#f9fafb" },
  },
};

const SIZE_PX: Record<InputSize, number> = { xs: 20, sm: 26, default: 32, md: 40, lg: 48, xl: 56 };
const DEMO_WIDTH: Record<InputSize, number> = { xs: 160, sm: 200, default: 240, md: 280, lg: 320, xl: 360 };

type Selection =
  | { kind: "input"; variant: InputVariant; size: InputSize; state: State }
  | { kind: "textarea"; state: State };

function InputSwatch({
  variant,
  size,
  state,
  selected,
  onSelect,
}: {
  variant: InputVariant;
  size: InputSize;
  state: State;
  selected: boolean;
  onSelect: () => void;
}) {
  const sizeSpec = INPUT_SIZES[size];

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      style={{ width: DEMO_WIDTH[size] }}
      className={`inline-flex shrink-0 cursor-pointer items-center font-stack-text font-normal leading-normal outline-offset-2 ${sizeSpec.height} ${STATE_STYLES[variant][state]} ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
        <span className={`flex items-center justify-center ${sizeSpec.icon}`}>
          <User className="size-full" />
        </span>
      </span>
      <span className={`flex-1 truncate text-[#afafaf] ${sizeSpec.padX} ${sizeSpec.text}`}>Placeholder</span>
      <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
        <span className={`flex items-center justify-center ${sizeSpec.icon}`}>
          <Search className="size-full" />
        </span>
      </span>
    </div>
  );
}

function TextareaSwatch({
  state,
  selected,
  onSelect,
}: {
  state: State;
  selected: boolean;
  onSelect: () => void;
}) {
  const sizeSpec = INPUT_SIZES.default;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      style={{ width: DEMO_WIDTH.default }}
      className={`inline-flex min-h-[64px] shrink-0 cursor-pointer items-start font-stack-text font-normal leading-normal outline-offset-2 ${STATE_STYLES.outlined[state]} ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
        <span className={`flex items-center justify-center ${sizeSpec.icon}`}>
          <User className="size-full" />
        </span>
      </span>
      <span className={`flex-1 py-[8px] text-[#afafaf] ${sizeSpec.padX} ${sizeSpec.text}`}>Placeholder</span>
      <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center text-[#afafaf]`}>
        <span className={`flex items-center justify-center ${sizeSpec.icon}`}>
          <Search className="size-full" />
        </span>
      </span>
    </div>
  );
}

function inputInspectorLines(selection: Selection) {
  if (selection.kind === "textarea") {
    const css = STATE_CSS.outlined[selection.state];
    const layoutLines: [string, string][] = [
      ["display", "inline-flex"],
      ["min-height", "64px"],
      ["align-items", "flex-start"],
    ];
    const styleLines: [string, string][] = [
      ["border", css.border],
      ["background", css.background],
    ];
    return { layoutLines, styleLines };
  }

  const height = SIZE_PX[selection.size];
  const css = STATE_CSS[selection.variant][selection.state];

  const layoutLines: [string, string][] = [
    ["display", "inline-flex"],
    ["min-height", `${height}px`],
    ["align-items", "center"],
  ];
  const styleLines: [string, string][] = [
    ["border", css.border],
    ["background", css.background],
  ];

  return { layoutLines, styleLines };
}

function selectionLabel(selection: Selection) {
  return selection.kind === "textarea"
    ? `Textarea · ${selection.state}`
    : `${selection.variant} · ${selection.size} · ${selection.state}`;
}

export function ComponentsInputs() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Inputs</h1>
        </div>

        <div className="flex flex-col gap-10">
          {VARIANTS.map((variant) => (
            <div key={variant} className="flex flex-col gap-3">
              <h2 className="text-sm font-semibold text-fg-default capitalize">{variant}</h2>
              <div className="overflow-x-auto bg-white p-6">
                <div
                  className="grid items-center gap-x-6 gap-y-4"
                  style={{ gridTemplateColumns: `max-content repeat(${SIZES.length}, max-content)` }}
                >
                  <span />
                  {SIZES.map((size) => (
                    <span
                      key={size}
                      className="text-[10px] font-medium tracking-wide text-black/40 uppercase"
                    >
                      {size}
                    </span>
                  ))}
                  {STATES.map((state) => (
                    <Fragment key={state}>
                      <span className="pr-2 text-[10px] font-medium tracking-wide text-black/40 uppercase">
                        {state}
                      </span>
                      {SIZES.map((size) => (
                        <InputSwatch
                          key={`${state}-${size}`}
                          variant={variant}
                          size={size}
                          state={state}
                          selected={
                            selection?.kind === "input" &&
                            selection.variant === variant &&
                            selection.size === size &&
                            selection.state === state
                          }
                          onSelect={() => setSelection({ kind: "input", variant, size, state })}
                        />
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-fg-default">Textarea</h2>
            <div className="overflow-x-auto bg-white p-6">
              <div className="flex flex-wrap items-start gap-6">
                {STATES.map((state) => (
                  <div key={state} className="flex flex-col items-start gap-1">
                    <span className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
                      {state}
                    </span>
                    <TextareaSwatch
                      state={state}
                      selected={selection?.kind === "textarea" && selection.state === state}
                      onSelect={() => setSelection({ kind: "textarea", state })}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={selectionLabel(selection)}
          {...inputInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
