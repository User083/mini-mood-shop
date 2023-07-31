import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'MiniMood',
  description: 'Minimood is a fabulous fashion e-commerce store.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body>{children}</body>
      <Footer/>
    </html>
  )
}
