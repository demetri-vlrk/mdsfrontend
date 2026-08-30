import { ArrowLeft, ArrowRight } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import {
  BUTTON_SIZES,
  Button,
  type ButtonSize,
  type ButtonVariant,
} from "../components/ui/Button";

const VARIANTS: ButtonVariant[] = ["primary", "secondary", "outlined", "ghost", "danger"];
const SIZES: ButtonSize[] = ["xs", "sm", "default", "md", "lg", "xl"];
const STATES = ["default", "hover", "focused", "disabled"] as const;
type State = (typeof STATES)[number];

// Frozen renders of Button's real hover:/focus-visible:/disabled: classes
// (see BUTTON_VARIANTS in Button.tsx), flattened per state so every state
// can sit side by side the way the Figma frame documents them — a live
// :hover only shows one state at a time under the cursor.
const STATE_STYLES: Record<ButtonVariant, Record<State, { container: string; iconBox: string }>> = {
  primary: {
    default: { container: "border border-transparent bg-brand-500 text-white", iconBox: "bg-brand-400" },
    hover: { container: "border border-transparent bg-brand-600 text-white", iconBox: "bg-brand-500" },
    focused: { container: "border border-brand-300 bg-brand-500 text-white", iconBox: "bg-brand-400" },
    disabled: { container: "border border-transparent bg-[#afafaf] text-white", iconBox: "bg-[#afafaf]" },
  },
  secondary: {
    default: { container: "border border-transparent bg-[#f9fafb] text-[#1f1f1f]", iconBox: "bg-[#f5f5f5]" },
    hover: { container: "border border-transparent bg-[#ebebeb] text-[#1f1f1f]", iconBox: "bg-[#f6f6f6]" },
    focused: { container: "border border-brand-400 bg-[#f9fafb] text-[#1f1f1f]", iconBox: "bg-[#f5f5f5]" },
    disabled: { container: "border border-transparent bg-[#cccccc] text-[#1f1f1f]", iconBox: "bg-[#cccccc]" },
  },
  outlined: {
    default: { container: "border border-brand-500 bg-transparent text-brand-500", iconBox: "border border-brand-500" },
    hover: { container: "border border-brand-600 bg-transparent text-brand-600", iconBox: "border border-brand-600" },
    focused: { container: "border border-brand-300 bg-transparent text-brand-500", iconBox: "border border-brand-300" },
    disabled: { container: "border border-[#808080] bg-transparent text-[#808080]", iconBox: "border border-[#808080]" },
  },
  ghost: {
    default: { container: "border border-transparent bg-transparent text-[#1f1f1f]", iconBox: "" },
    hover: { container: "border border-transparent bg-transparent text-brand-500", iconBox: "" },
    focused: { container: "border border-brand-400 bg-transparent text-[#1f1f1f]", iconBox: "" },
    disabled: { container: "border border-transparent bg-transparent text-[#afafaf]", iconBox: "" },
  },
  danger: {
    default: { container: "border border-transparent bg-[#c32929] text-white", iconBox: "bg-[#c32929]" },
    hover: { container: "border border-transparent bg-[#c32929] text-white", iconBox: "bg-[#c32929]" },
    focused: { container: "border border-brand-300 bg-[#c32929] text-white", iconBox: "bg-[#c32929]" },
    disabled: { container: "border border-transparent bg-[#afafaf] text-white", iconBox: "bg-[#afafaf]" },
  },
};

