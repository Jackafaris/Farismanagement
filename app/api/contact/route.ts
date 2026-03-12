import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const contactSchema = z.object({
  firstName:  z.string().min(2),
  lastName:   z.string().min(2),
  email:      z.string().email(),
  phone:      z.string().optional(),
  message:    z.string().min(10),
  interest:   z.string().optional(),
  propertyId: z.number().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body   = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { interest, ...data } = parsed.data

    // Optionally include interest in message
    const message = interest
      ? `[Interest: ${interest}]\n\n${data.message}`
      : data.message

    const contact = await prisma.contact.create({
      data: { ...data, message },
    })

    return NextResponse.json({ contact }, { status: 201 })
  } catch (err) {
    console.error('[POST /api/contact]', err)
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ contacts })
  } catch (err) {
    console.error('[GET /api/contact]', err)
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 })
  }
}
