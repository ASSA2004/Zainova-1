import { About } from '@/components/zainova/about'
import { Contact } from '@/components/zainova/contact'
import { Dubai } from '@/components/zainova/dubai'
import { Hero } from '@/components/zainova/hero'
import { NarrativeTransition } from '@/components/zainova/narrative-transition'
import { Process } from '@/components/zainova/process'
import { ProductShowcase } from '@/components/zainova/product-showcase'
import { ScrollLine } from '@/components/zainova/scroll-line'
import { Services } from '@/components/zainova/services'
import { SiteNav } from '@/components/zainova/site-nav'
import { SmoothScrollProvider } from '@/components/zainova/smooth-scroll-provider'
import { ThemeProvider } from '@/components/zainova/theme-provider'

export default function Page() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <SiteNav />
        <ScrollLine />
        <main>
          <Hero />
          <NarrativeTransition />
          <ProductShowcase />
          <Services />
          <Process />
          <About />
          <Dubai />
          <Contact />
        </main>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
