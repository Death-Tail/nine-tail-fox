// app/page.tsx (or pages/index.tsx)
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import Profile from "@/components/profile";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background scanline">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary/20" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/20" />
        <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
        <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />
      </div>

      <div className="container mx-auto p-3 md:p-4 lg:p-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
          <Card className="lg:col-span-4 p-4 md:p-5 bg-card border-2 border-border relative overflow-hidden flex flex-col">
            <Profile />
          </Card>

          <div className="lg:col-span-8 space-y-3 md:space-y-4">
            <Skills />
            <Projects />
          </div>

  <footer className="col-span-full mt-3 border-t border-border py-2 text-center">
    <Footer />
  </footer>
        </div>
      </div>
    </div>
  );
}
