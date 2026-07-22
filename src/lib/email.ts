type ConsultationEmail = {
  id: string
  name: string
  email: string
  phone: string
  address: string
  propertyType: string
  monthlyBill: string
  createdAt: string
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')

export async function sendNewConsultationEmail(consultation: ConsultationEmail) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.NOTIFICATION_EMAIL_TO

  if (!apiKey || !from || !to) {
    console.warn('Consultation notification email is not configured.')
    return false
  }

  const details = [
    ['Name', consultation.name],
    ['Email', consultation.email],
    ['Phone', consultation.phone],
    ['Address', consultation.address],
    ['Property type', consultation.propertyType],
    ['Monthly bill', consultation.monthlyBill],
    ['Received', new Date(consultation.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })],
  ]
    .map(([label, value]) => `<tr><td style="padding:8px;font-weight:600">${label}</td><td style="padding:8px">${escapeHtml(value)}</td></tr>`)
    .join('')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: consultation.email,
      subject: `New solar consultation: ${consultation.name}`,
      html: `<h2>New solar consultation request</h2><table style="border-collapse:collapse">${details}</table><p style="color:#666">Reference: ${consultation.id}</p>`,
    }),
  })

  if (!response.ok) {
    console.error('Resend notification failed', { status: response.status })
    return false
  }

  return true
}
