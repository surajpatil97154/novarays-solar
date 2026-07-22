'use client'

import { useState } from 'react'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: 'residential',
    monthlyBill: '₹1500 - ₹2500',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your request. Please try again.')
      }

      setSubmitted(true)
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to submit your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="consultation-form" className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 scroll-mt-24">
      <div className="mb-6 text-center sm:text-left">
        <span className="inline-block px-3 py-1 bg-primary/20 text-dark font-semibold text-xs rounded-full mb-2">
          ⚡ Free & No Obligation
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-dark">
          Book a FREE Solar Consultation
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Fill out the form below to receive your customized solar quote.
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-xl font-bold mb-1">Consultation Requested!</h3>
          <p className="text-sm text-green-700">
            Thank you, {formData.name || 'valued customer'}! Our solar energy expert will reach out to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({ name: '', email: '', phone: '', address: '', propertyType: 'residential', monthlyBill: '₹1500 - ₹2500' })
            }}
            className="mt-4 text-xs font-semibold text-green-900 underline hover:text-green-700"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Property Address</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="City, State / Address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Property Type</label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
              >
                <option value="residential">Residential Home</option>
                <option value="commercial">Commercial Building</option>
                <option value="agricultural">Agricultural / Farm</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Monthly Electricity Bill</label>
              <select
                value={formData.monthlyBill}
                onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
              >
                <option value="Less than ₹1500">Less than ₹1500</option>
                <option value="₹1500 - ₹2500">₹1500 - ₹2500</option>
                <option value="₹2500 - ₹4000">₹2500 - ₹4000</option>
                <option value="₹4000 - ₹8000">₹4000 - ₹8000</option>
                <option value="More than ₹8000">More than ₹8000</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary font-bold py-3.5 rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-200 mt-2"
          >
            {isSubmitting ? 'Submitting…' : 'Submit Consultation Request'}
          </button>

          <p className="text-xs text-gray-500 text-center mt-2">
            🔒 100% Confidential. No spam guarantee.
          </p>
        </form>
      )}
    </div>
  )
}
