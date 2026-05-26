import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppFloatingCTA } from '@/components/whatsapp-floating-cta'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: "Levin's Toy - Premium Handcrafted Montessori Wooden Toys",
  description: 'Discover premium, eco-friendly handcrafted wooden toys inspired by Montessori principles. Perfect for modern families who value quality, sustainability, and child development.',
  keywords: 'Montessori toys, wooden toys, handcrafted toys, eco-friendly toys, learning toys, children toys',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: `${basePath}/images/logo-full.png`,
    apple: `${basePath}/images/logo-full.png`,
  },
  openGraph: {
    title: "Levin's Toy - Premium Handcrafted Montessori Wooden Toys",
    description: 'Discover premium, eco-friendly handcrafted wooden toys inspired by Montessori principles.',
    url: 'https://levinstoy.com',
    siteName: "Levin's Toy",
    images: [
      {
        url: `${basePath}/images/cover1.jpg`,
        width: 1200,
        height: 630,
        alt: 'Levin\'s Toy Premium Collection',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloatingCTA />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
