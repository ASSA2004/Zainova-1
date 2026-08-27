'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from './reveal'
import { ThemeSection } from './theme-section'

const LINES = ["Let's build", 'something useful.']

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const year = new Date().getFullYear()

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
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <ThemeSection
      theme="dark"
      id="contact"
      className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden="true">
        <Image src="/images/contact-texture.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <h2
          ref={ref}
          className="max-w-3xl text-balance font-sans text-4xl font-medium leading-[0.98] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-7xl"
        >
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className="block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: visible ? 'translateY(0%)' : 'translateY(100%)',
                  transitionDelay: `${i * 140}ms`,
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h2>

        <Reveal delay={320}>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Tell us what you're trying to build, fix or move forward."}
          </p>
        </Reveal>

        <Reveal delay={420}>
          <a
            href="mailto:hello@zainovatech.com"
            className="group mt-10 inline-flex items-center gap-3 border-b border-foreground pb-2 font-sans text-xl font-medium tracking-[-0.01em] text-foreground transition-colors duration-300 sm:text-2xl"
          >
            Start a conversation
            <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
              →
            </span>
          </a>
          <a
            href="tel:+971588311228"
            className="mt-4 block font-mono text-[11px] uppercase tracking-[0.18em] text-accent transition-colors hover:text-foreground"
          >
            Call +971 58 831 1228
          </a>
          <a
            href="https://wa.me/971588311228?text=Hello%20ZAINOVA%2C%20I%27d%20like%20to%20request%20a%20business%20proposal."
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-accent px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Request for your business <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <Reveal delay={520}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:grid-cols-3">
            <div>
              <span className="block text-foreground/60">Email</span>
              <a href="mailto:hello@zainovatech.com" className="mt-1 block transition-colors hover:text-accent">
                hello@zainovatech.com
              </a>
            </div>
            <div>
              <span className="block text-foreground/60">Phone / WhatsApp</span>
              <a href="tel:+971588311228" className="mt-1 block transition-colors hover:text-foreground">
                +971 58 831 1228
              </a>
              <a
                href="https://wa.me/971588311228"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-accent transition-colors hover:text-foreground"
              >
                Message on WhatsApp
              </a>
            </div>
            <div>
              <span className="block text-foreground/60">Studio</span>
              <span className="mt-1 block">Small team. Direct communication.</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Dubai, UAE</span>
          <span>{year} / ZAINOVA®</span>
        </div>
      </div>
    </ThemeSection>
  )
}
