'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from './theme-provider'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  function handleNavigate(href: string) {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
          scrolled || open ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              handleNavigate('#top')
            }}
            className="font-aboreto text-[16px] tracking-[0.08em] text-foreground transition-opacity hover:opacity-85"
          >
            Z A I N O V A
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-10">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigate(link.href)
                    }}
                    className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/971588311228?text=Hello%20ZAINOVA%2C%20I%27d%20like%20to%20request%20a%20business%20proposal."
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Request business
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span className="relative h-3 w-3 rounded-full border border-current transition-transform duration-500 group-hover:rotate-45">
                <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </header>

      {/* mobile full-screen nav */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-background px-5 transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        style={{
          clipPath: open ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)',
        }}
      >
        <ul className="flex flex-col gap-2">
          {LINKS.map((link, i) => (
            <li
              key={link.href}
              className={cn(
                'overflow-hidden transition-all duration-500',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              )}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigate(link.href)
                }}
                className="block py-2 text-[13vw] font-medium leading-none tracking-tight text-foreground sm:text-6xl"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Dubai, UAE</span>
          <a href="tel:+971588311228" className="transition-colors hover:text-foreground">
            +971 58 831 1228
          </a>
          <a href="https://wa.me/971588311228" target="_blank" rel="noreferrer" className="text-accent transition-colors hover:text-foreground">
            WhatsApp direct
          </a>
          <a href="mailto:hello@zainova.com" className="transition-colors hover:text-foreground">
            hello@zainova.com
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex w-fit items-center gap-2 text-left transition-colors hover:text-foreground"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span className="h-3 w-3 rounded-full border border-current" />
            Switch to {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </div>
      </div>
    </>
  )
}
