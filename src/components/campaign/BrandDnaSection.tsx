import { Package, TypeOutline, SwatchBook } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { CardHeading } from "./CardHeading";
import { FileList } from "./FileList";
import { ColorSwatches } from "./ColorSwatches";
import brandLogo1 from "../../assets/brand-logo-1.png";
import brandLogo2 from "../../assets/brand-logo-2.png";

const FONT_FILES = [
  { name: "Helvetica Neue", extensions: [".tff"] },
  { name: "Playfair Display", extensions: [".tff", ".woff2"] },
  { name: "Playfair Display", extensions: [".tff", ".woff2"] },
];

export function BrandDnaSection({
  title = "Brand DNA",
  showViewAll = true,
  viewAllHref,
}: {
  title?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-6 border border-border px-8 py-10">
      <SectionHeader title={title} showViewAll={showViewAll} viewAllHref={viewAllHref} />

      <div className="flex w-full items-stretch">
        <div className="flex flex-1 flex-col items-start gap-6 border border-border p-6">
          <CardHeading icon={Package} title="Brand Logos" />
          <div className="flex w-full flex-col items-start gap-3 border border-border">
            <img src={brandLogo1} alt="Brand logo on light background" className="w-full" />
            <img src={brandLogo2} alt="Brand logo on dark background" className="w-full" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start border border-border">
          <div className="w-full p-6">
            <CardHeading icon={TypeOutline} title="Brand Fonts" />
          </div>
          <FileList files={FONT_FILES} />
        </div>

        <div className="flex flex-1 flex-col items-stretch">
          <div className="flex flex-col items-start gap-6 border border-border p-6">
            <CardHeading icon={SwatchBook} title="Brand Colors" />
            <ColorSwatches colors={["#b96f14", "#3e2784", "#ffe045", "#d9d9d9"]} />
          </div>
          <div className="flex flex-col items-start border border-border">
            <div className="w-full p-6">
              <CardHeading icon={TypeOutline} title="Brand Documents" />
            </div>
            <FileList files={[{ name: "Brand guidelines", extensions: [".pdf"] }]} />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start border border-border">
          <div className="w-full p-6">
            <CardHeading icon={TypeOutline} title="Brand Videos" />
          </div>
          <FileList files={FONT_FILES} />
        </div>
      </div>
    </div>
  );
}
