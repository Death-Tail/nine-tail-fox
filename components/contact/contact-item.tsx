// components/contact/contact-item.tsx
import Link from "next/link";
import { ContactIcon } from "./contact-icons";
import type { ContactItem as ContactItemType } from "@/lib/types/contact";

export function ContactItem({ item }: { item: ContactItemType }) {
  const { href, label, icon, external } = item;
  const common =
    "w-full inline-flex items-center gap-2 justify-center px-3 py-2 border-2 border-border " +
    "bg-secondary hover:bg-primary/10 text-[9px] md:text-[10px] text-foreground " +
    "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={common}>
        <ContactIcon name={icon} className="size-3.5" />
        <span>{label}</span>
      </a>
    );
  }

  const isMail = href.startsWith("mailto:");
  const isTel = href.startsWith("tel:");

  if (isMail || isTel || href.startsWith("http")) {
    return (
      <a href={href} className={common}>
        <ContactIcon name={icon} className="size-3.5" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={common}>
      <ContactIcon name={icon} className="size-3.5" />
      <span>{label}</span>
    </Link>
  );
}
