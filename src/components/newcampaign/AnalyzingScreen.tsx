import { ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import prismGlow from "../../assets/prism-glow.png";

export function AnalyzingScreen() {
  return (
    <div className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden">
      <img
        src={prismGlow}
        alt=""
        aria-hidden
        className="animate-prism-glow pointer-events-none w-full max-w-[1100px] shrink-0 mix-blend-screen"
      />

      <Link
        to="/new-campaign/results"
        className="absolute bottom-[84px] left-1/2 flex -translate-x-1/2 items-stretch"
      >
        <div className="flex items-center justify-center bg-brand-500/50 p-3">
          <Sparkles className="size-5 text-white" />
        </div>
        <div className="flex items-center gap-7 bg-white/15 p-3">
          <div className="flex flex-col gap-2.5 text-left">
            <p className="text-2xl font-medium text-foreground">
              MBS is analyzing....
            </p>
            <p className="text-[13px] text-foreground">
              Eiusmod sunt consequat in laboris non veniam eu.
            </p>
          </div>
          <ChevronDown className="size-5 shrink-0 text-foreground" />
        </div>
      </Link>
    </div>
  );
}
