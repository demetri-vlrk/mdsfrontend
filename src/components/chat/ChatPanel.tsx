import { Plus, X, Grid2x2Plus, ArrowUp } from "lucide-react";
import chatThumb1 from "../../assets/chat-thumb-1.png";
import chatThumb2 from "../../assets/chat-thumb-2.png";
import chatThumb3 from "../../assets/chat-thumb-3.png";
import chatThumb4 from "../../assets/chat-thumb-4.png";
import chatThumb5 from "../../assets/chat-thumb-5.png";

const HERO_THUMBS = [chatThumb1, chatThumb2, chatThumb3, chatThumb4, chatThumb5];

const TAGS = [
  "Mollit aliqua mollit esse elit minim proident consectetur.",
  "Ullamco ullamco labore duis sit est labore nisi nisi cillum nulla proident.",
  "Aliquip est aute sunt tempor.",
];

export function ChatPanel({ onClose }: { onClose: () => void }) {
  return (
    <aside className="flex h-[calc(100svh-4rem)] w-[524px] shrink-0 flex-col items-start border-l border-border-subtle bg-sidebar">
      <div className="flex w-full shrink-0 flex-col items-start border-b border-border-subtle p-6">
        <div className="flex w-full items-center justify-between">
          <p className="text-xl leading-6 font-semibold text-fg-default">
            Chat title
          </p>
          <div className="flex items-start gap-2.5">
            <button
              type="button"
              className="flex min-h-9 items-center justify-center gap-2 rounded-lg bg-bg-subtle px-4 py-2 text-sm font-medium text-fg-default hover:bg-bg-elevated"
            >
              <Plus className="size-4" />
              New Chat
            </button>
            <button
              type="button"
              aria-label="Close chat"
              onClick={onClose}
              className="flex min-h-9 items-center justify-center rounded-lg px-4 py-2 text-fg-default hover:bg-white/5"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col items-start gap-4 overflow-y-auto p-6">
        <div className="flex w-full flex-col items-end">
          <div className="rounded-xl bg-bg-subtle p-3">
            <p className="text-right text-sm text-fg-default/50">
              Can you list out all the hero images?
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-2.5">
          <p className="w-full text-sm text-fg-default/50">
            Sure.. You have 5 hero images. Listing them out for you.
          </p>
          <div className="flex w-full flex-wrap items-center gap-2.5">
            {HERO_THUMBS.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt=""
                className="h-[198px] w-[193px] rounded-lg object-cover"
              />
            ))}
          </div>
          <p className="w-full text-sm text-fg-default/50">
            Let me know if you want to make changes to the hero images
          </p>
        </div>

        <div className="flex w-full flex-col items-end gap-2.5">
          <div className="w-[312px] rounded-xl bg-bg-subtle p-3">
            <p className="text-sm text-fg-default/50">
              Can you add this image to the hero image and do the auto
              tagging for me
            </p>
          </div>
          <img
            src={chatThumb4}
            alt=""
            className="h-24 w-[94px] rounded object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-2 text-sm text-fg-default/50">
          <p>
            Sure.. I have added the image to the Hero selection. And I have
            automtically tagged them.
          </p>
          <div>
            <p>Tags -</p>
            <ul className="list-disc pl-[21px]">
              {TAGS.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full shrink-0 flex-col items-start gap-2.5 border-t border-border-subtle p-6">
        <input
          type="text"
          placeholder="Ask anything... use @ to reference to an element."
          className="w-full bg-transparent p-2.5 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/50 focus:outline-none"
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label="Add attachment"
              className="flex size-5 items-center justify-center text-fg-default hover:text-fg-muted"
            >
              <Plus className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Reference an element"
              className="flex size-5 items-center justify-center text-fg-default hover:text-fg-muted"
            >
              <Grid2x2Plus className="size-5" />
            </button>
          </div>
          <button
            type="button"
            aria-label="Send message"
            className="flex size-9 items-center justify-center rounded-full bg-accent-primary text-gray-0 hover:bg-accent-primaryhover"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
