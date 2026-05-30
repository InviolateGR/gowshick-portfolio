import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gowshick Raja — Fullstack Developer & UI/UX Designer',
  description:
    'Final-year ECE student and fullstack developer building scalable web apps with React, Node.js, and MongoDB. Bridging design and engineering.',
  keywords: [
    'Gowshick Raja',
    'Fullstack Developer',
    'UI/UX Designer',
    'React Developer',
    'Node.js',
    'Portfolio',
    'Coimbatore',
    'India',
  ],
  authors: [{ name: 'Gowshick Raja', url: 'https://gowshickraja.dev' }],
  creator: 'Gowshick Raja',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gowshickraja.dev',
    title: 'Gowshick Raja — Fullstack Developer & UI/UX Designer',
    description:
      'Building precise, scalable products at the intersection of engineering and design.',
    siteName: 'Gowshick Raja Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gowshick Raja Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gowshick Raja — Fullstack Developer & UI/UX Designer',
    description:
      'Building precise, scalable products at the intersection of engineering and design.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
