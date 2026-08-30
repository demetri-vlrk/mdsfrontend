export function StepBadge({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-stretch">
      <span className="flex items-center bg-brand-500/50 p-3 font-stack-text text-base font-light text-brand-400">
        {step}
      </span>
      <span className="flex items-center bg-white/15 p-3 text-sm text-fg-default">
        {label}
      </span>
    </div>
  );
}
