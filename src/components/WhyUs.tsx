'use client'

export default function WhyUs() {
  const trustFeatures = [
    {
      id: 1,
      title: 'Guaranteed Savings',
      quote: 'Only solar company in India with a money-back promise on electricity generation performance.',
      image: '/images/features/guaranteed-savings.jpg',
      badge: '💰 Money-Back Guarantee',
    },
    {
      id: 2,
      title: 'Hassle-free Process',
      quote: 'Installation, government subsidy and net-metering — all handled directly by us. Zero middlemen.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      badge: '📑 100% Subsidy Support',
    },
    {
      id: 3,
      title: 'Storm-proof Structure',
      quote: 'Heavy-duty galvanized structures tested for 170 kmph storms — engineered for India\'s toughest weather.',
      image: '/images/features/storm-proof.jpg',
      badge: '🌪️ 170 km/h Wind Resistant',
    },
    {
      id: 4,
      title: 'Reliable After-Sales Service',
      quote: 'Regular proactive maintenance & panel cleaning for steady, year-after-year peak solar output.',
      image: '/images/features/after-sales-service.jpg',
      badge: '🛠️ Lifetime Support',
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-dark font-bold text-xs uppercase tracking-widest rounded-full mb-3">
            Trusted Solar Partner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight">
            Why Families Across India Trust <span className="text-primary">NovaRays</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We deliver end-to-end solar solutions engineered for maximum financial savings, extreme weather durability, and lifetime peace of mind.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group border border-gray-100"
            >
              {/* Image Container with rounded top and hover zoom */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {feature.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
