import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import { ContactSections } from "@/components/contact/contact-sections";
import { CONTACT_SECTIONS } from "@/lib/data/contacts";


export default function Profile() {
  return (
    <div>
      <div className="relative z-10 space-y-4">
        {/* Avatar with Kitsune */}
        <div className="relative w-36 h-40 md:w-40 md:h-36 mx-auto">
          <Image
            src="/LG.webp"
            alt="Nine-Tailed Fox"
            width={200}
            height={200}
            className="pixelated relative z-10"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center space-y-2">
          <h1 className="text-lg md:text-xl text-primary leading-relaxed">{"Dyari Ali Tahir"}</h1>
          <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">{">CS Graduated"}</p>
          <div className="h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        </div>

        {/* Bio */}
        <div className="space-y-3">
          <p className="text-[9px] md:text-[10px] leading-relaxed text-card-foreground">
            {
              "Full-Stack Developer working with Nextjs, Typescript, Tailwind CSS, sometimes i work with WP, Flutter."
            }
          </p>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[9px]">
              <span className="text-primary">{">"}</span>
              <span className="text-muted-foreground">{"Age: 22"}</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <span className="text-primary">{">"}</span>
              <span className="text-muted-foreground">{"addiction: caffeine"}</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <span className="text-primary">{">"}</span>
              <span className="text-muted-foreground">{"Currently: Homeless"}</span>
            </div>
          </div>
        </div>

        {/* Contact/Socials - Bottom */}
        <ContactSections sections={CONTACT_SECTIONS} />
      </div>
    </div>
  )
}
