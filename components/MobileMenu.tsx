'use client'

import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-64 bg-[#2b426b] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4 border-b border-white/10">
            <button
              onClick={onClose}
              className="text-white hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close mobile menu"
            >
              <span className="material-icons text-3xl">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-4">
            <Link
              className="block text-white font-medium hover:text-slate-200 transition py-2 px-4 rounded hover:bg-white/10"
              href="/"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              className="block text-white font-medium hover:text-slate-200 transition py-2 px-4 rounded hover:bg-white/10"
              href="#about"
              onClick={onClose}
            >
              About Us
            </Link>
            <Link
              className="block text-white font-medium hover:text-slate-200 transition py-2 px-4 rounded hover:bg-white/10"
              href="#products"
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              className="block text-white font-medium hover:text-slate-200 transition py-2 px-4 rounded hover:bg-white/10"
              href="/savings"
              onClick={onClose}
            >
              Savings
            </Link>
            <Link
              className="block text-white font-medium hover:text-slate-200 transition py-2 px-4 rounded hover:bg-white/10"
              href="/loans"
              onClick={onClose}
            >
              Loans
            </Link>
            <Link
              className="block text-white font-medium hover:text-slate-200 transition py-2 px-4 rounded hover:bg-white/10"
              href="#blog"
              onClick={onClose}
            >
              Blogs
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-white/10 text-white text-sm">
            <p className="flex items-center gap-2 mb-2">
              <span className="material-icons text-sm">phone</span>
              <span>+234 810 554 8192</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-icons text-sm">email</span>
              <span>info@handsbrew.com.ng</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
