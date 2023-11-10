import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Восход',
  description: 'Тестовое задание',
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        {modal}
      </body>
    </html>
  )
}
