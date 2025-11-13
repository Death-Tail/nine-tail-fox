import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"


export default function Profile() {
  return(
    <div>
        {/* Profile Section - Left Column */}
        <Card className="lg:col-span-4 p-4 md:p-5 bg-card border-2 border-border relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <Image src="/kitsune.png" alt="decoration" width={128} height={128} className="pixelated" />
            </div>

            <div className="relative z-10 space-y-4">
              {/* Avatar with Kitsune */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
                <Image
                  src="/kitsune.png"
                  alt="Nine-Tailed Fox"
                  width={160}
                  height={160}
                  className="pixelated relative z-10"
                />
              </div>

              {/* Name & Title */}
              <div className="text-center space-y-2">
                <h1 className="text-lg md:text-xl glow-text text-primary leading-relaxed">{"KITSUNE"}</h1>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">{"> PIXEL_DEVELOPER"}</p>
                <div className="h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
              </div>

              {/* Bio */}
              <div className="space-y-3">
                <p className="text-[9px] md:text-[10px] leading-relaxed text-card-foreground">
                  {
                    "Crafting digital experiences with the wisdom of nine tails. Specializing in pixel-perfect designs and mystical code."
                  }
                </p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[9px]">
                    <span className="text-primary">{">"}</span>
                    <span className="text-muted-foreground">{"LEVEL: 99"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px]">
                    <span className="text-primary">{">"}</span>
                    <span className="text-muted-foreground">{"ELEMENT: FIRE"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px]">
                    <span className="text-primary">{">"}</span>
                    <span className="text-muted-foreground">{"TAILS: 9"}</span>
                  </div>
                </div>
              </div>

              {/* Contact/Socials - Bottom */}
              <div className="pt-3 border-t-2 border-border">
                <h3 className="text-[10px] text-primary mb-3">{"[CONTACT]"}</h3>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-border group"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-[8px]">GITHUB</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-border group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-[8px]">LINKEDIN</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-border group"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="text-[8px]">INSTAGRAM</span>
                  </a>
                  <a
                    href="https://discord.com"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-border group"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <span className="text-[8px]">DISCORD</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-border group"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="text-[8px]">TWITTER</span>
                  </a>
                  <a
                    href="mailto:kitsune@dev.com"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-border group"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-[8px]">EMAIL</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
    </div>
  )
}
