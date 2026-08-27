'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ThemeSection } from './theme-section'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <ThemeSection
      theme="dark"
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16 lg:pt-20"
    >
      {/* subtle grid lines */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="mx-auto grid h-full max-w-[1600px] grid-cols-12 px-12">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="h-full border-l border-line last:border-r" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-5 sm:px-8 lg:px-12">
        <div
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <span>ZAINOVA</span>
          <span className="h-px w-6 bg-line" />
          <span>Dubai / UAE</span>
        </div>

        <h1 className="mt-6 max-w-5xl text-balance font-sans text-[15vw] font-medium leading-[0.94] tracking-[-0.03em] text-foreground sm:text-[11vw] lg:text-[7.4vw]">
          {['WE BUILD', 'WHAT MOVES', 'BUSINESS.'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className="block transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transitionDelay: `${180 + i * 110}ms`,
                  transform: mounted ? 'translateY(0%)' : 'translateY(100%)',
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div
          className="mt-8 flex flex-col gap-8 transition-all duration-700 ease-out lg:flex-row lg:items-end lg:justify-between"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(14px)',
            transitionDelay: '520ms',
          }}
        >
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Digital products, connected systems and infrastructure for businesses ready to move
            forward.
          </p>

          <div className="relative hidden h-40 w-56 shrink-0 overflow-hidden rounded-sm border border-line sm:block lg:h-48 lg:w-64">
            <Image
              src="/images/hero-fragment.png"
              alt="Close-up architectural and technology detail representing ZAINOVA's craft"
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-5 pb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-[11px] lg:px-12 lg:pb-10"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 700ms ease-out',
          transitionDelay: '700ms',
        }}
      >
        <span className="flex items-center gap-2">
          <span className="relative h-6 w-px overflow-hidden bg-line" aria-hidden="true">
            <span className="scroll-cue-tick absolute inset-x-0 top-0 h-full bg-accent" />
          </span>
          Scroll to explore
        </span>
        <span>Web / Mobile / Systems / Growth</span>
      </div>
    </ThemeSection>
  )
}
