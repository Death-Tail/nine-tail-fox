// lib/types/contact.ts
export type ContactIconName =
  | "github"
  | "linkedin"
  | "instagram"
  | "discord"
  | "X"
  | "email"
  | "pdf"
  | "phone"
  | "website";

export type ContactItem = {
  id: string;            // unique key
  label: string;         // visible text
  href: string;          // mailto:, tel:, https://...
  icon?: ContactIconName;
  external?: boolean;    // open in new tab if true
};

export type ContactSection = {
  title: string;         // e.g., "Code", "Social", "Direct"
  items: ContactItem[];
};
