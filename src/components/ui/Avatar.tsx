export type AvatarSize = "tiny" | "xs" | "small" | "default";

type AvatarSizeSpec = { box: string; text: string };

// Exact px values from the MBS Figma design system (node 864:120644).
// No border-radius, matching this design system's square corners
// elsewhere (Button, Input) — not a rounded avatar despite the usual
// convention.
const AVATAR_SIZES: Record<AvatarSize, AvatarSizeSpec> = {
  tiny: { box: "size-[16px]", text: "text-[12.8px] leading-[1.7] tracking-[0.384px]" },
  xs: { box: "size-[24px]", text: "text-[14.4px] leading-[1.5]" },
  small: { box: "size-[32px]", text: "text-[16px] leading-[1.5]" },
  default: { box: "size-[40px]", text: "text-[16px] leading-[1.5]" },
};

type AvatarProps = {
  initials: string;
  src?: string;
  size?: AvatarSize;
  className?: string;
};

// Figma's "Picture=On" variant just documents a placeholder silhouette
// image — here that's a real `src` prop instead, falling back to initials
// when no photo is supplied (the "Picture=Off" look).
export function Avatar({ initials, src, size = "default", className }: AvatarProps) {
  const sizeSpec = AVATAR_SIZES[size];

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-[#f6f6f6] font-stack-text font-light text-[#1f1f1f] ${sizeSpec.box} ${sizeSpec.text} ${className ?? ""}`}
    >
      {src ? (
        <img src={src} alt="" className="size-full object-cover" />
      ) : (
        <span className="w-full text-center">{initials}</span>
      )}
    </div>
  );
}
