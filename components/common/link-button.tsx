// components/common/link-button.tsx
import { Button } from "@/components/ui/button";

type LinkButtonProps = {
  href?: string;
  label: string;
  variant?: "default" | "outline";
  className?: string;
  disabled?: boolean;
};

export function LinkButton({
  href,
  label,
  variant = "default",
  className = "",
  disabled,
}: LinkButtonProps) {
  const isDisabled = disabled || !href;

  if (isDisabled) {
    return (
      <Button
        disabled
        variant={variant}
        className={className}
        size="sm"
        aria-disabled="true"
      >
        {label}
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} className={className} size="sm">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </Button>
  );
}
