'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react'

const PROPERTY_TYPES   = ['All Types', 'Single Family', 'Condo', 'Townhouse', 'Luxury Estate', 'Ranch']
const PROPERTY_STATUSES = ['All Statuses', 'For Sale', 'For Rent', 'Pending', 'Sold']
const BED_OPTIONS      = ['Any', '1+', '2+', '3+', '4+', '5+']
const PRICE_RANGES = [
  { label: 'Any Price',     min: '',        max: '' },
  { label: 'Under $300K',   min: '0',       max: '300000' },
  { label: '$300K – $500K', min: '300000',  max: '500000' },
  { label: '$500K – $750K', min: '500000',  max: '750000' },
  { label: '$750K – $1M',   min: '750000',  max: '1000000' },
  { label: 'Over $1M',      min: '1000000', max: '' },
]

export default function PropertySearch({ count }: { count: number }) {
  const router      = useRouter()
  const params      = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [type,     setType]    = useState(params.get('type')     ?? '')
  const [status,   setStatus]  = useState(params.get('status')   ?? '')
  const [minPrice, setMin]     = useState(params.get('minPrice') ?? '')
  const [maxPrice, setMax]     = useState(params.get('maxPrice') ?? '')
  const [beds,     setBeds]    = useState(params.get('minBeds')  ?? '')
  const [expanded, setExpanded] = useState(false)

  const selectedPriceLabel = () => {
    const match = PRICE_RANGES.find((r) => r.min === minPrice && r.max === maxPrice)
    return match?.label ?? 'Any Price'
  }

  const applyFilters = () => {
    const p = new URLSearchParams()
    if (type)     p.set('type', type)
    if (status)   p.set('status', status)
    if (minPrice) p.set('minPrice', minPrice)
    if (maxPrice) p.set('maxPrice', maxPrice)
    if (beds)     p.set('minBeds', beds)
    startTransition(() => router.push(`/properties?${p.toString()}`))
  }

  const clearFilters = () => {
    setType(''); setStatus(''); setMin(''); setMax(''); setBeds('')
    startTransition(() => router.push('/properties'))
  }

  const hasFilters = type || status || minPrice || maxPrice || beds

  return (
    <div className="bg-white rounded-2xl shadow-md border border-navy-50 overflow-hidden">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row gap-3 p-4 border-b border-navy-50">
        {/* Type */}
        <div className="relative flex-1">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="select-field pr-10"
          >
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t === 'All Types' ? '' : t}>{t}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" />
        </div>

        {/* Price */}
        <div className="relative flex-1">
          <select
            value={`${minPrice}-${maxPrice}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split('-')
              setMin(min === 'undefined' ? '' : min)
              setMax(max === 'undefined' ? '' : max)
            }}
            className="select-field pr-10"
          >
            {PRICE_RANGES.map((r) => (
              <option key={r.label} value={`${r.min}-${r.max}`}>{r.label}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" />
        </div>

        {/* Beds */}
        <div className="relative flex-1">
          <select
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            className="select-field pr-10"
          >
            {BED_OPTIONS.map((b) => (
              <option key={b} value={b === 'Any' ? '' : b.replace('+', '')}>
                {b === 'Any' ? 'Any Beds' : `${b} Beds`}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" />
        </div>

        <div className="flex gap-2">
          {/* More filters toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-sans font-medium transition-colors
              ${expanded ? 'border-gold-500 bg-gold-50 text-gold-700' : 'border-navy-100 text-navy-600 hover:border-navy-300'}`}
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          <button
            onClick={applyFilters}
            disabled={isPending}
            className="btn-primary px-5 py-3 text-sm gap-2"
          >
            <Search size={14} />
            Search
          </button>
        </div>
      </div>

      {/* Expanded filters */}
      {expanded && (
        <div className="px-4 py-4 border-b border-navy-50 bg-navy-50/30">
          <div className="flex flex-wrap gap-3 items-end">
            <div className="flex-1 min-w-[180px]">
              <label className="font-sans text-xs font-semibold text-navy-500 uppercase tracking-wide mb-1.5 block">
                Status
              </label>
              <div className="relative">
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="select-field pr-10">
                  {PROPERTY_STATUSES.map((s) => (
                    <option key={s} value={s === 'All Statuses' ? '' : s}>{s}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results count + clear */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-sans text-sm text-navy-500">
          {isPending ? 'Searching...' : `${count} propert${count === 1 ? 'y' : 'ies'} found`}
        </span>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 font-sans text-xs text-navy-400 hover:text-gold-600 transition-colors"
          >
            <X size={12} />
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
