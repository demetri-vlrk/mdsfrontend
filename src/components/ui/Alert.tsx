import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button, type ButtonVariant } from "./Button";

export type AlertVariant = "neutral" | "primary" | "danger";

type AlertVariantSpec = {
  bg: string;
  text: string;
  dismissBg: string;
  dismissIcon: string;
  actionVariant: ButtonVariant;
};

// From the MBS Figma design system (node 864:1825). The action button
// always contrasts against its alert's background — a colorful Primary
// button on the white Neutral alert, but a light Secondary button on the
// colorful Primary/Danger alerts — so it reuses our real Button component
// with a different variant per case rather than one fixed style.
const VARIANT_STYLES: Record<AlertVariant, AlertVariantSpec> = {
  neutral: {
    bg: "bg-white",
    text: "text-[#1f1f1f]",
    dismissBg: "bg-[#d4d4d4]",
    dismissIcon: "text-[#1f1f1f]",
    actionVariant: "primary",
  },
  primary: {
    bg: "bg-brand-500",
    text: "text-white",
    dismissBg: "bg-brand-400",
    dismissIcon: "text-white",
    actionVariant: "secondary",
  },
  danger: {
    bg: "bg-[#c32929]",
    text: "text-white",
    dismissBg: "bg-[#ff9ba1]",
    dismissIcon: "text-white",
    actionVariant: "secondary",
  },
};

type AlertProps = {
  variant?: AlertVariant;
  icon?: ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  className?: string;
};

export function Alert({
  variant = "neutral",
  icon,
  title,
  description,
  actionLabel,
  onAction,
  onDismiss,
  className,
}: AlertProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={`flex w-full items-stretch ${className ?? ""}`}>
      <div className={`flex flex-1 items-center gap-[12px] px-[12px] py-[12px] ${styles.bg}`}>
        {icon && (
          <span className={`flex h-[32px] w-[24px] shrink-0 items-center justify-center ${styles.text}`}>
            {icon}
          </span>
        )}
        <div className="flex flex-1 flex-col items-start justify-center gap-[12px]">
          <p className={`font-stack-text text-[16px] font-bold ${styles.text}`}>{title}</p>
          {description && <p className={`font-stack-text text-[16px] font-light ${styles.text}`}>{description}</p>}
        </div>
        {actionLabel && (
          <Button variant={styles.actionVariant} size="default" onClick={onAction} className="shrink-0">
            {actionLabel}
          </Button>
        )}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className={`flex size-[32px] shrink-0 items-center justify-center ${styles.dismissBg}`}
        >
          <X className={`size-[13px] ${styles.dismissIcon}`} />
        </button>
      )}
    </div>
  );
}
