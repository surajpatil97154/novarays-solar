import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://novarays-solar.vercel.app'),
  title: 'NovaRays - Solar Energy Solutions',
  description: 'Premium solar energy solutions for residential and commercial properties. Switch to clean, renewable energy today.',
  keywords: 'solar energy, solar panels, renewable energy, solar installation',
  openGraph: {
    title: 'NovaRays - Solar Energy Solutions',
    description: 'Premium solar energy solutions for residential and commercial properties',
    url: 'https://novarays-solar.vercel.app',
    siteName: 'NovaRays',
    type: 'website',
  },
  alternates: {
    canonical: 'https://novarays-solar.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
