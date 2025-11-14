// components/contact/contact-sections.tsx
import { Card } from "@/components/ui/card";
import { ContactSection } from "./contact-section";
import type { ContactSection as SectionType } from "@/lib/types/contact";

export function ContactSections({ sections }: { sections: SectionType[] }) {
  return (
    <Card className="p-4 md:p-5 bg-card border-2 border-border">
      <h2 className="text-xs md:text-sm text-primary mb-3">[CONTACT]</h2>
      <div className="space-y-3">
        {sections.map((s) => (
          <ContactSection key={s.title} section={s} />
        ))}
      </div>
    </Card>
  );
}
