'use client'

import { useScrollProgress } from '@/hooks/use-scroll-progress'

const STOPS = [
  { label: 'IDEA', at: 0.02 },
  { label: 'PRODUCT', at: 0.28 },
  { label: 'SYSTEM', at: 0.56 },
  { label: 'GROWTH', at: 0.86 },
]

export function ScrollLine() {
  const progress = useScrollProgress()

  return (
    <>
      {/* mobile: thin top progress bar */}
      <div className="fixed inset-x-0 top-0 z-40 h-px bg-line md:hidden" aria-hidden="true">
        <div
          className="h-full bg-accent"
          style={{ width: `${progress * 100}%`, transition: 'width 80ms linear' }}
        />
      </div>

      {/* desktop: vertical route line with labeled stops */}
      <div
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-0 lg:flex"
        aria-hidden="true"
      >
        <div className="relative h-[38vh] w-px bg-line">
          <div
            className="absolute inset-x-0 top-0 bg-accent"
            style={{ height: `${progress * 100}%`, transition: 'height 80ms linear' }}
          />
          {STOPS.map((stop) => (
            <div
              key={stop.label}
              className="absolute -right-[3px] h-[7px] w-[7px] rounded-full border transition-colors duration-500"
              style={{
                top: `${stop.at * 100}%`,
                borderColor: progress >= stop.at ? 'var(--accent)' : 'var(--line)',
                backgroundColor: progress >= stop.at ? 'var(--accent)' : 'transparent',
              }}
            />
          ))}
        </div>
        <span className="mt-4 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          {String(Math.round(progress * 100)).padStart(2, '0')}%
        </span>
      </div>
    </>
  )
}
