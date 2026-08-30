import { ChevronDown } from "lucide-react";
import { MbsLogo } from "./MbsLogo";
import { Avatar } from "./ui/Avatar";

// Figma's MBS Top Nav (node 301:33779) is a white bar, but this app is
// dark-only elsewhere (Sidebar included), so this uses the app's own dark
// tokens instead of Figma's literal light colors — reverted from an
// earlier white version per explicit feedback that it should match.
export function TopNav() {
  return (
    <header className="flex w-full items-center justify-between border-b border-border-subtle bg-bg-canvas px-[16px] py-[12px]">
      <div className="flex items-center gap-[16px]">
        <MbsLogo className="h-[19.593px] w-[64.189px] text-fg-default" />
        <button
          type="button"
          className="flex items-center gap-[4px] text-[14px] text-fg-muted hover:text-fg-default"
        >
          My Org Name
          <ChevronDown className="size-[12px]" />
        </button>
      </div>
      <Avatar initials="RK" size="default" />
    </header>
  );
}
