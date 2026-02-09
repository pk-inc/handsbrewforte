import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/HB logo white.png" alt="Handsbrew Logo" width={40} height={40} className="h-10 w-auto object-contain" />
              <span className="text-2xl font-display font-bold text-white leading-none">HANDSBREW</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for savings and loans since 2014. Building financial futures together.
            </p>
            <div className="flex space-x-3">
              <a
                className="bg-slate-800 hover:bg-secondary w-9 h-9 rounded-full flex items-center justify-center transition p-2"
                href="#"
                aria-label="Facebook"
              >
                <Image src="/icons8-facebook.svg" alt="Facebook" width={36} height={36} className="w-full h-full" />
              </a>
              <a
                className="bg-slate-800 hover:bg-secondary w-9 h-9 rounded-full flex items-center justify-center transition p-2"
                href="#"
                aria-label="Twitter"
              >
                <Image src="/icons8-twitter.svg" alt="Twitter" width={36} height={36} className="w-full h-full" />
              </a>
              <a
                className="bg-slate-800 hover:bg-secondary w-9 h-9 rounded-full flex items-center justify-center transition p-2"
                href="#"
                aria-label="Instagram"
              >
                <Image src="/icons8-instagram.svg" alt="Instagram" width={36} height={36} className="w-full h-full" />
              </a>
              <a
                className="bg-slate-800 hover:bg-secondary w-9 h-9 rounded-full flex items-center justify-center transition p-2"
                href="https://wa.me/2348184322064"
                aria-label="WhatsApp"
              >
                <Image src="/icons8-whatsapp.svg" alt="WhatsApp" width={36} height={36} className="w-full h-full" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-white transition hover:translate-x-1 inline-block" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition hover:translate-x-1 inline-block" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition hover:translate-x-1 inline-block" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition hover:translate-x-1 inline-block" href="#faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold text-base mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-white transition hover:translate-x-1 inline-block" href="/savings">
                  Savings Plans
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition hover:translate-x-1 inline-block" href="/loans">
                  Loan Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition hover:translate-x-1 inline-block" href="/application/loan">
                  Apply for Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="material-icons text-secondary text-base mt-0.5">location_on</span>
                <span>No. 5, Elekuku layout, Behind Item7, Ring-road, Ibadan, Oyo State</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-icons text-secondary text-base">phone</span>
                <span>+234 810 554 8192</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-icons text-secondary text-base">email</span>
                <span>info@handsbrew.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-900 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 Handsbrew Forte Limited. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
