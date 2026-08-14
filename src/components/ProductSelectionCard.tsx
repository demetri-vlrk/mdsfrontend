import { useState } from "react";
import { Check } from "lucide-react";
import { FormCard } from "./FormCard";
import { Chip } from "./Chip";

const PRODUCTS = ["OP-Z", "OP-1", "EP-133 KO II", "PO-12", "PO-20", "TX-6", "OB-4"];

export function ProductSelectionCard() {
  const [selected, setSelected] = useState("OP-1");

  return (
    <FormCard
      title="Product Selection"
      description="Product url - website, social url or product listing"
    >
      <div className="flex w-full items-center gap-2 rounded-lg bg-bg-subtle px-3 py-[7.5px] shadow-xs">
        <div className="flex flex-1 items-center gap-1">
          <span className="text-sm text-fg-muted">https://www.</span>
          <span className="text-sm text-fg-default">jansports.com</span>
        </div>
        <div className="flex size-5 shrink-0 items-center justify-center p-0.5">
          <div className="flex size-6 items-center justify-center rounded-full bg-lime-950 p-1">
            <Check className="size-4 text-lime-400" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-start gap-2.5">
        {PRODUCTS.map((product) => (
          <Chip
            key={product}
            active={product === selected}
            onClick={() => setSelected(product)}
          >
            {product}
          </Chip>
        ))}
        <Chip>More</Chip>
      </div>
    </FormCard>
  );
}