// Literal CSS values behind each swatch's border/background, for the
// Figma-style inspector panel. Brand colors reference this project's real
// --color-brand-* custom properties (theme.css); grays/red don't have a
// matching project token (see Button.tsx's note on the diverging scale),
// so those are the plain hex Figma exports.
const STATE_CSS: Record<ButtonVariant, Record<State, { border: string; background: string }>> = {
  primary: {
    default: { border: "1px solid transparent", background: "var(--color-brand-500, #8b5cf6)" },
    hover: { border: "1px solid transparent", background: "var(--color-brand-600, #7c3aed)" },
    focused: { border: "1px solid var(--color-brand-300, #c4b5fd)", background: "var(--color-brand-500, #8b5cf6)" },
    disabled: { border: "1px solid transparent", background: "#afafaf" },
  },
  secondary: {
    default: { border: "1px solid transparent", background: "#f9fafb" },
    hover: { border: "1px solid transparent", background: "#ebebeb" },
    focused: { border: "1px solid var(--color-brand-400, #a78bfa)", background: "#f9fafb" },
    disabled: { border: "1px solid transparent", background: "#cccccc" },
  },
  outlined: {
    default: { border: "1px solid var(--color-brand-500, #8b5cf6)", background: "transparent" },
    hover: { border: "1px solid var(--color-brand-600, #7c3aed)", background: "transparent" },
    focused: { border: "1px solid var(--color-brand-300, #c4b5fd)", background: "transparent" },
    disabled: { border: "1px solid #808080", background: "transparent" },
  },
  ghost: {
    default: { border: "1px solid transparent", background: "transparent" },
    hover: { border: "1px solid transparent", background: "transparent" },
    focused: { border: "1px solid var(--color-brand-400, #a78bfa)", background: "transparent" },
    disabled: { border: "1px solid transparent", background: "transparent" },
  },
  danger: {
    default: { border: "1px solid transparent", background: "#c32929" },
    hover: { border: "1px solid transparent", background: "#c32929" },
    focused: { border: "1px solid var(--color-brand-300, #c4b5fd)", background: "#c32929" },
    disabled: { border: "1px solid transparent", background: "#afafaf" },
  },
};

const SIZE_PX: Record<ButtonSize, number> = { xs: 20, sm: 26, default: 32, md: 40, lg: 48, xl: 56 };

type Selection = { variant: ButtonVariant; size: ButtonSize; state: State };

function ButtonSwatch({
  variant,
  size,
  state,
  selected,
  onSelect,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  state: State;
  selected: boolean;
  onSelect: () => void;
}) {
  const sizeSpec = BUTTON_SIZES[size];
  const styles = STATE_STYLES[variant][state];

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      className={`inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-stack-text font-normal leading-normal outline-offset-2 ${sizeSpec.height} ${sizeSpec.text} ${styles.container} ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center ${styles.iconBox}`}>
        <span className={`flex items-center justify-center ${sizeSpec.icon}`}>
          <ArrowLeft className="size-full" />
        </span>
      </span>
      <span className={sizeSpec.padX}>Label</span>
      <span className={`flex ${sizeSpec.box} shrink-0 items-center justify-center ${styles.iconBox}`}>
        <span className={`flex items-center justify-center ${sizeSpec.icon}`}>
          <ArrowRight className="size-full" />
        </span>
      </span>
    </div>
  );
}

function buttonInspectorLines(selection: Selection) {
  const height = SIZE_PX[selection.size];
  const css = STATE_CSS[selection.variant][selection.state];

  const layoutLines: [string, string][] = [
    ["display", "inline-flex"],
    ["min-height", `${height}px`],
    ["padding", "0"],
    ["justify-content", "center"],
    ["align-items", "center"],
    ["gap", "0"],
  ];
  const styleLines: [string, string][] = [
    ["border", css.border],
    ["background", css.background],
  ];

  return { layoutLines, styleLines };
}

export function ComponentsButtons() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Buttons</h1>
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
                        <ButtonSwatch
                          key={`${state}-${size}`}
                          variant={variant}
                          size={size}
                          state={state}
                          selected={
                            selection?.variant === variant &&
                            selection?.size === size &&
                            selection?.state === state
                          }
                          onSelect={() => setSelection({ variant, size, state })}
                        />
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`${selection.variant} · ${selection.size} · ${selection.state}`}
          {...buttonInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
