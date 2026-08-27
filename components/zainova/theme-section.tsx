type ThemeSectionProps = {
  theme: 'dark' | 'light'
  children: React.ReactNode
  className?: string
  id?: string
}

/**
 * Keeps the chapter metadata available for art direction without overriding
 * the visitor's dedicated site-wide theme choice.
 */
export function ThemeSection({ theme, children, className, id }: ThemeSectionProps) {
  return (
    <section id={id} data-theme={theme} className={className}>
      {children}
    </section>
  )
}
