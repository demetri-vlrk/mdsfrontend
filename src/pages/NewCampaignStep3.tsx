import { TopNav } from "../components/TopNav";
import { Sidebar } from "../components/Sidebar";
import { FinalCheckForm } from "../components/newcampaign/FinalCheckForm";
import prismGlow2 from "../assets/prism-glow-2.png";

export function NewCampaignStep3() {
  return (
    <div className="min-h-svh bg-background">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="relative flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center overflow-hidden">
          <img
            src={prismGlow2}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[78%] w-[2100px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-screen"
          />

          <div className="relative z-10 px-4">
            <FinalCheckForm />
          </div>
        </main>
      </div>
    </div>
  );
}
