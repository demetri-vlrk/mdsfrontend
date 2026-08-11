export const ICON_GRADIENT_ID = "campaign-icon-gradient";

export function IconGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient
          id={ICON_GRADIENT_ID}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="24"
          x2="24"
          y2="0"
        >
          <stop offset="0%" stopColor="#00aaff" />
          <stop offset="45%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#ffc53f" />
          <stop offset="100%" stopColor="#ff4800" />
        </linearGradient>
      </defs>
    </svg>
  );
}
