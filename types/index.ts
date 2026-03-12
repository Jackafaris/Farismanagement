export interface Property {
  id: number
  title: string
  address: string
  city: string
  state: string
  zipCode: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  type: PropertyType
  status: PropertyStatus
  description: string
  imageUrl: string
  features: string[]
  yearBuilt: number
  garage: number
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Contact {
  id: number
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  propertyId?: number
  createdAt: Date
}

export type PropertyType = 'Single Family' | 'Condo' | 'Townhouse' | 'Luxury Estate' | 'Ranch'
export type PropertyStatus = 'For Sale' | 'For Rent' | 'Sold' | 'Pending'

export interface PropertyFilters {
  type?: string
  status?: string
  minPrice?: number
  maxPrice?: number
  minBeds?: number
  minBaths?: number
  city?: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  propertyId?: number
}
