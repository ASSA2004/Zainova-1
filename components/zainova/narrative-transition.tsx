'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { ThemeSection } from './theme-section'

const STEPS = [
  { prefix: 'FROM', word: 'IDEA' },
  { prefix: 'TO', word: 'PRODUCT' },
  { prefix: 'TO', word: 'SYSTEM' },
  { prefix: 'TO', word: 'GROWTH' },
]

export function NarrativeTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<Array<HTMLDivElement | null>>([])
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    let cleanup = () => { }

    import('gsap').then(async ({ gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const container = containerRef.current
      const words = wordRefs.current.filter(Boolean) as HTMLDivElement[]
      if (!container || words.length === 0) return

      gsap.set(words, { opacity: 0, scale: 0.9, filter: 'blur(14px)' })
      gsap.set(words[0], { opacity: 1, scale: 1, filter: 'blur(0px)' })

      const st = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(words.length - 1, Math.floor(self.progress * words.length))
          words.forEach((word, i) => {
            gsap.to(word, {
              opacity: i === idx ? 1 : 0,
              scale: i === idx ? 1 : i < idx ? 1.08 : 0.9,
              filter: i === idx ? 'blur(0px)' : 'blur(14px)',
              duration: 0.5,
              ease: 'power3.out',
              overwrite: true,
            })
          })
        },
      })

      cleanup = () => st.kill()
    })

    return () => cleanup()
  }, [reducedMotion])

  if (reducedMotion) {
    return (
      <ThemeSection theme="dark" className="relative flex flex-col items-center gap-6 px-5 py-28 text-center sm:py-36">
        {STEPS.map((step) => (
          <div key={step.word} className="flex items-baseline gap-3 sm:gap-5">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
              {step.prefix}
            </span>
            <span className="font-sans text-[13vw] font-medium leading-none tracking-[-0.03em] text-foreground sm:text-[9vw] lg:text-[6vw]">
              {step.word}
            </span>
          </div>
        ))}
      </ThemeSection>
    )
  }

  return (
    <ThemeSection
      theme="dark"
      className="relative flex h-[240vh] flex-col items-center justify-center"
    >
      <div ref={containerRef} className="absolute inset-0" aria-label="Idea to product to system to growth">
        <div className="sticky top-0 flex h-svh w-full flex-col items-center justify-center overflow-hidden px-5">
          <div className="relative flex flex-col items-center gap-3 text-center">
            {STEPS.map((step, i) => (
              <div
                key={step.word}
                ref={(el) => {
                  wordRefs.current[i] = el
                }}
                className="absolute flex items-baseline gap-3 sm:gap-5"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
                  {step.prefix}
                </span>
                <span className="text-balance font-sans text-[13vw] font-medium leading-none tracking-[-0.03em] text-foreground sm:text-[9vw] lg:text-[6vw]">
                  {step.word}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ThemeSection>
  )
}
