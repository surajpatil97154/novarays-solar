import { NextResponse } from 'next/server'
import { sendNewConsultationEmail } from '@/lib/email'

const propertyTypes = ['residential', 'commercial', 'agricultural'] as const
const monthlyBills = [
  'Less than ₹1500',
  '₹1500 - ₹2500',
  '₹2500 - ₹4000',
  '₹4000 - ₹8000',
  'More than ₹8000',
] as const

type ConsultationRequest = {
  name?: unknown
  email?: unknown
  phone?: unknown
  address?: unknown
  propertyType?: unknown
  monthlyBill?: unknown
}

const isString = (value: unknown): value is string => typeof value === 'string'

async function saveConsultation(consultation: {
  id: string
  name: string
  email: string
  phone: string
  address: string
  propertyType: (typeof propertyTypes)[number]
  monthlyBill: (typeof monthlyBills)[number]
  createdAt: string
}) {
  const supabaseUrl = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Database is not configured.')
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/consultations`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      id: consultation.id,
      name: consultation.name,
      email: consultation.email,
      phone: consultation.phone,
      address: consultation.address,
      property_type: consultation.propertyType,
      monthly_bill: consultation.monthlyBill,
      created_at: consultation.createdAt,
    }),
  })

  if (!response.ok) {
    console.error('Supabase consultation insert failed', { status: response.status })
    throw new Error('Database save failed.')
  }
}

export async function POST(request: Request) {
  let body: ConsultationRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Please send valid form data.' }, { status: 400 })
  }

  const name = isString(body.name) ? body.name.trim() : ''
  const email = isString(body.email) ? body.email.trim().toLowerCase() : ''
  const phone = isString(body.phone) ? body.phone.trim() : ''
  const address = isString(body.address) ? body.address.trim() : ''
  const propertyType = body.propertyType
  const monthlyBill = body.monthlyBill

  if (!name || !email || !phone || !address) {
    return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 })
  }

  if (name.length > 100 || address.length > 250 || phone.length > 30) {
    return NextResponse.json({ message: 'One or more fields are too long.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (!propertyTypes.includes(propertyType as (typeof propertyTypes)[number])) {
    return NextResponse.json({ message: 'Please select a valid property type.' }, { status: 400 })
  }

  if (!monthlyBills.includes(monthlyBill as (typeof monthlyBills)[number])) {
    return NextResponse.json({ message: 'Please select a valid electricity-bill range.' }, { status: 400 })
  }

  const consultation = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
    address,
    propertyType: propertyType as (typeof propertyTypes)[number],
    monthlyBill: monthlyBill as (typeof monthlyBills)[number],
    createdAt: new Date().toISOString(),
  }

  try {
    await saveConsultation(consultation)
  } catch (error) {
    console.error('Consultation request could not be saved', {
      id: consultation.id,
      message: error instanceof Error ? error.message : 'Unknown error',
    })
    return NextResponse.json(
      { message: 'We could not save your request. Please try again shortly.' },
      { status: 503 },
    )
  }

  // A notification failure must not discard a lead that was successfully saved.
  await sendNewConsultationEmail(consultation)

  return NextResponse.json(
    { message: 'Your consultation request has been received.', id: consultation.id },
    { status: 201 },
  )
}
