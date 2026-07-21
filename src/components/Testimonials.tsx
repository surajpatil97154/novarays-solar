'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      image: '/images/avatar-1.svg',
      text: 'NovaRays installed a complete solar system in my home. My electricity bill reduced by 85% within the first month. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      location: 'Bangalore, Karnataka',
      image: '/images/avatar-2.svg',
      text: 'Professional team, excellent service, and real savings. The ROI was much faster than expected. Thank you NovaRays!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      location: 'Delhi, NCR',
      image: '/images/avatar-3.svg',
      text: 'Best investment for my commercial property. The system is extremely reliable and maintenance is hassle-free.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Trusted by thousands across India</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full" />
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
