import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'El Templo del Poster - Posters Frikis',
  description: 'El Templo del Poster: Tu santuario de posters de anime, películas, series y videojuegos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
