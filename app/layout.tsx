import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Faceless YouTube Automation Agent',
  description: 'AI-powered automation for faceless YouTube channels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
