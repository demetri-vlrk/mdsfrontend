import { Package } from "lucide-react";
import { CardHeading } from "../campaign/CardHeading";

const TIMELINE = [
  { phase: "Phase 1", label: "Teaser Roll out", date: "Oct 24" },
  { phase: "Phase 2", label: "Launch", date: "Oct 24" },
  { phase: "Phase 3", label: "Lorem Ipsum", date: "Oct 24" },
  { phase: "Phase 4", label: "Lorem Ipsum", date: "Oct 24" },
  { phase: "Phase 5", label: "Lorem Ipsum", date: "Oct 24" },
];

const COMPETITORS = Array.from({ length: 4 }, () => ({
  name: "Yamaha",
  marketShare: "+22%",
  keyAdvantage:
    "Eiusmod sunt consequat in laboris non veniam eu. Id nisi duis officia magna veniam aliqua sunt laborum aute elit officia.",
  counterStrategy: "Eiusmod sunt consequat in laboris non veniam eu.",
}));

export function TimelineBenchmarkRow() {
  return (
    <div className="flex w-full items-stretch px-8">
      <div className="flex w-[442px] shrink-0 flex-col gap-6 border border-border-subtle p-4">
        <CardHeading icon={Package} title="Campaign Timeline" />
        <div className="flex w-full flex-col gap-5">
          {TIMELINE.map((item, i) => (
            <div key={i} className="flex w-full flex-col gap-1">
              <p className="text-xs text-fg-muted">{item.phase}</p>
              <div className="flex w-full items-start gap-2.5">
                <p className="flex-1 text-[17px] font-medium text-fg-default">
                  {item.label}
                </p>
                <p className="text-xs text-fg-default">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 border border-border-subtle p-4">
        <CardHeading icon={Package} title="Competitive Benchmark" />
        <div className="grid grid-cols-2 gap-2.5">
          {COMPETITORS.map((c, i) => (
            <div key={i} className="flex h-[170px] gap-2.5 bg-[#1a1a1a] p-4">
              <div className="flex w-[191px] shrink-0 flex-col justify-between gap-2.5">
                <p className="text-[17px] font-medium text-fg-default">
                  {c.name}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-fg-muted">
                    Market Share
                  </p>
                  <p className="text-4xl leading-none font-semibold tracking-[-1.5px] text-fg-default">
                    {c.marketShare}
                  </p>
                </div>
              </div>
              <div className="flex w-[191px] shrink-0 flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-fg-muted">
                    Key Advantage
                  </p>
                  <p className="text-xs text-fg-default">{c.keyAdvantage}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-fg-muted">
                    Counter Stragety
                  </p>
                  <p className="text-xs text-fg-default">
                    {c.counterStrategy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
