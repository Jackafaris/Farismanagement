import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Faris Management | Quality Homes Since 2009',
    template: '%s | Faris Management',
  },
  description:
    'Faris Management has been providing quality homes to people since 2009. Browse our curated selection of properties across Maryland and Virginia.',
  keywords: ['real estate', 'homes for sale', 'Maryland', 'Virginia', 'Faris Management', 'property listings'],
  authors: [{ name: 'Faris Management' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://farismanagement.com',
    siteName: 'Faris Management',
    title: 'Faris Management | Quality Homes Since 2009',
    description: 'Providing quality homes to people since 2009.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faris Management | Quality Homes Since 2009',
    description: 'Providing quality homes to people since 2009.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
