import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills(){
  return(
    <div>
      <Card className="p-4 md:p-5 bg-card border-2 border-border">
              <h2 className="text-xs md:text-sm text-primary mb-3 glow-text">{"[ABILITIES]"}</h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "REACT",
                  "NEXT.JS",
                  "TYPESCRIPT",
                  "TAILWIND",
                  "NODE.JS",
                  "FIREBASE",
                  "PIXEL ART",
                  "UI/UX",
                  "ANIMATION",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-[7px] md:text-[8px] px-2 py-0.5 bg-secondary border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Stats Section */}
            <Card className="p-4 md:p-5 bg-card border-2 border-border mt-4">
              <h2 className="text-xs md:text-sm text-primary mb-3 glow-text">{"[STATS]"}</h2>
              <div className="space-y-3">
                {/* Attack Stat */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] text-accent">ATTACK</span>
                    <span className="text-[9px] text-primary">95</span>
                  </div>
                  <div className="h-2 bg-secondary border border-border overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 glow-bar"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                {/* Defense Stat */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] text-accent">DEFENSE</span>
                    <span className="text-[9px] text-primary">88</span>
                  </div>
                  <div className="h-2 bg-secondary border border-border overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 glow-bar"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>

                {/* Speed Stat */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] text-accent">SPEED</span>
                    <span className="text-[9px] text-primary">92</span>
                  </div>
                  <div className="h-2 bg-secondary border border-border overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 glow-bar"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                {/* Magic Stat */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] text-accent">MAGIC</span>
                    <span className="text-[9px] text-primary">99</span>
                  </div>
                  <div className="h-2 bg-secondary border border-border overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 glow-bar"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
    </div>
  )
}
