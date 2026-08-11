import { Link } from "react-router-dom";

export function MediaCard({
  image,
  title,
  badge,
  className = "",
}: {
  image: string;
  title: string;
  badge: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex w-full flex-col items-start justify-end overflow-hidden border border-border p-6 ${className}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black" />
      <div className="relative flex w-full flex-col items-start gap-2.5 text-white">
        <p className="text-2xl leading-[28.8px] font-semibold tracking-[-1px]">
          {title}
        </p>
        <div className="flex w-full items-center gap-2">
          <span className="flex min-h-6 items-center justify-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
            {badge}
          </span>
          <Link
            to="/campaigns/op-1/images"
            className="flex min-h-6 items-center justify-center rounded-full bg-primary px-4 py-0.5 text-xs text-primary-foreground hover:bg-primary/90"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
