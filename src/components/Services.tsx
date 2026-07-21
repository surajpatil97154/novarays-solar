'use client'

import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: '/images/icon-residential.svg',
      title: 'Residential Solar',
      description: 'Complete home solar solutions with battery storage options for uninterrupted power.',
    },
    {
      icon: '/images/icon-commercial.svg',
      title: 'Commercial Solar',
      description: 'Large-scale solar installations for businesses to reduce operational costs.',
    },
    {
      icon: '/images/icon-installation.svg',
      title: 'Installation & Setup',
      description: 'Professional installation with minimal disruption to your daily activities.',
    },
    {
      icon: '/images/icon-maintenance.svg',
      title: 'Maintenance & Support',
      description: '24/7 monitoring and maintenance to ensure optimal system performance.',
    },
    {
      icon: '/images/icon-financing.svg',
      title: 'Financing Options',
      description: 'Flexible payment plans and government subsidies to make solar affordable.',
    },
    {
      icon: '/images/icon-eco.svg',
      title: 'Eco-Consulting',
      description: 'Expert guidance on environmental impact and sustainability initiatives.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solar solutions tailored to your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-primary"
            >
              <Image src={service.icon} alt={service.title} width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
