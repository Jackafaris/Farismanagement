'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ChevronDown } from 'lucide-react'

const PROPERTY_TYPES = ['All Types', 'Single Family', 'Condo', 'Townhouse', 'Luxury Estate', 'Ranch']
const PRICE_RANGES = [
  { label: 'Any Price', value: '' },
  { label: 'Under $300K', value: '0-300000' },
  { label: '$300K – $500K', value: '300000-500000' },
  { label: '$500K – $750K', value: '500000-750000' },
  { label: '$750K – $1M', value: '750000-1000000' },
  { label: 'Over $1M', value: '1000000-' },
]

export default function Hero() {
  const router                = useRouter()
  const [type, setType]       = useState('')
  const [price, setPrice]     = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (type)  params.set('type', type)
    if (price) {
      const [min, max] = price.split('-')
      if (min) params.set('minPrice', min)
      if (max) params.set('maxPrice', max)
    }
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80)',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/85" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 rounded-full px-4 py-1.5 text-xs font-sans font-semibold tracking-widest uppercase mb-6">
          Quality Homes Since 2009
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Find Your Perfect{' '}
          <span className="text-gold-400 italic">Home</span>
        </h1>

        {/* Subheading */}
        <p className="font-sans text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed">
          Faris Management has been matching families with quality homes across Maryland and Virginia since 2009.
          Let us help you find the one.
        </p>

        {/* Search bar */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto shadow-2xl">

          {/* Type selector */}
          <div className="relative flex-1">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-white text-navy-900 font-sans text-sm rounded-xl px-4 py-3.5 appearance-none cursor-pointer
                         focus:outline-none focus:ring-2 focus:ring-gold-500 pr-10"
            >
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t === 'All Types' ? '' : t}>{t}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" />
          </div>

          {/* Price selector */}
          <div className="relative flex-1">
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-white text-navy-900 font-sans text-sm rounded-xl px-4 py-3.5 appearance-none cursor-pointer
                         focus:outline-none focus:ring-2 focus:ring-gold-500 pr-10"
            >
              {PRICE_RANGES.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" />
          </div>

          {/* Search button */}
          <button
            onClick={handleSearch}
            className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-3.5 whitespace-nowrap"
          >
            <Search size={16} />
            Search Homes
          </button>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/60 font-sans text-sm">
          <span>✦ 500+ Homes Placed</span>
          <span>✦ 15+ Years of Service</span>
          <span>✦ MD &amp; VA Specialists</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
