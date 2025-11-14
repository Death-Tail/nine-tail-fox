import { SkillCategoryKey } from "../types/skills";

export const SKILLS: Record<SkillCategoryKey, string[]> = {
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  backend: ['Node.js', 'Express', 'Next.js API Routes'],
  database: ['PostgreSQL', 'MySQL', 'Prisma', 'Firebase', 'Supabase'],
  other: ['Github', 'CI/CD'],
  hobby: ['Unreal Engine', 'Blender', 'Aseprite'],
};
