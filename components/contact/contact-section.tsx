// components/contact/contact-section.tsx
import { ContactItem } from "./contact-item";
import type { ContactSection as SectionType } from "@/lib/types/contact";

export function ContactSection({ section }: { section: SectionType }) {
  return (
    <section aria-labelledby={`contact-${section.title}`}>
      <h3 id={`contact-${section.title}`} className="text-[10px] text-accent mb-2">
        [{section.title}]
      </h3>
      <ul role="list" className="grid grid-cols-2 gap-2">
        {section.items.map((it) => (
          <li key={it.id}>
            <ContactItem item={it} />
          </li>
        ))}
      </ul>
    </section>
  );
}
