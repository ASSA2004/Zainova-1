'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type ImageRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

/** Wraps an image so it scales down and sharpens into place as it enters the viewport. */
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <div
        className="h-full w-full transition-[transform,filter,opacity] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(1.16)',
          filter: visible ? 'blur(0px)' : 'blur(6px)',
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
