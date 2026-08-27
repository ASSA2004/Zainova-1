'use client'

import { cn } from '@/lib/utils'

type LineRevealProps = {
  text: string
  visible: boolean
  delay?: number
  className?: string
  as?: 'h2' | 'h3' | 'span' | 'div'
}

/** Splits text into words and reveals each one through a masked upward slide, staggered word by word. */
export function LineReveal({ text, visible, delay = 0, className, as = 'span' }: LineRevealProps) {
  const words = text.split(' ')
  const Comp = as

  return (
    <Comp className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.28em] overflow-hidden pb-[0.08em]">
          <span
            className="inline-block transition-transform duration-[820ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: visible ? 'translateY(0%)' : 'translateY(115%)',
              transitionDelay: `${delay + i * 45}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Comp>
  )
}
