import type { Metadata } from 'next'
import { PrefetchCrossZoneLinks } from '@acme/components/prefetch'
import { Layout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import { Counter } from './components/Counter'

export const metadata: Metadata = {
  title: 'Microfrontends - Docs',
  description: 'Example demonstrating vertical microfrontends on Vercel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Layout title="Microfrontends" path="solutions/microfrontends">
          {children}
          <Counter />
        </Layout>
        <PrefetchCrossZoneLinks hrefs={['/', '/about']} />
      </body>
    </html>
  )
}
