// lib/data/projects.ts
import type { Project } from "@/lib/types/project";

const rawProjects: Project[] = [
  {
    title: "Rekan Group",
    desc: "A modern website featuring a multi-language platform, Headless CMS, and responsive design.",
    status: "COMPLETE",
    tech: ["Next.js", "Tailwind CSS", "", "MySQL"],
    projectUrl: "https://rekangroup.com",
  },
  {
    title: "Dr.Aram",
    desc: "A modern website featuring a multi-language platform, Headless CMS, and responsive design.",
    status: "IN_PROGRESS",
    tech: ["WORDPRESS", "PHP"],
    projectUrl: "https://draram.com",
  },
  {
    title: "Dr.Awara",
    desc: "A modern website featuring a modern responsive design, and SEO optimization",
    status: "IN_PROGRESS",
    tech: ["NextJs", "TYPESCRIPT", "TAILWIND"],
    projectUrl: "https://drawara.com"
  },
  {
    title: "Death Tail",
    desc: "Portfolio OS simulator with nine-tail and cyberpunk Theme vibes",
    status: "COMPLETE",
    tech: ["NextJs", "TYPESCRIPT", "TAILWIND"],
    projectUrl: "https://death-tail.vercel.app",
    sourceUrl: "https://github.com/Death-Tail/cyberpunk-portfolio"
  },
];

// Filter empty tech entries and normalize
const normalizeTech = (arr: string[]) =>
  arr.filter(Boolean).map((t) => t.trim());

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  tech: normalizeTech(p.tech),
}));
