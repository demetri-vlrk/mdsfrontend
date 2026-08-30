import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label="Copy code"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="text-white/40 hover:text-white"
    >
      {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
    </button>
  );
}

function hexSwatch(value: string) {
  const match = value.match(/#[0-9a-fA-F]{3,8}/);
  if (!match) return null;
  return <span className="inline-block size-2.5 rounded-sm align-middle" style={{ background: match[0] }} />;
}

export function CodeCard({ title, lines }: { title: string; lines: [string, string][] }) {
  const text = lines.map(([prop, value]) => `${prop}: ${value};`).join("\n");

  return (
    <div className="rounded-lg border border-white/10 bg-[#232326] p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-white">{title}</span>
        <CopyButton text={text} />
      </div>
      <pre className="overflow-x-auto font-mono text-xs leading-6">
        {lines.map(([prop, value], i) => (
          <div key={prop} className="flex gap-3">
            <span className="w-3 shrink-0 select-none text-right text-white/25">{i + 1}</span>
            <span>
              <span className="text-[#c9a5f5]">{prop}</span>
              <span className="text-white/60">: </span>
              {hexSwatch(value)} <span className="text-[#7ee787]">{value}</span>
              <span className="text-white/60">;</span>
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}

export function InspectorPanel({
  label,
  layoutLines,
  styleLines,
  onClose,
}: {
  label: string;
  layoutLines: [string, string][];
  styleLines: [string, string][];
  onClose: () => void;
}) {
  return (
    <aside className="fixed top-24 right-8 z-10 flex w-80 flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium tracking-wide text-white/50 capitalize">{label}</span>
        <button type="button" onClick={onClose} className="text-xs text-white/40 hover:text-white">
          Close
        </button>
      </div>
      <CodeCard title="Layout" lines={layoutLines} />
      <CodeCard title="Style" lines={styleLines} />
    </aside>
  );
}
