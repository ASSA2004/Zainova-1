import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Aboreto } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const aboreto = Aboreto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-aboreto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ZAINOVA — We Build What Moves Business',
  description:
    'ZAINOVA is a technology and digital solutions studio in Dubai, UAE. Digital products, connected systems and infrastructure for businesses ready to move forward.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geistSans.variable} ${geistMono.variable} ${aboreto.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
