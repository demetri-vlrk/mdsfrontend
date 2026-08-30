import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { BADGE_SIZES, type BadgeSize, type BadgeVariant } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const VARIANTS: BadgeVariant[] = ["primary", "secondary", "outlined", "ghost", "danger"];
const SIZES: BadgeSize[] = ["xs", "sm", "default", "md", "lg", "xl"];
const STATES = ["default", "hover", "focused", "disabled"] as const;
type State = (typeof STATES)[number];

// Frozen renders of each state, since Badge's real hover: pseudo-class
// only shows one state at a time under the cursor, and focused/disabled
// aren't real states on a non-interactive span — these are documentation
// swatches only (see Badge.tsx for why the real component skips them).
const STATE_STYLES: Record<BadgeVariant, Record<State, string>> = {
  primary: {
    default: "border border-transparent bg-brand-500 text-white",
    hover: "border border-transparent bg-brand-600 text-white",
    focused: "border border-brand-300 bg-brand-500 text-white",
    disabled: "border border-transparent bg-[#afafaf] text-white",
  },
  secondary: {
    default: "border border-transparent bg-[#f9fafb] text-[#1f1f1f]",
    hover: "border border-transparent bg-[#ebebeb] text-[#1f1f1f]",
    focused: "border border-brand-400 bg-[#f9fafb] text-[#1f1f1f]",
    disabled: "border border-transparent bg-[#cccccc] text-[#1f1f1f]",
  },
  outlined: {
    default: "border border-brand-500 bg-transparent text-brand-500",
    hover: "border border-brand-600 bg-transparent text-brand-600",
    focused: "border border-brand-300 bg-transparent text-brand-500",
    disabled: "border border-[#808080] bg-transparent text-[#808080]",
  },
  ghost: {
    default: "border border-transparent bg-transparent text-[#1f1f1f]",
    hover: "border border-transparent bg-transparent text-brand-500",
    focused: "border border-brand-400 bg-transparent text-[#1f1f1f]",
    disabled: "border border-transparent bg-transparent text-[#afafaf]",
  },
  danger: {
    default: "border border-transparent bg-[#c32929] text-white",
    hover: "border border-transparent bg-[#c32929] text-white",
    focused: "border border-brand-300 bg-[#c32929] text-white",
    disabled: "border border-transparent bg-[#afafaf] text-white",
  },
};

const STATE_CSS: Record<BadgeVariant, Record<State, { border: string; background: string }>> = {
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

const SIZE_PX: Record<BadgeSize, number> = { xs: 20, sm: 26, default: 32, md: 40, lg: 48, xl: 56 };

type Selection = { variant: BadgeVariant; size: BadgeSize; state: State };

function BadgeSwatch({
  variant,
  size,
  state,
  selected,
  onSelect,
}: {
  variant: BadgeVariant;
  size: BadgeSize;
  state: State;
  selected: boolean;
  onSelect: () => void;
}) {
  const sizeSpec = BADGE_SIZES[size];

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      className={`inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-stack-text font-normal leading-normal outline-offset-2 ${sizeSpec.height} ${sizeSpec.padX} ${sizeSpec.text} ${STATE_STYLES[variant][state]} ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      Label
    </span>
  );
}

function badgeInspectorLines(selection: Selection) {
  const height = SIZE_PX[selection.size];
  const css = STATE_CSS[selection.variant][selection.state];

  const layoutLines: [string, string][] = [
    ["display", "inline-flex"],
    ["height", `${height}px`],
    ["align-items", "center"],
    ["justify-content", "center"],
  ];
  const styleLines: [string, string][] = [
    ["border", css.border],
    ["background", css.background],
  ];

  return { layoutLines, styleLines };
}

export function ComponentsBadge() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Badge</h1>
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
                        <BadgeSwatch
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
          {...badgeInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
