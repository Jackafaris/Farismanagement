import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PropertyCard from './PropertyCard'
import type { Property } from '@/types'

interface FeaturedPropertiesProps {
  properties: Property[]
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="gold-divider" />
              <span className="font-sans text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase">
                Featured Listings
              </span>
            </div>
            <h2 className="section-title">
              Hand-Picked Properties
            </h2>
            <p className="section-subtitle mt-3">
              Our team&apos;s top selections — quality homes across Maryland and Virginia.
            </p>
          </div>
          <Link
            href="/properties"
            className="btn-outline flex-shrink-0 self-start md:self-auto"
          >
            View All Listings <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        {properties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, i) => (
              <PropertyCard key={property.id} property={property} priority={i < 3} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-navy-400 font-sans">
            No featured listings at this time. Check back soon!
          </div>
        )}
      </div>
    </section>
  )
}
