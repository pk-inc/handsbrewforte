import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Handsbrew Forte - Trusted Savings & Loans in Ibadan | Licensed Financial Institution',
  description: 'Handsbrew Forte Limited offers secure savings plans and affordable loans in Ibadan since 2014. Licensed by Oyo State Government. Your trusted partner for financial growth.',
  keywords: 'savings, loans, Ibadan, financial services, microfinance, Handsbrew Forte, Oyo State',
  openGraph: {
    type: 'website',
    url: 'https://handsbrewforte.com/',
    title: 'Handsbrew Forte - Your Trusted Financial Partner',
    description: 'Secure savings plans and affordable loans in Ibadan since 2014. Building financial futures together.',
    images: ['/hero image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handsbrew Forte - Your Trusted Financial Partner',
    description: 'Secure savings plans and affordable loans in Ibadan since 2014.',
    images: ['/hero image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
