import { User } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InspectorPanel } from "../components/devtools/CodeInspector";
import { Avatar, type AvatarSize } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";

const SIZES: AvatarSize[] = ["tiny", "xs", "small", "default"];
const PICTURE = ["off", "on"] as const;
type Picture = (typeof PICTURE)[number];

const SIZE_PX: Record<AvatarSize, number> = { tiny: 16, xs: 24, small: 32, default: 40 };

type Selection = { size: AvatarSize; picture: Picture };

function AvatarSwatch({
  size,
  picture,
  selected,
  onSelect,
}: {
  size: AvatarSize;
  picture: Picture;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
      className={`inline-flex shrink-0 outline-offset-2 ${selected ? "outline outline-2 outline-dashed outline-blue-500" : ""}`}
    >
      {picture === "on" ? (
        <div
          style={{ width: SIZE_PX[size], height: SIZE_PX[size] }}
          className="flex shrink-0 items-center justify-center overflow-hidden bg-[#d4d4d4]"
        >
          <User className="size-[70%] text-white" fill="white" />
        </div>
      ) : (
        <Avatar initials="JD" size={size} />
      )}
    </div>
  );
}

function avatarInspectorLines(selection: Selection) {
  const px = SIZE_PX[selection.size];

  const layoutLines: [string, string][] = [
    ["display", "flex"],
    ["width", `${px}px`],
    ["height", `${px}px`],
    ["align-items", "center"],
    ["justify-content", "center"],
  ];
  const styleLines: [string, string][] =
    selection.picture === "off"
      ? [["background", "#f6f6f6"]]
      : [
          ["background", "none"],
          ["object-fit", "cover"],
        ];

  return { layoutLines, styleLines };
}

export function ComponentsAvatars() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<Selection | null>(null);

  return (
    <div className="min-h-svh w-full bg-bg-canvas p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/components")}>
            Back
          </Button>
          <h1 className="text-2xl font-semibold tracking-[-1px] text-fg-default">Avatars</h1>
        </div>

        <div className="overflow-x-auto bg-white p-6">
          <div
            className="grid items-center gap-x-10 gap-y-6"
            style={{ gridTemplateColumns: `max-content repeat(${SIZES.length}, max-content)` }}
          >
            <span />
            {SIZES.map((size) => (
              <span key={size} className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
                {size}
              </span>
            ))}
            {PICTURE.map((picture) => (
              <Fragment key={picture}>
                <span className="pr-2 text-[10px] font-medium tracking-wide text-black/40 uppercase">
                  Picture {picture}
                </span>
                {SIZES.map((size) => (
                  <AvatarSwatch
                    key={`${picture}-${size}`}
                    size={size}
                    picture={picture}
                    selected={selection?.size === size && selection?.picture === picture}
                    onSelect={() => setSelection({ size, picture })}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {selection && (
        <InspectorPanel
          label={`Picture ${selection.picture} · ${selection.size}`}
          {...avatarInspectorLines(selection)}
          onClose={() => setSelection(null)}
        />
      )}
    </div>
  );
}
