// app/global-error.tsx
'use client';

import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <main className="min-h-screen flex items-center justify-center px-4">
          <section className="relative max-w-xl w-full text-center pixel-borders scanline bg-card/80 backdrop-blur-sm p-8 md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              <span>Unexpected&nbsp;Error</span>
              <span className="h-px w-8 bg-border" />
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Something went wrong.
            </h1>

            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              The system encountered an issue while rendering this page.
              You can try again, or head back to a safe route.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => reset()}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium
                           bg-primary text-primary-foreground hover:bg-primary/90
                           transition-colors duration-200 glow-subtle"
              >
                Retry
              </button>

              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium
                           border border-border text-foreground bg-card/60 hover:bg-card
                           transition-colors duration-200 pixel-borders"
              >
                Go to home
              </a>
            </div>

            <div className="mt-8 text-[11px] text-muted-foreground/80">
              <span className="font-mono">
                &gt;_ error digest:{' '}
                <span className="text-accent">
                  {error.digest ?? 'unknown'}
                </span>
              </span>
            </div>

            <span className="pointer-events-none absolute inset-0 border border-border mix-blend-soft-light" />
          </section>
        </main>
      </body>
    </html>
  );
}
