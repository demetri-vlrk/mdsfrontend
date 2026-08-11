const SIZE = 98;
const STROKE = 4.9;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function CircularProgress({
  percent,
  label,
}: {
  percent: number;
  label: string;
}) {
  const offset = CIRCUMFERENCE * (1 - percent / 100);

  return (
    <div className="flex flex-col items-center gap-3 p-3">
      <div className="relative size-[97.719px]">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="size-full -rotate-90"
          aria-hidden
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            className="stroke-secondary"
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="stroke-foreground"
          />
        </svg>
        <p className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-foreground">
          {percent}%
        </p>
      </div>
      <p className="text-sm text-foreground">{label}</p>
    </div>
  );
}
