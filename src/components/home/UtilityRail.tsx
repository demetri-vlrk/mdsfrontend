import { MessageSquareText, Settings } from "lucide-react";

export function UtilityRail({
  onChatClick,
}: {
  onChatClick?: () => void;
}) {
  return (
    <aside className="relative flex w-14 shrink-0 flex-col items-start gap-px border-l border-border-subtle px-2 py-3">
      <button
        type="button"
        aria-label="Open chat"
        onClick={onChatClick}
        className="flex h-8 items-center gap-2 rounded-md px-3 py-1 text-sidebar-foreground hover:bg-white/5"
      >
        <MessageSquareText className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Settings"
        className="flex h-8 items-center gap-2 rounded-md bg-sidebar-accent px-3 py-1 text-sidebar-foreground"
      >
        <Settings className="size-4" />
      </button>
    </aside>
  );
}
