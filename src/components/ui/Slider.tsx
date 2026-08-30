import type { ReactNode } from "react";

export type SliderTrackSize = "default" | "thin";
export type SliderOrientation = "horizontal" | "vertical";

// Exact px values from the MBS Figma design system (nodes 864:120131 /
// 864:120207, "MBS Slider Horizontal" / "MBS Slider Vertical"). The thumb
// is a flat white rectangle (8px × track thickness), not a circle —
// matching this design system's consistent sharp-corner language.
const TRACK_THICKNESS: Record<SliderTrackSize, number> = { default: 20, thin: 10 };

// Figma's own vertical slider is literally a rotated horizontal one (its
// export wraps each piece in `-rotate-90`), so vertical support here uses
// the same technique: the horizontal-built slider is rotated -90° inside a
// box with swapped width/height, rather than re-implementing the track/
// thumb logic a second time.
function OrientationWrapper({
  orientation,
  length,
  thickness,
  children,
}: {
  orientation: SliderOrientation;
  length: number;
  thickness: number;
  children: ReactNode;
}) {
  if (orientation === "horizontal") {
    return <div style={{ width: length, height: thickness }}>{children}</div>;
  }
  return (
    <div style={{ width: thickness, height: length }} className="relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
        style={{ width: length, height: thickness }}
      >
        {children}
      </div>
    </div>
  );
}

// Tailwind's scanner needs each arbitrary-value class to appear as a
// literal string somewhere in the source — it can't see a class name
// built from a runtime variable (e.g. `` `h-[${thickness}px]` ``), so this
// is a static lookup of the two full class strings rather than a function
// that interpolates the thickness in.
const THUMB_PSEUDO_CLASSES: Record<SliderTrackSize, string> = {
  default:
    "[&::-webkit-slider-runnable-track]:h-full [&::-webkit-slider-runnable-track]:bg-transparent " +
    "[&::-moz-range-track]:h-full [&::-moz-range-track]:bg-transparent " +
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto " +
    "[&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[8px] " +
    "[&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-white " +
    "[&::-moz-range-thumb]:pointer-events-auto " +
    "[&::-moz-range-thumb]:h-[20px] [&::-moz-range-thumb]:w-[8px] " +
    "[&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white",
  thin:
    "[&::-webkit-slider-runnable-track]:h-full [&::-webkit-slider-runnable-track]:bg-transparent " +
    "[&::-moz-range-track]:h-full [&::-moz-range-track]:bg-transparent " +
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto " +
    "[&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[8px] " +
    "[&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-white " +
    "[&::-moz-range-thumb]:pointer-events-auto " +
    "[&::-moz-range-thumb]:h-[10px] [&::-moz-range-thumb]:w-[8px] " +
    "[&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white",
};

type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  trackSize?: SliderTrackSize;
  orientation?: SliderOrientation;
  length?: number;
  disabled?: boolean;
  className?: string;
};

export function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  trackSize = "default",
  orientation = "horizontal",
  length = 300,
  disabled,
  className,
}: SliderProps) {
  const thickness = TRACK_THICKNESS[trackSize];
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <OrientationWrapper orientation={orientation} length={length} thickness={thickness}>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`m-0 block w-full cursor-pointer appearance-none disabled:cursor-not-allowed ${THUMB_PSEUDO_CLASSES[trackSize]} ${className ?? ""}`}
        style={{
          height: thickness,
          background: `linear-gradient(to right, var(--color-brand-500, #8b5cf6) ${pct}%, #cccccc ${pct}%)`,
        }}
      />
    </OrientationWrapper>
  );
}

type RangeSliderProps = {
  minValue: number;
  maxValue: number;
  min?: number;
  max?: number;
  step?: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  trackSize?: SliderTrackSize;
  orientation?: SliderOrientation;
  length?: number;
  className?: string;
};

// Not one native control — HTML has no built-in dual-thumb range input.
// Two overlapping <input type="range"> share the same track; each one's
// own track is made transparent (pointer-events limited to its thumb via
// the pseudo-element rule below) so both handles stay independently
// draggable, with a plain div rendering the brand-500 fill between them.
export function RangeSlider({
  minValue,
  maxValue,
  min = 0,
  max = 100,
  step = 1,
  onMinChange,
  onMaxChange,
  trackSize = "default",
  orientation = "horizontal",
  length = 300,
  className,
}: RangeSliderProps) {
  const thickness = TRACK_THICKNESS[trackSize];
  const minPct = ((minValue - min) / (max - min)) * 100;
  const maxPct = ((maxValue - min) / (max - min)) * 100;

  const inputClass = `pointer-events-none absolute inset-0 m-0 w-full cursor-pointer appearance-none bg-transparent ${THUMB_PSEUDO_CLASSES[trackSize]}`;

  return (
    <OrientationWrapper orientation={orientation} length={length} thickness={thickness}>
      <div className={`relative ${className ?? ""}`} style={{ height: thickness }}>
        <div className="absolute inset-0 bg-[#cccccc]" />
        <div
          className="absolute inset-y-0 bg-brand-500"
          style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
        />
        <input
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onMinChange(Math.min(Number(e.target.value), maxValue))}
          className={inputClass}
          style={{ height: thickness }}
        />
        <input
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onMaxChange(Math.max(Number(e.target.value), minValue))}
          className={inputClass}
          style={{ height: thickness }}
        />
      </div>
    </OrientationWrapper>
  );
}
