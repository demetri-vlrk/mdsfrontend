import projectThumb from "../assets/project-thumb.png";

export function ProjectCard({
  name,
  created,
  className = "",
}: {
  name: string;
  created: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex w-full flex-col items-start justify-end overflow-hidden border border-border p-8 ${className}`}
    >
      <img
        src={projectThumb}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black" />
      <div className="relative flex w-full flex-col items-start text-foreground">
        <p className="w-full overflow-hidden text-ellipsis text-2xl leading-[28.8px] font-semibold tracking-[-1px]">
          {name}
        </p>
        <p className="w-full text-xs leading-4">{created}</p>
      </div>
    </div>
  );
}
