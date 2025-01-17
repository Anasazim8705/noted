import { ConvexAuthNextjsServerProvider } from '@convex-dev/auth/nextjs/server'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { type Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Toaster } from 'sonner'

import { EdgeStoreProvider } from '@/lib/edgestore'
import { cn } from '@/lib/utils'

import ConvexProvider from '@/components/providers/convex-provider'
import ThemeProvider from '@/components/providers/theme-provider'

import './globals.css'

const font = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Noted',
    template: `%s | Noted`,
  },
  metadataBase: new URL('https://notedwebapp.vercel.app'),
  description:
    'Noted is an all-in-one workspace application that helps you for note-making, project management, collaboration, and more.',
  keywords: [
    'Note Making',
    'Project Management',
    'Task Management',
    'Team Collaboration',
    'Digital Workspace',
  ],
  authors: [
    {
      name: 'abdtriedcoding',
      url: 'https://abdullahsidd.vercel.app',
    },
  ],
  creator: 'abdtriedcoding',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notedwebapp.vercel.app',
    title: 'Noted',
    description:
      'Noted is an all-in-one workspace application that helps you for note-making, project management, collaboration, and more.',
    siteName: 'Noted',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Noted',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noted',
    description:
      'Noted is an all-in-one workspace application that helps you for note-making, project management, collaboration, and more.',
    images: ['/thumbnail.png'],
    creator: '@abdtriedcoding',
  },
  icons: [
    {
      media: '(prefers-color-scheme: light)',
      url: '/logo.svg',
      href: '/logo.svg',
    },
    {
      media: '(prefers-color-scheme: dark)',
      url: '/logo-dark.svg',
      href: '/logo-dark.svg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn('antialiased', font.className)}>
          <ConvexProvider>
            <EdgeStoreProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="noted-theme"
              >
                <Toaster richColors theme="system" position="bottom-center" />
                {children}
                <Analytics />
                <SpeedInsights />
              </ThemeProvider>
            </EdgeStoreProvider>
          </ConvexProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  )
}
