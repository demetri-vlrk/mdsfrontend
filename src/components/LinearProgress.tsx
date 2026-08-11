export function LinearProgress({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-2 px-4">
      <p className="text-sm text-foreground">{label}</p>
      <div className="flex w-full items-center gap-2.5">
        <div className="h-2 w-full flex-1 overflow-hidden rounded-xl bg-border">
          <div
            className="h-full rounded-xl bg-primary"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="shrink-0 text-sm text-foreground">{percent}%</p>
      </div>
    </div>
  );
}
