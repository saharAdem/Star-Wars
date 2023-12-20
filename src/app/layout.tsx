import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Providers } from './store/provider'
import Navbar from './components/Nabar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Start Wars',
    default: 'Star Wars',
  },
  description: 'Explre the Star Wars, find characters and create your own squads',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          <div className='relative top-24 overflow-y-auto no-scrollbar'>
            {children}
          </div>
          
        </body>
      </Providers>
    </html>
  )
}
