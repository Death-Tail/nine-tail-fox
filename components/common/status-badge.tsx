// components/common/status-badge.tsx
import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "@/lib/types/project";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const isComplete = status === "COMPLETE";
  const classes = isComplete
    ? "border-primary text-primary"
    : "border-accent text-accent";

  return (
    <Badge variant="outline" className={`text-[9px] px-1.5 py-0 ${classes}`}>
      {status}
    </Badge>
  );
}
