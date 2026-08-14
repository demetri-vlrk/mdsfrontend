const WIDTH = 694;
const HEIGHT = 240;

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildSpikyPath(seed: number, points: number, minY: number, maxY: number) {
  const rand = mulberry32(seed);
  const step = WIDTH / (points - 1);
  const coords: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const x = i * step;
    const y = minY + rand() * (maxY - minY);
    coords.push([x, y]);
  }
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return `${line} L${WIDTH},${HEIGHT} L0,${HEIGHT} Z`;
}

function buildSmoothPath(seed: number, points: number, minY: number, maxY: number) {
  const rand = mulberry32(seed);
  const step = WIDTH / (points - 1);
  const coords: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const x = i * step;
    const y = minY + rand() * (maxY - minY);
    coords.push([x, y]);
  }
  let d = `M${coords[0][0].toFixed(1)},${coords[0][1].toFixed(1)}`;
  for (let i = 1; i < coords.length; i++) {
    const [px, py] = coords[i - 1];
    const [x, y] = coords[i];
    const mx = (px + x) / 2;
    d += ` Q${px.toFixed(1)},${py.toFixed(1)} ${mx.toFixed(1)},${((py + y) / 2).toFixed(1)}`;
  }
  const [lx, ly] = coords[coords.length - 1];
  d += ` L${lx.toFixed(1)},${ly.toFixed(1)}`;
  d += ` L${WIDTH},${HEIGHT} L0,${HEIGHT} Z`;
  return d;
}

const balancePath = buildSmoothPath(7, 12, 30, 150);
const creditsPath = buildSpikyPath(42, 60, 60, 235);

export function CreditUsageChart() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="h-[240px] w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d={balancePath} className="fill-fg-muted/30" />
      <path d={creditsPath} className="fill-fg-default/90" />
    </svg>
  );
}
