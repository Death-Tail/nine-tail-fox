import { StatusBadge } from "@/components/common/status-badge";
import { LinkButton } from "@/components/common/link-button";
import type { Project } from "@/lib/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    desc,
    status,
    tech,
    projectUrl,
    sourceUrl,
    projectDisabled,
    sourceDisabled,
  } = project;

  return (
    <div className="p-3 bg-secondary border-2 border-border hover:border-primary transition-colors group h-fit">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-[16px] md:text-[15px] text-accent transition-all">
          {title}
        </h3>
        <StatusBadge status={status} />
      </div>

      <p className="text-[10px] text-muted-foreground leading-relaxed mb-2">
        {desc}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {tech.map((t, idx) => (
          <span
            key={`${title}-tech-${idx}`}
            className="text-[9px] px-1.5 py-0.5 bg-muted text-muted-foreground border border-border"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <LinkButton
          href={projectUrl}
          disabled={projectDisabled || !projectUrl}
          label="VIEW_PROJECT"
          className="flex-1 h-7 text-[9px] bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
        />
        <LinkButton
          href={sourceUrl}
          disabled={sourceDisabled || !sourceUrl}
          label="VIEW_SOURCE"
          variant="outline"
          className="flex-1 h-7 text-[9px] border-2 border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
        />
      </div>
    </div>
  );
}
