import Image from 'next/image'
import Link from 'next/link'
import { BedDouble, Bath, Maximize2, MapPin, Car } from 'lucide-react'
import type { Property } from '@/types'

interface PropertyCardProps {
  property: Property
  priority?: boolean
}

const statusColors: Record<string, string> = {
  'For Sale': 'bg-emerald-100 text-emerald-700',
  'For Rent': 'bg-blue-100 text-blue-700',
  'Pending':  'bg-amber-100 text-amber-700',
  'Sold':     'bg-red-100 text-red-700',
}

export default function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="card overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Price badge */}
        <div className="absolute top-4 left-4 bg-navy-900/90 backdrop-blur-sm text-white rounded-lg px-3 py-1.5">
          <span className="font-sans font-bold text-sm">
            ${property.price.toLocaleString()}
          </span>
        </div>

        {/* Status badge */}
        <div className={`absolute top-4 right-4 rounded-lg px-3 py-1.5 text-xs font-semibold font-sans ${statusColors[property.status] ?? 'bg-gray-100 text-gray-700'}`}>
          {property.status}
        </div>

        {/* Type badge */}
        <div className="absolute bottom-4 left-4 bg-gold-500/90 backdrop-blur-sm text-navy-900 rounded-lg px-3 py-1 text-xs font-semibold font-sans">
          {property.type}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-serif font-bold text-navy-900 text-lg leading-snug mb-1 line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center gap-1.5 text-navy-400 text-sm font-sans mb-4">
          <MapPin size={13} className="flex-shrink-0" />
          <span className="line-clamp-1">
            {property.address}, {property.city}, {property.state} {property.zipCode}
          </span>
        </div>

        {/* Details row */}
        <div className="flex items-center gap-4 pb-4 border-b border-navy-50">
          <div className="flex items-center gap-1.5 text-navy-600 text-sm font-sans">
            <BedDouble size={14} className="text-gold-500" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-navy-600 text-sm font-sans">
            <Bath size={14} className="text-gold-500" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-navy-600 text-sm font-sans">
            <Maximize2 size={14} className="text-gold-500" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
          {property.garage > 0 && (
            <div className="flex items-center gap-1.5 text-navy-600 text-sm font-sans">
              <Car size={14} className="text-gold-500" />
              <span>{property.garage}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <span className="font-sans text-navy-400 text-xs">Built {property.yearBuilt}</span>
          <Link
            href={`/properties?id=${property.id}`}
            className="font-sans text-sm font-semibold text-navy-800 hover:text-gold-600 transition-colors flex items-center gap-1"
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  )
}
