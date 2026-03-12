import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const type     = searchParams.get('type')
    const status   = searchParams.get('status')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const minBeds  = searchParams.get('minBeds')
    const featured = searchParams.get('featured')

    const where: Record<string, unknown> = {}
    if (type)     where.type     = type
    if (status)   where.status   = status
    if (featured) where.featured = featured === 'true'
    if (minBeds)  where.bedrooms = { gte: parseInt(minBeds) }
    if (minPrice || maxPrice) {
      where.price = {}
      if (minPrice) (where.price as Record<string, number>).gte = parseFloat(minPrice)
      if (maxPrice) (where.price as Record<string, number>).lte = parseFloat(maxPrice)
    }

    const properties = await prisma.property.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ properties })
  } catch (err) {
    console.error('[GET /api/properties]', err)
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body     = await req.json()
    const property = await prisma.property.create({ data: body })
    return NextResponse.json({ property }, { status: 201 })
  } catch (err) {
    console.error('[POST /api/properties]', err)
    return NextResponse.json({ error: 'Failed to create property' }, { status: 500 })
  }
}
