// lib/types/project.ts
export type ProjectStatus = "COMPLETE" | "IN_PROGRESS";

export type Project = {
  title: string;
  desc: string;
  status: ProjectStatus;
  tech: string[];
  projectUrl?: string;
  sourceUrl?: string;
  projectDisabled?: boolean;
  sourceDisabled?: boolean;
};
