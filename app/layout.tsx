import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { cookies } from 'next/headers'
import { ThemeProvider } from '@/components/theme-provider'
import ClickSpark from '@/components/ui/ClickSpark'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: 'UniqueHire',
  description: 'UniqueHire is a digital transformation IT consulting & services company established in 2014, providing IT Consulting, Staffing Solutions, Product Development, and Infrastructure Services.',
  keywords: ['IT Consulting', 'Staffing Solutions', 'Digital Transformation', 'Product Development', 'Infrastructure Services'],
  authors: [{ name: 'UniqueHire' }],
  icons: {
    icon: '/images/uh-logo.png',
  },
  openGraph: {
    title: 'UniqueHire',
    description: 'Empowering Digital Transformation with cutting-edge IT consulting and professional services.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#043b73' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Read theme cookie on the server so the correct class is on <html> before
  // React hydrates — eliminates flash of unstyled content with zero script tags.
  const cookieStore = await cookies()
  const savedTheme = cookieStore.get('theme')?.value
  const htmlClass = savedTheme === 'dark' ? 'dark' : ''

  return (
    <html lang="en" className={htmlClass} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to external video CDN */}
        <link rel="preconnect" href="https://assets.mixkit.co" />
        <link rel="dns-prefetch" href="https://assets.mixkit.co" />
        {/* Sora — used in the Spline section */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" enableSystem>
          <ClickSpark sparkColor="#FF6B00" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400} />
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
