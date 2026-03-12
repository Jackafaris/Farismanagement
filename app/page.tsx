export const dynamic = 'force-dynamic'

import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import FeaturedProperties from '@/components/FeaturedProperties'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactCTA from '@/components/ContactCTA'
import { prisma } from '@/lib/prisma'
import type { Property } from '@/types'

// Fallback properties if DB not yet connected
const fallbackProperties: Property[] = [
  {
    id: 1,
    title: 'Elegant Colonial in Bethesda',
    address: '1247 Old Georgetown Rd',
    city: 'Bethesda',
    state: 'MD',
    zipCode: '20814',
    price: 485000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'Single Family',
    status: 'For Sale',
    description: 'Stunning colonial home in the heart of Bethesda.',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    features: ['Hardwood Floors', 'Gourmet Kitchen', '2-Car Garage'],
    yearBuilt: 2003,
    garage: 2,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'Modern Townhouse in Silver Spring',
    address: '842 Colesville Rd',
    city: 'Silver Spring',
    state: 'MD',
    zipCode: '20901',
    price: 325000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1950,
    type: 'Townhouse',
    status: 'For Sale',
    description: 'Contemporary townhouse with rooftop deck.',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    features: ['Open Floor Plan', 'Rooftop Deck', 'Metro Access'],
    yearBuilt: 2015,
    garage: 0,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'Luxury Estate in McLean',
    address: '312 Chain Bridge Rd',
    city: 'McLean',
    state: 'VA',
    zipCode: '22101',
    price: 1250000,
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5400,
    type: 'Luxury Estate',
    status: 'For Sale',
    description: 'Magnificent estate on 1.2 private acres.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    features: ['Pool', 'Home Theater', '3-Car Garage'],
    yearBuilt: 2018,
    garage: 3,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

async function getFeaturedProperties(): Promise<Property[]> {
  try {
    const properties = await prisma.property.findMany({
      where: { featured: true },
      take: 3,
      orderBy: { createdAt: 'desc' },
    })
    return properties as Property[]
  } catch {
    // Database not yet connected — use fallback data
    return fallbackProperties
  }
}

export default async function HomePage() {
  const featured = await getFeaturedProperties()

  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProperties properties={featured} />
      <About />
      <WhyChooseUs />
      <ContactCTA />
    </>
  )
}
