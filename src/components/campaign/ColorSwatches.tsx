export function ColorSwatches({ colors }: { colors: string[] }) {
  return (
    <div className="flex w-full items-start gap-1 shadow-xs">
      {colors.map((color, i) => (
        <div key={i} className="size-[71.4px]" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}
