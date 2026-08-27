export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">ZAINOVA / Dubai</p>
            <p className="mt-5 max-w-lg font-sans text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
              Built for the next useful thing.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a href="https://wa.me/971588311228?text=Hello%20ZAINOVA%2C%20I%27d%20like%20to%20request%20a%20business%20proposal." target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-accent px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground">
              Request a business conversation <span className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
            <a href="mailto:hello@zainova.com" className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground">
              hello@zainova.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>One small studio / many useful systems</span>
          <span>{year} / ZAINOVA®</span>
        </div>
      </div>
    </footer>
  )
}
