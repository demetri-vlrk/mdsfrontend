import { SectionHeader } from "../SectionHeader";
import creativeThumb from "../../assets/creative-thumb.png";

type ReviewItem = {
  name: string;
  creator: string;
  status: string;
  urgent?: boolean;
};

const ITEMS: ReviewItem[] = [
  { name: "Summer Video v2", creator: "Created by Space", status: "Pending" },
  { name: "Summer Video v2", creator: "Created by Space", status: "Pending" },
  { name: "Hero Banner Redesign", creator: "Created by Varak", status: "Urgent", urgent: true },
  { name: "Hero Banner Redesign", creator: "Created by Varak", status: "Urgent", urgent: true },
];

export function CreativeReview() {
  return (
    <div className="flex h-full flex-1 flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title="Creative Review" badge="3+ New" />
      <div className="flex w-full flex-col items-start border-t border-border">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="flex w-full items-center gap-4 border-x border-b border-border p-6"
          >
            <img
              src={creativeThumb}
              alt=""
              className="size-10 shrink-0 rounded-md object-cover"
            />
            <div className="flex flex-1 flex-col items-start gap-1 text-sm font-medium min-w-0">
              <p className="w-full text-foreground">{item.name}</p>
              <p className="w-full text-muted-foreground">{item.creator}</p>
            </div>
            <p
              className={`shrink-0 text-sm font-medium ${item.urgent ? "text-destructive" : "text-muted-foreground"}`}
            >
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
