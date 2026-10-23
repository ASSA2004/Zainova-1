'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { LineReveal } from './line-reveal'
import { ThemeSection } from './theme-section'

type Service = {
  index: string
  eyebrow: string
  title: string
  copy: string
  diagram: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    eyebrow: 'DIGITAL PRODUCTS',
    title: 'Web Applications / SaaS',
    copy: 'Platforms designed around the way your business actually operates — not the other way around.',
    diagram: ['IDEA', 'UX', 'PRODUCT', 'USERS'],
  },
  {
    index: '02',
    eyebrow: 'CONNECTED EXPERIENCES',
    title: 'Web & Mobile',
    copy: 'Interfaces that move naturally across screens, devices and the people using them.',
    diagram: ['WEB', 'MOBILE', 'USERS'],
  },
  {
    index: '03',
    eyebrow: 'ATTENTION',
    title: 'Digital Marketing',
    copy: 'Turning a good digital product into something people actually discover and return to.',
    diagram: ['DISCOVER', 'ENGAGE', 'CONVERT'],
  },
  {
    index: '04',
    eyebrow: 'THE SYSTEM',
    title: 'Infrastructure Consultancy',
    copy: 'Reliable infrastructure quietly holding up every product your business depends on.',
    diagram: ['APPLICATION', 'API', 'NETWORKING', 'DATABASE', 'CLOUD'],
  },
  {
    index: '05',
    eyebrow: 'EXTENDED SERVICE',
    title: 'English & Arabic Calligraphy',
    copy: 'Bespoke hand-crafted calligraphy in English and Arabic for architectural spaces, luxury wedding cards & stationery, brand logos, and custom commissions.',
    diagram: ['ARCHITECTURE', 'WEDDING CARDS', 'LOGOS', 'COMMISSIONS'],
  },
]

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const flipped = index % 2 === 1

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -12% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      {/* oversized ghost index, alternating sides for asymmetry */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-sans text-[9rem] font-medium leading-none tracking-[-0.04em] text-foreground/[0.035] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-[13rem] lg:text-[17rem]',
          flipped ? 'right-0 translate-x-6' : 'left-0 -translate-x-6',
        )}
        style={{ transform: visible ? 'translate(0, -50%)' : undefined }}
      >
        {service.index}
      </span>

      <div
        className={cn(
          'relative flex flex-col gap-5',
          flipped ? 'items-start pl-8 sm:pl-14 lg:items-end lg:pl-0 lg:pr-10 lg:text-right' : 'items-start pl-3 sm:pl-6 lg:pl-10',
        )}
      >
        {/* accent tick that draws downward */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-1 h-10 w-px bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
            flipped ? 'right-0 origin-top lg:left-0' : 'left-0 origin-top',
          )}
          style={{ transform: visible ? 'scaleY(1)' : 'scaleY(0)', transitionDelay: '80ms' }}
        />

        <span
          className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent transition-opacity duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '120ms' }}
        >
          {service.eyebrow}
        </span>

        <LineReveal
          as="h3"
          text={service.title}
          visible={visible}
          delay={160}
          className={cn(
            'max-w-xl text-balance font-sans text-3xl font-medium leading-[1.05] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-5xl',
            flipped && 'lg:justify-end',
          )}
        />

        <p
          className={cn(
            'max-w-md text-pretty text-base leading-relaxed text-muted-foreground transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-lg',
            flipped && 'lg:ml-auto',
          )}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transitionDelay: '360ms',
          }}
        >
          {service.copy}
        </p>

        <div
          className={cn(
            'mt-2 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground',
            flipped && 'lg:justify-end',
          )}
        >
          {service.diagram.map((step, idx) => (
            <span key={step} className="flex items-center gap-2">
              <span
                className="rounded-full border border-line px-3 py-1.5 text-foreground/80 transition-[opacity,transform] duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.85)',
                  transitionDelay: `${520 + idx * 100}ms`,
                }}
              >
                {step}
              </span>
              {idx < service.diagram.length - 1 && (
                <span className="relative h-px w-5 overflow-hidden bg-line/60" aria-hidden="true">
                  <span
                    className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ width: visible ? '100%' : '0%', transitionDelay: `${560 + idx * 100}ms` }}
                  />
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const headingRef = useRef<HTMLDivElement>(null)
  const [headingVisible, setHeadingVisible] = useState(false)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeadingVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <ThemeSection
      theme="dark"
      id="services"
      className="relative border-t border-line px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <div
          ref={headingRef}
          className="flex flex-col gap-2 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-row sm:items-baseline sm:justify-between"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              The system behind it
            </span>
            <h2 className="mt-3 text-balance font-sans text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              What we build
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            One connected capability
          </span>
        </div>

        <div className="mt-14 divide-y divide-line border-y border-line lg:mt-20">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.index} service={service} index={i} />
          ))}
        </div>
      </div>
    </ThemeSection>
  )
}
