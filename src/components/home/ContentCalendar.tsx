import { SectionHeader } from "./SectionHeader";

const DAYS = [
  { label: "M", date: "12" },
  { label: "T", date: "13" },
  { label: "W", date: "14" },
  { label: "T", date: "15", active: true },
  { label: "F", date: "16" },
  { label: "S", date: "17" },
  { label: "S", date: "18" },
];

export function ContentCalendar() {
  return (
    <div className="flex w-full flex-1 flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title="Content Calendar" />
      <div className="flex w-full items-start border border-border">
        {DAYS.map((day, i) => (
          <div
            key={i}
            className={`flex flex-1 flex-col items-center gap-2 p-4 ${
              i > 0 ? "border-l border-border" : ""
            } ${day.active ? "bg-primary text-primary-foreground" : ""}`}
          >
            <p
              className={`text-xs ${day.active ? "" : "text-muted-foreground"}`}
            >
              {day.label}
            </p>
            <p
              className={`text-sm ${day.active ? "" : "text-foreground"}`}
            >
              {day.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
