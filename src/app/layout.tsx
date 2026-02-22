import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Curb Butlers | Can-to-Curb Trash Valet Service | Wesley Chapel, FL',
  description: 'Professional can-to-curb trash and recycling valet service for HOAs and neighborhoods in Wesley Chapel, Florida. Reliable, insured, and community-focused.',
  keywords: 'trash valet, can to curb, Wesley Chapel FL, HOA trash service, recycling valet',
  openGraph: {
    title: 'Curb Butlers | Can-to-Curb Service | Wesley Chapel, FL',
    description: 'Professional trash valet service for HOAs and neighborhoods in Wesley Chapel, Florida.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
