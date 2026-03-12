import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const properties = [
  {
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
    description:
      'Stunning colonial home with hardwood floors throughout, gourmet kitchen with granite countertops, and a spacious backyard perfect for entertaining. Located in the heart of Bethesda, steps from top-rated schools and shopping.',
    imageUrl:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    features: ['Hardwood Floors', 'Gourmet Kitchen', 'Granite Countertops', 'Backyard', '2-Car Garage', 'Central A/C'],
    yearBuilt: 2003,
    garage: 2,
    featured: true,
  },
  {
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
    description:
      'Contemporary townhouse featuring an open floor plan, updated kitchen with stainless steel appliances, private rooftop deck, and assigned parking. Minutes from downtown Silver Spring and Metro access.',
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    features: ['Open Floor Plan', 'Rooftop Deck', 'Stainless Appliances', 'Metro Access', 'Assigned Parking'],
    yearBuilt: 2015,
    garage: 0,
    featured: true,
  },
  {
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
    description:
      'Magnificent estate nestled on a private 1.2-acre lot in prestigious McLean. Features soaring ceilings, a chef's kitchen, home theater, wine cellar, resort-style pool, and 3-car garage. An entertainer's dream.',
    imageUrl:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    features: ['Pool', 'Home Theater', 'Wine Cellar', '3-Car Garage', "Chef's Kitchen", 'Smart Home'],
    yearBuilt: 2018,
    garage: 3,
    featured: true,
  },
  {
    title: 'Charming Condo in Rockville',
    address: '55 Maryland Ave #304',
    city: 'Rockville',
    state: 'MD',
    zipCode: '20850',
    price: 275000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1150,
    type: 'Condo',
    status: 'For Sale',
    description:
      'Move-in ready condo in a sought-after building with concierge service, rooftop lounge, and fitness center. Updated kitchen, in-unit laundry, and a private balcony with city views. Ideal for first-time buyers.',
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-aa19a40b12e3?auto=format&fit=crop&w=800&q=80',
    features: ['Concierge', 'Rooftop Lounge', 'Fitness Center', 'In-Unit Laundry', 'City Views', 'Balcony'],
    yearBuilt: 2010,
    garage: 1,
    featured: false,
  },
  {
    title: 'Classic Colonial in Potomac',
    address: '9831 Falls Rd',
    city: 'Potomac',
    state: 'MD',
    zipCode: '20854',
    price: 550000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3100,
    type: 'Single Family',
    status: 'For Sale',
    description:
      'Beautifully maintained colonial in the coveted Potomac neighborhood. Grand foyer, formal dining room, sunroom, and a finished basement with recreation room. Large screened porch and mature landscaping.',
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-4c88dd2b0b47?auto=format&fit=crop&w=800&q=80',
    features: ['Formal Dining', 'Sunroom', 'Finished Basement', 'Screened Porch', 'Mature Landscaping'],
    yearBuilt: 1998,
    garage: 2,
    featured: false,
  },
  {
    title: 'Stylish Townhouse in Chevy Chase',
    address: '4420 Willard Ave',
    city: 'Chevy Chase',
    state: 'MD',
    zipCode: '20815',
    price: 425000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2050,
    type: 'Townhouse',
    status: 'For Sale',
    description:
      'End-unit townhouse with abundant natural light and modern finishes throughout. Private rear patio, updated bathrooms, and a stunning renovated kitchen with quartz countertops. Walk to shops and restaurants.',
    imageUrl:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    features: ['End Unit', 'Quartz Countertops', 'Updated Baths', 'Private Patio', 'Walkable Location'],
    yearBuilt: 2008,
    garage: 1,
    featured: false,
  },
  {
    title: 'Sprawling Ranch in Gaithersburg',
    address: '721 Quince Orchard Rd',
    city: 'Gaithersburg',
    state: 'MD',
    zipCode: '20878',
    price: 375000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: 'Ranch',
    status: 'For Sale',
    description:
      'Single-level living at its finest. Updated ranch home with open concept living area, renovated kitchen, and a large fenced yard perfect for pets and play. Brand new HVAC system and roof installed 2022.',
    imageUrl:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80',
    features: ['Single Level', 'New HVAC', 'New Roof', 'Fenced Yard', 'Open Concept', 'Pet Friendly'],
    yearBuilt: 1985,
    garage: 1,
    featured: false,
  },
  {
    title: 'Contemporary Home in Fairfax',
    address: '3015 Lee Hwy',
    city: 'Fairfax',
    state: 'VA',
    zipCode: '22030',
    price: 625000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'Single Family',
    status: 'For Sale',
    description:
      'Architecturally distinctive home with dramatic open spaces, floor-to-ceiling windows, and premium finishes. Chef's kitchen with island seating, spa-inspired primary suite, and a beautifully landscaped backyard with deck.',
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    features: ["Chef's Kitchen", 'Spa Bath', 'Floor-to-Ceiling Windows', 'Deck', 'Smart Thermostat', 'EV Charger'],
    yearBuilt: 2020,
    garage: 2,
    featured: false,
  },
  {
    title: 'Penthouse Condo in Alexandria',
    address: '201 N Union St #PH2',
    city: 'Alexandria',
    state: 'VA',
    zipCode: '22314',
    price: 495000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'Condo',
    status: 'For Rent',
    description:
      'Rare penthouse unit with panoramic views of the Potomac River and Old Town Alexandria. Floor-to-ceiling windows, high-end finishes, private terrace, and two premium garage spaces. Steps to waterfront dining.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    features: ['Penthouse', 'River Views', 'Private Terrace', 'Concierge', '2 Parking Spaces', 'Waterfront Access'],
    yearBuilt: 2017,
    garage: 2,
    featured: false,
  },
  {
    title: 'Grand Estate in Great Falls',
    address: '10520 Georgetown Pike',
    city: 'Great Falls',
    state: 'VA',
    zipCode: '22066',
    price: 1875000,
    bedrooms: 7,
    bathrooms: 6,
    sqft: 7200,
    type: 'Luxury Estate',
    status: 'For Sale',
    description:
      'Extraordinary estate on 3.5 private acres in Great Falls. Six-car garage, indoor basketball court, guest house, wine room, and a resort-style pool with waterfall feature. Every luxury detail has been thoughtfully curated.',
    imageUrl:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    features: ['6-Car Garage', 'Guest House', 'Basketball Court', 'Pool', 'Wine Room', '3.5 Acres'],
    yearBuilt: 2016,
    garage: 6,
    featured: false,
  },
]

async function main() {
  console.log('🌱 Seeding Faris Management database...')

  // Clear existing data
  await prisma.property.deleteMany()
  await prisma.contact.deleteMany()

  // Seed properties
  for (const property of properties) {
    await prisma.property.create({ data: property })
  }

  console.log(`✅ Seeded ${properties.length} properties`)

  // Seed a sample contact
  await prisma.contact.create({
    data: {
      firstName: 'Alex',
      lastName: 'Johnson',
      email: 'alex@example.com',
      phone: '(301) 555-0182',
      message: 'Hi, I am very interested in the Bethesda colonial property. Can we schedule a showing?',
      propertyId: 1,
    },
  })

  console.log('✅ Seeded sample contact')
  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
