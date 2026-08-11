import { SectionHeader } from "./SectionHeader";

type ScheduleItem = {
  month: string;
  day: string;
  title: string;
  time: string;
  status: string;
  emphasized?: boolean;
};

const ITEMS: ScheduleItem[] = [
  { month: "Aug", day: "15", title: "Week 3", time: "10:00 AM", status: "Scheduled", emphasized: true },
  { month: "Aug", day: "18", title: "Q3 Assets Approval", time: "10:00 AM", status: "In Review" },
  { month: "Aug", day: "20", title: "Email Sequence Test", time: "10:00 AM", status: "Draft" },
  { month: "Aug", day: "22", title: "Final Launch Sync", time: "10:00 AM", status: "Scheduled", emphasized: true },
];

export function UpcomingSchedule() {
  return (
    <div className="flex h-full flex-1 flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title="Upcoming Schedule" badge="3+ New" />
      <div className="flex w-full flex-col items-start border border-border">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={`flex w-full items-center gap-4 px-6 py-4 ${i < ITEMS.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="flex w-12 shrink-0 flex-col items-center rounded-md bg-secondary p-1 text-secondary-foreground">
              <p className="text-xs">{item.month}</p>
              <p className="text-sm font-semibold">{item.day}</p>
            </div>
            <div className="flex flex-1 flex-col items-start gap-0.5 min-w-0">
              <p className="w-full text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="w-full text-xs text-muted-foreground">{item.time}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                item.emphasized
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
