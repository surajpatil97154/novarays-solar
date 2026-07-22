'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  const scrollToForm = () => {
    const el = document.getElementById('consultation-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header onContactClick={scrollToForm} />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Testimonials />
        <CTASection onGetQuote={scrollToForm} />
      </main>
      <Footer />
    </>
  )
}
