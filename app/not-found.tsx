export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <section className="relative max-w-xl w-full text-center pixel-borders scanline bg-card/80 backdrop-blur-sm p-8 md:p-10">
        <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          <span className="">Error&nbsp;404</span>
          <span className="h-px w-8 bg-border" />
        </div>

        <h1 className=" text-3xl md:text-4xl font-semibold mb-4">
          Page not found.
        </h1>

        <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
          Looks like this part of the network hasn&apos;t been mapped yet.
          The route you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium
                       bg-primary text-primary-foreground hover:bg-primary/90
                       transition-colors duration-200 glow-subtle"
          >
            Return to home
          </a>
        </div>

        <div className="mt-8 text-[11px] text-muted-foreground/80">
          <span className="font-mono">
            &gt;_ trace route: <span className="text-accent">/404</span>
          </span>
        </div>

        {/* Corner pixels for extra retro feel */}
        <span className="pointer-events-none absolute inset-0 border border-border mix-blend-soft-light" />
      </section>
    </main>
  );
}
