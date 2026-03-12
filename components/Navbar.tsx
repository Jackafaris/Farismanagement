'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About',      href: '/#about' },
  { label: 'Contact',    href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname              = usePathname()
  const isHome                = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On non-home pages always show solid background
  const solid = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-navy-50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-serif text-2xl font-bold tracking-wide transition-colors ${
                solid ? 'text-navy-900' : 'text-white'
              }`}
            >
              FARIS
            </span>
            <span
              className={`font-sans text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors ${
                solid ? 'text-gold-500' : 'text-gold-300'
              }`}
            >
              Management
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  solid ? 'text-navy-700 hover:text-gold-500' : 'text-white/90 hover:text-gold-300'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+13015550100"
              className={`hidden lg:flex items-center gap-2 font-sans text-sm font-medium transition-colors ${
                solid ? 'text-navy-700 hover:text-gold-500' : 'text-white/90 hover:text-gold-300'
              }`}
            >
              <Phone size={14} />
              (301) 555-0100
            </a>

            <Link
              href="/contact"
              className={`hidden md:inline-flex btn-secondary text-sm py-2 px-5 ${
                solid ? '' : 'bg-gold-500 text-navy-900 hover:bg-gold-400'
              }`}
            >
              Get In Touch
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                solid ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-navy-50`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-base font-medium text-navy-800 hover:text-gold-500 py-3 px-3 rounded-lg hover:bg-navy-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}
