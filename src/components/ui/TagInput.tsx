import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { FieldLabel } from "./FieldLabel";
import { Tag } from "./Tag";

export function TagInput({
  label,
  tags,
  onAdd,
  onRemove,
}: {
  label: string;
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (tag: string) => void;
}) {
  const [draft, setDraft] = useState("");

  const addTag = (raw: string) => {
    const trimmed = raw.trim();
    if (trimmed && !tags.includes(trimmed)) onAdd(trimmed);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.includes(",")) {
      setDraft(value);
      return;
    }
    const segments = value.split(",");
    const remainder = segments.pop() ?? "";
    segments.forEach(addTag);
    setDraft(remainder);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(draft);
      setDraft("");
    }
  };

  const handleBlur = () => {
    if (draft.trim()) {
      addTag(draft);
      setDraft("");
    }
  };

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <FieldLabel>{label}</FieldLabel>
      <div className="flex h-12 w-full items-center gap-2.5 overflow-x-auto border border-white/25 px-3">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} onRemove={() => onRemove(tag)} />
        ))}
        <input
          value={draft}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={tags.length === 0 ? "Add a name, comma-separated" : ""}
          className="min-w-[100px] flex-1 bg-transparent text-sm text-fg-default outline-none placeholder:text-fg-muted"
        />
      </div>
    </div>
  );
}
