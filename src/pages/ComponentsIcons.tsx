import { ArrowRight } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Button } from "../components/ui/Button";
import { ICON_SIZES, ICON_THICKNESS_STROKE, Icon, type IconSize, type IconThickness } from "../components/ui/Icon";

const SIZES: IconSize[] = ["xs", "sm", "regular", "md", "lg", "xl"];
const THICKNESSES: IconThickness[] = ["thin", "regular", "thick", "dot"];

type Selection = { size: IconSize; thickness: IconThickness };

function IconSwatch({
  size,
  thickness,
  selected,
  onSelect,
}: {
  size: IconSize;
  thickness: IconThickness;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      style={{ width: ICON_SIZES.xl, height: ICON_SIZES.xl }}
      className={`flex shrink-0 cursor-pointer items-center justify-center text-black outline-offset-2 ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      <Icon icon={<ArrowRight />} size={size} thickness={thickness} />
    </div>
  );
}

function iconInspectorLines(selection: Selection) {
  const px = ICON_SIZES[selection.size];
  const strokeWidth = ICON_THICKNESS_STROKE[selection.thickness];

  const layoutLines: [string, string][] = [
    ["width", `${px}px`],
    ["height", `${px}px`],
  ];
  const styleLines: [string, string][] = [
    ["stroke-width", `${strokeWidth}px`],
    ["stroke-dasharray", selection.thickness === "dot" ? "2px 3px" : "none"],
  ];

  return { layoutLines, styleLines };
}

export function ComponentsIcons() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Icons</h1>
        </div>

        <div className="overflow-x-auto bg-white p-6">
          <div
            className="grid items-center gap-x-6 gap-y-4"
            style={{ gridTemplateColumns: `max-content repeat(${SIZES.length}, max-content)` }}
          >
            <span />
            {SIZES.map((size) => (
              <span key={size} className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
                {size}
              </span>
            ))}
            {THICKNESSES.map((thickness) => (
              <Fragment key={thickness}>
                <span className="pr-2 text-[10px] font-medium tracking-wide text-black/40 uppercase">
                  {thickness}
                </span>
                {SIZES.map((size) => (
                  <IconSwatch
                    key={`${thickness}-${size}`}
                    size={size}
                    thickness={thickness}
                    selected={selection?.size === size && selection?.thickness === thickness}
                    onSelect={() => setSelection({ size, thickness })}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`${selection.thickness} · ${selection.size}`}
          {...iconInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
