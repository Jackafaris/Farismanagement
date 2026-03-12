import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import * as XLSX from 'xlsx'

/**
 * GET /api/export?type=properties   – export all properties as .xlsx
 * GET /api/export?type=contacts     – export all contacts/leads as .xlsx
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type') ?? 'properties'

  try {
    let rows: Record<string, unknown>[] = []
    let sheetName = 'Sheet1'
    let filename  = 'export.xlsx'

    if (type === 'properties') {
      const properties = await prisma.property.findMany({ orderBy: { id: 'asc' } })
      sheetName = 'Properties'
      filename  = `faris-properties-${dateStamp()}.xlsx`
      rows = properties.map((p) => ({
        ID:           p.id,
        Title:        p.title,
        Address:      p.address,
        City:         p.city,
        State:        p.state,
        'Zip Code':   p.zipCode,
        Price:        p.price,
        Bedrooms:     p.bedrooms,
        Bathrooms:    p.bathrooms,
        'Sq Ft':      p.sqft,
        Type:         p.type,
        Status:       p.status,
        'Year Built': p.yearBuilt,
        Garage:       p.garage,
        Featured:     p.featured ? 'Yes' : 'No',
        Features:     p.features.join(', '),
        Description:  p.description,
        'Image URL':  p.imageUrl,
        'Created At': p.createdAt.toISOString(),
        'Updated At': p.updatedAt.toISOString(),
      }))
    } else if (type === 'contacts') {
      const contacts = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } })
      sheetName = 'Leads'
      filename  = `faris-leads-${dateStamp()}.xlsx`
      rows = contacts.map((c) => ({
        ID:            c.id,
        'First Name':  c.firstName,
        'Last Name':   c.lastName,
        Email:         c.email,
        Phone:         c.phone ?? '',
        Message:       c.message,
        'Property ID': c.propertyId ?? '',
        'Submitted':   c.createdAt.toISOString(),
      }))
    } else {
      return NextResponse.json({ error: 'Invalid export type. Use ?type=properties or ?type=contacts' }, { status: 400 })
    }

    // Build workbook
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(rows)

    // Auto-size columns
    const colWidths = Object.keys(rows[0] ?? {}).map((key) => ({
      wch: Math.max(key.length, ...rows.map((r) => String(r[key] ?? '').length)) + 2,
    }))
    ws['!cols'] = colWidths

    XLSX.utils.book_append_sheet(wb, ws, sheetName)

    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[GET /api/export]', err)
    return NextResponse.json({ error: 'Export failed' }, { status: 500 })
  }
}

function dateStamp() {
  return new Date().toISOString().split('T')[0]
}
