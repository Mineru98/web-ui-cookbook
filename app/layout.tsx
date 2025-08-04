import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web UI 용어 정리',
  description: 'EliceLab',
  generator: 'Mineru',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  )
}
