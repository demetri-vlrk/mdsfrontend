import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Prism } from "../Prism";
import { AnalyzingIcon } from "./AnalyzingIcon";

export function AnalyzingScreen() {
  return (
    <div className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden [zoom:1.08]">
      <div
        aria-hidden
        className="pointer-events-none h-[850px] w-full max-w-[1100px] shrink-0 mix-blend-screen"
      >
        <Prism
          animationType="rotate"
          timeScale={0.3}
          height={3.5}
          baseWidth={5.5}
          scale={1.75}
          noise={0.03}
          glow={1.4}
        />
      </div>

      <Link
        to="/new-campaign/results"
        className="absolute bottom-[84px] left-1/2 flex -translate-x-1/2 items-stretch"
      >
        <div className="flex w-[85px] items-center justify-center bg-brand-500/50 p-3">
          <AnalyzingIcon />
        </div>
        <div className="flex items-center gap-[28px] bg-white/15 p-3">
          <div className="flex flex-col gap-2.5 text-left">
            <p className="font-stack-headline text-2xl font-medium text-fg-default">
              MBS is analyzing....
            </p>
            <p className="text-[13px] text-fg-default">
              Eiusmod sunt consequat in laboris non veniam eu.
            </p>
          </div>
          <ChevronDown className="size-[20px] shrink-0 text-fg-default" />
        </div>
      </Link>
    </div>
  );
}
