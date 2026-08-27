import Image from 'next/image'
import { Reveal } from './reveal'
import { ThemeSection } from './theme-section'

const STEPS = [
  { index: '01', title: 'Understand', copy: 'We start with the business, not the interface.' },
  { index: '02', title: 'Structure', copy: 'Map the system before designing a single screen.' },
  { index: '03', title: 'Design', copy: 'Interfaces built around real use, not templates.' },
  { index: '04', title: 'Build', copy: 'Engineering that holds up under real conditions.' },
  { index: '05', title: 'Connect', copy: 'Systems that talk to each other, not around each other.' },
  { index: '06', title: 'Scale', copy: 'Infrastructure that grows without breaking.' },
]

export function Process() {
  return (
    <ThemeSection
      theme="dark"
      id="process"
      className="relative border-t border-line px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Process</span>
          <h2 className="mt-3 max-w-2xl text-balance font-sans text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Built around real problems.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ol className="divide-y divide-line border-y border-line">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 60}>
                <li className="flex items-baseline gap-6 py-6 lg:py-7">
                  <span className="font-mono text-sm text-muted-foreground">{step.index}</span>
                  <div>
                    <p className="font-sans text-xl font-medium tracking-[-0.01em] text-foreground sm:text-2xl">
                      {step.title}
                    </p>
                    <p className="mt-1 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/process-fragment.png"
                alt="Abstract architectural detail representing structure and system"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80">
                <span>Structure</span>
                <span>Fig. 01</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </ThemeSection>
  )
}
