const DOTS: [number, number][] = [
  [16.5, 0],
  [33.01, 16.5],
  [16.5, 8.25],
  [24.75, 16.5],
  [24.75, 24.75],
  [24.75, 8.25],
  [16.5, 16.5],
  [16.5, 24.75],
  [8.25, 16.5],
  [8.25, 24.75],
  [8.25, 8.25],
  [16.5, 33.01],
  [0, 16.5],
];

export function AnalyzingIcon() {
  return (
    <div className="relative size-[38.98px] shrink-0">
      {DOTS.map(([left, top], i) => (
        <div
          key={i}
          className="absolute size-[5.976px] bg-white"
          style={{ left, top }}
        />
      ))}
    </div>
  );
}
