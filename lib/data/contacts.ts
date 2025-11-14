// lib/data/contacts.ts
import type { ContactSection } from "@/lib/types/contact";

export const CONTACT_SECTIONS: ContactSection[] = [
  {
    title: "Code",
    items: [
      { id: "github", label: "GitHub", href: "https://github.com/death-tail", icon: "github", external: true },
      { id: "resume", label: "Resume", href: "/resume/Dyari Ali - Web Developer.pdf", icon: "pdf", external: true },
    ],
  },
  {
    title: "Social",
    items: [
      { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/dyarialitahir", icon: "linkedin", external: true },
      { id: "instagram", label: "Instagram", href: "https://instagram.com/dyari_ali_taher", icon: "instagram", external: true },
      { id: "twitter", label: "Twitter/X", href: "https://twitter.com/Death_Tail0331", icon: "X", external: true },
      { id: "discord", label: "Discord", href: "https://discord.com/users/death_tail", icon: "discord", external: true },
    ],
  },
  {
    title: "Direct",
    items: [
      { id: "email", label: "Email", href: "mailto:dyarialitaher03@gmail.com", icon: "email" },
      { id: "phone", label: "Phone", href: "tel:+9648959395", icon: "phone" },
    ],
  },
];
