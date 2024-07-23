import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ktech Trading Group',
  description: 'Created By Siraj AL Zahran - Bohasn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="className">
        <NavBar/><main>{children}</main>
        
        <Footer/>
        </body>
    </html>
  )
}
