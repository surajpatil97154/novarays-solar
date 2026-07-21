'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <>
      <Header onContactClick={() => setShowContactModal(true)} />
      <main>
        <Hero onGetQuote={() => setShowContactModal(true)} />
        <Services />
        <Testimonials />
        <CTASection onGetQuote={() => setShowContactModal(true)} />
      </main>
      <Footer />
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </>
  )
}
