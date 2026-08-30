import { Outlet } from "react-router-dom";
import { TopNav } from "../TopNav";
import { Sidebar } from "../Sidebar";
import { Prism } from "../Prism";

export function NewCampaignStepLayout() {
  return (
    <div className="min-h-svh bg-bg-canvas">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="relative flex min-h-[calc(100svh-64px)] flex-1 items-center justify-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[calc(78%-733.46px)] aspect-video w-[2750px] max-w-none -translate-x-1/2 opacity-70 mix-blend-screen"
          >
            <Prism
              animationType="rotate"
              timeScale={0.3}
              height={3.5}
              baseWidth={5.5}
              scale={1.5}
              noise={0.03}
              glow={0.6}
            />
          </div>

          <div className="relative z-10 px-4 [zoom:1.08]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
