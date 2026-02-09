'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white text-sm py-3 px-[clamp(16px,4vw,32px)] border-b border-white/10 dark:border-slate-800">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <span className="material-icons text-sm">email</span>
              info@handsbrew.com.ng
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <span className="material-icons text-sm">phone</span>
              +234 810 554 8192
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a className="hover:opacity-80 transition flex items-center" href="#" aria-label="Facebook">
              <Image src="/icons8-facebook.svg" alt="Facebook" width={28} height={28} className="invert brightness-0" />
            </a>
            <a className="hover:opacity-80 transition flex items-center" href="#" aria-label="Twitter">
              <Image src="/icons8-twitter.svg" alt="Twitter" width={28} height={28} className="invert brightness-0" />
            </a>
            <a className="hover:opacity-80 transition flex items-center" href="#" aria-label="Instagram">
              <Image src="/icons8-instagram.svg" alt="Instagram" width={28} height={28} className="invert brightness-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        id="main-header"
        className={`sticky top-0 z-50 bg-[#2b426b] backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 w-full ${
          isScrolled
            ? 'max-w-[95%] md:max-w-[1200px] mx-auto rounded-full top-4 shadow-2xl left-0 right-0 border border-white/10'
            : 'w-full top-0 border-b'
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-90 transition" aria-label="Handsbrew Forte Home">
              <Image src="/HB logo white.png" alt="Handsbrew Forte Logo" width={48} height={48} className="h-12 w-auto object-contain" />
              <span className="text-3xl font-display font-bold text-white leading-none">HANDSBREW</span>
            </Link>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link className="text-white font-medium hover:text-slate-200 transition" href="#about">About Us</Link>
              <Link className="text-white font-medium hover:text-slate-200 transition" href="#products">Services</Link>
              <Link className="text-white font-medium hover:text-slate-200 transition" href="/savings">Savings</Link>
              <Link className="text-white font-medium hover:text-slate-200 transition" href="/loans">Loans</Link>
              <Link className="text-white font-medium hover:text-slate-200 transition" href="#blog">Blogs</Link>
            </nav>
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2b426b]"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="material-icons text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
