import { Reveal } from './reveal'
import { ThemeSection } from './theme-section'

export function Dubai() {
  return (
    <ThemeSection theme="dark" className="relative border-t border-line px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <Reveal>
          <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Dubai
          </span>
          <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            United Arab Emirates
          </span>
        </Reveal>

        <Reveal delay={100}>
          <p className="max-w-xl text-balance font-sans text-3xl font-medium leading-[1.15] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-right lg:text-5xl">
            Building for businesses beyond borders.
          </p>
        </Reveal>
      </div>
    </ThemeSection>
  )
}
