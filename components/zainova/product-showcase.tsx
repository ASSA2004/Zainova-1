'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { ThemeSection } from './theme-section'

const PRODUCT_URLS = {
  typingHub: 'https://g78691317a73bc1-mhn.adb.me-dubai-1.oraclecloudapps.com/ords/r/zainova/typinghub-erp/tenant-id-entry',
  virtualZainova: 'https://zainova.netlify.app/',
} as const

type Product = {
  index: string
  name: string
  category: string
  copy: string
  image: string
  href: string
  ctaText: string
}

const PRODUCTS: Product[] = [
  {
    index: '01',
    name: 'Business Suite',
    category: 'Web Application / SaaS',
    copy: 'A connected business suite for leads, orders, accounts and automation — giving your team one clear place to run the work.',
    image: '/images/typinghub-reference.png',
    href: PRODUCT_URLS.typingHub,
    ctaText: 'Explore Business Suite',
  },
  {
    index: '02',
    name: 'Virtual ZAINOVA',
    category: 'Website / cinematic',
    copy: 'Our own website, it qualifies and hands off, live.',
    image: '/images/virtual-zainova-reference.png',
    href: PRODUCT_URLS.virtualZainova,
    ctaText: 'Explore Zainova',
  },
]

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<Array<HTMLDivElement | null>>([])
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    let cleanup = () => { }

    import('gsap').then(async ({ gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const container = containerRef.current
      const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[]
      if (!container || panels.length === 0) return

      gsap.set(panels, { opacity: 0, scale: 1.04, pointerEvents: 'none', zIndex: 1 })
      gsap.set(panels[0], { opacity: 1, scale: 1, pointerEvents: 'auto', zIndex: 10 })

      const st = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(panels.length - 1, Math.floor(self.progress * panels.length))
          panels.forEach((panel, i) => {
            const isActive = i === idx
            gsap.to(panel, {
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 1.04,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: true,
            })
            panel.style.pointerEvents = isActive ? 'auto' : 'none'
            panel.style.zIndex = isActive ? '10' : '1'
          })
        },
      })

      cleanup = () => st.kill()
    })

    return () => cleanup()
  }, [reducedMotion])

  return (
    <ThemeSection theme="light" id="work" className="relative border-t border-line">
      {/* PHONE / MOBILE VIEW (< lg): Perfectly fitted responsive vertical card flow */}
      <div className="block px-5 py-12 sm:px-8 sm:py-20 lg:hidden">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Work</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Products that move
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-10 sm:gap-14">
            {PRODUCTS.map((product) => (
              <div key={product.index} className="flex flex-col gap-5 rounded-sm border border-line/60 bg-background/40 p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-accent">{product.index}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-balance font-sans text-2xl font-medium tracking-[-0.01em] text-foreground sm:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {product.copy}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[40px] items-center rounded-full bg-accent px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
                    >
                      {product.ctaText} ↗
                    </a>
                    <a
                      href="https://wa.me/971588311228?text=Hello%20ZAINOVA%2C%20I%27d%20like%20to%20request%20a%20business%20proposal."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[40px] items-center rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Request for your business
                    </a>
                  </div>
                </div>

                <div className="relative aspect-[16/10] max-h-[240px] w-full overflow-hidden rounded-sm border border-line bg-secondary/30 sm:aspect-[4/3] sm:max-h-[340px]">
                  <Image
                    src={product.image}
                    alt={`${product.name} product visual`}
                    fill
                    sizes="(min-width: 640px) 90vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP / SYSTEM VIEW (lg+): Original GSAP ScrollTrigger Showcase */}
      <div className="hidden lg:block">
        {reducedMotion ? (
          <div className="px-12 py-36">
            <div className="mx-auto max-w-[1600px]">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Work</span>
              <h2 className="mt-3 max-w-2xl text-balance font-sans text-6xl font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                Products that move.
              </h2>
              <div className="mt-16 flex flex-col gap-20">
                {PRODUCTS.map((product) => (
                  <div key={product.index} className="grid grid-cols-[0.9fr_1.1fr] items-center gap-14">
                    <div>
                      <span className="font-mono text-sm text-muted-foreground">{product.index}</span>
                      <h3 className="mt-3 text-balance font-sans text-4xl font-medium tracking-[-0.01em] text-foreground">
                        {product.name}
                      </h3>
                      <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                        {product.category}
                      </span>
                      <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                        {product.copy}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5"
                        >
                          {product.ctaText} ↗
                        </a>
                        <a
                          href="https://wa.me/971588311228?text=Hello%20ZAINOVA%2C%20I%27d%20like%20to%20request%20a%20business%20proposal."
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                          Request for your business
                        </a>
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-sm border border-line">
                      <Image
                        src={product.image}
                        alt={`${product.name} product visual`}
                        fill
                        sizes="55vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative min-h-[1500px] h-[220vh] overflow-x-clip sm:min-h-0 sm:h-[240vh]">
            <div ref={containerRef} className="absolute inset-0">
              <div className="sticky top-0 flex min-h-svh w-full flex-col overflow-hidden px-12 pb-10 pt-28">
                <div className="mx-auto flex w-full max-w-[1600px] items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Work</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Products that move
                  </span>
                </div>

                <div className="relative mx-auto min-h-[520px] w-full max-w-[1600px] flex-1 lg:min-h-0">
                  {PRODUCTS.map((product, i) => (
                    <div
                      key={product.index}
                      ref={(el) => {
                        panelRefs.current[i] = el
                      }}
                      className="absolute inset-0 grid grid-cols-[0.85fr_1.15fr] items-center gap-16 py-6"
                      style={{
                        opacity: i === 0 ? 1 : 0,
                        pointerEvents: i === 0 ? 'auto' : 'none',
                        zIndex: i === 0 ? 10 : 1,
                      }}
                    >
                      <div>
                        <span className="font-mono text-sm text-muted-foreground">{product.index}</span>
                        <h3 className="mt-4 text-balance font-sans text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-foreground xl:text-7xl">
                          {product.name}
                        </h3>
                        <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                          {product.category}
                        </span>
                        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                          {product.copy}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <a
                            href={product.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5"
                          >
                            {product.ctaText} ↗
                          </a>
                          <a
                            href="https://wa.me/971588311228?text=Hello%20ZAINOVA%2C%20I%27d%20like%20to%20request%20a%20business%20proposal."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-12 items-center rounded-full border border-line px-6 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent"
                          >
                            Request for your business
                          </a>
                        </div>
                      </div>
                      <div className="relative aspect-[16/11] w-full min-w-0 overflow-hidden rounded-sm border border-line">
                        <Image
                          src={product.image}
                          alt={`${product.name} product visual`}
                          fill
                          sizes="55vw"
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mx-auto flex w-full max-w-[1600px] items-center gap-2 pb-10">
                  {PRODUCTS.map((product) => (
                    <span key={product.index} className="h-px flex-1 bg-line" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeSection>
  )
}
