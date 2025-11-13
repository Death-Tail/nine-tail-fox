import { Footer } from "@/components/footer";
import Profile from "@/components/profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background scanline">
      {/* Decorative pixel borders */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/20"></div>
        <div className="absolute top-0 left-0 w-2 h-full bg-primary/20"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-primary/20"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="container mx-auto p-3 md:p-4 lg:p-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
        <Profile/>

        <Footer/>
        </div>
      </div>
    </div>
  );
}
