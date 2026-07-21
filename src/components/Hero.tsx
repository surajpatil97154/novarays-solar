'use client'

export default function Hero({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section className="relative bg-gradient-dark text-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 bg-primary rounded-full -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-primary rounded-full -bottom-20 -left-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Harness the Power of <span className="text-primary">Solar</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your energy independence with NovaRays premium solar solutions. Save up to 80% on electricity bills while contributing to a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onGetQuote} className="btn-primary text-lg font-bold">
                Get Free Quote
              </button>
              <button className="btn-outline text-white border-white hover:bg-white hover:text-dark text-lg font-bold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Feature Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-gray-200">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-gray-200">Avg Bill Savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">25 Yr</div>
              <p className="text-gray-200">Warranty</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-gray-200">MW Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
