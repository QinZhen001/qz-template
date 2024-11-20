import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { StoreProvider } from '@/store'

import "../theme/variable.css"
import './globals.css'

export const metadata: Metadata = {
  title: 'nextjs-template',
  description: 'nextjs template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className="dark">
      <body>
        <StoreProvider>
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  )
}
