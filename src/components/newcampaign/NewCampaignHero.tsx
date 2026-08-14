import { useState } from "react";
import { ArrowRight, ImagePlus } from "lucide-react";
import prismGlow from "../../assets/prism-glow.png";

export function NewCampaignHero() {
  const [url, setUrl] = useState("alphalpha.com");

  return (
    <div className="relative flex w-full flex-1 flex-col items-center overflow-hidden pt-16">
      <img
        src={prismGlow}
        alt=""
        aria-hidden
        className="animate-prism-glow pointer-events-none w-full max-w-[1100px] shrink-0 mix-blend-screen"
      />

      <div className="relative z-10 -mt-44 flex w-full flex-col items-center gap-8 px-4 pb-20">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h1 className="max-w-[540px] text-[64px] leading-none font-medium tracking-[-1.28px] text-foreground">
            Build your whole campaign at shot!
          </h1>
          <p className="max-w-[460px] text-base leading-[1.2] text-muted-foreground">
            Build your entire campaign by entering a few details about your
            product.
            <br />
            Click <span className="underline">here</span> to learn more about
            how it works.
          </p>
        </div>

        <div className="flex w-full max-w-[575px] flex-col items-center gap-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="gradient-border flex w-full items-center justify-between p-3"
          >
            <div className="flex flex-1 items-center gap-1 text-xl">
              <span className="text-muted-foreground">https://www.</span>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-transparent text-foreground outline-none"
              />
            </div>
            <button
              type="submit"
              aria-label="Submit"
              className="flex items-center justify-center p-3.5 text-foreground"
            >
              <ArrowRight className="size-5" />
            </button>
          </form>

          <button
            type="button"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            Or
            <ImagePlus className="size-4 text-foreground" />
            <span className="text-foreground">Start with Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}
