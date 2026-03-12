export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { Suspense } from 'react'
import PropertyCard from '@/components/PropertyCard'
import PropertySearch from '@/components/PropertySearch'
import ContactCTA from '@/components/ContactCTA'
import { prisma } from '@/lib/prisma'
import type { Property } from '@/types'

export const metadata: Metadata = {
  title: 'Properties',
  description: 'Browse all available homes for sale and rent through Faris Management across Maryland and Virginia.',
}

// Fallback for when DB is not yet connected
const FALLBACK_PROPERTIES: Property[] = [
  { id: 1,  title: 'Elegant Colonial in Bethesda',        address: '1247 Old Georgetown Rd', city: 'Bethesda',     state: 'MD', zipCode: '20814', price: 485000,  bedrooms: 4, bathrooms: 3,   sqft: 2800, type: 'Single Family',  status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80', features: ['Hardwood Floors', '2-Car Garage'],    yearBuilt: 2003, garage: 2, featured: true,  createdAt: new Date(), updatedAt: new Date() },
  { id: 2,  title: 'Modern Townhouse in Silver Spring',   address: '842 Colesville Rd',       city: 'Silver Spring', state: 'MD', zipCode: '20901', price: 325000,  bedrooms: 3, bathrooms: 2,   sqft: 1950, type: 'Townhouse',       status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80', features: ['Rooftop Deck', 'Metro Access'],       yearBuilt: 2015, garage: 0, featured: true,  createdAt: new Date(), updatedAt: new Date() },
  { id: 3,  title: 'Luxury Estate in McLean',             address: '312 Chain Bridge Rd',     city: 'McLean',       state: 'VA', zipCode: '22101', price: 1250000, bedrooms: 6, bathrooms: 5,   sqft: 5400, type: 'Luxury Estate',   status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', features: ['Pool', '3-Car Garage'],              yearBuilt: 2018, garage: 3, featured: true,  createdAt: new Date(), updatedAt: new Date() },
  { id: 4,  title: 'Charming Condo in Rockville',         address: '55 Maryland Ave #304',    city: 'Rockville',    state: 'MD', zipCode: '20850', price: 275000,  bedrooms: 2, bathrooms: 2,   sqft: 1150, type: 'Condo',           status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1600596542815-aa19a40b12e3?auto=format&fit=crop&w=800&q=80', features: ['Concierge', 'City Views'],           yearBuilt: 2010, garage: 1, featured: false, createdAt: new Date(), updatedAt: new Date() },
  { id: 5,  title: 'Classic Colonial in Potomac',         address: '9831 Falls Rd',           city: 'Potomac',      state: 'MD', zipCode: '20854', price: 550000,  bedrooms: 4, bathrooms: 3,   sqft: 3100, type: 'Single Family',  status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1580587771525-4c88dd2b0b47?auto=format&fit=crop&w=800&q=80', features: ['Sunroom', 'Finished Basement'],      yearBuilt: 1998, garage: 2, featured: false, createdAt: new Date(), updatedAt: new Date() },
  { id: 6,  title: 'Stylish Townhouse in Chevy Chase',    address: '4420 Willard Ave',        city: 'Chevy Chase',  state: 'MD', zipCode: '20815', price: 425000,  bedrooms: 3, bathrooms: 2.5, sqft: 2050, type: 'Townhouse',       status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80', features: ['End Unit', 'Quartz Countertops'],    yearBuilt: 2008, garage: 1, featured: false, createdAt: new Date(), updatedAt: new Date() },
  { id: 7,  title: 'Sprawling Ranch in Gaithersburg',     address: '721 Quince Orchard Rd',   city: 'Gaithersburg', state: 'MD', zipCode: '20878', price: 375000,  bedrooms: 3, bathrooms: 2,   sqft: 1800, type: 'Ranch',           status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80', features: ['Single Level', 'Fenced Yard'],       yearBuilt: 1985, garage: 1, featured: false, createdAt: new Date(), updatedAt: new Date() },
  { id: 8,  title: 'Contemporary Home in Fairfax',        address: '3015 Lee Hwy',            city: 'Fairfax',      state: 'VA', zipCode: '22030', price: 625000,  bedrooms: 4, bathrooms: 3,   sqft: 3200, type: 'Single Family',  status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', features: ["Chef's Kitchen", 'EV Charger'],      yearBuilt: 2020, garage: 2, featured: false, createdAt: new Date(), updatedAt: new Date() },
  { id: 9,  title: 'Penthouse Condo in Alexandria',       address: '201 N Union St #PH2',     city: 'Alexandria',   state: 'VA', zipCode: '22314', price: 495000,  bedrooms: 2, bathrooms: 2,   sqft: 1400, type: 'Condo',           status: 'For Rent', description: '', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', features: ['Penthouse', 'River Views'],          yearBuilt: 2017, garage: 2, featured: false, createdAt: new Date(), updatedAt: new Date() },
  { id: 10, title: 'Grand Estate in Great Falls',         address: '10520 Georgetown Pike',   city: 'Great Falls',  state: 'VA', zipCode: '22066', price: 1875000, bedrooms: 7, bathrooms: 6,   sqft: 7200, type: 'Luxury Estate',   status: 'For Sale', description: '', imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80', features: ['6-Car Garage', 'Guest House'],       yearBuilt: 2016, garage: 6, featured: false, createdAt: new Date(), updatedAt: new Date() },
]

interface PageProps {
  searchParams: {
    type?: string
    status?: string
    minPrice?: string
    maxPrice?: string
    minBeds?: string
  }
}

async function getProperties(filters: PageProps['searchParams']): Promise<Property[]> {
  try {
    const where: Record<string, unknown> = {}
    if (filters.type)     where.type     = filters.type
    if (filters.status)   where.status   = filters.status
    if (filters.minBeds)  where.bedrooms = { gte: parseInt(filters.minBeds) }
    if (filters.minPrice || filters.maxPrice) {
      where.price = {}
      if (filters.minPrice) (where.price as Record<string, number>).gte = parseFloat(filters.minPrice)
      if (filters.maxPrice) (where.price as Record<string, number>).lte = parseFloat(filters.maxPrice)
    }
    const results = await prisma.property.findMany({ where, orderBy: { price: 'asc' } })
    return results as Property[]
  } catch {
    // Fallback: filter in-memory
    return FALLBACK_PROPERTIES.filter((p) => {
      if (filters.type && p.type !== filters.type) return false
      if (filters.status && p.status !== filters.status) return false
      if (filters.minBeds && p.bedrooms < parseInt(filters.minBeds)) return false
      if (filters.minPrice && p.price < parseFloat(filters.minPrice)) return false
      if (filters.maxPrice && p.price > parseFloat(filters.maxPrice)) return false
      return true
    })
  }
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const properties = await getProperties(searchParams)

  return (
    <>
      {/* Page header */}
      <div className="bg-navy-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-0.5 bg-gold-500 rounded-full" />
            <span className="font-sans text-xs font-semibold text-gold-400 tracking-[0.2em] uppercase">
              All Listings
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Available Properties
          </h1>
          <p className="font-sans text-navy-300 mt-3 text-base max-w-xl">
            Browse our curated selection of quality homes across Maryland and Virginia.
          </p>
        </div>
      </div>

      <div className="bg-cream min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search + filters */}
          <Suspense>
            <PropertySearch count={properties.length} />
          </Suspense>

          {/* Property grid */}
          <div className="mt-8">
            {properties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, i) => (
                  <PropertyCard key={property.id} property={property} priority={i < 6} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-2xl border border-navy-50">
                <p className="font-serif text-2xl text-navy-800 mb-2">No properties found</p>
                <p className="font-sans text-navy-400 text-sm">Try adjusting your filters or{' '}
                  <a href="/contact" className="text-gold-600 hover:underline">contact us</a> to find your perfect home.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      <ContactCTA />
    </>
  )
}
