import { useState } from "react";
import { ChevronUp, CircleUser, Package } from "lucide-react";
import { CardHeading } from "../campaign/CardHeading";

const PERSONA_TAGS = [
  "Semi-pro/Amateur",
  "DAW owners",
  "Plugin Overload",
  "$2k Identity tool",
];

const PERSONA_BADGES = ["Male", "24-26", "New York"];

const PERSONA_ITEMS = [
  {
    title: "Who they are",
    bullets: [
      "Makes beats after work or college, in a small room with limited gear and no treated acoustics.",
      "Loves lofi, hip‑hop, ambient; obsessed with YouTube beat sessions and gear videos.",
    ],
  },
  {
    title: "Goals and motivations",
    bullets: [
      "Wants a portable setup that feels like a “real” studio without needing a full DAW or big space.",
      "Wants to turn everyday sounds (train doors, rain, street noise) into texture in their tracks.",
    ],
  },
];

const TENSION_STATS = [
  { label: "Tension", value: "9/10" },
  { label: "Cultural Truth", value: "8/10" },
  { label: "Distinctive Asset", value: "10/10" },
  { label: "Channel Choice", value: "9/10" },
];

function PersonaItem({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-1 items-start gap-4 border border-border p-4">
      <div className="flex flex-1 flex-col gap-1 text-sm">
        <p className="w-full text-foreground">{title}</p>
        {open && (
          <ul className="list-disc pl-[21px] text-muted-foreground">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="button"
        aria-label={open ? "Collapse" : "Expand"}
        onClick={() => setOpen((v) => !v)}
        className="shrink-0 text-foreground"
      >
        <ChevronUp className={`size-4 ${open ? "" : "rotate-180"}`} />
      </button>
    </div>
  );
}

export function PersonasTensionRow() {
  const [painPointsOpen, setPainPointsOpen] = useState(false);

  return (
    <div className="flex w-full items-start px-8">
      <div className="flex flex-1 flex-col gap-6 border border-border p-4">
        <CardHeading icon={Package} title="Personas" />

        <div className="flex flex-wrap gap-1.5">
          {PERSONA_TAGS.map((tag) => (
            <span
              key={tag}
              className="flex min-h-8 items-center justify-center rounded-full border border-border-strong bg-white/10 px-3 py-1.5 text-sm font-medium text-foreground shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-border-strong">
              <CircleUser className="size-6 text-background" />
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <p className="text-base font-semibold text-foreground">
                The Bedroom Storyteller
              </p>
              <div className="flex items-center gap-2">
                {PERSONA_BADGES.map((b) => (
                  <span
                    key={b}
                    className="flex items-center justify-center rounded-lg border border-border bg-white/10 px-2 py-0.5 text-xs text-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-full items-stretch gap-0">
            {PERSONA_ITEMS.map((item) => (
              <PersonaItem key={item.title} {...item} />
            ))}
          </div>

          <div className="flex w-full items-start gap-4 border border-border p-4">
            <p className="flex-1 text-sm font-medium text-foreground">
              Pain points
            </p>
            <button
              type="button"
              aria-label={painPointsOpen ? "Collapse" : "Expand"}
              onClick={() => setPainPointsOpen((v) => !v)}
              className="shrink-0 text-foreground"
            >
              <ChevronUp
                className={`size-4 ${painPointsOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 border border-border p-4">
        <CardHeading icon={Package} title="Cultural Tension & Territory" />

        <div className="flex flex-col gap-1 text-muted-foreground">
          <p className="text-lg font-semibold">The Fight</p>
          <p className="text-sm font-medium">
            Infinite free tools and tutorials increase paralysis and imposter
            syndrome instead of finished work.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-4">
          {TENSION_STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-6 px-6">
              <Package className="size-8 shrink-0 text-muted-foreground" />
              <div className="flex flex-col gap-2.5">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-[42px] leading-none font-semibold tracking-[-1.5px] text-foreground">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
