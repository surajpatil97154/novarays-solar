'use client'

import ConsultationForm from './ConsultationForm'

export default function Hero() {
  return (
    <section className="relative bg-gradient-dark text-white py-12 md:py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 bg-primary rounded-full -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-primary rounded-full -bottom-20 -left-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary font-semibold text-sm mb-4">
              ☀️ Premium Solar Energy Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Harness the Power of <span className="text-primary">Solar</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your energy independence with NovaRays premium solar solutions. Save up to 80% on electricity bills while contributing to a sustainable future.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-primary">5000+</div>
                <p className="text-xs text-gray-300 mt-1">Happy Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-primary">80%</div>
                <p className="text-xs text-gray-300 mt-1">Avg Bill Savings</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-primary">25 Yr</div>
                <p className="text-xs text-gray-300 mt-1">Warranty</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10K+</div>
                <p className="text-xs text-gray-300 mt-1">MW Generated</p>
              </div>
            </div>
          </div>

          {/* Right Content - Directly visible Consultation Form */}
          <div className="lg:col-span-6">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
