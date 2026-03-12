import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About Us',   href: '/#about' },
  { label: 'Contact',    href: '/contact' },
]

const propertyTypes = [
  { label: 'Single Family', href: '/properties?type=Single+Family' },
  { label: 'Condos',        href: '/properties?type=Condo' },
  { label: 'Townhouses',    href: '/properties?type=Townhouse' },
  { label: 'Luxury Estates',href: '/properties?type=Luxury+Estate' },
  { label: 'Ranch Homes',   href: '/properties?type=Ranch' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-serif text-2xl font-bold tracking-wide text-white">FARIS</span>
              <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-gold-400">
                Management
              </span>
            </div>
            <p className="font-sans text-navy-400 text-sm leading-relaxed mb-6">
              Providing quality homes to people since 2009. Maryland &amp; Virginia&apos;s trusted real estate partner.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook,  href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-gold-500/20 hover:text-gold-400
                             flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-navy-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property types */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Property Types
            </h4>
            <ul className="flex flex-col gap-2">
              {propertyTypes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-navy-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-navy-400">
                  123 Commerce Blvd, Suite 200<br />
                  Bethesda, MD 20814
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+13015550100" className="font-sans text-sm text-navy-400 hover:text-gold-400 transition-colors">
                  (301) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:info@farismanagement.com" className="font-sans text-sm text-navy-400 hover:text-gold-400 transition-colors break-all">
                  info@farismanagement.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-navy-500">
            © {new Date().getFullYear()} Faris Management. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="font-sans text-xs text-navy-500 hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-sans text-xs text-navy-500 hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
