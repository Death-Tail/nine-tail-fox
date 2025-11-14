// components/skills.tsx
import * as React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SKILLS } from "@/lib/data/skills";

const LABELS: Record<keyof typeof SKILLS, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  other: 'Other',
  hobby: 'hobby',
};

export function Skills() {
  return (
    <Card className="p-4 md:p- bg-card border-2 border-border">
      <h2 className="text-xs md:text-sm text-primary">
        [ABILITIES]
      </h2>

      {/* Same flex-wrap UI, with full-width headers per group */}
      <div className="flex flex-wrap gap-1.5">
        {(Object.keys(SKILLS) as (keyof typeof SKILLS)[]).map((key) => (
          <React.Fragment key={key}>
            <div className="w-full mt-1">
              <h3 className="text-[9px] md:text-[10px] tracking-wide text-primary/80">
                {LABELS[key]}
              </h3>
            </div>

            {SKILLS[key].map((tool) => (
              <Badge
                key={`${key}-${tool}`}
                variant="secondary"
                className="text-[9px] md:text-[10px] px-2 py-0.5 bg-secondary border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tool}
              </Badge>
            ))}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
}
