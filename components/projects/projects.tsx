import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <Card className="p-4 md:p-5 bg-card border-2 border-border">
      <h2 className="text-xs md:text-sm text-primary">
        [QUEST LOG]
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Card>
  );
}
