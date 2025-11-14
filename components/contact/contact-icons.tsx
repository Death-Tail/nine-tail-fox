// components/contact/contact-icons.tsx
import {
  Phone, Globe
} from "lucide-react";
import { SiDiscord, SiInstagram, SiX, SiGithub, SiLinkedin, SiGmail, SiPaperlessngx   } from "react-icons/si";
import type { ContactIconName } from "@/lib/types/contact";

const MAP: Record<ContactIconName, React.ComponentType<{ className?: string }>> = {
  github: SiGithub,
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  discord: SiDiscord,
  X: SiX,
  email: SiGmail,
  pdf: SiPaperlessngx,
  phone: Phone,
  website: Globe,
};

export function ContactIcon({ name, className }: { name?: ContactIconName; className?: string }) {
  const Cmp = name ? MAP[name] : Globe;
  return <Cmp className={className} aria-hidden="true" />;
}
