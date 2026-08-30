import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ImagePlus } from "lucide-react";
import { Prism } from "../Prism";

export function NewCampaignHero() {
  const [url, setUrl] = useState("alphalpha.com");
  const navigate = useNavigate();

  return (
    <div className="relative flex w-full flex-1 flex-col items-center overflow-hidden pt-16 [zoom:1.08]">
      <div
        aria-hidden
        className="pointer-events-none aspect-video w-full max-w-[1100px] shrink-0 mix-blend-screen"
      >
        <Prism
          animationType="rotate"
          timeScale={0.3}
          height={3.5}
          baseWidth={5.5}
          scale={1.6}
          noise={0.03}
          glow={1}
        />
      </div>

      <div className="relative z-10 -mt-16 flex w-full flex-col items-center gap-8 px-4 pb-20">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h1 className="max-w-[540px] text-[64px] leading-none font-medium tracking-[-1.28px] text-fg-default">
            Build your whole campaign at shot!
          </h1>
          <p className="max-w-[460px] text-base leading-[1.2] text-fg-muted">
            Build your entire campaign by entering a few details about your
            product.
            <br />
            Click <span className="underline">here</span> to learn more about
            how it works.
          </p>
        </div>

        <div className="flex w-full max-w-[575px] flex-col items-center gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/new-campaign/step-1");
            }}
            className="gradient-border flex w-full items-center justify-between p-3"
          >
            <div className="flex flex-1 items-center gap-1 text-xl">
              <span className="text-fg-muted">https://www.</span>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-transparent text-fg-default outline-none"
              />
            </div>
            <button
              type="submit"
              aria-label="Submit"
              className="flex items-center justify-center p-3.5 text-fg-default"
            >
              <ArrowRight className="size-5" />
            </button>
          </form>

          <button
            type="button"
            className="flex items-center gap-1 text-xs text-fg-muted hover:text-fg-default"
          >
            Or
            <ImagePlus className="size-4 text-fg-default" />
            <span className="text-fg-default">Start with Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}
