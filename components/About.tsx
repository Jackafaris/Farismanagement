import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Over 500 families placed in quality homes',
  'Deep expertise in MD & VA real estate markets',
  'Personally guided by CEO Shirine Faris',
  'Transparent, honest, and client-first approach',
  'Full-service from search to closing',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image column */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="Shirine Faris, CEO of Faris Management"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              {/* Caption card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="font-serif text-navy-900 font-bold text-lg">Shirine Faris</p>
                <p className="font-sans text-gold-600 text-sm font-semibold tracking-wide">Chief Executive Officer</p>
                <p className="font-sans text-navy-500 text-xs mt-1">15+ years in Maryland & Virginia real estate</p>
              </div>
            </div>

            {/* Decorative gold block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy-100 rounded-2xl -z-10" />
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="gold-divider" />
              <span className="font-sans text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase">
                About Us
              </span>
            </div>

            <h2 className="section-title">
              Quality Homes,<br />
              <span className="text-gold-500 italic">Real People.</span>
            </h2>

            <p className="font-sans text-navy-600 leading-relaxed text-base">
              Founded in 2009 by Shirine Faris, Faris Management was built on a simple belief: every family
              deserves a home they love. What started as a boutique real estate practice has grown into a
              trusted name across Maryland and Virginia — always guided by personal service, market knowledge,
              and an unwavering commitment to our clients.
            </p>

            <p className="font-sans text-navy-600 leading-relaxed text-base">
              Under Shirine's leadership, we&apos;ve helped over 500 families find their perfect home.
              We don't just list properties — we listen, we guide, and we stay by your side from the first
              showing to the day you get your keys.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-3 mt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-navy-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/properties" className="btn-primary">
                Browse Properties
              </Link>
              <Link href="/contact" className="btn-outline">
                Meet Our Team
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
