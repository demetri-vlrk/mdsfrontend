import { Plus } from "lucide-react";
import { Modal } from "../Modal";
import brandLogo1 from "../../assets/brand-logo-1.png";
import brandLogo2 from "../../assets/brand-logo-2.png";

export function EditLogosModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal title="Edit Logos" onClose={onClose}>
      <div className="flex w-full items-stretch border border-border-subtle p-6">
        <div className="flex w-full items-start gap-4">
          <img
            src={brandLogo1}
            alt="Brand logo on light background"
            className="h-[364px] flex-1 object-cover"
          />
          <img
            src={brandLogo2}
            alt="Brand logo on dark background"
            className="h-[364px] flex-1 object-cover"
          />
          <div className="flex h-[364px] flex-1 flex-col items-center justify-center gap-3 border-2 border-border-subtle bg-bg-subtle p-6">
            <button
              type="button"
              className="flex w-full min-h-9 items-center justify-center gap-2 border-2 border-border-subtle bg-white/10 px-4 py-2 text-sm font-medium text-fg-default shadow-xs hover:bg-white/20"
            >
              <Plus className="size-4" />
              Upload logo
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
