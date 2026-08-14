import { FormCard } from "./FormCard";

export function CampaignIntentionCard() {
  return (
    <FormCard
      title="Campaign Intention"
      description="Brand visuals - fonts, guideline, colors"
    >
      <textarea
        defaultValue="To get increase in sales"
        rows={3}
        className="min-h-[71px] w-full resize rounded-lg bg-bg-subtle p-2 text-sm text-fg-muted shadow-xs outline-none focus:ring-1 focus:ring-border-strong"
      />
      <input
        type="text"
        defaultValue="KORG, Yamaha, Synth Studio"
        className="flex min-h-9 w-full items-center rounded-lg bg-bg-subtle px-3 py-[7.5px] text-sm text-fg-muted shadow-xs outline-none focus:ring-1 focus:ring-border-strong"
      />
      <input
        type="text"
        defaultValue="Young adults, mid aged"
        className="flex min-h-9 w-full items-center rounded-lg bg-bg-subtle px-3 py-[7.5px] text-sm text-fg-muted shadow-xs outline-none focus:ring-1 focus:ring-border-strong"
      />
    </FormCard>
  );
}
