import Image from 'next/image'
import { ImageReveal } from './image-reveal'
import { Reveal } from './reveal'
import { ThemeSection } from './theme-section'

const PRINCIPLES = [
  {
    title: 'Listen first',
    copy: 'Understand the business before designing the solution.',
  },
  {
    title: 'Build with intent',
    copy: 'Every interface and system should have a reason to exist.',
  },
  {
    title: 'Stay involved',
    copy: 'Good work does not end at delivery.',
  },
]

export function About() {
  return (
    <ThemeSection
      theme="light"
      id="about"
      className="relative border-t border-line px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Good technology should feel close.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              We work closely with businesses to understand what needs to be built, what needs to
              work better, and what comes next.
            </p>
          </Reveal>

          <div className="mt-14 divide-y divide-line border-y border-line">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[1fr_1.4fr] sm:items-baseline sm:gap-8 lg:py-7">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, '0')} — {principle.title.toUpperCase()}
                  </span>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    {principle.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <ImageReveal delay={120} className="relative aspect-[4/5] w-full rounded-sm border border-line lg:h-full lg:aspect-auto">
          <div className="relative h-full w-full">
            <Image
              src="/images/connection-fragment.png"
              alt="A quiet workspace with a notebook and coffee, representing how ZAINOVA works closely with businesses"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </ImageReveal>
      </div>
    </ThemeSection>
  )
}
