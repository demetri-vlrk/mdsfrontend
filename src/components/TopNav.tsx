import { ChevronDown } from "lucide-react";
import { MbsLogo } from "./MbsLogo";
import { Avatar } from "./ui/Avatar";

// Intentionally light, unlike the rest of this dark-only app — the MBS
// Top Nav is a white bar per Figma (node 301:33779), by explicit choice.
export function TopNav() {
  return (
    <header className="flex w-full items-center justify-between border-b border-[#e5e5e5] bg-white px-[16px] py-[12px]">
      <div className="flex items-center gap-[16px]">
        <MbsLogo className="h-[19.593px] w-[64.189px] text-black" />
        <button
          type="button"
          className="flex items-center gap-[4px] text-[14px] text-[#737373] hover:text-[#1f1f1f]"
        >
          My Org Name
          <ChevronDown className="size-[12px]" />
        </button>
      </div>
      <Avatar initials="RK" size="default" />
    </header>
  );
}
